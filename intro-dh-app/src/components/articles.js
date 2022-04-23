import React, { Component } from "react";
import { Link } from "react-router-dom";

class Articles extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row main-container flex-wrap">
                        <div className="col">
                            <h2 className="py-4">A Closer Look</h2>
                            <p>
                                In addition to the overview of how music has changed throughout the decades, we have also provided an in-depth analysis of certain artists, music events, and popular songs. Here we take a deeper dive at the larger shifts within the music industry, certain controversial events that exploded over the news, and how certain songs strongly resonated with the mainstream.
                            </p>
                        </div>
                        <div className="col py-4 text-end">
                            {/* <a href="#intro" className="text-decoration-none"><h4>Introduction</h4></a>
                            <a href="#evolution" className="text-decoration-none"><h4>Evolution of Music Genres</h4></a>
                            <a href="#artists" className="text-decoration-none"><h4>Popular Artists</h4></a>
                            <a href="#lyrics" className="text-decoration-none"><h4>Common Patterns in Lyrics</h4></a> */}
                        </div>
                    </div>
                    <div className="row main-container flex-wrap gap-4 pt-0">
                        <div class="card col px-0 py-0">
                            <img src={require("../images/michael-jackson.jpeg")} class="card-img-top mx-0 w-100" alt="..."></img>
                            <div class="card-body mx-3 my-3">
                                <h5 class="card-title">Michael Jackson</h5>
                                <p class="card-text">How the King of Pop created his own brand and became a major cultural icon</p>
                                <a href="/michael-jackson" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div class="card col px-0 py-0">
                            <img src={require("../images/travis-scott.jpeg")} class="card-img-top" alt="..."></img>
                            <div class="card-body mx-3 my-3">
                                <h5 class="card-title">Travis Scott</h5>
                                <p class="card-text">How the rap mogul's brash personality relates to the Astroworld controversy</p>
                                <a href="/travis-scott" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div class="card col px-0 py-0">
                            <img src={require("../images/bts.jpeg")} class="card-img-top" alt="..."></img>
                            <div class="card-body mx-3 my-3">
                                <h5 class="card-title">BTS</h5>
                                <p class="card-text">How to Kpop boy band broke through the Korean music bubble</p>
                                <a href="/bts" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div class="card col px-0 py-0">
                            <img src={require("../images/taylor-swift.jpeg")} class="card-img-top" alt="..."></img>
                            <div class="card-body mx-3 my-3">
                                <h5 class="card-title">Taylor Swift</h5>
                                <p class="card-text">How the country-turned-pop singer regained her creative freedom with "Taylor's Version"</p>
                                <a href="/taylor-swift" class="btn btn-primary">Read More</a>
                            </div>
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

export default Articles;