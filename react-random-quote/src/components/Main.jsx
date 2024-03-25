import { useEffect, useState } from 'react';
import axios from 'axios';
const Main = (props) => {

	const [quotesData, setQuoteData] = useState({})
	const [currQuote, setCurrQuote] = useState()
	
	// get random quote from quoutes
	const getRandomQuote = () => {
		return quotesData.quotes[
    	Math.floor(Math.random() * quotesData.quotes.length)
  	]
	}
	
  useEffect(() => {
		const url ='https://my-json-server.typicode.com/M-RAY47/Quote-data/quotes'
		const url1 ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
		
		// const getData = async() => {
		// 	const res = await (await fetch(url1)).json()
		// 	console.log('The res>>>><>>>>>', res)
		// }
		// getData()
		axios.get(url1)
      .then(res => {
        console.log('res.data', res.data, typeof res.data, props)

				const quotes = res.data
				setQuoteData(quotes)
		// 		// const currQuote = getRandomQuote()
		// 		// setCurrQuote(cc)
		// 		console.log('heree>>',  currQuote, quotesData)
      })
	}, [])

	// const currQuote = getRandomQuote()
const tweetLink = ''
const newQuoteBtn = 'New Quote'
	return (
		<main id="quote-box">
			<div id="text">{currQuote}</div>
			<div id="author"></div>
			<button style={{color: props.uniqueColor}} id="new-quote">{newQuoteBtn}</button>
			<a href={tweetLink} id="tweet-quote">Tweet quote</a>
		</main>
	)
}
export default Main