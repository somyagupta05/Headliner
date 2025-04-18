import React, { useEffect, useState } from 'react';
import Card from './Card';
import mockData from './mockData'; // 👈 Add this at the top



const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";


//   used to test whe api is not working or limit exceeds
//   const getData = async () => {
//     // Use mock data instead of fetching from the API
//     console.log("Using mock data");
//     const dt = mockData.slice(0, 10); // mimic slicing like real data
//     setNewsData(dt);
//   };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      console.log("Fetched Data:", jsonData);

      // Check if articles exist
      if (jsonData.articles) {
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
        setError(null); // clear previous errors
      } else {
        // Handle API errors like rate limiting
        setError(jsonData.message || "Unexpected API Error");
        setNewsData([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data");
      setNewsData([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className='head'>Stay Updated with TrendyNews</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {error ? (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</p>
        ) : (
          <Card data={newsData} />
        )}
      </div>
    </div>
  );
};

export default Newsapp;
