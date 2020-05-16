import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import Recipe from "./Recipe";
class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  componentDidMount(){
    document.title = "Cart"
  }
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          
          <li className="collection-item avatar" key={item.id}>
            <label className="centered">
              <input type="checkbox" />
              <span></span>
            </label>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <div className="container">
        <p className="centered">There are no items in cart.</p>
      </div>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
