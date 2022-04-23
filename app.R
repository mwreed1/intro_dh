# Load packages
library(tidyverse)
library(spotifyr)
library(billboard)
library(tidytext)
library(shiny)

# API set-up
# access_token <- get_spotify_access_token()

# Read in data
data1 <- spotify_track_data
data2 <- wiki_hot_100s
tracks <- read_csv("data/track_info.csv")
artists <- read_csv("data/artist_info.csv")
long_genres <- read_csv("data/artist_genres.csv")

# Data cleaning
data2 <- data2 %>%
  mutate(
    featured = str_extract(title, "(?<=featuring ).*"),
    cleaned_track = 
      ifelse(str_detect(title, "featuring"), 
             str_extract(title, ".*( featuring*)"), title) %>%
      str_to_upper()
  )

data1 <- data1 %>%
  mutate(
    cleaned_track = track_name %>%
      str_replace("&", "and") %>%
      str_to_upper()
  )

data <- right_join(
  data1, data2,
  by = c("artist_name" = "artist", "cleaned_track" = "cleaned_track")
)

track_data <- inner_join(
  data, 
  tracks,
  by = c("track_id" = "id")
)

big_data <- left_join(track_data, artists, by = c("artist_id" = "id"))


# Start App
ui <- fluidPage(
  
  navbarPage(
    "Intro DH Final Project",
    
    tabPanel(
      "Genres",
      sidebarLayout(
        sidebarPanel(
          sliderInput("slider1", "Select date range",
                      min = 1960, max = 2015, value = c(1960, 2015), sep = "", 
                      step = 5)
        ),
        mainPanel(
          plotOutput("plot1")
        )
      )
    ),
    
    tabPanel(
      "Song titles",
      sidebarLayout(
        sidebarPanel(
          numericInput("input2", "Select three years",
                      min = 1960, max = 2016, value = 1980),
          numericInput("input3", "",
                       min = 1960, max = 2016, value = 1990),
          numericInput("input4", "",
                       min = 1960, max = 2016, value = 2000)
        ),
        mainPanel(
          strong("The following artists produced the most popular songs in the years you have selected: "),
          br(),
          textOutput("text1"),
          br(),
          strong("These are the corresponding hits: "),
          br(),
          textOutput("text2"),
          br(),
          plotOutput("plot2"),
        )
      )
    )
    
    )
)

server <- function(input, output) {
  
  data_genre <- reactive({
    long_genres %>%
      filter(
        input$slider1[1] <= med_release,
        input$slider1[2] >= med_release
      ) %>%
      mutate(
        simple_genre = case_when(
          str_detect(genres, "pop") ~ "pop",
          str_detect(genres, "rock") ~ "rock",
          str_detect(genres, "r&b") | str_detect(genres, "rhythm and blues") ~ "r&b",
          str_detect(genres, "soul") ~ "soul",
          str_detect(genres, "country") ~ "country",
          str_detect(genres, "rap") ~ "rap",
          str_detect(genres, "disco") ~ "disco",
          str_detect(genres, "hip hop") ~ "hip hop",
          TRUE ~ "other"
        )
      ) %>%
      select(-genres) %>%
      distinct() %>%
      mutate(
        decade = floor(med_release/10)*10,
        simple_genre = fct_other(fct_infreq(simple_genre), drop = c("other"))
      ) %>%
      count(decade, simple_genre)
  })
   
  output$plot1 <- renderPlot({
    data_genre() %>%
      ggplot(aes(x = n, y = as.factor(decade), fill = fct_rev(simple_genre))) +
        geom_col(position = "fill") +
        scale_fill_brewer(palette = "Set3", direction = -1) +
        labs(
          x = NULL, 
          y = "Decade", 
          fill = "Genre", 
          title = "Popularity of genres per artist over time",
          subtitle = "By decade",
          caption = "Billboard top 100 songs"
        ) +
        guides(fill = guide_legend(nrow = 1, reverse = T)) +
        theme_minimal() +
        theme(legend.position = "bottom", legend.direction = "horizontal")
    })
    
  years <- reactive({
    c(input$input2, input$input3, input$input4)
  })
  
  common_words <- reactive({
    track_data %>%
      filter(year.x %in% years()) %>%
      select(year.x, artist_name, track_name, popularity, album.name) %>%
      unnest_tokens(word, track_name) %>%
      count(word, sort = TRUE) %>%
      anti_join(stop_words) %>%
      slice(1:8) %>%
      pull(word)
  })
  
  output$plot2 <- renderPlot({
    track_data %>%
      filter(year.x %in% years()) %>%
      select(year.x, artist_name, track_name, popularity, album.name) %>%
      unnest_tokens(word, track_name) %>%
      mutate(
        word = fct_infreq(word)
      ) %>%
      anti_join(stop_words) %>%
      filter(word %in% common_words()) %>%
      ggplot(aes(y = year.x, fill = fct_rev(word))) +
      geom_bar(position = "fill") +
      scale_fill_brewer(palette = "Set3", direction = -1) +
      labs(
        y = "Year",
        x = NULL,
        fill = "Word",
        title = "Frequency of the most common words in song titles",
        caption = "Billboard top 100 songs"
      ) +
      guides(fill = guide_legend(nrow = 1, reverse = T)) +
      theme_minimal() +
      theme(legend.position = "bottom", legend.direction = "horizontal")
  })
  
  songs <- reactive({
    track_data %>%
      filter(year.x %in% years(), no == 1) %>%
      pull(track_name)
  })
  
  artists <- reactive({
    track_data %>%
      filter(year.x %in% years(), no == 1) %>%
      pull(artist_name)
  })
  
  output$text1 <- renderText({
    paste(artists(), collapse = ", ")
  })
  
  
  output$text2 <- renderText({
    paste(songs(), collapse = ", ")
  })
  
}


shinyApp(ui, server)


