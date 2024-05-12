import './Footer.css'
import phoneIcon from '../Images/icons8-phone-100.png'
import emailIcon from '../Images/icons8-email-24.png'
import { Link } from 'react-router-dom';
import facebookIcon from '../Images/facebook.png'
import instagramIcon from '../Images/instagram.png'

function Footer(){

    return(
        <div className='mainFooterContainer'>
            <div className="footerWrapper">
            <p style={{fontSize: "2em"}}>Mūsų kontaktai</p>
            <div className="footerContainer">
                <div className="footerContactsContainer">
                    <a>Vėžionių g. 51, Aukštupėnai, 40104 Kupiškio r. sav.</a>
                    <div className='footerContacts'>
                        <img style={{height: "1.2em", marginRight: "15px"}}src={phoneIcon} alt="" />
                        <a style={{marginRight: "15px"}} > +370 640 55444</a>
                        <img style={{marginRight: "15px"}}src={emailIcon} alt="" />
                        <a  style={{marginRight: "15px"}}> bociupis@gmail.com </a>
                    </div>
                    <div className="footerRekvizitai">
                        <a>UAB „Bočiupis“</a>
                        <a>B. Žekonio g. 1-1, Kupiškis</a>
                        <a>Įmonės kodas: 164767965</a>
                        <a >PVM: LT647679610</a>
                    </div>
                </div>
                <div className='footerNav'>
                    <Link to='/'>Pagrindinis</Link>
                    <Link to='/galerija'>Galerija</Link>
                    <Link to='/rezervacija'>Rezervacija</Link>
                    <Link to='/'>Kaip mus rasti?</Link>
                    <Link to='/'>Kontaktai</Link>
                </div>
                <div className="footerSocialMedia">
                    <a>Daugiau apie Kupiškio marių vilą:</a>
                    <div>
                        <a href=""><img src={facebookIcon} alt="" /></a>
                        <a href=""><img src={instagramIcon} alt="" /></a>
                    </div>
                </div>
                
               
                
            </div>
            </div>
            
        </div>
    )
}
export default Footer