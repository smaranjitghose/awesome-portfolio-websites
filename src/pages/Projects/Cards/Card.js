import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Marginer} from "./Marginer";
const CardWrapper = styled(motion.div)`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 300px;
  box-sizing:border-box;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  color: #fff;
  position: relative;
  cursor: grab;
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  justify-content:center;
  align-items:center;
  background:rgba(0,0,0,0.3);
  padding: 0 0.7em;
  box-shadow:2px 3px;
  cursor:pointer;
  transition: all 290ms ease-in-out;
  &:hover{
    background-color:rgba(0,0,0,0.7);
    color:black;
  }
  
`;
const CardText = styled.h1`
  color: #fff;
  font-size:bold;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 15px;
  font-weight: 900;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform:translateY(10px);
  &:hover{
    transform:translateY(0);
  }
`;

const Pic = styled(motion.div)`
  width: 200px;
  height: 200px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  z: 10000;
`;
const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px;
  background:none;
  color: #000;
  margin-left:5px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
  img{
    font-size:1.2rem;
  }
  
`;

export function ProjCard({title,cardImage,Previewlink,Githublink}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
      <CardWrapper whileHover={{rotateX:"20deg",rotateY:"-20deg",rotateZ:"-10deg"}}>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag 
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}  
      >
        <TopContainer  style={{background:`url(${cardImage})center / cover no-repeat`}}>
        <Wrapper>
            <Pic
              style={{x,y,rotateX,rotateY,rotate:"-15deg",z: 100000}}
              drag
              dragElastic={0.12}
              dragConstraints={{top:0,left:0,right:0,bottom:0}}
              whileTap={{ cursor: "grabbing" }}
            >
           
     <BottomContainer>
        <DetailsContainer>
        <CardText>{title}</CardText>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <BuyButton><img src={Githublink} class="fab fa-github" alt=""></img></BuyButton>
        <BuyButton><img src={Previewlink} class="fas fa-tv" alt=""></img></BuyButton>
      </SpacedHorizontalContainer>
    </DetailsContainer>
    </BottomContainer>
    </Pic>
    </Wrapper>
          </TopContainer>
      </CardContainer>
    </CardWrapper>
  );
}
