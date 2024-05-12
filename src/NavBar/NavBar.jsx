import './NavBar.css'
import logo from '../Images/Logo.png'
import phoneIcon from '../Images/fullwhitephone.png'
import mailIcon from '../Images/icons8-email-24.png'
import arrowDownIcon from '../Images/arrowDown.png'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
    
        <>
            <Link to="/"><img src={logo} className="logo" alt="Kupiškio marių vilos logo"></img></Link>
            <div className='navButtons'>
                <div className='mainButtons'>
                <Link to="/"><button className="pagrindinisButton">Pagrindinis</button></Link>
                <Link to="/rezervacija"><button className='rezervuotiButton button'>Rezervuoti</button></Link>
                </div>
            
                <div className='secondaryButtons'>
                     <Link to="/namai"><button className='namaiButton'>Namai</button></Link>
                    <Link to="/galerija"><button className='galerijaButton'>Galerija</button></Link>
                    <Link to="/kaip-mus-rasti"><button className='kaipMusRastiButton'>Kaip mus rasti?</button></Link>
                    <Link to="/kontaktai"><button className='kontaktaiButton'>Kontaktai</button></Link>
                    <img className="arrowDown"src={arrowDownIcon} alt="" />
                </div>
                
            </div>
            <div className='navContacts'>
            <a>Susisiek su mumis</a>
            <div onClick={() =>window.open("tel:+1800229933")} className="hover-text"><img className="phoneIcon"src={phoneIcon}></img>
            <span style={{left: "-350%"}}className="tooltip-text" id="fade">+370 640 55444</span>
             </div>
             <div class="hover-text">
                <img src={mailIcon}></img>
            <span style={{left: "-500%"}}className="tooltip-text" id="fade">bociupis@gmail.com</span>
             </div>
            
            </div>
        </>
    )

        
}

export default NavBar