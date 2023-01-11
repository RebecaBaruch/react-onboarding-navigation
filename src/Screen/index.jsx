import { useState } from "react";
import { Wrapper, ButtonContainer, Box, Figure } from "./styled";
import TextBox from "../components/TextBox";
import Stepper from "../components/Stepper";
import NavButton from "../components/NavButton";
import img01 from "../assets/img01.svg";
import img02 from "../assets/img02.svg";
import img03 from "../assets/img03.svg";

function Screen() {
  const [page, setPage] = useState(0);

  const pageChangeHandler = () => {
    page === 2 ? setPage(0) : setPage(page + 1);
  };

  const skipChangeHandler = () => {
    setPage(2);
  };

  let screenContent = [
    {
      key: 1,
      src: img01,
      title: "Plant lover Community",
      text: "Find gardening enthusiasts from all over the world",
    },

    {
      key: 2,
      src: img02,
      title: "Get fast & safe delivery",
      text: "Get good quality products for your plants",
    },

    {
      key: 3,
      src: img03,
      title: "Buy & Sell Tools",
      text: "Buy & sell good quality products for your beautiful plants",
    },
  ];

  return (
    <Wrapper>
      <Box>
        <Figure>
          <img src={screenContent[page].src} />
        </Figure>
        <TextBox
          title={screenContent[page].title}
          text={screenContent[page].text}
        />
        <Stepper mark={page} />
      </Box>

      <ButtonContainer>
        <NavButton type={"next"} onClick={pageChangeHandler}> 
          {page < 2 ? "Continue" : "Get Started!"} 
        </NavButton>

        {page < 2 && (
          <NavButton type={"skip"} onClick={skipChangeHandler}>
            Skip
          </NavButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
}

export default Screen;
