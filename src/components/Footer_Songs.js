import {
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoYoutube,
  } from 'react-icons/io';


const Footer = () =>{
    return (
        <footer className="footer_songs">
            <div id="footer_songs">
            <div id="footer_songs_text">Email us at: info@c999.com  <br></br>c-999 2023 All rights reserved</div>
            <div id="footer_songs_links">
                <a href="#" class="sc_icon"><IoLogoFacebook size="50px" color="white"/> </a>
                <a class="col-spacer">  </a>
                <a href="#" class="sc_icon"><IoLogoLinkedin size="50px" color="white"/></a>
                <a class="col-spacer">  </a>
                <a href="#" class="sc_icon"><IoLogoInstagram size="50px" color="white"/></a> 
                <a class="col-spacer">  </a>
                <a href="#" class="sc_icon"><IoLogoYoutube size="50px" color="white"/></a>
                </div>
            <div class="grid">
                <div class="item">Credits</div>
                <div class="item">|</div>
                <div class="item">About</div>
                <div class="item">|</div>
                <div class="item">Contact</div>
                <div class="item">|</div>
                <div class="item">Privacy</div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;