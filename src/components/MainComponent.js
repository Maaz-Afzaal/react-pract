import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }
  
  render() {
      const dDetail=this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} onClick={(dishId) =>{this.onDishSelect(dishId)}} />
            <DishDetail dish={dDetail} />
        <Footer/>
      </div>
    );
  }
}

export default Main;