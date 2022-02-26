import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  `;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
  `;

const Slider = styled.div`
    padding: 0.5rem calc((100vw - 1200px) / 2);
   `;

const SliderGrid = styled.div`
     display: grid;
     grid-template-column: 1fr 1fr 1fr;
     grid-gap: 1rem
    `;

const SliderCard = styled.div`
      width: 300px;
      height: 300px;
      border-radius: 10px
    `;

const Review = () => {

    return (
        <Container>
            <Arrow direction="left" >

            </Arrow>
            <Wrapper>
                <Slider>
                    <SliderGrid>
                        <SliderCard>Google</SliderCard>
                        <SliderCard>Google</SliderCard>
                        <SliderCard>Google</SliderCard>
                    </SliderGrid>
                </Slider>
            </Wrapper>
            <Arrow direction="right">

            </Arrow>
        </Container>
    )
}

export default Review
