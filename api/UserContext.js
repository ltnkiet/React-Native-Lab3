import React, { useEffect } from "react";

useEffect(() => {
  const getNews = async () => {
    console.log("Hello World");
    const res = await axios.get(
      "https://63e4405c4474903105e8a3a0.mockapi.io/api/news"
    );
    if (res != "") {
      setdata(res.data);
    }
  };
  getNews();
  return () => {};
}, []);
