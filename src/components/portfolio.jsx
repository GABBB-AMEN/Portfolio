import React from "react";

//import stock


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                 My Projects
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">FoodFiesta</h2>
                      <div className="w-more">
                        <p>
                          A Recipe app that shows different recipes.
                        </p>
                        <a href="https://github.com/GABBB-AMEN/FoodFiesta.github.io.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">Decisions that Define Us</h2>
                      <div className="w-more">
                        <p>
                          A 2D puzzle game made with Godot.
                        </p>
                        <a href="https://github.com/GABBB-AMEN/Decisions-that-Define-Us.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">E-Commerce</h2>
                      <div className="w-more">
                        <p>
                          An E-Commerce app that has the basic function of an E-commerce website.
                        </p>
                        <a href="https://github.com/GABBB-AMEN/E-Commerce.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          View on GitHub
                        </a>
                      </div>
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

export default Portfolio;
