import { useEffect, useState } from "react";
import axios from "axios";
import TweetLogo from './TweetLogo.jsx'
const Main = (props) => {

  // get random quote from quoutes
  const getRandomQuote = (quotes) => {
    return quotes[
      Math.floor(Math.random() * quotes.length)
    ];
  };

  const styleMain = {};

  const btnClass = {
    background: props.props.uniqueColor,
    color: "#fff",
  };

  useEffect(() => {
    // const url = "https://my-json-server.typicode.com/M-RAY47/Quote-data/quotes";
    const url1 =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    // const getData = async() => {
    // 	const res = await (await fetch(url1)).json()
    // 	console.log('The res>>>><>>>>>', res)
    // }
    // getData()
    axios.get(url1).then((res) => {
      // console.log("res.data", res.data, typeof res.data, props, props.props);

      const quotes = res.data.quotes;
			console.log("quotes", quotes)
      setQuotesData(quotes);
			setCurrQuote(getRandomQuote(quotesData))
			console.log(currQuote, quotesData)
    });
  }, []);

  const [quotesData, setQuotesData] = useState([]);
  const [currQuote, setCurrQuote] = useState(getRandomQuote(quotesData));

	// console.log('curr', currQuote, quotesData, btnClass)
	const changeQuote = () => {
		setCurrQuote(getRandomQuote(quotesData))
	}

  const tweetQuote = '';
  const newQuoteBtn = "New Quote";
  return (
    <main id="quote-box">
      {/* <div id="text">{currQuote.quote}</div> */}
      <div className="quote__info">
        <div className="right-info">
          <button
            onClick={changeQuote}
            className="btn"
            style={btnClass}
            id="new-quote"
          >
            {newQuoteBtn}
          </button>
          <a
            id="tweet-quote"
            className="btn"
            style={btnClass}
            href={tweetQuote}
            target="_blank"
            rel="noreferrer"
          >
            <TweetLogo props={props.props.uniqueColor} />
            
          </a>
        </div>

        {/* <div id="author">{currQuote.author}</div> */}
      </div>
    </main>
  );
};
export default Main;



