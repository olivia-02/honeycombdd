import React from 'react'
import '../css/index.css'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return (
    <div id="home"> 
        <Header></Header>
        <section id="hero">
            <div><h1>naturally perfect.</h1>
            <h2>Honeycomb <br /> Design & Development</h2>
            </div> 
        </section>
        <section className="summaryBox">
            <h1>
                Solutions For Small Business
            </h1>
            <p>
            A web presence is one of the biggest necessities for any business to do marketing, and the goal of Honeycomb Design and Development is to get yours there.</p>
            <div className="pbr" />
            <p>
            Between local restaurants and salons, photographers and artists, or entrepreneurs and consultants wanting to make it big; the purpose is to give you the human support and creativity to work together and find solutions to your digital problems.
            </p>
            <div className="pbr" />
        </section>
        <section className="serviceGrid grid">
            <div id="customWebsites" className="gridBox">
                <img src="../src/img/graphics-01comp.svg"></img>
                <h3>Custom Website Creation</h3>
                <p>Adding a personal touch to the process, we can discuss your personal needs and work together to make a unique statement for your business.</p>
            </div>
            <div className="gridBox">
                <img src="~/src/img/graphics-01comp.svg"></img>
                <h3>Web & Social Graphics</h3>
                <p>Just like all the ones on this site, yours needs illustrations in high quality resizable SVG formats to communicate with the user.</p>
            </div>
            <div className="gridBox">
                <img src="../src/img/graphics-03logo.svg"></img>
                <h3>Professional Logo Design</h3>
                <p>Help consumers and clients identify your company with a custom logo expressing your brand mission and services.</p>
            </div>
            <div className="gridBox">
                <img src="../src/img/graphics-04print.svg"></img>
                <h3>Versatile Print Graphics</h3>
                <p>Your business cards, letterheads, and flyers alike often act as the first impression- make the design stand out from the crowd.</p>
            </div>
            <div className="gridBox">
                <img src="../src/img/graphics-05mgmt.svg"></img>
                <h3>Ongoing Website Managemnt</h3>
                <p>After the creation of your website, you'll need continued support to keep it up to date and current. <i>Honeycomb</i> gladly will help you with this.</p>
            </div>
        </section>
        <Footer></Footer>
    </div> 
    )
}

export default Home