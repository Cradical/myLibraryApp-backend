import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import "./bookCard.css";

const BookCard = props => {
  const { src, alt } = props.cardImgProps;

  return (
    <Fragment>
      <Card className="book-card">
        <CardImg top width="100%" src={src} alt={alt} />
        <CardBody>
          <CardTitle>Book title</CardTitle>
          <CardSubtitle>Book subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default BookCard;
