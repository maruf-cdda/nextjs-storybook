import React from "react";
import Cover from "../Cover/Cover";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Description from "../Description/Description";
import Button from "../Button/Button";

const Card = () => {
  const card = {
    title: "Card",
    src: "https://via.placeholder.com/150",
    alt: "placeholder",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <div>
      <Cover src={card.src} alt={card.alt} />
      <Header title={card.title} />
      <Description description={card.description} />
      <Button title="Click Here" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
};
