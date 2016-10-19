var quotes = [
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 18207,
    "dialogue": false,
    "private": false,
    "tags": [
      "failure"
    ],
    "url": "https://favqs.com/quotes/thomas-a-edison/18207-restlessness--",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Thomas A. Edison",
    "author_permalink": "thomas-a-edison",
    "body": "Restlessness is discontent and discontent is the first necessity of progress. Show me a thoroughly satisfied man and I will show you a failure."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 17397,
    "dialogue": false,
    "private": false,
    "tags": [
      "experience",
      "knowledge"
    ],
    "url": "https://favqs.com/quotes/henry-ford/17397-the-only-real-",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Henry Ford",
    "author_permalink": "henry-ford",
    "body": "The only real security that a man can have in this world is a reserve of knowledge, experience and ability."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 5973,
    "dialogue": false,
    "private": false,
    "tags": [
      "beauty",
      "great"
    ],
    "url": "https://favqs.com/quotes/richard-dawkins/5973-when-i-say-tha-",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Richard Dawkins",
    "author_permalink": "richard-dawkins",
    "body": "When I say that human beings are just gene machines, one shouldn't put too much emphasis on the word 'just.' There is a very great deal of complication, and indeed beauty in being a gene machine."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 15223,
    "dialogue": false,
    "private": false,
    "tags": [
      "dreams",
      "inspirational"
    ],
    "url": "https://favqs.com/quotes/napoleon-hill/15223-cherish-your--",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Napoleon Hill",
    "author_permalink": "napoleon-hill",
    "body": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 729,
    "dialogue": false,
    "private": false,
    "tags": [
      "age"
    ],
    "url": "https://favqs.com/quotes/voltaire/729-what-most-perso-",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Voltaire",
    "author_permalink": "voltaire",
    "body": "What most persons consider as virtue, after the age of 40 is simply a loss of energy."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 58922,
    "dialogue": false,
    "private": false,
    "tags": [
      "truth"
    ],
    "url": "https://favqs.com/quotes/franz-kafka/58922-there-are-onl-",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Franz Kafka",
    "author_permalink": "franz-kafka",
    "body": "There are only two things. Truth and lies. Truth is indivisible, hence it cannot recognize itself anyone who wants to recognize it has to be a lie."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 32997,
    "dialogue": false,
    "private": false,
    "tags": [
      "hope"
    ],
    "url": "https://favqs.com/quotes/mahatma-gandhi/32997-what-is-true--",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Mahatma Gandhi",
    "author_permalink": "mahatma-gandhi",
    "body": "What is true of the individual will be tomorrow true of the whole nation if individuals will but refuse to lose heart and hope."
  }
},
{
  "qotd_date": "2016-10-19T00:00:00.000+00:00",
  "quote": {
    "id": 44006,
    "dialogue": false,
    "private": false,
    "tags": [
      "music"
    ],
    "url": "https://favqs.com/quotes/ludwig-van-beethoven/44006-music-is-the--",
    "favorites_count": 0,
    "upvotes_count": 1,
    "downvotes_count": 0,
    "author": "Ludwig van Beethoven",
    "author_permalink": "ludwig-van-beethoven",
    "body": "Music is the wine which inspires one to new generative processes, and I am Bacchus who presses out this glorious wine for mankind and makes them spiritually drunken."
  }
}];

/*****
Handle click event on Get Quote button
*****/

function getRandomIdx(){
	return Math.floor(Math.random() * quotes.length);
}

function setQuote(body, author){
	$("#quote").text(body);
	$("#author").text(author);
};

$(document).ready(function(){

	var idx = getRandomIdx();
	setQuote(quotes[idx].quote.body, quotes[idx].quote.author)

	$("#btnRequestQuote").on("click", function(){
		console.log("Connected");

		// $.get("https://favqs.com/api/qotd", function(data){
		// 	console.log(data);
		// }, "json");

		// $.getJSON("quotes.json", function(data){
		// 	console.log(data);
		// });

		var idx = getRandomIdx();
		setQuote(quotes[idx].quote.body, quotes[idx].quote.author) 

	});
});