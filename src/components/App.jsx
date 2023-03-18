import { useState } from "react";
import CardContainer from "./Card Container/CardContainer";
import "../styles/index.scss";

function App() {
  const [numberOfCards, setNumberOfCards] = useState(4);

  const handleClick = (event) => {
    setNumberOfCards((numberOfCards) => (numberOfCards += 4));
  };

  return (
    <>
      <CardContainer numberOfCardsShown={numberOfCards} gap={"2rem"} />
      <aside>
        <button onClick={handleClick}>Load More</button>
      </aside>
    </>
  );
}

export default App;
