import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>
          After clicking on the dice, if the selected number is equal to the dice number,
           you will get the same number of points as the dice.
        </p>
        <p>If you make a wrong guess, then 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .text {
    margin-top: 24px;
  }
`;