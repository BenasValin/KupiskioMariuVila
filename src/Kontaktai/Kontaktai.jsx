import "./Kontaktai.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import pagrindinis from "../Images/pagrinidispastatas.jpg";
import { useRef } from "react";

function Kontaktai() {
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();
  const contactTime = useRef();

  const sendEmail = async () => {
    if (
      !name.current.value ||
      !surname.current.value ||
      !email.current.value ||
      !phoneNumber.current.value ||
      !message.current.value ||
      !contactTime.current.value
    ) {
      console.log("Missing fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value,
          surname: surname.current.value,
          email: email.current.value,
          phoneNumber: phoneNumber.current.value,
          message: message.current.value,
          contactTime: contactTime.current.value,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    name.current.value = "";
    surname.current.value = "";
    email.current.value = "";
    phoneNumber.current.value = "";
    message.current.value = "";
    contactTime.current.value = "";
  };

  return (
    <div>
      <NavBar />
      
      <div className="contactsHeaderContainer">
        <img className="contactsHeaderBackgroundImage"
          src={pagrindinis}
          alt=""/>
        <h1 className="contactsHeader">Pašnekėkime apie jūsų poreikius</h1>
      </div>
        <div>
        <div style={{ margin: "3rem 0 0rem" }}>
          <p style={{
              textAlign: "center",
              color: "var(--grey)",
              fontSize: "1.4REM",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              fontWeight: "550"
            }}>Parašykite mums laiška užpildant formą arba paskambinkite mūsų draugiškai administratorei</p>
        </div>
            <div className="contactPageInformation">
            <div className="contactPageContacts">
          <div className="admininstratorContactsContainer">
            <p style={{
                margin: "0",
                fontSize: "1.7rem",
                fontWeight: "600",
              }}>Direktorius</p>
            <p style={{ margin: "0.25rem 0 0.25rem", opacity: "60%" }}>
              Vilius Valintėlis
            </p>
            <p>+370 659 48600</p>
          </div>
          <div className="admininstratorContactsContainer">
            <p style={{
                margin: "0",
                fontSize: "1.7rem",
                fontWeight: "600",
              }}> Administratorė</p>
            <p>+370 659 48600</p>
          </div>
        </div>
        <div className="admininstratorContactsContainer companyInfo">
        <a style={{
                marginBottom: "1rem",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}> Įmonės informacija</a>
          <a>Pavadinimas: UAB „Bočiupis“</a>
          <a>Adresas: Šimtmečio g. 1-1, Kupiškis</a>
          <a>Įmonės kodas: 164767965</a>
          <a>PVM kodas: LT647679610</a>
          </div>
            </div>
       
       
        <h1 className="letsTalk">Parašyk mums laiškelį!</h1>
        <div className="contactPageForm">
          <div className="contactFormName">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="greyFont inputFieldHeader">Vardas</p>
              <input ref={name} type="text" placeholder="Vardas" />
              
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="greyFont inputFieldHeader">Pavardė</p>
              <input ref={surname} type="text" placeholder="Pavardė" />
            </div>
          </div>

          <p className="inputFieldHeader"> Elektroninis paštas</p>
          <input ref={email} type="text" placeholder="El. paštas" />
          <p className="inputFieldHeader">Telefono numeris</p>
          <input ref={phoneNumber} type="text" placeholder="Tel. Nr." />
          <p className="inputFieldHeader"> Jūsų žinutė</p>
          <textarea ref={message} cols="30" rows="10" placeholder="Laba diena..."></textarea>
          <p className="inputFieldHeader">Kada su jumis susisiekti?</p>
          <input ref={contactTime} type="text" placeholder="Pvz. : Skambinkite nuo 17:00 iki 22:00" />

          <br />
          <button className="button sendMessageButton" onClick={sendEmail}>
            Siųsti
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontaktai;
