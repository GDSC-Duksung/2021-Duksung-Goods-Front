import React from "react";
import styled from "styled-components";

const CategoryPageBlock = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  background-color: #dddddd9e;
  display: flex;
  justify-content: center;
`;

// contents 가운데 배치
const Container = styled.div`
  width: 70%;
  background-color: #e2f5df;
`;

const CategTitle = styled.div`
  color: #000;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  margin: 1rem 0;
`;

const Line = styled.div`
  border: 3px solid #981b45;
`;

const categoryPage = () => {
  return (
    <CategoryPageBlock>
      <Container>
        <CategTitle>MainCateg > SubCateg</CategTitle>
        <Line />
      </Container>
    </CategoryPageBlock>
  );
};

export default categoryPage;
