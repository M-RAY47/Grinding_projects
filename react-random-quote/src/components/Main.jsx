import { useEffect, useRef, useState } from "react";
import TweetLogo from "./TweetLogo.jsx";
import { getData } from "./getData.jsx";

const url1 =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const Main = ({ uniqueColor, changeColor }) => {
  // get random quote from quoutes
  const getRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const singleQuote = [
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
  ];

  const quotesData = useRef([]);
  const [currQuote, setCurrQuote] = useState(getRandomQuote(singleQuote));

  const btnClass = {
    background: uniqueColor,
    color: "#fff",
  };

  useEffect(() => {
    getData(url1)
      .then((res) => {
        quotesData.current = res.quotes;
        setCurrQuote(getRandomQuote(quotesData.current));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const changeQuote = () => {
    setCurrQuote(getRandomQuote(quotesData.current));
    changeColor();
  };

  const tweetQuote = `https://twitter.com/intent/post?text="${currQuote.quote}"${currQuote.author}"`;

  const newQuoteBtn = "New Quote";
  return (
    <main id="quote-box">
      <div id="text">{currQuote.quote}</div>
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
            <TweetLogo color={uniqueColor} />
          </a>
        </div>

        <div id="author">{currQuote.author}</div>
      </div>
    </main>
  );
};

export default Main;

