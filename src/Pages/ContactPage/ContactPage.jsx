import LeftImg from "../../../public/green1.jpg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-area">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${LeftImg})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter Full Name..."
            type="text"
            autoComplete="off"
          />

          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            placeholder="Enter Your Email..."
            type="email"
            autoComplete="off"
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Message..."
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
