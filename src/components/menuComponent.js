
import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    renderDish(dish){
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
        
                    <div className="col-12 col-md-5 m-1">
                        <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>

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
            <div className="row">
            <div  className="col-12 m-1">
                    {this.renderDish(this.state.selectedDish)}
            </div>
            </div>
          </div>
        );
    }
}

export default Menu;