import './Apylinkes.css'
import PhotoSlider from '../photoSlider/photoSlider'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { zvejuNamelisImages } from '../Images/HouseImages'

function ApylinkesObject({ title, text, images }) {
    return (
        <div className='apylinkesObjectContainer'>
            <PhotoSlider images={images} />
        </div>
    )
}

function Namai() {
    return (
        <div>
            <NavBar />
            <div className="apylinkesHeader">
                <h1 className='apylinkesTitle'>Mūsų Apylinkės</h1>
                <h2 className='secondaryTitle apylinkesSecondaryTitle'>Tyrinėkite <span className='greenText'>šalia esančius</span>  traukos objektus</h2>
            </div>

            <ApylinkesObject title="Uošvės liežuvis" text="lorem Ipsum" images={zvejuNamelisImages} />

            <Footer />
        </div>
    )
}

export default Namai
