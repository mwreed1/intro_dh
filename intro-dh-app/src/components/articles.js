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
                            <a href="#intro" className="text-decoration-none"><h4>Introduction</h4></a>
                            <a href="#evolution" className="text-decoration-none"><h4>Evolution of Music Genres</h4></a>
                            <a href="#artists" className="text-decoration-none"><h4>Popular Artists</h4></a>
                            <a href="#lyrics" className="text-decoration-none"><h4>Common Patterns in Lyrics</h4></a>
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