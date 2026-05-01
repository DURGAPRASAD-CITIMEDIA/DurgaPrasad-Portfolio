
import { Mail, Phone, MapPin, Send ,} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
// changed
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setResult("Sending...");

  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "YOUR_NEW_KEY_HERE");
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formDataToSend,
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setResult("✓ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult(data.message || "❌ Error sending message");
    }
  } catch (error) {
    console.error(error);
    setResult("❌ Network error");
  }
};

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I&apos;m always open to new opportunities and interesting
              projects. Feel free to reach out!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:durgaprasaduppu1@gmail.com">
                    durgaprasaduppu1@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:6309263642">+91 6309263642</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Nidadavolu, Rajahmundry, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
  <h4>Follow Me</h4>
  <div className="social-icons">
    <a
      href="https://www.linkedin.com/in/uppu-durga-prasad/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <FaLinkedin size={20} />
    </a>

    <a
      href="https://github.com/DURGAPRASAD-CITIMEDIA"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <FaGithub size={20} />
    </a>
  </div>
</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity..."
                rows={6}
              />
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} />
              Send Message
            </button>

            {result && <div className="success-message">{result}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}