import React from 'react'
import '../css/index.css'
import Footer from './Footer'
import junco from '../img/junco.jpg'
import {Link} from 'react-router-dom'

const Graphics = () => {

    return(
        <section id="graphicdes">
            <div id="graphhero">
                <h1>Graphic Design</h1>
            </div>
            <div className="summaryBox">
                <h2>Representation is key.</h2>
                <p>Businesses need some form of branding and identification if they want to have any success in marketing themselves. A high quality logo, prints, and utility graphics are necessary for achieving this.</p>
                <p>Make your brand stand out by using Honeycomb Design and Development's reliable, consistant, detail-oriented design.</p>
            </div>
            <div>
                <h2>Some more examples of work:</h2>
            </div>
            <div className="graphport"> {/*grid*/}
                <div className="row">   {/*flex column*/}
                    <div className="hoverImg"> {/*unit*/}
                        <img src={junco} />
                    </div>
                </div>
            </div>
            <div id="callToAct">
                <h2>Ready to get going?</h2>
                <Link to="/contact"><button>Contact Honeycomb!</button></Link>
            </div>
            <Footer />
        </section>
    )
}

export default Graphics