import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'css/index.css'
import FontAwesome from 'react-fontawesome'
import hcddLogo from '../img/favicon.svg'

const Header = () => {

  // : 28
    
    function openHam() {
        const x = document.getElementById("hamLinks");
        const y = document.getElementById("ham")
        console.log(y.clientWidth)
        if (y.clientWidth === 28) {
          if (x.style.display === "block") {
          x.style.display = "none";

          } else {
          x.style.display = "block";
        }
      }}
        
    function openServ() {
        const x = document.getElementById("servDropContent");
        const y = document.getElementById("ham")
        console.log(y.clientWidth)
        if (y.clientWidth === 28) {
          if (x.style.display === "block") {
            x.style.display = "none";

          } else {
            x.style.display = "block";
          }
        }
    }

return(

<header>
    <div>
        <li className="logo"><a href="../"><img src={hcddLogo} /></a></li>
        <span id="ham"><FontAwesome onClick={openHam} size="2x" name="bars" /></span>
    </div>
    <div></div>
    <div id="headerp2">
        
        <div id="hamLinks">
            <li><Link to="/about" onClick={openHam}>About</Link></li>
            <li>
              <div id="servDropdown"><button onClick={openServ}>Services</button>
                <div id="servDropContent">
                    <Link to="/web" onClick={openHam}>Custom Websites</Link>
                    <Link to="/graphic" onClick={openHam}>Graphic Design</Link>
                </div>
              </div>
            </li>
            <li><Link to="/contact" onClick={openHam}>Contact</Link></li>
        </div>
        
        </div>
        
</header>

)

}



export default Header