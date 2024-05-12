import "./Kontaktai.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import pagrindinis from "../Images/pagrinidispastatas.jpg";
import portait from "../Images/portrait.jpg";
import { useRef } from "react";
import phoneIcon from '../Images/UI/phone-full-grey.png'
import SlideInNotifications from "../SlideInNotifications/SlideInNotifications";

function Kontaktai() {
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();
  const contactTime = useRef();

  const sendEmail = async () => {
    // Checking for empty or undefined values
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
    name.current.value = "";
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
  };

  return (
    <div>
      <NavBar />
      <div className="contactsHeaderContainer">
        <img
          className="contactsHeaderBackgroundImage"
          src={pagrindinis}
          alt=""
        />
        <div className="contactsHeader">
          <h1>Kontaktai</h1>
        </div>
      </div>

      <div className="contactPageContainer">
        <div className="contactPageForm">
          <p
            style={{
              fontSize: "2rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Parašyk mums laišką!
          </p>
          <p
            style={{
              fontSize: "1.3rem",
              opacity: "90%",
              margin: "1rem 0 0.5rem",
            }}
          >
            Kuo jūs vardu?
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                ref={name}
                type="text"
                name=""
                id=""
                placeholder="Vardas"
              />
              <a
                style={{
                  fontSize: "0.9rem",
                  opacity: "80%",
                }}
              >
                Vardas
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "15px",
              }}
            >
              <input
                ref={surname}
                type="text"
                name=""
                id=""
                placeholder="Pavardė"
              />
              <a
                style={{
                  fontSize: "0.9rem",
                  opacity: "90%",
                }}
              >
                Pavardė
              </a>
            </div>
          </div>

          <p style={{ fontSize: "1.3rem", margin: "1.3rem 0 0.5rem" }}>
            Elektroninis paštas
          </p>
          <input
            ref={email}
            type="text"
            placeholder="El. paštas"
            style={{ width: "100%" }}
          />
          <p style={{ fontSize: "1.3rem", margin: "1.3rem 0 0.5rem" }}>
            Telefono numeris
          </p>
          <input
            ref={phoneNumber}
            type="text"
            placeholder="Tel. Nr."
            style={{ width: "100%" }}
          />
          <p style={{ fontSize: "1.3rem", margin: "1.3rem 0 0.5rem" }}>
            Jūsų žinutė
          </p>
          <textarea
            ref={message}
            cols="30"
            rows="10"
            placeholder="Laba diena..."
            style={{ width: "100%", height: "4rem" }}
          ></textarea>
          <p style={{ fontSize: "1.3rem", margin: "1.3rem 0 0.5rem" }}>
            Kada su jumis susisiekti?
          </p>
          <input
            ref={contactTime}
            type="text"
            style={{ width: "100%" }}
            placeholder="Pvz. : Skambinkite nuo 17:00 iki 22:00"
          />
          <br />
          <button className="sendMessageButton button" onClick={sendEmail}>
            Siųsti
          </button>
        </div>
        <div
          className="contactPageContacts"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "1.7rem",
                color: "black",
              }}
            >
              Direktorius
            </p>
            <p style={{margin: "0.25rem 0 0.25rem", opacity: "60%"}}>Vilius Valintėlis</p>
            <p>Tel. Nr.: +370 659 48600</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "1.7rem",
                color: "black",
              }}
            >
              Administratorė
            </p>
            <p>Tel. Nr.: +370 659 48600</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontaktai;
