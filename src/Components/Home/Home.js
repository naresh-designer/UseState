import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import CardAPI from "../../CardAPI/CardAPI";

const Home = () => {
  const [cardData, setCardData] = useState(CardAPI);
  return <CardItem cardData={cardData} />;
};

export default Home;
