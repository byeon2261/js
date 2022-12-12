const quotes = [
    {
        quote : "Success is walking from failure to failure with no loss of enthusiasm.",
        author : "Winston Churchill"
    },
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote : "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author : "Albert Schweitzer"
    },
    {
        quote : "It seems to be a proverb if it is written plausibly in English.",
        author : "G.H. Byeon"
    },
    {
        quote : "My life for Aiur.",
        author : "Zealot"
    },
    {
        quote : "physics is like sex.",
        author : "Richard Feynman"
    },
    {
        quote : "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author : "Thomas Edison"
    },
    {
        quote : "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.",
        author : "Tim O Reilly"
    },
    {
        quote : "The only thing worse than starting something and falling.. is not starting something",
        author : "Seth Godin"
    },
    {
        quote : "AAA.. I Want to have Physics..",
        author : "G.H. Byeon"
    }
]

const quote = document.querySelector("#quote-form span:first-child");
const author = document.querySelector("#quote-form span:last-child");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(quote, chosenQuote.quote);
console.log(author, chosenQuote.author);
quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;