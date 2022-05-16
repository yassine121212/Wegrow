import emailjs from "emailjs-com"
import "./help.css"
const Help = () =>{
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_kg9614s', 'template_60e4wuc', e.target, '7gp0cBTF785jKUD53')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        }
    return (
        <div class="container">  
        <form id="contact"onSubmit={sendEmail}>
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
            <textarea name="message" placeholder="Tapez Votre Message Ici...." tabindex="5" required/>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit">Send</button>
          </fieldset>
        </form>
      </div>
    );
}
export default Help;