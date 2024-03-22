import { useEffect, useState } from 'react';
import axios from 'axios';
const Main = () => {
	// colores
	const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
]

	const [quotesData, setQuoteData] = useState({})
	let currQuote = ''
	// get random quote from quoutes
	const getRandomQuote = () => {
		return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ]
	}
  useEffect(() => {
		const url ='https://my-json-server.typicode.com/M-RAY47/Quote-data/quotes'
		const url1 ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		
		axios.get(url1)
      .then(res => {
        console.log('res.data', res.data, typeof res.data)
				// const quotes = res.data
				// setQuoteData(quotes)
				currQuote = getRandomQuote()
      })
	})
const tweetLink = ''
	return (
		<main id="quote-box">
			<div id="text">{currQuote}</div>
			<div id="author"></div>
			<button id="new-quote">New quote</button>
			<a href={tweetLink} id="tweet-quote">Tweet quote</a>
		</main>
	)
}
export default Main