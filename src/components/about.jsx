import React from "react";
import aboutMeImg from "../img/about-me-new.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm am a 3rd-year Computer Science student at Pamantasan ng Cabuyao with skills in web design and programming using PHP and Java. Active participation in various school and community organizations has provided valuable experience in leadership, logistics, research, and project coordination. These opportunities strengthened abilities in teamwork, adaptability, time management, and communication. Gab is eager to apply both technical expertise and organizational experience to contribute effectively in academic, community, and professional settings"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-img">
                      <img
                        src={aboutMeImg}
                        className="img-fluid rounded b-shadow-a"
                        alt="about me"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
