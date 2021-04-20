import React from 'react'
import 'css/index.css'
import FontAwesome from 'react-fontawesome'

const Header = () => {

    
    function openHam() {
        const x = document.getElementById("hamLinks");
        if (x.style.display === "block") {
          x.style.display = "none";

        } else {
          x.style.display = "block";
        }
      }
    function openServ() {
        const x = document.getElementById("servDropContent");
        if (x.style.display === "block") {
          x.style.display = "none";

        } else {
          x.style.display = "block";
        }
    }

return(

<header>
    <div>
        <li className="logo"><a href="../"><img src="./src/img/favicon.svg" /></a></li>
        <FontAwesome id="ham" onClick={openHam} size="2x" name="bars" />
    </div>
    <div id="headerp2">
        
        <div id="hamLinks">
            <li><a href="/about">About</a></li>
            <li><div id="servDropdown"><button onClick={openServ}>Services</button>
                <div id="servDropContent">
                    <a href="/services/web">Custom Websites</a>
                    <a href="/services/graphic">Graphic Design</a>
                    <a href="/services/web">Mixed</a>
                    </div>
                </div>
            </li>
            <li><a href="/contact">Contact</a></li>
        </div>
    </div>
</header>

)

}

export default Header