import { useRef, useEffect } from "react";
import Ashik from "../images/ashik.jpg";
import Verified from "../images/Verified Freelancer.png";
import { Link } from "react-router-dom";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/LinkedIn.png";
import GitHub from "../images/GitHub.png";
import Dribbble from "../images/Dribbble.png";
import Arrow from "../images/Arrow 1.svg";

function Hero() {
  const VerifiedImg = useRef(null);

  function scrollRotate() {
    VerifiedImg.current.style.transform =
      "rotate(" + window.pageYOffset / 6 + "deg)";
  }

  useEffect(() => {
    window.onscroll = () => {
      scrollRotate();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="wrap hero-wrap">
        <div className="hero-info-section">
          <h3 className="hero-info-title">
            HELLO THERE, MY NAME IS <span>ASHIK</span>, CALL SIGN <span>ASHI</span>
          </h3>
          {/* <h1 className="hero-info-heading">
            I’am a freelance web developer <span> innovating professional</span>{" "}
            websites that convert visitors into <span>valuable customers</span>{" "}
          </h1> */}
          <h1 className="hero-info-heading">
            Full Stack Software Engineer with Proven Track Record in{" "}
            <span>Fintech Startup</span>
          </h1>
          <div className="hero-social-icons">
            <a
              href="https://www.linkedin.com/in/ashiksnair/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              content="LinkedIn"
            >
              <img src={LinkedIn} alt="" className="hero-social-icon-img" />
            </a>
            <a
              href="https://github.com/ASHIK-S-NAIR"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              content="GitHub"
            >
              <img src={GitHub} alt="" className="hero-social-icon-img" />
            </a>
            <Link to="/contact" className="hero-social-icon" content="Email">
              <img src={Mail} alt="" className="hero-social-icon-img" />
            </Link>
            {/* <a
              href="https://dribbble.com/Ashik_S_Nair"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
              content="Dribbble"
            >
              <img src={Dribbble} alt="" className="hero-social-icon-img" />
            </a> */}
          </div>
          <div className="hero-info-btns">
            <a href="/#projects-id" className="hero-info-a">
              <button className="hero-info-btn cta-interative cta-SMPP">
                <p>SEE MY PAST PROJECTS</p>
                <img src={Arrow} alt="" />
              </button>
            </a>
            <a
              href="https://docs.google.com/document/d/1ZW_YyCGSm_GJe_5oo-zDzKZE7LYqX0QNkFaak09pt_s/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-info-a"
            >
              <button className="hero-info-btn cta-interative cta-RESUME">
                <p>MY RESUME</p>
                <img src={Arrow} alt="" />
              </button>
            </a>
          </div>
        </div>
        <div className="hero-img-section">
          <img src={Ashik} alt="" className="hero-img" />
          {/* <img
            src={Verified}
            alt=""
            ref={VerifiedImg}
            className="hero-img-section-verified"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
