import React, { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {
	render() {
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div className="row main-container flex-wrap">
                        <div className="col">
                            <h2 className="py-4">Exploring Music Over the Years</h2>
                            <p>
                                By analyzing Google Trends and Spotify's API, we can explore the rise and fall of certain music trends over the years, whether it be the emergence of new genres, popular artists, and even major events that exploded over the news.
                            </p>
                        </div>
                        <div className="col py-4 text-end">
                            <h4>Introduction</h4>
                            <h4>Evolution of Music Genres</h4>
                            <h4>Popular Artists</h4>
                            <h4>Common Patterns in Lyrics</h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row main-container flex-wrap">
                        <div className="col">
                            <h3 className="py-2">Evolution of Music Genres</h3>
                            <p>
                                In the 90s, people were obsessed with ___. During the early 2000s, it became ___. As technology advanced and editing software increased, new genres emerged as an increasing blend of older genres.
                            </p>
                        </div>
                        <div className="col py-4 text-end">
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row main-container flex-wrap">
                        <div className="col">
                            <h3 className="py-2">Popular Artists</h3>
                            <p>
                                In the 90s, people were obsessed with ___. During the early 2000s, it became ___. As technology advanced and editing software increased, new genres emerged as an increasing blend of older genres.
                            </p>
                        </div>
                        <div className="col py-4 text-end">
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row main-container flex-wrap">
                        <div className="col">
                            <h3 className="py-2">Common Patterns in Lyrics</h3>
                            <p>
                                In the 90s, people were obsessed with ___. During the early 2000s, it became ___. As technology advanced and editing software increased, new genres emerged as an increasing blend of older genres.
                            </p>
                        </div>
                        <div className="col py-4 text-end">
                        </div>
                    </div>
                </div>
                <div className="bg-dark white">
                    <div className="row main-container mx-4 align-content-between">
                        <div className="col w-50">
                            <h6 className="mb-3 fw-bold">DATA</h6>
                            <p>
                                This project was completed using React, Python and R. We analyzed Google search trends for popular music genres and famous artists, then ____. To find common patterns in lyrics, we performed text analysis on popular songs in 2022.
                            </p>
                        </div>
                        <div className="col-auto w-25">
                        </div>
                        <div className="col-auto w-25">
                            <h6 className="mb-3 fw-bold">TEAM</h6>
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