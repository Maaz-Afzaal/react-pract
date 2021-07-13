
import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    renderComment(comments){
        if(comments!=null){
        let coments=comments.map(comment=>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'

                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        });
        return (
            <>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {coments}
                </ul>
</>
          
        )
        }
        else{
            <div></div>
        }
    }
 
    render() {
        const di=this.props.sDish;
        const commentDish=this.renderComment(di.comments);
        return (
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card key={this.props.sDish.id}>        
                <CardImg width="100%" src={this.props.sDish.image} alt={this.props.sDish.name}/>
                <CardBody>
                      <CardTitle>{this.props.sDish.name}</CardTitle>
                      <CardText>{this.props.sDish.description}</CardText>
                </CardBody>
            </Card>   
            </div>
            <div className="col-12 col-md-5 m-1">
             {commentDish}
            </div>
          </div>
        );
    }
}

export default DishDetail;