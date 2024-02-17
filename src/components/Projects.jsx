import { useState } from "react";
import { sliderData } from "../data/sliderData";
import ProjectSlide from "./ProjectSlide";
import Chevron from "../images/Chevron Right.png";
import freshFromFarmProjectImg from "../images/freshfromfarmProject.png";
import homeForSaleProjectImg from "../images/homeForSaleProject.jpg";
import optEngineProjectImg from "../images/optEngineProject.png";
import ecCureProjectImg from "../images/ecCureProject.png";
import vincaProjectImg from "../images/vincaProject.png";
import belgoriumProjectImg from "../images/belgoriumProject.png";
import avacadoProjectImg from "../images/avacadoProject.png";

function Projects() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const ProjectTemplate = ({ img, heading, detail, siteUrl, gitUrl }) => {
    return (
      <div className="projects-project-sec">
        <img src={img} alt="" className="projects-project-img" />
        <div className="projects-project-details">
          <h3 className="projects-project-heading">{heading}</h3>
          <p className="projects-project-p">{detail}</p>
          <div className="project-cta-section">
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              <button className="cta-GL">VISIT SITE</button>
            </a>
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
              <button className="cta-GL">GitHubLink</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects-id" className="projects-section">
      <div className="wrap">
        <h1 className="projects-heading">MY PROJECTS</h1>
      </div>

      <div className="wrap projects-container">
        {/* <div className="projects-left-section">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <ProjectSlide
                    className="ProjectSlide"
                    heading={slide.heading}
                    description={slide.description}
                    image={slide.image}
                    tech={slide.tech}
                    gitLink={slide.gitLink}
                    projectLink={slide.projectLink}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="projects-action-buttons">
          <button className="projects-up-btn" onClick={nextSlide}>
            <img src={Chevron} alt="" />
          </button>
          <button className="projects-down-btn" onClick={prevSlide}>
            <img src={Chevron} alt="" />
          </button>
        </div> */}

        {/* <div className="projects-project-sec">
          <img
            src={homeForSaleProjectImg}
            alt=""
            className="projects-project-img"
          />
          <div className="projects-project-details">
            <h3 className="projects-project-heading">Home For Sale</h3>
            <p className="projects-project-p">
              The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price.
            </p>
            <div className="project-cta-section">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">VISIT SITE</button>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">GitHubLink</button>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="projects-project-sec">
          <img
            src={homeForSaleProjectImg}
            alt=""
            className="projects-project-img"
          />
          <div className="projects-project-details">
            <p className="projects-project-p">
              The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price.
            </p>
            <div className="project-cta-section">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">VISIT SITE</button>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">GitHubLink</button>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="projects-project-sec">
          <img
            src={homeForSaleProjectImg}
            alt=""
            className="projects-project-img"
          />
          <div className="projects-project-details">
            <p className="projects-project-p">
              The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price.
            </p>
            <div className="project-cta-section">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">VISIT SITE</button>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="cta-GL">GitHubLink</button>
              </a>
            </div>
          </div>
        </div> */}
        <ProjectTemplate
          img={freshFromFarmProjectImg}
          heading="Fresh From Farm"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://freshfromfarmshop.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/fresh-from-farm"
        />
        <ProjectTemplate
          img={optEngineProjectImg}
          heading="OptEngine"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://optengine.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/URL-Info-Backend"
        />
        <ProjectTemplate
          img={ecCureProjectImg}
          heading="EcCure"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://eccure.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/ecCure-frontend"
        />
        <ProjectTemplate
          img={homeForSaleProjectImg}
          heading="Home For Sale"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://homeforsaleagency.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/homeforsale"
        />
        <ProjectTemplate
          img={vincaProjectImg}
          heading="Vinca Consultancy"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://vincaconsultancy.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/Vinca---Work-Risk-Free-Consultancy"
        />
        <ProjectTemplate
          img={belgoriumProjectImg}
          heading="Belgorium"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://belgorium.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/Belgorium---Ad-Copy-Writer-Agency"
        />
        <ProjectTemplate
          img={avacadoProjectImg}
          heading="Avacdo restaurant"
          detail="The website aims at clients who want to own their dream home with
              no extra effort. Further provides an organized collection of
              houses on sale at different locations with their price."
          siteUrl="https://avacadorestaurant.netlify.app/"
          gitUrl="https://github.com/ASHIK-S-NAIR/Avacado-Restaurant"
        />
      </div>
    </section>
  );
}

export default Projects;
