import React, { Component } from "react";
import { Link } from "react-router-dom";

class BTS extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row article-container flex-wrap">
                        <div className="col">
                            <img src={require("../images/bts.jpeg")} class="mx-0 mb-4 w-100" alt="..."></img>
                            <h2 className="py-4">BTS</h2>
                            <p>
                            방탄소년단, also known as BTS, are a boy band phenomenon that has over the years, broken countless, countless records with an incredibly loyal and dedicated fan following all over the world. To say the least, just in 2022, BTS has broken over 13 world records in the four months since 2021, with 25 world records broken in the year previously. It’s safe to say that these boys are accomplished, and are hungry for more. 
                            </p>
                            <p>
                            Debuting in 2013, BTS is a kpop boy band from BigHit Entertainment. Originally having an image for younger girls, as the years progressed BTS has grown into a band that is for all ages and denominations to enjoy. A Korean household name, BTS broke records by being the first English track by the band and being on the Billboard Hot 100 for over 32 weeks, the most for any K-pop track ever. In addition, BTS is the most streamed group on Spotify, at the time of the announcement reaching over 16.3 billion streams on Spotify. In addition the group’s song “Butter” has seen multiple insane record breaks, with it being the “Most streamed track on Spotify in the first 24 hours,” “Most viewers for the premier of a music video on Youtube,” “Most viewed Youtube music video in 24 hours for a K-pop group,” and “Most viewed Youtube music video in 24 hours.” 
                            </p>
                            <p>
                            Being the most talked about music group on twitter in the US year after year since 2017, it could be hard to see just how the boy group rose to stardom internationally and broke through the Korean music bubble. One thing that could be ascribed to the boy band is their sensitivity and artistry in their lyricism, exploring darker subject matter versus other K-pop groups. Another thing is fortunate timing. Known as the ‘Korean Wave’ or ‘Hallyu,’ wherein a massive surge in global popularity for Korean culture occurred in waves gradually since the 1990s. BTS comfortably rode and helped to exacerbate the growth of this wave, growing to a critical point where they are today, their music streaming on radios, computers, phones, worldwide. 
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

export default BTS;