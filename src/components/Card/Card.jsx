import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import LikedButton from "./Liked Button/LikedButton";
import styles from "./Card.module.scss";

const MAX_LIKES = 1000;

const Card = ({ name = "Dummy name", description = "Lorem ipsum..." }) => {
  const [likes, setLikes] = useState(Math.floor(Math.random() * MAX_LIKES));

  return (
    <article className={styles.card}>
      <header>
        <Heading as={"h2"} text={name} />
        <Paragraph text={description} />
      </header>
      <LikedButton likes={likes} updateLikes={setLikes} />
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
