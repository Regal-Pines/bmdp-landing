import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "./layout.css";
import logo from "../images/BMDP logo (white).png";
import logo_orange from "../images/BMDP logo (pantone) 1.png";
import splash1 from "../images/Bsplash_1.png";
import splash2 from "../images/Bsplash_2.png";
import splash3 from "../images/Bsplash_3.png";
import splash4 from "../images/Bsplash_4.png";
import recover_icon from "../images/icon_recover.png";
import give_icon from "../images/icon_give.png";
import touch_icon from "../images/icon_touch.png";
import workup_icon from "../images/icon_workup.png";
import donor_tamil from "../images/donor_TamilS.png";
import donor_marieanne from "../images/donor_marieanne.png";
import donor_KelvinL from "../images/donor_KelvinL.png";
import donor_Asyraf from "../images/donor_Asyraf.png";
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

export default function Layout({ children }) {
  return (
    <div class="outer-div">
      <Container fluid>
        <Navbar bg="bmdp">
          <div class="d-flex flex-row w-100 justify-content-between px-5 align-items-center">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Button className="register-button px-5" variant="light">
              Register
            </Button>
          </div>
        </Navbar>

        <div>
          <div class="hero-carousel w-100">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={splash1}
                  alt="First slide"
                />
                <div class="splash aisha">
                  <span class="pl-3">Aisha, 24. Undergraduate.</span>
                  <br />
                  <span class="pl-3">A marrow donor.</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={splash2}
                  alt="Second slide"
                />
                <div class="splash twoguy">
                  <span class="px-3">Splash 2 Guy.</span>
                  <br />
                  <span class="px-3">A marrow donor.</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={splash3}
                  alt="Third slide"
                />
                <div class="splash threeguy">
                  <span class="px-3">Splash 3 Guy.</span>
                  <br />
                  <span class="px-3">A marrow donor.</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={splash4}
                  alt="Fourth slide"
                />
                <div class="splash fourguy">
                  <span class="px-3">Splash 4 Guy.</span>
                  <br />
                  <span class="px-3">A marrow donor.</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div class="join-the-register">
              <span class="px-3">Join the register.</span><br />
              <span class="px-3">Help us find a donor</span><br />
              <span class="px-3">for every patient.</span>
          </div>
        </div>
        <div class="sec-info bg-bmdp-2 py-5 d-flex flex-column align-items-center">
          <div class="sec-counter pt-2 pb-4">
            <div class="registrant-counter">112,300</div>
            <div>
              Registrants (in Singapore) and counting. Join the cause and make
              the community stronger, because ultimately, you too may benefit
              from a larger marrow donor pool.
            </div>
          </div>
          <div class="sec-info-text py-5">
            <h1>What Happens When I'm Selected?</h1>
            <p>
              The odds of you being called upon to be a donor in your lifetime
              are very slim, but when the opportunity does come knocking, you
              are often the very last line of hope for survival. Blood diseases
              can affect anyone. Our aim is to be able to match every patient
              with a donor as soon as they require one.
            </p>
          </div>
          <div class="container sec-info-cards">
            <div class="row px-5">
              <div class="col-3 px-5">
                <div class="row justify-content-center">
                  <img className="" src={touch_icon} />
                </div>
                <div class="row justify-content-center mt-2">
                  <h3>Verify</h3>
                </div>
                <div class="row justify-content-center">
                  Once you’re identified as a match, we will collect a small
                  blood sample from you to ensure you are the right fit.
                </div>
              </div>
              <div class="col-3 px-5">
                <div class="row justify-content-center">
                  <img className="" src={workup_icon} />
                </div>
                <div class="row justify-content-center mt-2">
                  <h3>Workup</h3>
                </div>
                <div class="row justify-content-center">
                  We will introduce you to your doctor who will conduct a
                  thorough check-up to ensure that you are fit to donate.
                </div>
              </div>
              <div class="col-3 px-5">
                <div class="row justify-content-center">
                  <img className="" src={give_icon} />
                </div>
                <div class="row justify-content-center mt-2">
                  <h3>Donate</h3>
                </div>
                <div class="row justify-content-center">
                  You may opt for the Peripheral Blood Stem Cell or Bone Marrow
                  Collection. The method of collection may depend on the
                  patient’s needs.
                </div>
              </div>
              <div class="col-3 px-5">
                <div class="row justify-content-center">
                  <img className="" src={recover_icon} />
                </div>
                <div class="row justify-content-center mt-2">
                  <h3>Recover</h3>
                </div>
                <div class="row justify-content-center">
                  You may experience side effects commonly associated with the
                  flu. Your stem cells/bone marrow will regenerate inside 6
                  weeks.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video-container">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/S0L5D_eVnk4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="donor-testimonials py-5">
          <h1 class="text-center pb-4 bmdp-orange">Donor Testimonials</h1>
          <Carousel>
            <Carousel.Item>
              <div class="d-flex flex-row justify-content-center">
                <div class=" d-flex flex-column justify-content-end align-items-end w-25">
                  <div class="outer-div">
                    <img class="donor-avatar p-2" src={donor_tamil}></img>
                  </div>
                </div>
                <div class="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 class="pl-5 pt-4">Tamil Selvi</h3>
                  <p class="pl-5">
                    “The donation experience through the PBSV method was
                    worthwhile. It even motivated me to create more awareness
                    within the community to help improve the chances of other
                    patients in finding a donor match.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="d-flex flex-row justify-content-center">
                <div class=" d-flex flex-column justify-content-end align-items-end w-25">
                  <div class="outer-div">
                    <img class="donor-avatar p-2" src={donor_marieanne}></img>
                  </div>
                </div>
                <div class="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 class="pl-5 pt-4">Marieanne</h3>
                  <p class="pl-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla aliquet ornare dignissim. Duis ac fringilla dolor.
                    Vivamus vestibulum urna fringilla egestas convallis.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="d-flex flex-row justify-content-center">
                <div class=" d-flex flex-column justify-content-end align-items-end w-25">
                  <div class="outer-div">
                    <img class="donor-avatar p-2" src={donor_KelvinL}></img>
                  </div>
                </div>
                <div class="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 class="pl-5 pt-4">Kelvin</h3>
                  <p class="pl-5">
                    “Sed sit amet dolor ut sapien consequat imperdiet in vitae
                    ex. Cras dignissim lorem orci, eget interdum odio mattis
                    non. Sed faucibus cursus nisl, sit amet ultrices dui
                    fermentum vel.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="d-flex flex-row justify-content-center">
                <div class=" d-flex flex-column justify-content-end align-items-end w-25">
                  <div class="outer-div">
                    <img class="donor-avatar p-2" src={donor_Asyraf}></img>
                  </div>
                </div>
                <div class="testimonial-text d-flex flex-column justify-content-left w-50">
                  <h3 class="pl-5 pt-4">Asyraf</h3>
                  <p class="pl-5">
                    “Donec ligula erat, vehicula vel turpis ac, congue faucibus
                    nulla. Suspendisse at enim id lorem porta iaculis. Nunc
                    lorem magna, porttitor at eleifend vel, feugiat eget quam.”
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div class="footer p-4 d-flex flex-row justify-content-between">
          <div class="ml-5">
            <img src={logo_orange}></img>
          </div>
          <div class="mr-5 text-right">
            <p>
              8 Sinaran Drive, #03-02 Novena Specialist Center, Singapore 307470
            </p>
            <p class="contact-details">
              <TelephoneFill color="#f58326" /> (65) 6916 0370{" "}
              <span class="mx-2"></span> <EnvelopeFill color="#f58326" />{" "}
              admin@bmdp.org
            </p>
            <p class="copyright">
              Copyright © 2021 The Bone Marrow Donor Programme. All rights
              reserved. Web design by Regal Pines.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
