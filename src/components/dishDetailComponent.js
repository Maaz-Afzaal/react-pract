
import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
function renderComment(comments){
    if(comments!=null){
    let coments=comments.map(comment=>{
        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-PK', {
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
function DishDetail(props) {

    
 
    
        if(props.dish!=null){
        const di=props.dish;
        const commentDish=renderComment(props.comments);
        return (
            <div className="container">
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card key={di.id}>        
                <CardImg width="100%" src={di.image} alt={di.name}/>
                <CardBody>
                      <CardTitle>{di.name}</CardTitle>
                      <CardText>{di.description}</CardText>
                </CardBody>
            </Card>   
            </div>
            <div className="col-12 col-md-5 m-1">
             {commentDish}
            </div>
          </div></div>
        );}
        else{
            return(
                <div></div>
            )
        }
    }


export default DishDetail;