import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Show from './Show';


function  App(){
  let [news, setNews] = useState([]);

  const API_KEY = '3cc0523f55ffc3be93e344a1ad47fa5a';
  const url = 'https://gnews.io/api/v4/search?q=';

  
  async function fetchNews(query) {
    const newURL = `${url}${query}&lang=en&country=us&max=100&apikey=${API_KEY}`;
    const res = await fetch(newURL);
    const data = await res.json();
    setNews(data.articles);
  }

  useEffect(() => {
    fetchNews('India');
  }, [])

  const handleSearch = () => {
    let query = document.getElementById("search-text").value;
    if (!query) query = 'India';
    fetchNews(query);
  };


  return (
    <>
      <Nav handleSearch={handleSearch} />
      <Show article={news} />
    </>
  )

};


export default App;