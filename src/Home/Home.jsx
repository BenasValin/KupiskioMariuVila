//Im am sorry for the spaghetti code :( 

import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

import {animate, motion, spring} from 'framer-motion'

import NavBar from "../NavBar/NavBar.jsx";
import PhotoGallery from "../photoGallery/photoGallery.jsx";
import logo from "../Images/Logo.png";
import boatIcon from "../Images/icons8-boat-100.png";
import champagneIcon from "../Images/icons8-champagne-100.png";
import campIcon from "../Images/icons8-camp-100.png";
import pagrindinisPastatas from "../Images/pagrinidis pastatas - Copy.jpg";
import pirtis from "../Images/pirtis.jpg";
import aplinka from "../Images/aplinka.jpg";
import pastatas from "../Images/pastatas.jpg";
import zveju from "../Images/zveju.jpg";
import jaunikiu from "../Images/jaunikiu.jpg";
import Footer from "../Footer/Footer.jsx";
import arrowDown from "../Images/arrowDown.png";
import pokyliuSale from '../Images/pokyliusale.jpg'
import poilsisprievandens from '../Images/poilsisprievandens.jpg'
import tinklinis from '../Images/tinklinis.jpg'
import baidares from '../Images/baidares.jpg'
import kempingas from '../Images/kempingas.jpg'
//Houses Privalumai Icons
import person from "../Images/person.png";
import fishingRod from "../Images/fishing.png";
import kitchen from "../Images/kitchen.png";
import pirtiesVidus from '../Images/pirtiesvidus.jpg'
import {
  zvejuNamelisImages,
  pagrindinisPastatasPirmasAukstasImages,
  pirtiesPastatasPirmasAukstasImages,
} from "../Images/HouseImages.jsx";

function Home() {

  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="landingPageContainer">
        <div className="titleContainer ">
          <motion.h2 
          className="secondaryTitle greenText" 
          style={{letterSpacing: "1px"}}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, type: "spring"}}
          viewport={{once: true}}
          >Kupiškio marių vila
          </motion.h2>
          <motion.h1 className="title"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.2, type: "spring"}}
          viewport={{once: true}}
          >
           Atraskite Kupiškio marių grožį
          </motion.h1>

          <motion.h3 
          className="secondaryTitle"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.4, type: "spring"}}
          viewport={{once: true}}>
           Jūsų vila ramiame kampelyje
           </motion.h3>

          <Link to="/galerija">
            <motion.button
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.6, type: "spring"}}
            viewport={{once: true}}
              style={{ scale: "1.1", backgroundColor: "var(--grey)" }}
              className="galerijaButton button"
            >
              Galerija
            </motion.button>

          </Link>
          <Link to="/rezervacija">
            <motion.button
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.6, type: "spring"}}
            viewport={{once: true}}
              style={{ scale: "1.1" }}
              className="rezervuotiButton button"
            >
              Rezervuoti
            </motion.button>
          </Link>

        </div>
      </div>

      <div className="shortDescriptionContainer">
        <div className="shortDescription">
          
      
          <article
          >
            <motion.p 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true, margin: "-200px"}}
            style={{fontSize: "1.5rem",fontWeight: "600", lineHeight: "40px"}}>
            Kupiškio Marių vila
            </motion.p>
            <motion.a 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              style={{ opacity: 0.9, lineHeight: "28px", fontSize: "1.1rem", display: "inline-block" }}>
              Tai pastatų kompleksas ant Kupiškio marių kranto,
              tik 2 km. nuo Kupiškio miesto. Kupiškio marios – tai Lėvens upės
              tvenkinys pastatytas 1984 m., kurio plotas 828 ha, tūris 33 mln. m3,
              vidutinis gylis 5 m, didžiausias gylis 14 m.
          </motion.a>
          </article>
          <div  className="shortDescriptionLogoContainer">
           <img className="shortDescriptionLogo" src={logo} loading="lazy" alt="" />
          </div>
          
        </div>
      </div>

      <div className="servicesContainer">
        <p
          style={{
            color: "var(--grey)",
            textAlign: "center",
            fontSize: "3rem",
            margin: "100px",
            fontWeight: "500",
            marginLeft: "10px",
            marginRight: "10px"
          }}
        >
          Pailsėk prie Kupiškio marių
        </p>
        <div className="services">
           <motion.div
           onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={pokyliuSale} alt="" loading="lazy" />
          <h2 className="cardTitle">Pokylių salė</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
         <motion.div
          onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={poilsisprievandens} alt="" loading="lazy" />
          <h2 className="cardTitle">Poilsis prie vandens</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
          <motion.div
          onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={poilsisprievandens} alt="" loading="lazy" />
          <h2 className="cardTitle">Šeimos šventės</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
        </div>
      </div>

      <div className="aboutUsContainer">
        <div className="aboutUs">
          <div>
            <motion.p 
            style={{ fontSize: "3em", fontWeight: "600", marginLeft: "2rem" }}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
              Ilsėkites be rūpesčių
              </motion.p>
            <motion.article 
            style={{fontSize: "1.2em", marginLeft: "2rem", lineHeight: "140%", lineHeight: "32px"}}
            className="secondaryTitle"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptate asperiores doloremque recusandae quaerat fugit, esse
              voluptatem facere molestiae cupiditate dignissimos ullam quam quia
              accusantium officia? Ratione sequi placeat non?
            </motion.article>
          </div>
          <img className="aboutUsImage" src={pagrindinisPastatas} alt="" />
        </div>
      </div>

      <div className="comfortContainer">
      <p style={{color: "var(--grey)", textAlign: "center", fontSize: "2.5rem", margin: "60px", fontWeight: "600", marginLeft: "10px", marginRight: "10px"}}>Jūsų komfortas - mūsų prioritetas</p>
        <div className="comfort">
          <img className="comfortImage" src={pirtiesVidus} alt="" />
          <div style={{maxWidth: "500px"}}>
            <motion.div style={{margin: "45px"}}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
              <div className="comfortNumber">01</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px", fontWeight: "600"}}>Būtiniausi patogumai</p>
              <p style={{color: "var(--grey)", opacity: "90%", lineHeight: "24px"}}>Lorem ipsum, dolor sit amet consectetuescilis, exercitationem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            </motion.div>
            <motion.div style={{margin: "45px"}}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
              <div className="comfortNumber">02</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px", fontWeight: "600"}}>Jūsų namai toli nuo namų</p>
              <p style={{color: "var(--grey)", opacity: "90%", lineHeight: "24px"}}>Lorem ipsum, dolor sit amet consectet Neqamlis, exercitationem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            </motion.div>
            <motion.div style={{margin: "45px"}}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
               <div  className="comfortNumber">03</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px", fontWeight: "600"}}>Gamta prie pat durų slenksčio</p>
              <p style={{color: "var(--grey)", opacity: "90%", lineHeight: "24px"}}>Lorem ipsum, dolori id libero amet dolorem itaonem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            
            </motion.div>
          </div>
        </div>
      </div>

      <div className="outdoorActivitiesContainer">
        <div className="outdoorActivitiesWrapper">
          <div className="outdoorActivitesTextContainer">
            <div>
              <h3 style={{margin: "10px",fontSize:"3rem", marginTop: "4rem", marginBottom: "1rem", fontWeight: "600"}}>Lauko Pramogos</h3>
              <p style={{fontSize: "1.8rem", margin: "10px", marginBottom: "2rem", opacity: "85%", fontWeight: "550"}}>Leiskites į nuotykius</p>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <article style={{opacity: "85%", margin: "auto", lineHeight: "24px"}}>
                 ullam ipsam deserunt nobis laudantium quibusdam quisquam. Consequatur ducimus voluptatelo modi amet.Consequatur ducimus voluptate nemo quidem illo modi amet.
              </article>
            </div>
          </div>
          <div className="outdoorActivities">
           <motion.div
           onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={tinklinis} alt="" loading="lazy" />
          <h2 className="cardTitle">Lauko sportas</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
           <motion.div
           onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={baidares} alt="" loading="lazy" />
          <h2 className="cardTitle">Vandens pramogos</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
           <motion.div
           onClick={() => navigate("/rezervacija")}
          className="card"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4, type: "spring" } },
            hover: { y: -20, transition: { duration: 0.3 } }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img className="cardIcon" src={kempingas} alt="" loading="lazy" />
          <h2 className="cardTitle">Kempingas</h2>
          <p className="cardText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
          </p>
        </motion.div>
        </div>
        </div>
      </div>

    

      <div className="housesContainer">
        <div className="houses">
          <motion.div 
          className="zvejuNamelis"
          initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-100px"}}>
            <p className="housesTitle">Pagrindinis pastatas</p>
          
            <PhotoGallery
              className="photoGallery"
              images={pagrindinisPastatasPirmasAukstasImages}
              height={800}
            ></PhotoGallery>
          </motion.div>

          <motion.div 
          className="zvejuNamelis"
          initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-200px"}}>
            <p className="housesTitle">Žvejų namelis</p>
          
            <PhotoGallery
              className="photoGallery"
              images={zvejuNamelisImages}
              height={800}
            ></PhotoGallery>
          </motion.div>

          <motion.div 
          className="zvejuNamelis"
          initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, margin: "-200px"}}>
            <p className="housesTitle">Pirties pastatas</p>
           
            <PhotoGallery
              className="photoGallery"
              images={pirtiesPastatasPirmasAukstasImages}
              height={800}
            ></PhotoGallery>
          </motion.div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
