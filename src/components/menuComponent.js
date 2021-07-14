
import React,{Component} from 'react';
import {Media} from 'reactstrap';
import DishDetail from './dishDetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

function RenderMenuItem({dish,onClick}){
return(
        <div >
                <Card onClick={() => onClick(dish.id)}>
                        
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
        </div>
);
}



const Menu=(props)=>{


        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
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

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
          </div>
        );
    }


export default Menu;