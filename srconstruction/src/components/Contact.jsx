import { useEffect } from "react";

function ContactForm() {
    useEffect(() => {
        // Script for tab functionality
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(event, tabname) {
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // Script for form submission
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz6OCYbPHrYO-uwMSwDaGZHsiD9uIUrn77DSTnYX_ayu78Rn8-cp3UvZYjEtTBmZlqEEg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML= "Message sent successfully"
                    setTimeout(function(){
                        msg.innerHTML=""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        });
    }, []);

    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><i className="fa-solid fa-paper-plane"></i>sreeraamconstruction@gmail.com</p>
                            <p><i className="fa-solid fa-phone"></i>91-8925255189</p>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/sreeraam_construction?igsh=b3dnZjR1YTAybGVq"><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-solid fa-envelope"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <a href="***" download className="btn btn2">Download</a>
                        </div>
                        <div className="contact-right">
                            <form name="submit-to-google-sheet">
                                <input type="text" name="Name" placeholder="Your Name" required />
                                <input type="email" name="email" placeholder="Your email" required />
                                <input type="text" name="number" placeholder="Enter your phone number" required />
                                <textarea name="message" rows="6" placeholder="Your message"></textarea>
                                <button type="submit" className="btn btn2">Submit</button>
                            </form>
                            <span id="msg"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
