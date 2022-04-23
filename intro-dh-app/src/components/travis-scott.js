import React, { Component } from "react";
import { Link } from "react-router-dom";

class TravisScott extends Component {
	render() {
        
		return (
            <>
                <div className="bg-light min-vh-100 px-4">
                    <div id="intro" className="row article-container flex-wrap">
                        <div className="col">
                            <img src={require("../images/travis-scott.jpeg")} class="mx-0 mb-4 w-100" alt="..."></img>
                            <h2 className="py-4">Travis Scott</h2>
                            <p>
                            A rap mogul, Travis Scott debuted in the early 2010s, being one of the most successful figures in contemporary hip-hop, sitting on the throne with faces and friends like Young Thug and Kanye West, amongst many others. With four no. 1 songs on the Billboard Hot 100, “Sicko Mode” “Highest in the Room” “The Scotts” and lastly “Franchise” it is frank to see why listeners gravitate towards the energetic, psychedelically infused artist.  
                            </p>
                            <p>
                            Houston-born Travis is a consistent face in popular media with his partner Kylie Jenner, a fashion magnate. The powerful couple have deep roots in high fashion with many contributions to household name brands like Nike. Certified Diamond on December 9th, 2020, Travis Scott’s “Sicko Mode” featuring Drake was released two years prior on his most famous album Astroworld. With energizing lyrics and a smooth, contrasting beat switch up in the song, it is a powerfully melodic song and no surprise to top the Billboard Hot 100. 
                            </p>
                            <p>
                            Aside from his musical accolades, the one thing that Travis Scott is most well known for is his live performances. Holding his own music festival Astroworld, it is an extremely popular venue for fans and partiers alike. In 2017 Travis Scott stole the crown for most encores of a single song in a live performance from Kanye West and JayZ’s performance of Niggas In Paris, with over 15 consecutive performances of his song Goosebumps at a venue in Cleveland, Ohio. His electric performances are likely attributed to his small house origins, with moshpits and raving galore. However, these often can be very dangerous, particularly as Travis soared in popularity. 
                            </p>
                            <p>
                            A show in 2017 saw Travis Scott facing 3 misdemeanor charges for inciting a riot, and endangering the welfare of a minor. As garish as it is, this falls in line with how Travis implements these kinds of events, with his ecstatic personality and execution, he references this in his 2018 song “Stargazing” rapping that “it ain’t a mosh pit if ain’t no injuries.”
                            </p>
                            <p>
                            This history of violence at his live events culminated in a disparaging event in his 2021 Astroworld event, where 8 people were killed and  many people were left with injuries. In an act of mass hysteria, the over 50,000 fans rushed through the entrance and trampled many individuals, overpowering the security at the venue. Many people are either in defense or in opposition of what Travis did in response to the events. He is often cited that he enjoys and encourages people to act brash and bold; with others stating that it would be difficult to control the events that conspired, that the circumstances were ‘unpredictable.’
                            </p>
                            <p>
                            Because of this, Travis Scott received a lot of publicity, both negative and positive, with most condemning him for his actions. But, it is not like the negative press hasn’t given artists some degree of benefit, if we are to look at musicians like Tekashi69. However, it seems that Astroworld might not be open this year.
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

export default TravisScott;