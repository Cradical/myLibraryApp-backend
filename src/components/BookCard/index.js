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
  const { bookImg, bookTitle, bookSubtitle, bookSummary } = props.cardInfo;

  return (
    <Fragment>
      <Card className="book-card">
        <CardImg top width="100%" src={bookImg.src} alt={bookImg.alt} />
        <CardBody>
          <CardTitle>{bookTitle}</CardTitle>
          <CardSubtitle>{bookSubtitle}</CardSubtitle>
          <CardText>{bookSummary}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default BookCard;
