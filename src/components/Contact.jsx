import Arrow from "../images/Arrow 1.svg";

function Contact() {
  return (
    <section className="contact-section">
      <div className="wrap contact-wrap">
        <div className="contact-form-section">
          <form
            className="contact-form"
            action="https://formsubmit.co/aashiq5342@gmail.com"
            method="POST"
          >
            <div className="contact-form-row">
              <div className="contact-form-sec contact-form-half">
                <input
                  className="contact-form-input"
                  type="text"
                  name="Name"
                  placeholder=" "
                  required
                />
                <label className="contact-form-label">Name</label>
              </div>
              <div className="contact-form-sec contact-form-half">
                <input
                  className="contact-form-input"
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                />
                <label className="contact-form-label">Email Address</label>
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-sec">
                <input
                  className="contact-form-input"
                  type="text"
                  name="_subject"
                  placeholder=" "
                  required
                />
                <label className="contact-form-label">Subject</label>
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-sec">
                <textarea
                  name="Message"
                  className="contact-form-input contact-form-textarea"
                  placeholder=" "
                  required
                ></textarea>
                <label className="contact-form-label">Message</label>
              </div>
            </div>

            <input
              type="hidden"
              name="_next"
              value="https://ashiksnair.netlify.app/thankyou"
            />

            <input type="hidden" name="_cc" value="aashiq5342@gmail.com" />

            <input type="hidden" name="_captcha" value="false" />

            <div className="contact-form-row">
              <div className="contact-form-sec">
                <button
                  className="contact-form-button cta-interative cta-SM"
                  type="submit"
                >
                  <p>SEND MESSAGE</p>
                  <img src={Arrow} alt="" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-details-section">
          <h3 className="contact-details-title">CONTACT ME</h3>
          <h1 className="contact-details-heading">
            Let's start a conversation
          </h1>
          <h1 className="contact-details-heading">Feel free to talk-</h1>
          <h3 className="contact-details-subheading">
            Let's work together on your next project
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;
