class APIManager2 {
    getRandomWord() {
      return $.get('https://random-word-api.herokuapp.com/word?number=1');
    }
  
    getBookByTitle(title) {
      return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    }
  
    getGif(title) {
      return $.get('https://api.giphy.com/v1/gifs/search', {
        api_key: 'yfmfJcZr8Se0Nhv25E5F8ua61va7EqOl',
        q: title,
        limit: 1
      });
    }
  }
  
  class Renderer2 {
    constructor(apiManager) {
      this.apiManager = apiManager;
    }
  
    render(dataPromise) {
      dataPromise.then(data => {
        let randomWord = data[0];
        console.log('Random word is:', randomWord);
  
        let bookPromise = this.apiManager.getBookByTitle(randomWord);
        let gifPromise = this.apiManager.getGif(randomWord);
  
        $.when(bookPromise, gifPromise).done((bookData, gifData) => {
          if(bookData[0].items && bookData[0].items.length > 0) {
            $("#body").append(`<div>Book found: ${bookData[0].items[0].volumeInfo.title}</div>`);
          } else {
            $("#body").append(`<div>No book found with the word: ${randomWord}</div>`);
          }
          
          if(gifData[0].data && gifData[0].data.length > 0) {
            $("#body").append(`<img src="${gifData[0].data[0].images.fixed_height.url}" alt="Random gif">`);
          } else {
            $("#body").append(`<div>No gif found with the word: ${randomWord}</div>`);
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
    const apiManager2 = new APIManager2();
    const renderer2 = new Renderer2(apiManager2);
  
    $(".some-thing-else").on("click", function () {
      $("#body").empty();
      let newDataPromise = apiManager2.getRandomWord();
      renderer2.render(newDataPromise);
    });
  });
  