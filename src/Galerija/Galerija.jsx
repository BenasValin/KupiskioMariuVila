import './Galerija.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import pagrindinis from '../Images/pagrinidispastatas.jpg';
import { zvejuNamelisImages, pagrindinisPastatasImages, pirtiesPastatasImages, vilosAplinkaImages, mariuAplinkaImages } from '../Images/HouseImages';
import React, { useState , useRef} from 'react';


import FsLightbox from 'fslightbox-react';

function Galerija() {


    const [activeButton, setActiveButton] = useState('visosNuotraukos');

    const handleVisosNuotraukos = () => {
        setPhotos(pagrindinisPastatasImages.concat(zvejuNamelisImages, pirtiesPastatasImages, vilosAplinkaImages, mariuAplinkaImages))
        setActiveButton('visosNuotraukos')
    }

    const handlePagrindinisPastatas = () => {
        setPhotos(pagrindinisPastatasImages)
        setActiveButton('pagrindinisPastatas')
    }

    const handleZvejuNamelis = () => {
        setPhotos(zvejuNamelisImages)
        setActiveButton('zvejuNamelis')
    }

    const handlePirtiesPastatas = () => {
        setPhotos(pirtiesPastatasImages)
        setActiveButton('pirtiesPastatas')
    }

    const handleVilosAplinka = () => {
        setPhotos(vilosAplinkaImages)
        setActiveButton('vilosAplinka')
    }
    const handlemMariuAplinka = () => {
        setPhotos(mariuAplinkaImages)
        setActiveButton('mariuAplinka')
    }


    const [photos, setPhotos] = useState(pagrindinisPastatasImages.concat(zvejuNamelisImages, pirtiesPastatasImages));
    const [toggler, setToggler] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightboxOnIndex = (index) => {
        setCurrentIndex(index);
        setToggler(!toggler);
    };

    return (
        <div>
            <NavBar />
            <div className="contactsHeaderContainer">
                <img className="contactsHeaderBackgroundImage" src={pagrindinis} alt="" />
                <div className="contactsHeader">
                    <h1>Galerija</h1>
                </div>
            </div>

            <div className="mainGalleryContainer">
                <div className="galleryContainer">
                    <div className="galleryNav">
                        <button onClick={handleVisosNuotraukos} style={activeButton == 'visosNuotraukos' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Visos nuotraukos</button>
                        <button onClick={handlePagrindinisPastatas} style={activeButton == 'pagrindinisPastatas' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Pagrindinis pastatas</button>
                        <button onClick={handlePirtiesPastatas} style={activeButton == 'pirtiesPastatas' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Pirties pastatas</button>
                        <button onClick={handleZvejuNamelis} style={activeButton == 'zvejuNamelis' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Žvejų namelis</button>
                        <button onClick={handleVilosAplinka} style={activeButton == 'vilosAplinka' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Vilos Aplinka</button>
                        <button onClick={handlemMariuAplinka} style={activeButton == 'mariuAplinka' ? {backgroundColor: "var(--green)"} : {}} className="button galleryButton">Marių aplinka</button>
                    </div>
                </div>
                <div className="photoGridContainer">
                    <div className="photoGrid">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Photo ${index + 1}`}
                                className="galleryPhoto"
                                onClick={() => openLightboxOnIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <FsLightbox toggler={toggler} sources={photos} slide={currentIndex + 1} />
        </div>
    );
}

export default Galerija;
