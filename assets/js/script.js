
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

      var generatedQuote = document.querySelector('#quote-text');
      generatedQuote.innerHTML = selectedQuote;

      document.querySelector('#saveBtn').addEventListener("click", function() {
        localStorage.setItem("famousQuote" + i, selectedQuote);
        //var quoteStorage = localStorage.getItem('famousQuote');
        //console.log(quoteStorage);
        //savedEl = document.querySelector('#quoteStorage');
        //savedEl.innerHTML = quoteStorage;
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
        //console.log(response.sentence + '-' + response.character.name)
        var selectedQuote = response.sentence + '-' + response.character.name;
        var generatedQuote = document.querySelector('#quote-text');
        generatedQuote.innerHTML = selectedQuote;

        document.querySelector('#saveBtn').addEventListener("click", function() {
          localStorage.setItem("gotQuote" + i, selectedQuote);
          //var quoteStorage = localStorage.getItem('gotQuote' + i);
          //console.log(quoteStorage);
          //savedEl = document.querySelector('#quoteStorage');
          //savedEl.innerHTML = quoteStorage;
    }) 
  });
}

/*function randomQuotes () {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    //console.log(`${data.content} —${data.author}`)
    var selectedQuote = `${data.content} —${data.author}`;
    var generatedQuote = document.querySelector('#quote-text');
    generatedQuote.innerHTML = selectedQuote;


    document.querySelector('#saveBtn').addEventListener("click", function() {
      localStorage.setItem("randomQuote" + i, selectedQuote);
      //var quoteStorage = localStorage.getItem('randomQuote' + i);
      //console.log(quoteStorage);
      //savedEl = document.querySelector('#quoteStorage');
      //savedEl.innerHTML = quoteStorage;
    }) 
  })  
}*/

function randomGif() {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      
      var responseContainerEl = document.querySelector('#gifDisplay');
      
      var gifImg = document.createElement('img');
      
      gifImg.setAttribute('src', response.data.image_url);
      
      responseContainerEl.appendChild(gifImg);
    });
}

  var storedQuotes = [];

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

  for (i = 0; i < storedQuotes.length; i++) {
    var createPara = document.createElement('p');
    createPara.setAttribute('id', 'savedQuoteP');
    createPara.textContent = storedQuotes[i];
    quoteStorageDiv.appendChild(createPara);
  };
  

  //clear local storage
  function clearSavedQuotes() {
    var savedQuoteEl = document.querySelector('#quoteStorage');
    savedQuoteEl.textContent = '';
    localStorage.clear();
  }