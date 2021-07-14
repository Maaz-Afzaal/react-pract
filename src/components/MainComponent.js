import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactUsComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        promotions:PROMOTIONS,
        leaders:LEADERS,
        comments:COMMENTS,
        // selectedDish: null
    };
  }

//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId});
//   }
  
  render() {
    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
    const HomePage = () => {
        return(
            <Home 
            dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
            leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
            />
        );
      }
    //   const dDetail=this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact}/>
              <Redirect to="/home" />
        </Switch>

        {/* <Menu dishes={this.state.dishes} onClick={(dishId) =>{this.onDishSelect(dishId)}} />
        <DishDetail dish={dDetail} /> */}
        <Footer/>
      </div>
    );
  }
}

export default Main;