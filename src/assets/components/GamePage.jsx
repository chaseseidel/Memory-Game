import { Header } from "./Header";
import { Cards } from "./Cards";
import { useState } from "react";
import Logo from "../img/logo.png";
import characters from "../components/characters";

const shuffle = (array) => {
  let shuffledArray = [];
  let usedIndexes = [];

  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndexes.includes(randomNumber)) {
      shuffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }

  return shuffledArray;
};

export function GamePage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("highScore") || 0
  );
  const [cards, setCards] = useState(shuffle(characters));
  const count = cards.filter((card) => card.clicked === true).length;
  let currentCards = cards.slice(0, 4);

  const clickCard = (card) => {
    card.clicked = true;
    const newCards = [...cards];
    setCards(shuffle(newCards));
    incrementScore();
  };

  const incrementScore = () => {
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
      localStorage.setItem("highScore", bestScore + 1);
    }
    setCurrentScore(currentScore + 1);
  };

  const resetGame = () => {
    setCurrentScore(0);
    const newCards = [...cards];
    newCards.forEach((card) => (card.clicked = false));
    setCards(shuffle(newCards));
  };

  if (count === 7) {
    const newCards = [...cards];
    newCards.forEach((card) => (card.clicked = false));
    setCards(newCards);
  }

  return (
    <>
      <Header Logo={Logo} currentScore={currentScore} bestScore={bestScore} />
      <main>
        <Cards
          cards={currentCards}
          resetGame={resetGame}
          clickCard={clickCard}
        />
        <div className="counter">{count}/7</div>
      </main>
    </>
  );
}
