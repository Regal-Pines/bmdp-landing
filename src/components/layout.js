import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import fetch from "node-fetch";

import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

import { StaticImage } from "gatsby-plugin-image";

// Styles
import "../styles/layout.css";

// Images
// import logo from "../images/BMDP logo (white).png";
// import logo_orange from "../images/BMDP logo (pantone) 1.png";
// import splash1 from "../images/Bsplash_1.png";
// import splash2 from "../images/Bsplash_2.png";
// import splash3 from "../images/Bsplash_3.png";
// import splash4 from "../images/Bsplash_4.png";
// import recover_icon from "../images/icon_recover.png";
// import give_icon from "../images/icon_give.png";
// import touch_icon from "../images/icon_touch.png";
// import workup_icon from "../images/icon_workup.png";
// import donor_tamil from "../images/donor_TamilS.png";
// import donor_marieanne from "../images/donor_marieanne.png";
// import donor_KelvinL from "../images/donor_KelvinL.png";
// import donor_Asyraf from "../images/donor_Asyraf.png";

export default function Layout({ data }) {

  const initialRegCount = data.sanitySiteSettings.registrantCount;

  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("donor");
  const [regCount, setRegCount] = useState( initialRegCount );

  const handleClose = () => {
    setShowModal(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        setShowModal(true);
        setModalName(formData.name);

        console.log("Here's the new count test: ", response);

        reset();
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  fetch(`/.netlify/functions/get-registrant-count`)
    .then((res) => res.text())
    .then((text) => {
      setRegCount( initialRegCount + JSON.parse(text).data )
    })
    .catch((error) => {
      console.log(error);
    });

  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="outer-div" id="register">
      <Container fluid>
        <Navbar bg="bmdp" sticky="top">
          <div className="d-flex flex-row w-100 justify-content-between px-5 align-items-center">
            <Navbar.Brand>
              <StaticImage
                src="../images/BMDP logo (white).png"
                width={90}
                height={90}
                className="d-inline-block align-top"
                alt="BMDP Logo"
              />
            </Navbar.Brand>
            <Button
              className="register-button px-5"
              variant="light"
              href="javascript:document.getElementById('inputName').focus()"
            >
              Register
            </Button>
          </div>
        </Navbar>

        <div className="sec-banner">
          <div className="hero-carousel w-100">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <div className="splash-container">
                  <div className="static-image-wrapper">
                    <StaticImage
                      className="d-block w-100"
                      src="../images/Bsplash_1.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="splash-text-container">
                    <div className="splash aisha">
                      <span className="pl-3">Aisha, 24. Undergraduate.</span>
                      <br />
                      <span className="pl-3">A marrow donor.</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="splash-container">
                  <div className="static-image-wrapper">
                    <StaticImage
                      className="d-block w-100"
                      src="../images/Bsplash_2.png"
                      alt="Second slide"
                    />
                  </div>
                  <div className="splash-text-container">
                    <div className="splash vignesh">
                      <span className="px-3">Vignesh, 33. Sales Manager.</span>
                      <br />
                      <span className="px-3">A marrow donor.</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="splash-container">
                  <div className="static-image-wrapper">
                    <StaticImage
                      className="d-block w-100"
                      src="../images/Bsplash_3.png"
                      alt="Third slide"
                    />
                  </div>
                  <div className="splash-text-container">
                    <div className="splash joshua">
                      <span className="px-3">Joshua, 38. Senior Engineer.</span>
                      <br />
                      <span className="px-3">A marrow donor.</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="splash-container">
                  <div className="static-image-wrapper">
                    <StaticImage
                      className="d-block w-100"
                      src="../images/Bsplash_4.png"
                      alt="Fourth slide"
                    />
                  </div>
                  <div className="splash-text-container">
                    <div className="splash fourguy">
                      <span className="px-3">Girl on a train.</span>
                      <br />
                      <span className="px-3">A marrow donor.</span>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="sec-registration">
            <div className="join-the-register">
              <span className="px-3">Join the register.</span>
              <br />
              <span className="px-3">Help us find a donor</span>
              <br />
              <span className="px-3">for every patient.</span>
            </div>
            <div className="registration-form d-flex flex-column">
              <h1>Choose to save a life.</h1>
              <form
                onSubmit={handleSubmit(handlePost)}
                className="d-flex flex-column"
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="got-ya"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <input
                  type="hidden"
                  name="formId"
                  value="contact-form"
                  {...register("formId")}
                />

                <input
                  id="inputName"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  minLength="3"
                ></input>
                {errors.name && errors.name.type === "required" && (
                  <span htmlFor="name" className="error">
                    Name is required
                  </span>
                )}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                ></input>
                {errors.email && errors.email.type === "required" && (
                  <span htmlFor="email" className="error">
                    Email is required
                  </span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span htmlFor="email" className="error">
                    Invalid email format.
                  </span>
                )}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: true,
                    pattern: /^((\+\d{1,3})\s)?\d{6,14}$/,
                  })}
                ></input>
                {errors.phone && errors.phone.type === "required" && (
                  <span htmlFor="phone" className="error">
                    Phone is required.
                  </span>
                )}
                {errors.phone && errors.phone.type === "pattern" && (
                  <span htmlFor="phone" className="error">
                    Invalid phone number. (Valid example: 87654321 or +65
                    99887766)
                  </span>
                )}
                <button className="submit-button"> Submit</button>
                <p>
                  Your details will remain private and confidential. We conduct
                  rigourous screening to make sure that those who qualify meet
                  our health and safety standards. If selected, you will be
                  required to perform a cheek swab before you are officially
                  admitted to the register!
                </p>
                <label
                  htmlFor="got-ya"
                  style={{
                    position: "absolute",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                  }}
                >
                  Don’t fill this out if you're human:
                  <input tabIndex="-1" name="got-ya" {...register("got-ya")} />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="sec-info bg-bmdp-2 py-5 d-flex flex-column align-items-center">
          <div className="sec-counter pt-2 pb-4">
            {/* <div className="registrant-counter">{ formatNumber( data.sanitySiteSettings.registrantCount + data.allSanityRegistrant.totalCount )  }</div> */}
            <div className="registrant-counter">{ formatNumber( regCount )}</div>
            <div>
              Registrants in Singapore and counting. Join the cause and make the
              community stronger. Give hope to patients in need.
            </div>
          </div>
          <div className="sec-info-text py-5">
            <h1>What Happens When I'm Selected?</h1>
            <p>
              The odds of you being called upon to be a donor in your lifetime
              are very slim, but when the opportunity does come knocking, you
              are often the very last line of hope for survival. Blood diseases
              can affect anyone. Our aim is to be able to match every patient
              with a donor as soon as they require one.
            </p>
          </div>
          <div className="container sec-info-cards">
            <div className="row px-5">
              <div className="col-6 col-md-3 px-5">
                <div className="row justify-content-center">
                  <StaticImage
                    alt="Verify Icon"
                    className="img-fluid"
                    src="../images/icon_touch.png"
                  />
                </div>
                <div className="row justify-content-center mt-2">
                  <h3>Verify</h3>
                </div>
                <div className="row justify-content-center">
                  Once you’re identified as a match, we will collect a small
                  blood sample from you to ensure you are the right fit.
                </div>
              </div>
              <div className="col-6 col-md-3 px-5">
                <div className="row justify-content-center">
                  <StaticImage
                    alt="Workup Icon"
                    className="img-fluid"
                    src="../images/icon_workup.png"
                  />
                </div>
                <div className="row justify-content-center mt-2">
                  <h3>Workup</h3>
                </div>
                <div className="row justify-content-center">
                  We will introduce you to your doctor who will conduct a
                  thorough check-up to ensure that you are fit to donate.
                </div>
              </div>
              <div className="col-6 col-md-3 px-5">
                <div className="row justify-content-center">
                  <StaticImage
                    alt="Donate Icon"
                    className="img-fluid"
                    src="../images/icon_give.png"
                  />
                </div>
                <div className="row justify-content-center mt-2">
                  <h3>Donate</h3>
                </div>
                <div className="row justify-content-center">
                  You may opt for the Peripheral Blood Stem Cell or Bone Marrow
                  Collection. The donation method may also depend on the
                  patient’s needs.
                </div>
              </div>
              <div className="col-6 col-md-3 px-5">
                <div className="row justify-content-center">
                  <StaticImage
                    alt="Recover Icon"
                    className="img-fluid"
                    src="../images/icon_recover.png"
                  />
                </div>
                <div className="row justify-content-center mt-2">
                  <h3>Recover</h3>
                </div>
                <div className="row justify-content-center">
                  Depending on the donation method, you may experience
                  short-term side effects. Your stem cells/bone marrow will
                  regenerate within 6 weeks.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/S0L5D_eVnk4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="donor-testimonials py-5">
          <h1 className="text-center pb-4 bmdp-orange">Donor Testimonials</h1>
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="d-flex flex-row justify-content-center">
                <div className=" d-flex flex-column justify-content-start align-items-end w-25">
                  <div className="outer-div">
                    <a
                      href="https://bmdp.org/testimonials"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        alt="Tamil Selvi"
                        className="donor-avatar p-2 img-fluid"
                        src="../images/donor_TamilS.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 className="pl-5 pt-4">Tamil Selvi</h3>
                  <p className="pl-5">
                    “The donation experience through the PBSC method was
                    worthwhile. It even motivated me to create more awareness
                    within the community to help improve the chances of other
                    patients in finding a donor match.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row justify-content-center">
                <div className=" d-flex flex-column justify-content-start align-items-end w-25">
                  <div className="outer-div">
                    <a
                      href="https://www.youtube.com/watch?v=zHv24sJ-Emw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        alt="Marie Ann Wong"
                        className="donor-avatar p-2 img-fluid"
                        src="../images/donor_marieanne.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 className="pl-5 pt-4">Marie Ann Wong</h3>
                  <p className="pl-5">
                    “I would urge everyone to put their fears aside and be
                    confident as donating bone marrow is a safe and easy
                    procedure with no long-term side effects. A simple cheek
                    swab can help increase the odds of giving someone out there
                    in need with a second chance at life.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row justify-content-center">
                <div className=" d-flex flex-column justify-content-start align-items-end w-25">
                  <div className="outer-div">
                    <a
                      href="https://www.youtube.com/watch?v=aX5j0QVHqB4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        alt="Kelvin Lin"
                        className="donor-avatar p-2 img-fluid"
                        src="../images/donor_KelvinL.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 className="pl-5 pt-4">Kelvin Lin</h3>
                  <p className="pl-5">
                    “I went through the PBSC method and the process is safe.
                    Being a father now makes me feel that the whole donation was
                    more meaningful. My biggest reward is having the opportunity
                    to save someone’s life.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row justify-content-center">
                <div className=" d-flex flex-column justify-content-start align-items-end w-25">
                  <div className="outer-div">
                    <a
                      href="https://www.youtube.com/watch?v=6RbaPEEKRvg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage
                        alt="Muhammad Asyraf"
                        className="donor-avatar p-2 img-fluid"
                        src="../images/donor_Asyraf.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 className="pl-5 pt-4">Muhammad Asyraf</h3>
                  <p className="pl-5">
                    “Educate & understand why and who you’re helping so you will
                    remain committed in your journey after you sign up. I was
                    happy that I’m able to help someone and I would do it again
                    without second thoughts.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="footer p-4 d-flex flex-row justify-content-between align-items-end">
          <div className="ml-5">
            <StaticImage
              alt="BMDP Logo"
              src="../images/BMDP logo (pantone) 1.png"
            />
          </div>
          <div className="mr-5 text-right">
            <p>
              8 Sinaran Drive, #03-02 Novena Specialist Center, Singapore 307470
            </p>
            <p className="contact-details">
              <TelephoneFill color="#f58326" /> (65) 6916 0370{" "}
              <span className="mx-2"></span> <EnvelopeFill color="#f58326" />{" "}
              admin@bmdp.org
            </p>
            <p className="copyright">
              Copyright © 2021 The Bone Marrow Donor Programme. All rights
              reserved. Web design by Regal Pines.
            </p>
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <StaticImage
            src="../images/icon_hearttree 1.png"
            alt="Modal Header Hearts"
          />
        </Modal.Header>
        <Modal.Body>
          <h1>
            Thank you, <span className="orange">{modalName}</span>
          </h1>
          <p>
            You’ve done the right thing. Not many have taken this step and we
            hope that your actions today will inspire others to follow. In a few
            days, our donor care representatives will be in touch with you via
            email.
          </p>
          <h2 className="orange">We need more help. Share the cause!</h2>
          <div className="d-flex flex-row justify-content-between">
            <StaticImage src="../images/icon_FB.png" alt="Facebook"/>
            <StaticImage src="../images/icon_IG.png" alt="Facebook"/>
            <StaticImage src="../images/icon_twitter.png" alt="Facebook"/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
