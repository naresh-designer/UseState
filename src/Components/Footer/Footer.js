import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import FooterAPI from "../../FooterAPI/FooterAPI";

const Footer = () => {
  const [cardData, setCardData] = useState(FooterAPI);
  return <CardItem cardData={cardData} />;
};

export default Footer;
