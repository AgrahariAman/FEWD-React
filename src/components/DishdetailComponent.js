import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>; // empty div will render nothing
  }
  renderComment(comments) {
    if (comments == null) {
      return <div></div>;
    }
    const cmnts = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{cmnts}</ul>
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    if (dish != null) {
      const dishItem = this.renderDish(dish);
      const commentItem = this.renderComment(dish.comments);
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">{dishItem}</div>
            <div className="col-12 col-md-5 m-1">{commentItem}</div>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
