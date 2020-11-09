import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from "../TweetContextProvider.js";

const Tweet = () => {
  const { tweetContents, date, numOfLikes, numOfRetweets } = React.useContext(
    TweetContext
  );

  return (
    <Wrapper>
      <Header />
      <TweetContents>{tweetContents}</TweetContents>

      <Timestamp>{date}</Timestamp>
      <Divider />
      <Stats>
        <Stats_num>{numOfRetweets}&ensp;</Stats_num>Retweets&ensp;&ensp;&ensp;
        <Stats_num>{numOfLikes}&ensp;</Stats_num>Likes&ensp;&ensp;
      </Stats>
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;
const Stats_num = styled(Stats)`
  font-weight: bold;
`;

export default Tweet;
