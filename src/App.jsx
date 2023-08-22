import { GamePage } from "./assets/components/GamePage";
import { useEffect, useState } from "react";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import Loading from "./assets/components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <GamePage />}
    </>
  );
}

export default App;
