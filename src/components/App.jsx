import { useState } from "react";
import CardContainer from "./Card Container/CardContainer";
import Card from "./Card/Card";
import "../styles/index.scss";

const MAX_NUMBER_OF_CARDS = 100;
const INITIAL_NUMBER_OF_CARDS_SHOWN = 4;
const NAMES = ["Shoes", "Hat", "Shirt", "Pants"];
const DESCRIPTIONS = ["Description 1", "Description 2", "Description 3"];
const SOURCES = ["instagram", "facebook", "reddit"];
let cards =
  // setting key to array index is volatile, but we don't have an id from the server to use as a key
  Array.from({ length: MAX_NUMBER_OF_CARDS }, (_, index) => (
    <Card
      key={index}
      name={NAMES[Math.floor(Math.random() * NAMES.length)]} // give Card name random name from names[]
      description={
        DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)]
      }
      source={SOURCES[Math.floor(Math.random() * SOURCES.length)]}
    />
  ));

function App() {
  const [currentNumberOfCards, setCurrentNumberOfCards] = useState(
    INITIAL_NUMBER_OF_CARDS_SHOWN
  );

  const handleClick = (event) => {
    setCurrentNumberOfCards((numberOfCards) => (numberOfCards += 4));
  };

  return (
    <>
      <CardContainer
        cards={cards}
        initialNumberOfCardsShown={INITIAL_NUMBER_OF_CARDS_SHOWN}
        currentNumberOfCardsShown={currentNumberOfCards}
        gap={"2rem"}
        source={"instagram"}
      />
      <aside>
        <button onClick={handleClick}>Load More</button>
      </aside>
    </>
  );
}

export default App;
