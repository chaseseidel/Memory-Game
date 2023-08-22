export function Header({ Logo, currentScore, bestScore }) {
  return (
    <header>
      <img src={Logo} alt="" id="title-small" />
      <div id="score-container">
        <div className="score">
          <h2>Score:</h2>
          <p>{currentScore}</p>
        </div>
        <div className="score">
          <h2>Best Score:</h2>
          <p>{bestScore}</p>
        </div>
      </div>
    </header>
  );
}
