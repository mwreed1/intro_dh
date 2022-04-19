import React, { Component } from "react";
import { Link } from "react-router-dom";

class MichaelJackson extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row article-container flex-wrap">
                        <div className="col">
                            <img src={require("../images/michael-jackson.jpeg")} class="mx-0 mb-4 w-100" alt="..."></img>
                            <h2 className="py-4">Michael Jackson</h2>
                            <p>
                            Having been given the title, “The King of Pop,” Michael Jackson is celebratedcoveted in the music world for being a major cultural icon and what many would consider the greatest entertainers of all time. Having been a kid star in the Jackson Five, Michael was led towards the path of a singer/songwriter from a very young age. Following in the footsteps of sensations like Elvis Presley and ____, Michael blessed the world with his own brand of spontaneity, sparking many new fads, musical traditions, and cultural hallmarks that can stem directly or were influenced by Michael’s single glovedglove-covered hand. 
                            </p>
                            <p>
                            Being such a huge star, their life was far from peaceful. Even following them into their untimely death, controversies around his treatment of children are to this day questioned. Difficulties aside, it is hard for anyone to make an argument that Michael Jackson influenced the world and that it would not be the same before him, and after his passing. Holding a number of world records, his album Thriller is the only one in history to have gone multi-platinum 30 times in the United States. 
                            </p>
                            <p>
                            Released in 1982, the album Thriller spent a grand total of 37 weeks at No. 1., a record not beaten in the 40 years since its inception. A number of songs on the iconic album had hit the top of the singles chart on the Billboard Hot 100, with “Beat It” “Billie Jean” and the albums namesake, “Thriller” all individually soaring to the top. Not only a national success, Thriller saw huge international acclaim, with over 8 Grammy wins in its time. 
                            </p>
                            <p>
                            It is to note as well that a key component in Michael Jackson’s resurgence into popular media in the 2000s was because of his unexpected and contentious death in 2009. Perhaps Michael Jackson was the first artist in the new millennium that gave rise to the acute discussion as to how artists’ music should be treated posthumously. Other artists, like Pop Smoke, Juice WRLD, and XXXTentacion would further exacerbate this discussion in years to come, with some in the camp that their unreleased music should not be shared and distributed without their consent, that the death should be allowed to rest. In his passing, Michael continued to break record after record, with the aforementioned Thriller hitting that peak 30 multi-platinum record several years following his passing. It seems that the King of Pops continues to influence the world to this day.
                            </p>
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

export default MichaelJackson;