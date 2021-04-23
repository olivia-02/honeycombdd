import React from 'react'
import '../css/index.css'
import Footer from './Footer'
import mepic from './../img/me.png'

const About = () => {

    return(
        <section id="about">
            <div className="me grid">
                <div>
                    <h1>Hey there!</h1>
                    <img id="mepic" src={mepic}></img>
                </div>
                <div>
                    <p>My name is <b>Olivia Robson</b>. I recently attended Humber College's Web Design and Development course, mainly because I love making websites and designing things that'll be useful!</p>
                    <p>I live in Toronto, Canada, and I started learning how to program with JavaScript in High School. Once I made my first few programs and developed my first few websites, I knew I wanted to do this.</p>
                    <p>Web Development is the perfect blend of technology and art, and once I was in post-secondary I realized that starting my own business was what I wanted to do. That's where Honeycomb Design & Development comes into the picture. <em>Welcome to my own little hive!</em></p> 
                </div>
            </div>
        <Footer />
        </section>
    )

}

export default About