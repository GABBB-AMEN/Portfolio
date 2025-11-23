import React from "react";
import imageOverlay from "../img/bluebackground.jpeg";
import instagramIcon from "../img/icons/instagram.png";
import facebookIcon from "../img/icons/fb.png";
import githubIcon from "../img/icons/github.png";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Contact Me</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
<li>
                            <a
                              href="https://www.instagram.com/i.smileyyy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <img src={instagramIcon} alt="Instagram" className="social-icon" style={{ width: '24px', height: '24px' }} />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/gab.amen.7"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <img src={facebookIcon} alt="Facebook" className="social-icon" style={{ width: '24px', height: '24px' }} />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/GABBB-AMEN"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <img src={githubIcon} alt="GitHub" className="social-icon" style={{ width: '24px', height: '24px' }} />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
