import { useState, useEffect } from "react";
import PropTypes, { number } from "prop-types";
import Card from "../Card/Card";
import styled from "styled-components";
import styles from "./CardContainer.module.scss";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns
      ? `repeat(${props.columns}, 1fr)`
      : "repeat(auto-fit, minmax(200px, 1fr))"};
  grid-template-rows: auto;
  gap: ${(props) => props.gap};
  place-items: center;

  article {
    background-color: ${(props) => props.cardsBackgroundColor};
  }
`;

const CardContainer = ({
  cards,
  currentNumberOfCardsShown,
  columns,
  gap = "1rem",
  source,
  backgroundColor = "transparent",
  theme = "light",
}) => {
  if (source) cards = cards.filter((card) => card.props.source === source);
  const [shownCards, setShownCards] = useState(
    cards.slice(0, currentNumberOfCardsShown)
  );

  useEffect(() => {
    setShownCards(cards.slice(0, currentNumberOfCardsShown));
  }, [currentNumberOfCardsShown]);

  return (
    <StyledMain
      columns={columns}
      gap={gap}
      cardsBackgroundColor={backgroundColor}
      className={theme === "light" ? styles.light : styles.dark}
    >
      {shownCards}
    </StyledMain>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  initialNumberOfCardsShown: PropTypes.number.isRequired,
  currentNumberOfCardsShown: PropTypes.number.isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
  source: PropTypes.string,
  backgroundColor: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default CardContainer;
