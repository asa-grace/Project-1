//Ron Swanson quotes API call
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
    generatedQuote.innerHTML = selectedQuote + '<br>' + '-Ron Swanson';
    //Event listener on the save button to store quote into local storage
    document.querySelector('#ronSwansonSaveBtn').addEventListener("click", function() {
    localStorage.setItem("ronSwansonQuote" + i, selectedQuote + ' -Ron Swanson');
    }) 
  });
}
// GOT quote API call
function gameOfThrones() {
    fetch(
      "https://game-of-thrones-quotes.herokuapp.com/v1/random"
      )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        //Select quote and author
        var selectedQuote = response.sentence;
        var author = response.character.name;
        //Display quote
        var generatedQuote = document.querySelector('#quote-text');
        generatedQuote.innerHTML = selectedQuote + '<br>' + '-' + author;
        //Event listener on the save button to store quote into local storage
        document.querySelector('#gotSaveBtn').addEventListener("click", function(){
          localStorage.setItem("gotQuote" + i, selectedQuote + '-' + author);
    }) 
  });
}

//Famous Quotes API call
function famousQuotes() {
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      //select a random quote from the API call
      var indexSelect = [Math.floor(Math.random()*response.data.length)]; 
      var selectedQuote = response.data[indexSelect].quoteText;
      var author = response.data[indexSelect].quoteAuthor;
      //Display quote
      var generatedQuote = document.querySelector('#quote-text');
      generatedQuote.innerHTML = selectedQuote +'<br>' + '-' + author;
      //Event listener on the save button to store quote into local storage
      document.querySelector('#famousSaveBtn').addEventListener("click", function() {
        localStorage.setItem("famousQuote" + i, selectedQuote + ' -' + author);
    })
  });
}

//Random Quote API call
function randomQuotes () {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    //Select quote
    var selectedQuote = data.content;
    var author = data.author;
    //Display quote
    var generatedQuote = document.querySelector('#quote-text');
    generatedQuote.innerHTML = selectedQuote + '<br>' + '-' + author;
    //Event listener on the save button to store quote into local storage
    document.querySelector('#randomSaveBtn').addEventListener("click", function() {
      localStorage.setItem("randomQuote" + i, selectedQuote + '-' + author);
    }) 
  })  
}

/*For future Development: Generate gif of author
function addGif() {
  fetch(
    'https://api.giphy.com/v1/gifs/random?&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      
      var responseContainerEl = document.querySelector('#img');
      
      var gifImg = document.createElement('img');
      
      var displayImg =  response.data.image_url;
      console.log(displayImg);
      responseContainerEl.innerHTML = displayImg;
    });
}*/


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
