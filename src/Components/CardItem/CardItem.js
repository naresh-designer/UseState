import React from "react";
import styled from "styled-components";

const CardItem = ({ cardData }) => {
  return (
    <CardBody>
      {cardData.map((curElem) => {
        const { id, name, city } = curElem;
        return (
          <div className="primery-Body">
            <div className="secondaryBody">
              <h4>{id}</h4>
              <h1>{name}</h1>
              <h2>{city}</h2>
            </div>
          </div>
        );
      })}
    </CardBody>
  );
};

const CardBody = styled.section`
  display: flex;
  justify-content: space-between;
  align-itmes: flex-start;

  .primery-Body {
    background-color: ${({ theme }) => theme.colors.heading};
    width: 20%;
    color: ${({ theme }) => theme.colors.white};
    padding: 50px;
  }
`;

export default CardItem;
