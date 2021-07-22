import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
// import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactUsComponent';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});
class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     dishes: DISHES,
    //     promotions:PROMOTIONS,
    //     leaders:LEADERS,
    //     comments:COMMENTS,
    //     // selectedDish: null
    // };
  }

  //   onDishSelect(dishId) {
  //     this.setState({ selectedDish: dishId});
  //   }

  render() {
    const DishWithId = ({ match }) => {
      return (
        // <DishDetail
        //   dish={
        //     this.props.dishes.filter(
        //       (dish) => dish.id === parseInt(match.params.dishId, 10),
        //     )[0]
        //   }
        //   comments={this.props.comments.filter(
        //     (comment) => comment.dishId === parseInt(match.params.dishId, 10),
        //   )}
        // />
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10),
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10),
          )}
          addComment={this.props.addComment}
        />
      );
    };
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const AboutPage = () => {
      return <About leader={this.props.leaders} />;
    };
    //   const dDetail=this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>

        {/* <Menu dishes={this.state.dishes} onClick={(dishId) =>{this.onDishSelect(dishId)}} />
        <DishDetail dish={dDetail} /> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
