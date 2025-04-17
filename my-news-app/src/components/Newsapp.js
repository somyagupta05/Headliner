import { useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState('india');
  const [newsData, setNewsData] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY; // Fetch from .env file

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div><h1>Trendy News</h1></div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className='searchbar'>
          <input type='text' placeholder='Search News' onChange={handleInput} />
          <button onClick={getData}>
            Search
          </button>
        </div>
      </nav>
      <div><p className="head">Stay updated with trendy news</p></div>
      <div className="categoryBtn">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>
      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}

export default Newsapp;
