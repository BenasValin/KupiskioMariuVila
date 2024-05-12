import "./Home.css";
import { Link } from "react-router-dom";

import {motion} from 'framer-motion'




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
  pagrindinisPastatasImages,
  pirtiesPastatasImages,
} from "../Images/HouseImages.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <div className="landingPageContainer">
        <img  className="backgroundWithFilter" src={pagrindinisPastatas} alt="" />
        <div className="titleContainer">

          <motion.h1 className="title"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{once: true}}
          >
            Kupiškio Marių vila
          </motion.h1>

          <Link to="/galerija">
            <motion.button
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
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
            transition={{duration: 0.5, delay: 0.5}}
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
          <img className="shortDescriptionLogo" src={logo} loading="lazy" alt="" />
      
          <motion.article
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.3}}
          viewport={{once: true}}>
            Leiskite pristatyti poilsio ir švenčių organizavimui skirtą
            „Kupiškio marių vilą“ - pastatų kompleksą ant Kupiškio marių kranto,
            tik 2 km. nuo Kupiškio miesto. Kupiškio marios – tai Lėvens upės
            tvenkinys pastatytas 1984 m., kurio plotas 828 ha, tūris 33 mln. m3,
            vidutinis gylis 5 m, didžiausias gylis 14 m.
          </motion.article>
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
          <div className="card">
            <img className="cardIcon" src={pokyliuSale} alt="" loading="lazy"/>
            <h2 className="cardTitle"> Pokylių salė</h2>
            <p className="cardText">
              Pokylio salė, talpinanti 60 asmenų, su virtuve ir 6 miegamaisiais
              kambariais ( 20 lovų ), lauko terasa su židiniu, pirties kompleksu
              su sale, talpinančia 16 asmenų, ir 4 miegamaisiais kambariais ( 14
              lovų ), „jaunavedžių“ nameliu.
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
          <div className="card">
          <img className="cardIcon" src={poilsisprievandens} alt="" loading="lazy"/>
            <h2 className="cardTitle"> Poilsis prie vandens</h2>
            <p className="cardText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nasum sint recusandae doloremque?
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
          <div className="card">
          <img className="cardIcon" src={pirtis} alt="" loading="lazy"/>
            <h2 className="cardTitle">Šeimos šventės</h2>
            <p className="cardText">
              Pokylio salė, talpinanti 60 asmenų, su virtuve ir 6 miegamaisiais
              kambariais ( 20 lovų ), lauko terasa su židiniu, pirties kompleksu
              su sale, talpinančia 16 asmenų, ir 4 miegamaisiais kambariais ( 14
              lovų ), „jaunavedžių“ nameliu.
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
        </div>
      </div>

      <div className="aboutUsContainer">
        <div className="aboutUs">
          <div>
            <p style={{ fontSize: "3em", fontWeight: "500", marginLeft: "2rem" }}>Ilsėkites be rūpesčių</p>
            <article style={{ opacity: "95%", fontSize: "1.2em", marginLeft: "2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptate asperiores doloremque recusandae quaerat fugit, esse
              voluptatem facere molestiae cupiditate dignissimos ullam quam quia
              accusantium officia? Ratione sequi placeat non?
            </article>
          </div>
          <img className="aboutUsImage" src={pagrindinisPastatas} alt="" />
        </div>
      </div>

      <div className="comfortContainer">
      <p style={{color: "var(--grey)", textAlign: "center", fontSize: "2.5rem", margin: "60px", fontWeight: "500", marginLeft: "10px", marginRight: "10px"}}>Jūsų komfortas - mūsų prioritetas</p>
        <div className="comfort">
          <img className="comfortImage" src={pirtiesVidus} alt="" />
          <div style={{maxWidth: "500px"}}>
            <div style={{margin: "45px"}}>
              <div className="comfortNumber">01</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px"}}>Būtiniausi viešbučio patogumai</p>
              <p style={{color: "var(--grey)", opacity: "90%"}}>Lorem ipsum, dolor sit amet consectetuescilis, exercitationem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            </div>
            <div style={{margin: "45px"}}>
              <div className="comfortNumber">02</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px"}}>Būtiniausi viešbučio patogumai</p>
              <p style={{color: "var(--grey)", opacity: "90%"}}>Lorem ipsum, dolor sit amet consectet Neqamlis, exercitationem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            </div>
            <div style={{margin: "45px"}}>
               <div  className="comfortNumber">03</div>
              <p style={{color: "var(--grey)", fontSize: "1.5rem", marginTop: "8px"}}>Būtiniausi viešbučio patogumai</p>
              <p style={{color: "var(--grey)", opacity: "90%"}}>Lorem ipsum, dolori id libero amet dolorem itaonem culpa ducimus expedita quis ut placeat eius dolorum.</p>
            
            </div>
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
            <div >
              <article style={{opacity: "85%", margin: "10px", display:"flex", alignItems: "center", verticalAlign: "center"}}>
                 ullam ipsam deserunt nobis laudantium quibusdam quisquam. Consequatur ducimus voluptate nemo quidem illo modi amet.
              </article>
            </div>
          </div>
          <div className="outdoorActivities">
          <div className="card">
            <img className="cardIcon" src={tinklinis} alt="" />
            <h2 className="cardTitle">Lauko sportas</h2>
            <p className="cardText">
              Pokylio salė, talpinanti 60 asmenų, su virtuve ir 6 miegamaisiais
              kambariais ( 20 lovų ), lauko terasa su židiniu, pirties kompleksu
              su sale, talpinančia 16 asmenų, ir 4 miegamaisiais kambariais ( 14
              lovų ), „jaunavedžių“ nameliu.
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
          <div className="card">
          <img className="cardIcon" src={baidares} alt="" />
            <h2 className="cardTitle"> Vandens pramogos</h2>
            <p className="cardText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exp quasi aliasate voluptatem quaerat.
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
          <div className="card">
          <img className="cardIcon" src={kempingas} alt="" />
            <h2 className="cardTitle">Kempingas</h2>
            <p className="cardText">
              Pokylio salė, talpinanti 60 asmenų, su virtuve ir 6 miegamaisiais
              kambariais ( 20 lovų ), lauko terasa su židiniu, pirties kompleksu
              su sale, talpinančia 16 asmenų, ir 4 miegamaisiais kambariais ( 14
              lovų ), „jaunavedžių“ nameliu.
            </p>
            <button className="outdoorActivitiesButton button">
              Sužinoti daugiau
            </button>
          </div>
        </div>
        </div>
      </div>

    

      <div className="housesContainer">
        <div className="houses">
          <div className="zvejuNamelis">
            <p className="housesTitle">Pagrindinis pastatas</p>
          
            <PhotoGallery
              className="photoGallery"
              images={pagrindinisPastatasImages}
            ></PhotoGallery>
          </div>

          <div className="zvejuNamelis">
            <p className="housesTitle">Žvejų namelis</p>
          
            <PhotoGallery
              className="photoGallery"
              images={zvejuNamelisImages}
            ></PhotoGallery>
          </div>

          <div className="zvejuNamelis">
            <p className="housesTitle">Pirties pastatas</p>
           
            <PhotoGallery
              className="photoGallery"
              images={pirtiesPastatasImages}
            ></PhotoGallery>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
