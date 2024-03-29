import AboutAshik from "../images/ashikAbout.jpg";
import Website from "../images/Website.png";
import Laptop from "../images/Laptop.png";
import Airplane from "../images/Airplane Mode On.png";
import Launch from "../images/Launch.png";
import Cycling from "../images/Cycling Mountain Bike.png";

function About() {
  return (
    <section id="about-id" className="about-section">
      <div className="wrap about-wrap">
        <div className="about-img-section">
          <img src={AboutAshik} alt="" className="about-img" />
        </div>
        <div className="about-details-section">
          <h3 className="about-details-title">ABOUT ME</h3>
          <h1 className="about-details-heading">Hey, I am Ashik </h1>
          {/* <h3 className="about-details-subheading">
            Freelance Web Developer from India
          </h3> */}
          <h3 className="about-details-subheading">
            Full Stack Software Engineer from India
          </h3>
          <p className="about-details-p">
            {/* <span>
              I help businesses, startups, and individuals set up their own
              space inside the <img src={Website} alt="" /> World Wide Web. I
              design and develop engaging professional websites that increase
              the credibility of my clients.
            </span> */}
            <span>
              I am a Full Stack developer <img src={Website} alt="" /> with proficiency in both frontend and
              backend technologies. I started by building basic frontend
              projects and then turned to backend. I love exploring new
              technologies and understanding how they work.
            </span>
          </p>
          <p className="about-details-p">
            I am a <img src={Laptop} alt="" /> Computer Science Engineer,
            graduated from Kerala Technical University, India. I started
            <span> developing websites</span> during my college days, then as a
            passion, and now it's my profession.
          </p>
          {/* <p className="about-details-p">
            Currently researching on different
            <span>User Interfaces and User Experience designs</span> .
          </p> */}
          <p className="about-details-p">
            I am also an <img src={Airplane} alt="" /> aeronautics and
            <img src={Launch} alt="" /> space enthusiast, Love to enjoy my
            leisure time with my <img src={Cycling} alt="" /> friends and
            family.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
