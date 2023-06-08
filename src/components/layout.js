import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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

function Testimonial(props) {
  return (
    <div className="testimonial">
      <div className="image-section">
        <div className="outer-div">
          <a href={props.href} target="_blank" rel="noreferrer">
            {/* Pass Static Image in as child because we can't pass src through props for static image */}
            {props.children}
          </a>
        </div>
      </div>
      <div className={props.isGreen ? "testimonial-text-green-bg" : "testimonial-text-original-bg"}>
        <h3 className={props.isGreen ? "donor-testimonials-name-green" : "donor-testimonials-name-original"}>{props.name}</h3>
        <p className="pl-5">{props.testimonial}</p>
      </div>
    </div>
  );
}

function MiniInfoSnipCell(props) {
  return (
    <div className="col-6 col-md-3 px-4">
      <div className="row justify-content-center">{props.children}</div>
      <div className="row justify-content-center mt-4">
        <h3>{props.title}</h3>
      </div>
      <div className="row justify-content-center pb-5">{props.text}</div>
    </div>
  );
}

export default function Layout({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("donor");
  const [regCount, setRegCount] = useState(0);

  const handleClose = () => {
    setShowModal(false);
    updateRegistrants();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    phone: "",
    policy: false,
  });

  const handlePost = (formData, event) => {

    reset();

    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        setShowModal(true);
        setModalName(formData.name);

        // Only deploys on production, dev testing will fail
        if (window.gtag) {

          window.gtag("event", "conversion", {
            registrant_sign_up: formData.email,
          });

          window.gtag('event', 'conversion', { 'send_to': 'AW-935395305/pdnjCMvB1McCEOn_g74D' })
        }

      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  // On initial render (componentDidMount) - Fetch registrant data
  useEffect(updateRegistrants, []);

  function updateRegistrants() {
    fetch(`/.netlify/functions/get-registrant-count`)
      .then((res) => res.text())
      .then((text) => {
        setRegCount(JSON.parse(text).data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        <div className="header bg-bmdp">
          <div className="wrapper">
            <a
              href="https://bmdp.org/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/BMDP logo (white).png"
                width={90}
                height={90}
                className="d-inline-block align-top"
                alt="BMDP Logo"
              />
            </a>
            <Button
              className="register-button px-5"
              variant="light"
              onClick={() => {
                document.getElementById("inputName").focus();
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
        <div className="sec-banner">
          <div className="hero-carousel w-100 desktop">
            <div className="splash-container">
              <div className="static-image-wrapper">
                <StaticImage
                  className="d-block w-100"
                  src="../images/BMDP-Phase3_LandingPageSplash.png"
                  alt="Landing Splash Image"
                />
              </div>
            </div>
          </div>

          <div className="hero-carousel mobile w-100">
            <div className="splash-container">
              <div className="static-image-wrapper">
                <StaticImage
                  className="d-block w-100"
                  src="../images/BMDP-Phase3_LandingPageSplash.png"
                  alt="Landing Splash Image"
                />
              </div>
            </div>
          </div>
          <div className="sec-registration mobile">
            <div className="join-the-register">
              <span className="px-3">Join the register.</span>
              <br />
              <span className="px-3">Help us find a donor</span>
              <br />
              <span className="px-3">for every patient.</span>
            </div>
          </div>
          <div className="sec-registration form-container">
            <div className="join-the-register desktop">
              <span className="px-3">Join the register.</span>
              <br />
              <span className="px-3">Help us find a donor</span>
              <br />
              <span className="px-3">for every patient.</span>
            </div>
            <div className="registration-form">
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
                  maxLength="50"
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
                  maxLength="254"
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
                  maxLength="18"
                  {...register("phone", {
                    required: true,
                    pattern: /^((\+\d{1,3})\s)?\d{7,14}$/,
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
                  By proceeding, you agree to &nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bmdp.org/privacy-policy"
                  >
                    BMDP's Personal Data Protection Policy Statement
                  </a>
                  &nbsp; and give consent to BMDP to use your personal data for
                  the purpose of providing you with the relevant communication
                  materials.
                  <br />
                  <input
                    type="checkbox"
                    name="policy"
                    {...register("policy", { required: true })}
                  />
                  &nbsp; I agree &nbsp;
                  {errors.policy && errors.policy.type === "required" && (
                    <span htmlFor="policy" className="error">
                      You must agree with our privacy policy to proceed.
                    </span>
                  )}
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

        <div className="donor-testimonials">
          <h1 className="text-center pb-4 bmdp-orange">Testimonials</h1>
          <Carousel indicators={false} interval={null}>
            <Carousel.Item>
              <Testimonial
                name={"Ananth, Donor"}
                testimonial={`“We are not just saving a life. We are helping a whole family. Not everybody gets this kind of opportunity. I am glad I got this opportunity to make a difference in someone's life.”`}
              >
                <StaticImage
                  alt="Ananth"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/1_Ananth.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Sophia Tan, Patient"}
                testimonial={`“As I told my donor, the second lease of life that she has given to me, has allowed me to continue to do good and add value to my loved ones and friends. Her single decision to say “Yes!” continues to reverberate in many, many lives around me. Something that I truly am grateful for.”`}
                isGreen={true}
              >
                <StaticImage
                  alt="Sophia Tan"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/2_Sophia.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Er Qi Yang, Donor"}
                testimonial={`“I felt really happy for the patient and grateful that I had the opportunity to save a life.”`}
              >
                <StaticImage
                  alt="Er Qi Yang"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/3_ErQiYang.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Miranti Adriani, Patient"}
                testimonial={`“I would say that battling cancer is like running a marathon. The journey will take quite some time, but do not give up.  You will reach the finish line. Words cannot describe how thankful I am for what my donor has done to save my life.”`}
                isGreen={true}
              >
                <StaticImage
                  alt="Miranti Adriani"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/4_Miranti.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Muhammad Asyraf, Donor"}
                href={"https://www.youtube.com/watch?v=6RbaPEEKRvg"}
                testimonial={`“Educate & understand why and who you’re helping so you will
                remain committed in your journey after you sign up. I was
                happy that I’m able to help someone and I would do it again
                without second thoughts.”`}
              >
                <StaticImage
                  alt="Muhammad Asyraf"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/donor_Asyraf.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Ian Lim, Patient"}
                testimonial={`“I’m a very grateful individual who has been blessed with a second chance in life.  No one wants leukaemia – but a tremendous amount of good has come from the experience of beating it. Now more than ever, I am an individual dedicated to becoming a better human being, husband, son, brother, friend and business leader.”`}
                isGreen={true}
              >
                <StaticImage
                  alt="Ian Lim"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/6_Ian.png"
                />
              </Testimonial>
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial
                name={"Evangeline Koh, Donor"}
                testimonial={`“You never know how small an action of yours could mean the world to another. Like the saying goes, 'one man's trash is another man's treasure'.”`}
              >
                <StaticImage
                  alt="Evangeline Koh"
                  className="donor-avatar p-2 img-fluid"
                  src="../images/7_Evangeline.png"
                />
              </Testimonial>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="sec-info bg-bmdp-2 d-flex flex-column align-items-center">
          <div className="sec-counter pt-2 pb-4">
            <div className="registrant-counter">
              {regCount > 0 ? (
                formatNumber(regCount)
              ) : (
                <div>
                  <span className="one">.</span>
                  <span className="two">.</span>
                  <span className="three">.</span>
                </div>
              )}
            </div>
            <div>
              Registrants in Singapore and counting. However, 50 patients are still waiting for a match every month. Join the cause and make the community stronger. Give hope to patients in need
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
            <div className="row">
              <MiniInfoSnipCell
                title={"Verify"}
                text={`Once you’re identified as a match, we will collect a small
                  blood sample from you to ensure you are the right fit.`}
              >
                <StaticImage
                  alt="Verify Icon"
                  className="img-fluid"
                  src="../images/icon_touch.png"
                />
              </MiniInfoSnipCell>
              <MiniInfoSnipCell
                title={"Workup"}
                text={`We will introduce you to your doctor who will conduct a
                  thorough check-up to ensure that you are fit to donate.`}
              >
                <StaticImage
                  alt="Workup Icon"
                  className="img-fluid"
                  src="../images/icon_workup.png"
                />
              </MiniInfoSnipCell>
              <MiniInfoSnipCell
                title={"Donate"}
                text={`You may opt for the Peripheral Blood Stem Cell or Bone Marrow
                  Collection. The donation method may also depend on the
                  patient’s needs.`}
              >
                <StaticImage
                  alt="Donate Icon"
                  className="img-fluid"
                  src="../images/icon_give.png"
                />
              </MiniInfoSnipCell>
              <MiniInfoSnipCell
                title={"Recover"}
                text={`Depending on the donation method, you may experience
                  short-term side effects. Your stem cells/bone marrow will
                  regenerate within 6 weeks.`}
              >
                <StaticImage
                  alt="Recover Icon"
                  className="img-fluid"
                  src="../images/icon_recover.png"
                />
              </MiniInfoSnipCell>
            </div>
          </div>
        </div>
        <div class="pt-5 pb-5 bg-banner">
          <div className="video-container">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/TF5Tn_2mllk "
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="footer">
          {/* <div className="footer-logo">
            <StaticImage
              alt="BMDP Logo"
              src="../images/BMDP logo (pantone) 1.png"
            />
          </div> */}
          <div className="footer-text">
            <p>
              8 Sinaran Drive, #03-02 Novena Specialist Center, Singapore 307470
            </p>
            <p className="contact-details">
              <TelephoneFill color="#f58326" /> (65) 6916 0370{" "}
              <span className="mx-2"></span> <EnvelopeFill color="#f58326" />{" "}
              admin@bmdp.org
            </p>
            <p className="copyright rp">
              Copyright © 2021 The Bone Marrow Donor Programme. All rights
              reserved. Web design by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.regal-pines.com/"
              >
                Regal Pines
              </a>
              .
            </p>
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <StaticImage src="../images/image 3.png" alt="Modal Header Hearts" />
        </Modal.Header>
        <Modal.Body>
          <div className="p-5 modal-thanks">
            <h1>
              Thank you, <span className="orange">{modalName}</span>
            </h1>
            <p>
              You’ve done the right thing. Not many have taken this step and we
              hope that your actions today will inspire others to follow. In a
              few days, our donor care representatives will be in touch with you
              via email.
            </p>
            <h2 className="orange">We need more help. Share the cause!</h2>
            <div className="d-flex flex-row justify-content-center">
              <div className="social m-3">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://donor.bmdp.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage src="../images/icon_FB.png" alt="Facebook" />
                </a>
              </div>
              <div className="social m-3">
                <a
                  href="https://www.instagram.com/bmdpsg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../images/icon_IG.png"
                    alt="Instagram"
                    href=""
                  />
                </a>
              </div>
              <div className="social m-3">
                <a
                  href="https://twitter.com/intent/tweet?url=https://donor.bmdp.org/&text=I've%20just%20registered%20as%20a%20marrow%20donor!%20You%20too%20can%20join%20the%20cause%20and%20together%20we%20can%20save%20lives."
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage src="../images/icon_twitter.png" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
