import './NavBar.css';
import logo from '../Images/Logo.png';
import phoneIcon from '../Images/fullwhitephone.png';
import mailIcon from '../Images/icons8-email-24.png';
import arrowDownIcon from '../Images/arrowDown.png';
import greenArrowDownIcon from '../Images/greenArrowDown.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    // Toggle the visibility of the dropdown
    const toggleNavButtons = () => {
        setNavActive(!navActive);
    };

    return (
        <>

        {/* <div className='navLogoContainer'>
            <img src={logo} className='navLogoImg' alt="" />
            <a><b>Kupiškio marių vila</b></a>
        </div> */}
            <div className='navButtons'>
                <div className='mainButtons'>
                    <Link to="/"><button className="pagrindinisButton">Pagrindinis</button></Link>
                    <Link to="/rezervacija"><button className='rezervuotiButton button'>Rezervuoti</button></Link>
                </div>

                

                <div className={`secondaryButtons ${navActive ? 'active' : ''}`}>
                    <Link to="/apylinkes"><button className='namaiButton'>Apylinkės</button></Link>
                    <Link className="navButtonLink" to="/galerija"><button className='galerijaButton'>Galerija</button></Link>
                    <Link to="/kaip-mus-rasti"><button className='kaipMusRastiButton'>Kaip mus rasti?</button></Link>
                    <Link to="/kontaktai"><button className='kontaktaiButton'>Kontaktai</button></Link>
                </div>
                <button onClick={toggleNavButtons} className={`dropdownToggle ${navActive ? 'rotate' : ''}`}>
                    <img className="arrowDown" src={greenArrowDownIcon} alt="Toggle Dropdown" />
                </button>
            </div>

            <div className='navContacts'>
                <a>Susisiek su mumis</a>
                <div onClick={() => window.open("tel:+37064055444")} className="hover-text">
                    <img className="phoneIcon" src={phoneIcon} alt="Phone Icon"/>
                    <span href="mailto:john@example.com"style={{left: "-350%"}} className="tooltip-text" id="fade">+370 640 55444</span>
                </div>
                <div className="hover-text">
                    <img src={mailIcon} alt="Email Icon" onClick={()=>{window.location.href = 'mailto:bociupis@gmail.com'}}/>
                    <span style={{left: "-500%"}} className="tooltip-text" id="fade">bociupis@gmail.com</span>
                </div>
            </div>
        </>
    );
}

export default NavBar;