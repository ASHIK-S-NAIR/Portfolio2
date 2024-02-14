import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css-desktop.css";
import "./styles/css-tablet.css";
import "./styles/css-phone.css";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQs from "./components/FAQs";
import TIPS from "./components/TIPS";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Contact from "./components/Contact";
import Thankyou from "./components/Thankyou";
import Blog from "./components/Blog";

import ScrollToTop from "./components/ScrollToTop";
import { BlogTemplate } from "./components/BlogTemplate";

import Blog1 from "./components/blogs/Blog1";
import Blog2 from "./components/blogs/Blog2";
import Blog3 from "./components/blogs/Blog3";
import Blog4 from "./components/blogs/Blog4";

function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <section className="home-container">
                <Hero />
                <Problem />
                <Process />
                <Projects />
                <About />
                <FAQs />
                <TIPS />
                <Footer />
              </section>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <section className="blog-container">
                <Blog />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/blog/understading_osi_model"
            element={
              <section className="blogItem-container">
                <BlogTemplate
                  date="January 24 2024"
                  heading="Understanding OSI Model"
                  tags="BACKEND NETWORKING"
                  blogBody={Blog1}
                />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/blog/Understanding_the_Backbone_of_the_Internet"
            element={
              <section className="blogItem-container">
                <BlogTemplate
                  date="January 30 2024"
                  heading="
Understanding the Backbone of the Internet: HTTP, HTTPS, SMTP, DNS, TCP, UDP, and WebSocket Explained"
                  tags="BACKEND NETWORKING"
                  blogBody={Blog2}
                />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/blog/Demystifying_Network_Address_Translation"
            element={
              <section className="blogItem-container">
                <BlogTemplate
                  date="February 1 2024"
                  heading="
Demystifying Network Address Translation (NAT): Bridging the Gap Between Private and Public IP Addresses"
                  tags="BACKEND NETWORKING"
                  blogBody={Blog3}
                />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/blog/Unveiling_the_Power_of_Webhooks_in_Modern_Server_Architecture"
            element={
              <section className="blogItem-container">
                <BlogTemplate
                  date="February 12 2024"
                  heading="
                  Unveiling the Power of Webhooks in Modern Server Architecture"
                  tags="BACKEND COMMUNICATION"
                  blogBody={Blog4}
                />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <section className="contact-container">
                <Contact />
                <FooterBottom />
              </section>
            }
          ></Route>
          <Route
            path="/thankyou"
            element={
              <section className="thankyou-container">
                <Thankyou />
                <FooterBottom />
              </section>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
