import "./Footer.css";
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import instagram from "./images/instagram.png"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-inner">
                <p className="footer-logo">LOGO</p>
                <p className="menu">MENU</p>
                <p className="phone-num">+1(245)678-9012</p>
                <p className="profile-tag">Profile</p>
                <p className="email">support@email.com</p>
                <div 
                    className="footer-line">
                </div>
                <div className="social-icons">
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={instagram} />

                </div>

            </div>
        </div>
        
    )
}

export default Footer;