import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { illustration, contactInfo } from "../../config/strings";
import { Fade } from "react-awesome-reveal";
import email from "../../assets/lottie/email.json";
import DisplayLottie from "../../components/DisplayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

const Contact: React.FC = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="down" duration={1000}>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default Contact;
