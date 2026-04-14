import { useEffect, useState } from "react";

const useFriendsData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/AllFriends.json")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useFriendsData;