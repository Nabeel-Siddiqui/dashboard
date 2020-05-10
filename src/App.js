import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Quote from './Components/Quote.js'
import Reddit from './Components/Reddit.js'
import { Container, Segment } from 'semantic-ui-react'


const api = {
  key: "23259d09329083a1e35362d821a07a3b",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const [redditData, setRedditData] = useState([]);
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      const redditResult = await axios(
        'https://www.reddit.com/r/popular.json',
      );
      const quoteResult = await axios (
        'http://quotes.rest/qod.json'
      );

      setQuoteData(quoteResult.data.contents.quotes)
      setRedditData(redditResult.data.data.children);

    };
    fetchData();
  }, []);


  const renderQuote = () => {
    return quoteData.map(quote => <Quote quote={quote}/>)
  }

  const renderReddit = () => {
    return redditData.map(reddit => <Reddit reddit={reddit.data}/>)
  }


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}/weather?q=${query}&units=imperial&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  let date = new Date()
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  let timeOptions = {hour: 'numeric', minute: 'numeric'};
  let currentDate = new Intl.DateTimeFormat('default', dateOptions).format(date);
  let currentTime = new Intl.DateTimeFormat('default', timeOptions).format(date);

  return (
    <div className="main-container">

      <div className='time'>
      {currentTime}
      </div>

      <div className='date'>
      <h2>{currentDate}</h2>
      </div>
    
      
      <div className="reddit-container">
        {renderReddit()}
      </div>

      <div className="quote-container">
        {/* quote api has limit */}
        {renderQuote()}
      </div>


    </div>
  );
}

export default App;
