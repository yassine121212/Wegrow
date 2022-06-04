import emailjs from "emailjs-com"
import React, { useState} from "react";
import swal from 'sweetalert';
import "./help.css"
const Help = () =>{

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_kg9614s', 'template_60e4wuc', e.target, '7gp0cBTF785jKUD53')
        .then(

          swal({
            title: "Email Envoyer!",
            icon: "success",
          })
         ) .catch(console.log("error")) 
         
        }
        const [tags,setTages] = useState([])
        function handelChange (e){
         const value=e.target.value
         if(!value.trim())
         return setTages([...tags,value])
        }
    return (
        <div class="help">  
            <div class="wrapper">
        <form id="contact" onSubmit={sendEmail}>
        <fieldset>
          <h3>Contact Form</h3>
          </fieldset>
          <fieldset>
            <input placeholder="votre Nom" type="text" tabindex="1"name="name"  required autofocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Votre Email Address" name="user_email" type="email" tabindex="2" required/>
          </fieldset>
          <fieldset>
            <textarea name="message" placeholder="Tapez Votre Message Ici...." tabindex="5" onchange={handelChange} required/>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">Send</button>
          </fieldset>
        </form>
        </div>
      </div>
    );
}
export default Help;