import React, { Component } from 'react';
import { Media } from 'reactstrap';
import DishDetail from './dishDetailComponent';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
function RenderMenuItem({ dish, onClick }) {
  return (
    <div>
      {/* <Card onClick={() => onClick(dish.id)}> */}
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
      //   <div key={dish.id} className="row mt-5">
      //       <Media className="col-2 ">
      //           <Media object src={dish.image} alt={dish.name} />
      //       </Media>
      //       <Media body className="col-10 align-self-center">
      //         <Media heading>{dish.name}</Media>
      //         <p>{dish.description}</p>
      //       </Media>
      //   </div>
    );
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h1>Menu</h1>
            <hr />
          </div>
        </div>

        <div className="row">{menu}</div>
      </div>
    );
};

export default Menu;
