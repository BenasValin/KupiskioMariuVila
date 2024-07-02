import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/lt';
import 'react-dates/initialize';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import pagrindinis from '../Images/pagrinidispastatas.jpg';
import whiteCalendarIcon from '../Images/fullwhitecalendar.png';
import whitephoneIcon from '../Images/fullwhitephone.png';
import treatyIcon from '../Images/treaty.png';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SlideInNotification from '../SlideInNotification/SlideInNotification';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// UI images
import bedIcon from '../Images/UI/bed-grey-full.png';
import personIcon from '../Images/UI/person-white-full.png'
import kitchenIcon from '../Images/UI/kitchen-white-full.png'
import fireplaceIcon from '../Images/UI/fireplace-full-grey.png';

import PhotoGallery from '../photoGallery/photoGallery';

import {
    zvejuNamelisImages,
    pirtiesPastatasAntrasAukstasImages,
    pirtiesPastatasPirmasAukstasImages,
    pagrindinisPastatasAntrasAukstasImages,
    pagrindinisPastatasPirmasAukstasImages
} from '../Images/HouseImages.jsx';

import './Reservation.css'; // Make sure the CSS file with the styles is imported here
import useWindowWidth from './useWindowWidth'; // Import custom hook

moment.locale('lt');

function Reservation() {
    const [notificationText, setNotificationText] = useState('');
    const [notificationKey, setNotificationKey] = useState(0); // Added to force re-render
    const [blockedDates, setBlockedDates] = useState({
        zvejunamelis: [],
        pagrindisPastatasPirmas: [],
        pagrindisPastatasAntras: [],
        pirtiesPastatasPirmas: [],
        pirtiesPastatasAntras: []
    });

    const navigate = useNavigate();

    useEffect(() => {
        const houses = ['zvejunamelis', 'pagrindisPastatasPirmas', 'pagrindisPastatasAntras', 'pirtiesPastatasPirmas', 'pirtiesPastatasAntras'];
    
        houses.forEach(house => {
            fetch(`http://localhost:5000/api/booked-ranges?house=${house}`)
                .then(response => response.json())
                .then(data => {
                    console.log(`Fetched data for ${house}:`, data);
                    const booked = data.reduce((acc, booking) => {
                        if (!acc[booking.house]) {
                            acc[booking.house] = [];
                        }
                        acc[booking.house].push({
                            startDate: moment(booking.start_date),
                            endDate: moment(booking.end_date)
                        });
                        return acc;
                    }, {});
                    setBlockedDates(prevBlockedDates => ({ ...prevBlockedDates, ...booked }));
                })
                .catch(error => console.error(`Error fetching booked ranges for ${house}:`, error));
        });
    }, []);

    const kainos = {
        zvejuNamelis: 50,
        pirtiesPastatasPirmas: 100,
        pirtiesPastatasAntras: {
            vienam: 15,
            keliems: 12
        },
        pagrindinisPastatasPirmas: 180,
        pagrindinisPastatasAntras: 12
    };

    const windowWidth = useWindowWidth(); // Get window width
    const numberOfMonths = windowWidth < 1230 ? 1 : 2;

    const isOutsideRange = (day, houseBlockedRanges) => {
        const isBlocked = houseBlockedRanges && houseBlockedRanges.some(range => {
            console.log('Checking day:', day, 'against range:', range);
            return day.isBetween(range.startDate, range.endDate, null, '[]');
        });
        return (
            moment().diff(day, 'days') > 0 || isBlocked
        );
    };

    return (
        <div>
            <NavBar />
            <SlideInNotification key={notificationKey} text={notificationText} />
            <div className='reservationHeaderContainer'>
                <img className='reservationHeaderBackgroundImage' src={pagrindinis} alt='Main building' />
                <div className='reservationHeader'>
                    <h1 className='reservationHeaderTitle'>Rezervacija</h1>
                    <div className='reservationInstructionsContainer'>
                        <h1 className='reservationInstructionTitle'>Kaip atlikti rezervaciją</h1>
                        <div className='reservationInstructions'>
                            <div className='instructionStepContainer'>
                                <div className='instructionStep'>
                                    <img className='instructionIcon' src={whiteCalendarIcon} alt='' />
                                </div>
                                <h3 className='reservationStepTitle'>Išsirinkite datą</h3>
                                <p className='reservationDescription'>Pasitikrinkite laisvas datas kalendoriuje</p>
                            </div>
                            <div className='instructionStepContainer'>
                                <div className='instructionStep kontaktaiInstructionStep' onClick={() => navigate("/kontaktai")}>
                                    <img className='instructionIcon' src={whitephoneIcon} alt='' />
                                </div>
                                <h3 className='reservationStepTitle'>Susisiekite su administracija</h3>
                                <p className='reservationDescription'>Paskambinkite mums - aptarsime visus jūsų poreikius</p>
                            </div>
                            <div className='instructionStepContainer'>
                                <div className='instructionStep'>
                                    <img className='instructionIcon' src={treatyIcon} alt='' />
                                </div>
                                <h3 className='reservationStepTitle'>Atvykite pasirašyti sutartį</h3>
                                <p className='reservationDescription'>Sutartis įsigalioja tik jums pervedus sutartą užstatą</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='reservationHousesContainer'>
                <div className='reservationHouses'>
                    <div className='houseExample'>
                        <PhotoGallery images={pagrindinisPastatasPirmasAukstasImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: "600", marginBottom: "0.5rem" }}>Pagrindinis Pastatas</h3>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: "450", opacity: "95%", margin: "0 0 2.5rem" }}>Pirmas aukštas - pokylių salė</h4>
                            <div className='houseSpecifications'>
                                <div className='houseSpecificationsContainer'>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <img src={kitchenIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Šio pastato pirmame aukšte rasite virtuvėlę su indais ir įrankiais, tad galėsite "šeimininkauti" taip, kaip jums patinka</a>
                                    </div>
                                </div>
                            </div>
                            <div className='houseDescription'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipibus expedita velit, culpa itaque explicabo quod harum? Impedit facilis accusantium libero voluptatibus eius!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            </div>
                            <p style={{ marginBottom: "2rem" }}>
                                <span className='price'>{kainos.pagrindinisPastatasPirmas}€</span> / parai + PVM
                            </p>
                            <DayPickerRangeController
                                startDate={null}
                                endDate={null}
                                onDatesChange={() => {}}
                                focusedInput={null}
                                onFocusChange={() => {}}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={(day) => isOutsideRange(day, blockedDates.pagrindisPastatasPirmas)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className='houseExample'>
                        <PhotoGallery images={pirtiesPastatasPirmasAukstasImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: "600", marginBottom: "0.5rem" }}>Pirties Pastatas</h3>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: "450", opacity: "95%", margin: "0 0 2.5rem" }}>Pirmas aukštas - pirties ir salės patalpos</h4>
                            <div className='houseSpecifications'>
                                <div className='houseSpecificationsContainer'>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a>15 :</a>
                                        <img src={personIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Šiame pastate yra salė, kurioje telpa 15 žmonių</a>
                                    </div>
                                </div>
                            </div>
                            <div className='houseDescription'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur quam quas quibusdam aspernatur inventore dignissimos sunt eaque doloremque eos.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            </div>
                            <p style={{ marginBottom: "2rem" }}>
                                <span className='price'>{kainos.pirtiesPastatasPirmas}€</span> / pusė paros + PVM
                            </p>
                            <DayPickerRangeController
                                startDate={null}
                                endDate={null}
                                onDatesChange={() => {}}
                                focusedInput={null}
                                onFocusChange={() => {}}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={(day) => isOutsideRange(day, blockedDates.pirtiesPastatasPirmas)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className='houseExample'>
                        <PhotoGallery images={zvejuNamelisImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2em', fontWeight: "550" }}>Žvejų Namelis</h3>
                            <div className='houseSpecifications'>
                                <div className='houseSpecificationsContainer'>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a>6 :</a>
                                        <img src={personIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Žvejų namelyje telpa 6 žmonės - 3 dvigulės lovos. Viena lova pasiekiama tik virvinėmis kopėčiomis, tad galėsite išbandyti savo alpinistinius gebėjimus</a>
                                    </div>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a></a>
                                        <img src={kitchenIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Žvejų namelyje rasite virtuvėlę su indais ir įrankiais, tad galėsite "šeimininkauti" taip, kaip jums patinka</a>
                                    </div>
                                </div>
                            </div>
                            <div className='houseDescription'>
                                <p>Žvejų namelis - puikus pasirinkimas savaitgalio išvykai. Durys į terąsą virš vandens. Yra 3 dvigulės lovos jums ir jūsų artimiems, maža virtuvėlė</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            </div>
                            <p style={{ marginBottom: "2rem" }}>
                                <span className='price'>{kainos.zvejuNamelis}€</span> / parai + PVM
                            </p>
                            <DayPickerRangeController
                                startDate={null}
                                endDate={null}
                                onDatesChange={() => {}}
                                focusedInput={null}
                                onFocusChange={() => {}}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={(day) => isOutsideRange(day, blockedDates.zvejunamelis)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className='houseExample'>
                        <PhotoGallery images={pagrindinisPastatasAntrasAukstasImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: "600", marginBottom: "0.5rem" }}>Pagrindinis Pastatas</h3>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: "450", opacity: "95%", margin: "0 0 2.5rem" }}>Antras aukštas - miegamosios patalpos</h4>
                            <div className='houseSpecifications'>
                                <div className='houseSpecificationsContainer'>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a>20 :</a>
                                        <img src={personIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Šiame pastate yra 20 miegamųju vietų</a>
                                    </div>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a>WC</a>
                                        <a className='houseSpecificationsDropdown'>Šiame pastate WC yra bendras </a>
                                    </div>
                                </div>
                            </div>
                            <div className='houseDescription'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, atque. Accusamus, magni. Officia ipsum soluta cumque pariatur eos iste.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            </div>
                            <p style={{ marginBottom: "2rem" }}>
                                <span className='price'>{kainos.pagrindinisPastatasAntras}€</span> / (1 lova) parai + PVM 
                            </p>
                            <DayPickerRangeController
                                startDate={null}
                                endDate={null}
                                onDatesChange={() => {}}
                                focusedInput={null}
                                onFocusChange={() => {}}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={(day) => isOutsideRange(day, blockedDates.pagrindisPastatasAntras)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div className='houseExample'>
                        <PhotoGallery images={pirtiesPastatasAntrasAukstasImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2.2rem', fontWeight: "600", marginBottom: "0.5rem" }}>Pirties Pastatas</h3>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: "450", opacity: "95%", margin: "0 0 2.5rem" }}>Antras aukštas - miegamosios patalpos</h4>
                            <div className='houseSpecifications'>
                                <div className='houseSpecificationsContainer'>
                                    <div className='houseSpecificationsDropdownButton'>
                                        <a>14 :</a>
                                        <img src={personIcon} alt="" />
                                        <a className='houseSpecificationsDropdown'>Šiame pastate yra 14 miegamųju vietų</a>
                                    </div>
                                </div>
                            </div>
                            <div className='houseDescription'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, assumenda? Voluptatibus exercitationem tempora magnam, corrupti molestiae dignissimos obcaecati rerum sint.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            </div>
                            <p style={{ marginBottom: "2rem" }}>
                                <span className='price'>{kainos.pirtiesPastatasAntras.vienam}€</span> / (1 lova) parai + PVM
                            </p>
                            <DayPickerRangeController
                                startDate={null}
                                endDate={null}
                                onDatesChange={() => {}}
                                focusedInput={null}
                                onFocusChange={() => {}}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={(day) => isOutsideRange(day, blockedDates.pirtiesPastatasAntras)}
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Reservation;
