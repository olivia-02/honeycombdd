import React from 'react'
import '../css/index.css'
import Footer from './Footer'
import protoEx from '../img/prototypeEx.jpg'
import wireEx from '../img/wireframeEx.jpg'
import {Link} from 'react-router-dom'

const WebServ = () => {

     
     function mouseOver() {
        const img = document.getElementById("wireProtoImg")
         img.setAttribute("src", protoEx)
     }
     function mouseOut() {
        const img = document.getElementById("wireProtoImg")
         img.setAttribute("src", wireEx)
     }

    return (

        <section id="WebServices">
            <div id="webHero">
                <h1>Website Creation & Maintenence</h1>
            </div>
            <div className="summaryBox">
                <h2>Why do you need a website?</h2>
                <ul>
                    <li>What businesses do you know of nowadays that don't have a website? A website will keep you <em>up to date between you competitors.</em></li>
                    <li><em>Increasing your audience by means of accessible technology,</em> acts like digital word of mouth as your customers can quickly share a link.</li>
                    <li><em>Websites look professional in first impressions.</em> Having a business with a website displays a new value one without simply couldn't obtain.</li>
                </ul>
            </div>
            <div className="processBox">
                <div>
                <h2>The 6 Steps to Your Website</h2>
                    <ol>
                    <li><h3>Rough Outline & Quote</h3>
                        <p>At this stage, you send an email our way, and we discuss the basic needs for your website. How many pages, what kinds of features, etc.</p></li>
                    <li><h3>Brainstorming Session</h3>
                        <p>At this point, we discuss colours and fonts and get the picture for what styles will confirm your business' image.</p></li>
                    <li><h3>Wireframes</h3>
                        <p>Wireframes are simple black-and-white outlines of the structure of the website. They're important in the planning stage to make sure that everything is included properly.</p></li>
                    <li><h3>Prototype</h3>
                        <p>In this stage you'll be given a PDF prototype of your website complete with all images, content, and styles you've provided.</p></li>
                    <li><h3>Development</h3>
                        <p>This is the part where everything is constructed, from format and styling to functionality- it's all glued together.</p></li>
                    <li><h3>Deployment</h3>
                        <p>Once things are finished and ready to go, everything is deployed and hosted to be accessable on the world wide web.</p></li>
                </ol>
                </div>
                <div>

                        <p className="desc">The difference between wireframes and prototypes? Hover over for an example.</p>
                        <img id="wireProtoImg" src={wireEx} onMouseOver={mouseOver} onMouseOut={mouseOut}/>
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

export default WebServ