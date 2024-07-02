import './Footer.css'
import phoneIcon from '../Images/fullwhitephone.png'
import emailIcon from '../Images/icons8-email-24.png'
import { Link } from 'react-router-dom';
import facebookIcon from '../Images/facebook.png'
import instagramIcon from '../Images/instagram.png'

function Footer(){

    return(
        <div className='mainFooterContainer'>
            <div className="footerWrapper">
            
            <div className="footerContainer" style={{marginTop: "2rem"}}>
                <div className="footerContactsContainer" >
                <p style={{fontSize: "2em", marginTop: 0}}>Mūsų kontaktai</p>
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
                        <div style={{marginTop: "1rem"}}>
                        <a href=""><img src={facebookIcon} alt="" /></a>
                        <a href=""><img src={instagramIcon} alt="" /></a>
                        </div>
                        
                    </div>
                </div>
                <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.253378115197!2d24.979793877110975!3d55.85827018386244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e870daaaaaaaab%3A0xb887bea4b4fccea0!2zS3VwacWha2lvIG1hcmnFsyB2aWxh!5e0!3m2!1slt!2slt!4v1714936133704!5m2!1slt!2slt"
                 
                 height="100%"
                  style={{border:"0", width: "100%", borderRadius: "1rem", minHeight: "300px"}}
               allowfullscreen=""
                    loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     >
                     </iframe>
                </div>
                
               
                
            </div>
            </div>
            
        </div>
    )
}
export default Footer