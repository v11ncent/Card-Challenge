import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import styled from "styled-components";

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
  maxNumberOfCards = 100,
  numberOfCardsShown,
  columns,
  gap = "10px",
  filterBySource,
  cardsTheme = "light",
  cardsBackgroundColor = "transparent",
}) => {
  const [cards, setCards] = useState(
    // setting key to array index is volatile, but we don't have an id from the server to use as a key
    Array.from({ length: maxNumberOfCards }, (_, index) => <Card key={index} />)
  );

  return (
    <StyledMain
      columns={columns}
      gap={gap}
      cardsBackgroundColor={cardsBackgroundColor}
    >
      {cards && cards.slice(0, numberOfCardsShown)}
    </StyledMain>
  );
};

CardContainer.propTypes = {
  maxNumberOfCards: PropTypes.number,
  numberOfCardsShown: PropTypes.number.isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
  cardsBackgroundColor: PropTypes.string,
  cardsTheme: PropTypes.string,
  filterBySource: PropTypes.string,
};

export default CardContainer;
