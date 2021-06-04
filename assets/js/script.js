function famousQuotes() {
  fetch(
    'https://quote-garden.herokuapp.com/api/v3/quotes' 
    )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data[0].quoteText + '-' +  response.data[0].quoteAuthor);
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
      });
  }

function randomQuotes () {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })  
}
