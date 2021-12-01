/* JS Code for DOM manipulation  and REST API*/

const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const quoteDiv = document.querySelector(".quote-container");
const quote = document.querySelector("article");

const getQuote = async function () {
    const res = await fetch("https://type.fit/api/quotes");
    const quotes = await res.json();
    console.log(quotes);
    selectRandomQuote(quotes);
};

const selectRandomQuote = function (quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    const randomQuote = quotes[randomIndex];
    displayQuote(randomQuote);
};

const displayQuote = function (randomQuote) {
    console.log(randomQuote);
    const quoteAddress = randomQuote.text;
    quote.innerText = quoteAddress;
    const author = randomQuote.author;
    authorSpan.innerText = author;
    quoteDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getQuote();
});