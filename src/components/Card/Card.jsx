import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import LikedButton from "./Liked Button/LikedButton";
import styles from "./Card.module.scss";

const MAX_LIKES = 1000;

const Card = ({ name = "Product", description = "Description", source }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * MAX_LIKES));

  return (
    <article className={styles.card}>
      <header>
        <Heading as={"h2"} text={name} />
        <Paragraph text={description} />
      </header>
      <LikedButton likes={likes} updateLikes={setLikes} />
      <div>{source}</div>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string.isRequired,
};

export default Card;
