import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";
import TweetContextProvider from "./TweetContextProvider.js";

const App = () => {
  return (
    <Wrapper>
      <TweetContextProvider>
        <Tweet />
      </TweetContextProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
