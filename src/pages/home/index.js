import React from "react";
import { setStorage } from "../../services/storage";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = ({ route, screen }) => (event) => {
    event.preventDefault();
    setStorage({ key: "screen", value: screen });
    history.push(route);
  };

  return (
    <>
      <h1>Home</h1>
      <button
        type="button"
        onClick={handleClick({ route: "/screen1", screen: "S1" })}
      >
        S1
      </button>
      <button
        type="button"
        onClick={handleClick({ route: "/screen2", screen: "S2" })}
      >
        S2
      </button>
    </>
  );
};

export default Home;
