const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + queryType + ':' + queryValue,
        success: function (data) {
            let source = document.getElementById('book-template').innerHTML;
            let template = Handlebars.compile(source);

            let html = template(data.items); 

            document.getElementById('bookInfo').innerHTML = html; 
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};


document.getElementById('fetchButton').addEventListener('click', function() {
    let queryType = document.getElementById('queryTypeSelect').value;
    let queryValue = document.getElementById('queryValueInput').value;
    fetch(queryType, queryValue);
});

