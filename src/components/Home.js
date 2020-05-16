import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import item1 from "../images/item1.jpg";

const jumbotron = {
  paddingBottom: "150px",
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  "background-image": "../images/item1.jpg",
};

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add_shopping_cart</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: Rp {item.price}K</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="card-panel grey lighten-2" style={jumbotron}>
          <div className="container">
            <h1>Clothes Of The Day</h1>
            <p>The best clothes in the Bundle Clothes now</p>
          </div>
        </div>
        <div className="container">
          <h3 className="center">Products</h3>
          <div className="box">{itemList}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);