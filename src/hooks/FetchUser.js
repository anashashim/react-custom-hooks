import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchUser = (url) => {
  const [userList, setUserList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = () => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      const { data } = res;

      const {
        email,
        cell,
        name: { first, last },
        picture: { large },
      } = data.results[0];
      setUserList([
        ...userList,
        { email, cell, name: `${first} ${last}`, picture: large },
      ]);

      setCurrentIndex(userList.length);
      setIsLoading(false);
    });
  };

  const next = () => {
    if (currentIndex + 1 < userList.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      fetchUser();
    }
  };

  const previous = () => {
    setCurrentIndex(
      currentIndex === 0 || userList.length === 0 ? 0 : currentIndex - 1
    );
  };

  return {
    userList,
    current: userList[currentIndex],
    isLoading,
    next,
    previous,
  };
};

export default useFetchUser;
