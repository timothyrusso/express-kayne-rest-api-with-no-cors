const { quotes } = require('./data');

module.exports.getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}// write your code here