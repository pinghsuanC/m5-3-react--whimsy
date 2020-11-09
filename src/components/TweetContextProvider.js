import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

const TweetContext = React.createContext({});
const TweetContextProvider = ({ children }) => {
  const [date, setDate] = useState(
    `${moment().format("hh:mmA - MMM Do, YYYY")}`
  );
  const [numOfLikes, setNumOfLikes] = useState(640);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  //const isRetweetedByCurrentUser = false;
  //const isLikedByCurrentUser = false;
  {
    /*9:00AM - Jul 28th 2020*/
  }
  //setDate();
  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    setNumOfLikes(isLiked ? numOfLikes - 1 : numOfLikes + 1);
  };
  const handleToggleReTweet = () => {
    setIsRetweeted(!isRetweeted); // starts with false, therefore -1 and then +1
    setNumOfRetweets(isRetweeted ? numOfRetweets - 1 : numOfRetweets + 1);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        numOfLikes,
        setNumOfLikes,
        isLiked,
        setIsLiked,
        isRetweeted,
        setIsRetweeted,
        numOfRetweets,
        setNumOfRetweets,
        date,
        handleToggleLike,
        handleToggleReTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export { TweetContext };
export default TweetContextProvider;
