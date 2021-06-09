//Famous Quotes API call
function famousQuotes() {
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      //select a random quote from the API call
      var indexSelect = [Math.floor(Math.random()*response.data.length)]; 
      var selectedQuote = response.data[indexSelect].quoteText + '-' +  response.data[indexSelect].quoteAuthor;
      //Display quote
      var generatedQuote = document.querySelector('#quote-text');
      generatedQuote.innerHTML = selectedQuote;
      //Event listener on the save button to store quote into local storage
      document.querySelector('#saveBtn').addEventListener("click", function() {
        localStorage.setItem("famousQuote" + i, selectedQuote);
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
        //Select quote
        var selectedQuote = response.sentence + '-' + response.character.name;
        //Display quote
        var generatedQuote = document.querySelector('#quote-text');
        generatedQuote.innerHTML = selectedQuote;
        //Event listener on the save button to store quote into local storage
        document.querySelector('#saveBtn').addEventListener("click", function(){
          localStorage.setItem("gotQuote" + i, selectedQuote);
    }) 
  });
}

function randomQuotes () {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    //Select quote
    var selectedQuote = `${data.content} —${data.author}`;
    //Display quote
    var generatedQuote = document.querySelector('#quote-text');
    generatedQuote.innerHTML = selectedQuote;
    //Event listener on the save button to store quote into local storage
    document.querySelector('#saveBtn').addEventListener("click", function() {
      localStorage.setItem("randomQuote" + i, selectedQuote);
    }) 
  })  
}
//For future Development: Generate gif of author

/*function randomGif() {
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchTerm +
      '&api_key:shY7gu7Sxp8RYk8JryZPL6kh3oLs7coO&limit=1'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var responseContainerE1 = document.querySelector('#response-container');

      responseContainerE1.innerHTML = '';

      var gifImg = documentcreateElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

      responseContainerE1.appendChild(gifImg);

    });
  }*/

  function ronSwanson() {
    fetch(
      'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      //Pull quote from API
      var selectedQuote = response;
      //Display Quote
      var generatedQuote = document.querySelector('#quote-text');
      generatedQuote.innerHTML = selectedQuote + ' -Ron Swanson';
      //Event listener on the save button to store quote into local storage
      document.querySelector('#saveBtn').addEventListener("click", function() {
      localStorage.setItem("ronSwansonQuote" + i, selectedQuote + ' -Ron Swanson');
      }) 
    });
  }
  //Array that stores the quotes in order to display in 'Saved Quote' area
  var storedQuotes = [];

  //pulls quotes from local storage and adds them to the empty array
  function allStorage() {
    keys= Object.keys(localStorage),
    i=keys.length;
    while (i--) {
      storedQuotes.push(localStorage.getItem(keys[i]))
    }
    console.log(storedQuotes);
    return storedQuotes;
  }
  allStorage();

  var quoteStorageDiv = document.getElementById('quoteStorage');

  //'For loop' to iterate through the array and create paragraphs in the 'Saved Quote' area of all the saved items in the array.
  for (i = 0; i < storedQuotes.length; i++) {
    var createPara = document.createElement('p');
    createPara.setAttribute('id', 'savedQuoteP');
    createPara.textContent = storedQuotes[i];
    quoteStorageDiv.appendChild(createPara);
  };
  
  //function to clear local storage
  function clearSavedQuotes() {
    var savedQuoteEl = document.querySelector('#quoteStorage');
    savedQuoteEl.textContent = '';
    localStorage.clear();
  }
