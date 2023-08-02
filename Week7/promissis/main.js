class APIManager {
    getRandomWord() {
      return $.get('https://random-word-api.herokuapp.com/word?number=1');
    }
  
    getBookByTitle(title) {
      return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    }
  }
  
  class Renderer {
    constructor(apiManager) {
      this.apiManager = apiManager;
    }
  
    render(dataPromise) {
      dataPromise.then(data => {
        let randomWord = data[0];
        console.log('Random word is:', randomWord);
  
        this.apiManager.getBookByTitle(randomWord)
          .then(data => {
            if(data.items && data.items.length > 0) {
              data.items.forEach(item => {
                $("#body").append(`<div>Book found: ${item.volumeInfo.title}</div>`);
              });
            } else {
              $("#body").append(`<div>No book found with the word: ${randomWord}</div>`);
            }
          })
          .fail((jqXHR, textStatus, errorThrown) => {
            console.error('Error:', errorThrown);
          });
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        console.error('Error:', errorThrown);
      });
    }
  }
  
  $(document).ready(function(){
    const apiManager = new APIManager();
    const renderer = new Renderer(apiManager);
  
    let initialDataPromise = apiManager.getRandomWord();
    renderer.render(initialDataPromise); 
  
    $(".some-thing").on("click", function () {
      let newDataPromise = apiManager.getRandomWord();
      renderer.render(newDataPromise);
    });
  });
  