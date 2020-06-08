import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Dish from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  sendDish() {
    let a = this.state.dishes.filter((dish) => {
      return dish.id === this.state.selectedDish;
    });
    return a[0];
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        {/* Selecting specific dish by fitlering the main array and get one result b/c id's are unique */}
        <Dish dish={this.sendDish()} />
        <Footer />
      </div>
    );
  }
}

export default Main;
