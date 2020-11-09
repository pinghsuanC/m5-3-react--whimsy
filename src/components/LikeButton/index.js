import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import { range } from "../../utils";
import { TweetContext } from "../TweetContextProvider.js";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";
import ConfettiPiece from "./ConfettiPiece";
const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const heartSize = size * 0.6;
  const { isLiked } = React.useContext(TweetContext);

  return (
    <Wrapper style={{ width: size, height: size }}>
      {/*<Heart width={heartSize} isToggled={isLiked} />*/}
      {isLiked ? (
        <>
          {range(20).map((i) => (
            <ConfettiPiece
              key={i}
              angle={360 * (i / 20)}
              distance={20}
              color={
                PARTICLE_COLORS[
                  Math.floor(
                    Math.random(PARTICLE_COLORS.length) * PARTICLE_COLORS.length
                  )
                ]
              }
            />
          ))}
          <PoppingCircle size={size} color="#E790F7" />
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        </>
      ) : (
        <Heart width={heartSize} isToggled={isLiked} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
