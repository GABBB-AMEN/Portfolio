import React from "react";
import products from "../mock-products.json";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      inventoryLevel: '',
      salesPerWeek: '',
      daysToReplenish: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('New product:', this.state);
    // Here you would typically handle the form submission,
    // e.g., by sending the data to a server or updating the product list.
    this.setState({
      productName: '',
      inventoryLevel: '',
      salesPerWeek: '',
      daysToReplenish: '',
    });
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Add a new Product</h3>
                <div className="line-mf"></div>
              </div>
              <div className="work-box">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inventoryLevel">Current Inventory Level</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inventoryLevel"
                      name="inventoryLevel"
                      value={this.state.inventoryLevel}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="salesPerWeek">Average Sales per Week</label>
                    <input
                      type="number"
                      className="form-control"
                      id="salesPerWeek"
                      name="salesPerWeek"
                      value={this.state.salesPerWeek}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="daysToReplenish">Days to Replenish</label>
                    <input
                      type="number"
                      className="form-control"
                      id="daysToReplenish"
                      name="daysToReplenish"
                      value={this.state.daysToReplenish}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Get Suggestions</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Products</h3>
                <p className="subtitle-a">
                 Check out our products
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="work-box">
                  <a href={product.imageUrl} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img src={product.imageUrl} alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{product.name}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {product.description}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-pricetag"></span> {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
