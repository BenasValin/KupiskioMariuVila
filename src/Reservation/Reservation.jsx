import React, { useState } from 'react';
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
import SlideInNotifications from '../SlideInNotifications/SlideInNotifications.jsx';
//UI images

import bedIcon from '../Images/UI/bed-grey-full.png'
import kitchenIcon from '../Images/UI/kitchen-grey-full.png'
import personIcon from '../Images/UI/person-full-grey.png'

import PhotoGallery from '../photoGallery/photoGallery';

import {
    zvejuNamelisImages,
    pagrindinisPastatasImages,
    pirtiesPastatasImages
} from '../Images/HouseImages.jsx';

import './Reservation.css'; // Make sure the CSS file with the styles is imported here
import useWindowWidth from './useWindowWidth'; // Import custom hook

moment.locale('lt');

function Reservation() {

    const kainos={
        zvejuNamelis: 60,
        pirtiesPastatas: 180
    }

    const blockedDates = [
        moment("2024-05-15"), // Example date, use your own dates
        moment("2024-05-20"), // Another example date
    ];

    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
    const [focusedInput, setFocusedInput] = useState('startDate');
    const windowWidth = useWindowWidth(); // Get window width
    const [selectedDays, setSelectedDays] = useState(0);

    const numberOfMonths = windowWidth < 1230 ? 1 : 2; // Adjust based on screen width

    const isOutsideRange = day => {
        return moment().diff(day, 'days') > 0 || blockedDates.some(d => d.isSame(day, 'day'));
    };


    const isRangeValid = (start, end) => {
        let day = moment(start);
        while (day <= end) {
            if (blockedDates.some(d => d.isSame(day, 'day'))) {
                return false;
            }
            day.add(1, 'days');
        }
        return true;
    };


    const handleDatesChange = ({ startDate, endDate }) => {
        if (startDate && endDate) {
            if (!isRangeValid(startDate, endDate)) {
                setDateRange({ ...dateRange, endDate: null }); // Clear the endDate
                setSelectedDays(0);

            } else {
                setDateRange({ startDate, endDate });
                const start = moment(startDate).startOf('day');
                const end = moment(endDate).startOf('day');
                const days = end.diff(start, 'days');
                setSelectedDays(days);
            }
        } else {
            setDateRange({ startDate, endDate });
            if (!startDate || !endDate) {
                setSelectedDays(0);
            }
        }
    };


    return (
        <div>
            <NavBar />
            <div className='reservationHeaderContainer'>
                <img className='reservationHeaderBackgroundImage' src={pagrindinis} alt='Main building' />
                <div className='reservationHeader'>
                    <h1>Rezervacija</h1>
                </div>
            </div>

            <div className='reservationInstructionsContainer'>
                <h1 style={{ fontSize: '2rem', margin: "3rem" }}>Kaip atlikti rezervaciją</h1>
                <div className='reservationInstructions' style={{paddingBottom: "3rem"}}>
                    <div className='instructionStepContainer'>
                        <div className='instructionStep'>
                            <img className='instructionIcon' src={whiteCalendarIcon} alt='' />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '550' }}>Išsirinkite datą</h3>
                        <p className='reservationDescription'>Pasitikrinkite laisvas datas kalendoriuje</p>
                    </div>
                    <div className='instructionStepContainer'>
                        <div className='instructionStep'>
                            <img className='instructionIcon' src={whitephoneIcon} alt='' />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '550' }}>Susisiekite su administracija</h3>
                        <p className='reservationDescription'>Paskambinkite mums - aptarsime visus jūsų poreikius</p>
                    </div>
                    <div className='instructionStepContainer'>
                        <div className='instructionStep'>
                            <img class='instructionIcon' src={treatyIcon} alt='' />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '550' }}>Atvykite pasirašyti sutartį</h3>
                        <p className='reservationDescription'>Sutartis įsigalioja tik jums pervedus sutartą užstatą</p>
                    </div>
                </div>
            </div>
            <div className='reservationHousesContainer'>
                <div className='reservationHouses'>
                    <div className='houseExample'>
                        
                        <PhotoGallery images={zvejuNamelisImages}></PhotoGallery>
                        <div className='houseExampleDescriptionContainer'>
                            <h3 style={{ fontSize: '2em' }}>Žvejų Namelis</h3>
                            <div className='houseSpecifications'>
                                6 : &nbsp;<img src={personIcon}alt="" />&emsp;
                                3 : &nbsp;<img src={bedIcon}></img>&emsp;
                                1 : &nbsp;<img src={kitchenIcon}></img>&emsp;
                            </div>
                            <div className='houseDescription'>
                            <p>Žvejų namelis - puikus pasirinkimas savaitgalio išvykai. Durys į terąsą virš vandens. Yra 3 dvigulės lovos jums ir jūsų artimiems, maža virtuvėlė</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo esse invento illum placeat, possimus distinctio numquam quam voluptatem fugiat recusandae laudantium consequuntur vitae.</p>
                            
                            </div>
                            <p style={{marginBottom: "2rem"}}>
                                <span className='price'>{kainos.zvejuNamelis}€</span> / parai
                            </p>
                            <DayPickerRangeController
                                startDate={dateRange.startDate}
                                endDate={dateRange.endDate}
                                onDatesChange={handleDatesChange} // Ignore changes
                                focusedInput={focusedInput}
                                onFocusChange={(focusedInput) => setFocusedInput(focusedInput || 'startDate')}
                                numberOfMonths={numberOfMonths}
                                isOutsideRange={isOutsideRange} // Disable past dates
                                // Additional props to ensure calendar interactions are ignored
                                hideKeyboardShortcutsPanel={true}
                                noBorder={true}
                                readOnly={true} // This prop does not exist in react-dates but emphasizes the intention
                            />
                            <p style={selectedDays == 0 ? {visibility: "hidden"} : {}}>Kaina už pasirinktą laikotarpį: {selectedDays * kainos.zvejuNamelis} €</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Reservation;