import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleTrends from "./GoogleTrends";

class Index extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row main-container flex-wrap">
                        <div className="col">
                            <h2 className="py-4">Exploring Music Over the Years</h2>
                            <p>
                                By analyzing Google Trends and Spotify's API, we can explore the rise and fall of certain music trends over the years, whether it be the emergence of new genres, popular artists, and even major events that exploded over the news.
                            </p>
                            <a href="https://mwreed1.shinyapps.io/intro_dh/" class="btn btn-primary mt-3">View Interactive Visualizations</a>
                        </div>
                        <div className="col py-4 text-end">
                            <a href="#intro" className="text-decoration-none"><h4>Introduction</h4></a>
                            <a href="#evolution" className="text-decoration-none"><h4>Evolution of Music Genres</h4></a>
                            <a href="#artists" className="text-decoration-none"><h4>Popular Artists</h4></a>
                            <a href="#lyrics" className="text-decoration-none"><h4>Common Patterns in Lyrics</h4></a>
                        </div>
                    </div>
                    <hr id="evolution"></hr>
                    <div className="col w-50 header-container flex-wrap">
                        <h3 className="py-2">Evolution of Music Genres</h3>
                        <p>
                            In the 70s, people were obsessed with rock, disco and soul. During the early 2000s, pop music became the next mainstream, while hip hop and rap formed as new genres. As technology advanced and editing software increased, new genres emerged as an increasing blend of older genres.
                        </p>
                    </div>
                    <div className="row main-container flex-wrap">
                        <div className="col me-4">
                            <img className="mb-4" src={require("../images/decade-genre.png")} width="100%"></img>
                        </div>
                        <div className="col ms-4 text-end">
                            <img className="mb-4" src={require("../images/frequency-genre.png")} width="100%"></img>
                            <img className="mb-4" src={require("../images/genre-bar.png")} width="100%"></img>
                        </div>
                    </div>
                
                    <hr id="artists" ></hr>
                    <div className="col w-50 header-container flex-wrap">
                        <h3 className="py-2">Popular Artists</h3>
                        <p>
                            Who were the top searched musicians and bands this year? Whether they became viral for their new album, a meme, or a tragic event, these were the top 5 most searched artists according to Google Trends. 
                        </p>
                    </div>
                    <div className="row main-container flex-wrap">
                        <div className="col w-50 me-4">
                            {/* <img className="mb-4" src={require("../images/song-popularity.png")} width="100%"></img> */}
                            <div id="widget1">
                                <GoogleTrends
                                type="TIMESERIES"
                                comparisonItem={[{"keyword":"Travis Scott","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/g/11g7ntnqs5","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/m/02z4b_8","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"The Weeknd","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/m/01vvydl","geo":"US","time":"2021-01-01 2021-12-31"}]}
                                url="https://ssl.gstatic.com/trends_nrtr/2884_RC01/embed_loader.js"
                                widget="widget1"
                                />
                            </div>
                        </div>
                        <div className="col w-50 ms-4 text-end">
                            <div id="widget2">
                                <GoogleTrends
                                type="GEO_MAP"
                                comparisonItem={[{"keyword":"Travis Scott","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/g/11g7ntnqs5","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/m/02z4b_8","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"The Weeknd","geo":"US","time":"2021-01-01 2021-12-31"},{"keyword":"/m/01vvydl","geo":"US","time":"2021-01-01 2021-12-31"}]}
                                url="https://ssl.gstatic.com/trends_nrtr/2884_RC01/embed_loader.js"
                                widget="widget2"
                                />
                            </div>
                        </div>
                    </div>
                    <hr id="lyrics"></hr>
                    <div className="col w-50 header-container flex-wrap">
                        <h3 className="py-2">Common Patterns in Lyrics</h3>
                        <p>
                            Themes of love, joy, and hope have always bred itself in song lyrics. Here we show the top 8 most common words that appear in song titles and how they have evolved over decades of music.
                        </p>
                    </div>
                    <div className="row main-container flex-wrap">
                        <div className="col me-4">
                            <img className="mb-4" src={require("../images/decade-frequency-word.png")} width="100%"></img>
                        </div>
                        <div className="col ms-4 text-end">
                            <img className="mb-4" src={require("../images/freq-word-song-title.png")} width="100%"></img>
                        </div>
                    </div>
                </div>
                <div className="bg-dark white">
                    <div className="row main-container mx-4 align-content-between">
                        <div className="col w-50">
                            <h6 className="mb-3 fw-bold">DATA</h6>
                            <p>
                            This project was completed using React, Python and R. We looked at the top 100 songs on Billboard and utilized those songs for analysis using the Spotify API in order to find the popularity of various music genres and the frequency of the most common words in song titles by decade. We analyzed how Google search trends varied over time for the top most searched artists in 2021 and compared them across different regions within the US. To find common patterns in lyrics, we performed text analysis on popular songs in 2022.
                            </p>
                        </div>
                        <div className="col-auto w-25">
                        </div>
                        <div className="col-auto w-25">
                            <h6 className="mb-3 fw-bold">TEAM</h6>
                            <p className="mb-1">Dae Yang Oh</p>
                            <p className="mb-1">Kyra Chan</p>
                            <p className="mb-1">Margaret Reed</p>
                            <p className="mb-1">Trailokaya Raj Bajgain</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Index;