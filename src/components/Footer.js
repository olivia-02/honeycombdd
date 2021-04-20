import React from 'react'
import 'css/index.css'
import FontAwesome from 'react-fontawesome'

const Footer = () => {
    return(
        <footer className="grid">
            <div>Honeycomb Design & Development is owned and operated by your friendly neighbourhood <b>Olivia</b>, feel free to reach out any time by <a href="mailto:olivia@honeycombdd.com">email.</a></div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Services</li>
                    <li>Websites</li>
                    <li>Graphics</li>
                    <li>& More</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer