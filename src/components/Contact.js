import React from 'react'
import '../css/index.css'
import Footer from './Footer'
import{ init } from 'emailjs-com';
init("user_krRZrtIJ1HCMXot7SYC1R");
import emailjs from 'emailjs-com';


const Contact = () =>{

    function sendEmail(e) {
      e.preventDefault();
        let email = document.getElementById("user_email").value
        let emailConf = document.getElementById("email_confirm")
        let message = document.getElementById("message")
        const checkweb = document.getElementById("websi").checked
        const checkmgmt = document.getElementById("webmgmt").checked
        const checklogo = document.getElementById("logo").checked
        const checkgrap = document.getElementById("websogra").checked
        const checkprint = document.getElementById("printg").checked
        const serviceArray = []
            if (email === emailConf.value){
                console.log("Success! " + email + " = " + emailConf.value)
                if (checkweb) {
                    serviceArray.push(" Custom Website Creation")
                }
                if (checkmgmt) {
                    serviceArray.push(" Ongoing Managemnt/Updates")
                }
                if (checklogo) {
                    serviceArray.push(" Custom Logo")
                }
                if (checkgrap) {
                    serviceArray.push(" Web & Social Graphic Design")
                }
                if (checkprint) {
                    serviceArray.push(" Print Graphic Design")
                }
                let services = " ----- CHOSEN SERVICES: " + serviceArray.toString() + "-----";
                console.log(services)
                console.log(message.value)
                message.value = services + message.value 
                
                  emailjs.sendForm('service_tquhve7', 'template_sevgut8', e.target, 'user_krRZrtIJ1HCMXot7SYC1R')
                   .then((result) => {
                       console.log(result.text);
                       window.alert("Email sent! We'll get back to you soon!")
                       message.value = ""
                       email = ""
                       emailConf.value = ""
                       
                   }, (error) => {
                   console.log(error.text);
                   window.alert("Something went wrong when the email tried to send, perhaps one of the services chosen is down. Please email directly at olivia@honeycombdd.com")
                   });
            }
            else {
                console.log("Nope, not the same.")
                emailConf.style.backgroundColor = "salmon"
            }
        }

    
  
    return (
    <section>
    <div id="contactForm">
        <h1>Contact us!</h1>
        <p>Please put your name, email, some of the services you're interested in, and any other points in the fields below so we can get back to you right away!</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" required/>
        <label><h3>Name:</h3></label>
        <input type="text" name="user_name" />
        <label><h3>Your Email:</h3></label>
        <input type="email" id="user_email"name="user_email" required/>
        <label><h3>Email Confirm:</h3></label>
        <input type="email" id="email_confirm" name="email_confirm" required/>
        <h3>Main Services Interested In:</h3>
        <label><input type="checkbox" className="check" id="websi" name="websi" />Custom Website Creation</label>
        <label><input type="checkbox" className="check" id="webmgmt" name="webmgmt" />Ongoing Managemnt/Updates</label>
        <label><input type="checkbox" className="check" id="logo" name="logo" />Custom Logo</label>
        <label><input type="checkbox" className="check" id="websogra" name="websogra" />Web & Social Graphic Design</label>
        <label><input type="checkbox" className="check" id="printg" name="printg" />Print Graphic Design</label>
        <label><h3>Extra Information:</h3></label>
        <textarea id="message" maxLength="250" rows="4" name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
      <Footer />
      </section>
    );
  }

export default Contact