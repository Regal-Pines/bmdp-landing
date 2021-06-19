import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/success.css";
import Modal from "react-bootstrap/Modal";
import { StaticImage } from "gatsby-plugin-image";

export default function Success({ user }) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton={true}>
        <StaticImage
          src="../images/icon_hearttree 1.png"
          alt="Modal Header Hearts"
        />
      </Modal.Header>
      <Modal.Body>
        <h1>
          Thank you, <span className="orange">{user}</span>
        </h1>
        <p>
          You’ve done the right thing. Not many have taken this step and we hope
          that your actions today will inspire others to follow. In a few days,
          our donor care representatives will be in touch with you via email.
        </p>
        <h2 className="orange">We need more help. Share the cause!</h2>
      </Modal.Body>
    </Modal.Dialog>
  );
}
