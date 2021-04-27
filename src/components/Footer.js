import React from 'react'
import 'css/index.css'
import FontAwesome from 'react-fontawesome'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="grid">
            <div>Honeycomb Design & Development is owned and operated by your friendly neighbourhood <b>Olivia</b>, feel free to reach out any time by <a href="mailto:olivia@honeycombdd.com">email.</a></div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to="/web">Websites</Link></li>
                    <li><Link to="/graphic">Graphics</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer