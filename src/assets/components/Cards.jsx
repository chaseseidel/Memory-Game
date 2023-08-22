import Tilt from "react-parallax-tilt";

export function Cards({ cards, resetGame, clickCard }) {
  return (
    <ul id="cards-container">
      {cards.map((card) => (
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.9}
          glareColor="white"
          glarePosition="all"
          glareBorderRadius="20px"
          key={card.id}
        >
          <li className="card">
            <img
              src={card.src[card.name]}
              alt=""
              className="card-img"
              onClick={() => (card.clicked ? resetGame() : clickCard(card))}
            />
            <h3 className="card-name">{card.name}</h3>
          </li>
        </Tilt>
      ))}
    </ul>
  );
}
