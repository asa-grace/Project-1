
function famousQuotes() {
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(function(response) {
      console.log(response);
      return response.json();
      
    })
    .then(function(response) {
      var indexSelect = [Math.floor(Math.random()*response.data.length)]; 
      console.log(indexSelect);
      var selectedQuote = response.data[indexSelect].quoteText + '-' +  response.data[indexSelect].quoteAuthor;
      console.log(selectedQuote);

      var generatedQuote = document.querySelector('#generatedQuote');
      generatedQuote.innerHTML = selectedQuote;

      document.querySelector('#saveBtn').addEventListener("click", function() {
        localStorage.setItem("savedQuoteFamous", selectedQuote);
        var quoteStorage = localStorage.getItem('savedQuoteFamous');
        console.log(quoteStorage);
        savedEl = document.querySelector('#quoteStorage');
        savedEl.innerHTML = quoteStorage;
    })
  });
}

function gameOfThrones() {
    fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
      )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.sentence + '-' + response.character.name)
        var selectedQuote = response.sentence + '-' + response.character.name;
        var generatedQuote = document.querySelector('#generatedQuote');
        generatedQuote.innerHTML = selectedQuote;

        document.querySelector('#saveBtn').addEventListener("click", function() {
          localStorage.setItem("savedQuoteGOT", selectedQuote);
          var quoteStorage = localStorage.getItem('savedQuoteGOT');
          console.log(quoteStorage);
          savedEl = document.querySelector('#quoteStorage');
          savedEl.innerHTML = quoteStorage;
    }) 
  });
}

function randomQuotes () {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
    var selectedQuote = `${data.content} —${data.author}`;
    var generatedQuote = document.querySelector('#generatedQuote');
    generatedQuote.innerHTML = selectedQuote;

    document.querySelector('#saveBtn').addEventListener("click", function() {
      localStorage.setItem("savedQuoteRandom", selectedQuote);
      var quoteStorage = localStorage.getItem('savedQuoteRandom');
      console.log(quoteStorage);
      savedEl = document.querySelector('#quoteStorage');
      savedEl.innerHTML = quoteStorage;
    }) 
  })  
}
