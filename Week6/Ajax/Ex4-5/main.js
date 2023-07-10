$(document).ready(function(){
    $('#searchButton').click(function() {
        let searchQuery = $('#gifSearch').val();

        $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search',
            type: 'GET',
            data: {
                api_key: 'yfmfJcZr8Se0Nhv25E5F8ua61va7EqOl',
                q: searchQuery
            },
            success: function(response) {
                let firstGif = response.data[0];
                let gifUrl = firstGif.embed_url;

                // Set the URL as the source of the iframe
                document.getElementById('catGif').src = gifUrl; // id changed to 'catGif'
            },
            error: function() {
                console.log('Could not retrieve GIFs');
            }
        });
    });
});
