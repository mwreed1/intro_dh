import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaylorSwift extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row article-container flex-wrap">
                        <div className="col">
                            <img src={require("../images/taylor-swift.jpeg")} class="mx-0 mb-4 w-100" alt="..."></img>
                            <h2 className="py-4">Taylor Swift</h2>
                            <p>
                            Starting from a young age, Taylor Swift had big dreams. When she was just 14, her family moved to Nashville so that she could pursue her aspirations as a country singer. There she signed with a burgeoning independent label called Big Machine Records. Little did she know this choice would become a grueling difficulty as Taylor grew into the superstar we know her to be today. With Big Machine Records, Swift `swiftly` became a music sensation, along with her gradual transition away from the country music scene and into the mainstream. Now she has sold hundreds of millions of singles, albums, memorabilia, and is one of the top performing artists of all time. 
                            </p>
                            <p>
                            In 2021 Swift surprised many with the announcement that she is rereleasing all of her old music that was previously recorded with Big Machine Records. Dubbed “Taylor’s Version” there is really no aesthetic or musical difference between the old and new tracks, so why was this decision made? For Swift, it was in the name of rebellion and creative freedoms. 
                            </p>
                            <p>
                            A sometimes overlooked struggle that many artists contend with is the role of the record label. Originally fashioned as a mechanism for singers and songwriters to have a web of support, that can develop new talent and maintain and grow stars, there are many examples, both current and older, of record labels abusing their power and contracts in order to hold artists hostage, in conjunction with absorbing most of the money that the artists are generating from their own songs. Prince, Frank Ocean, Neil Young, Tame Impala, and many others have fought in great feuds in order to achieve independence financially and creatively; this is the same struggle that Swift underwent in 2021 and the years prior. 
                            </p>
                            <p>
                            Since her contract with Big Machine Records expired in 2018, Swift hopes that people support and listen to the new versions, as every single listen to the old versions only contributes to the individuals who are profiting within Big Machine Records. With Taylor out of the picture in that record label, not a single cent of her efforts in producing the song are currently going to her.
                            </p>
                            <p>
                            This choice has had ramifications all across the music industry, and grew discussions on a seemingly taboo topic. Many artists, like Kanye West actively gripe with and complain about their label’s demands, but it is extremely rare for an artist to rerecord and re release their old music to spite their old labels, with Taylor Swift seemingly the first in this regard. With this, “Taylor’s Version” has a rebellious air, and gives confidence to know that artists can grow out of their shackles.
                            </p>
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

export default TaylorSwift;