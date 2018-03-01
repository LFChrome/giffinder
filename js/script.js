// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
function appendImageToBody(srcURL) {
    $('.gallery').append('<img src="' + srcURL + '">');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    var newUrl = 'https://api.giphy.com/v1/stickers/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';
    $.ajax({
        url: newUrl,
        method: "GET",
        success: function(response) {
        var info = response.data;
        console.log(info);
            if (info.length > 0) {
                appendImageToBody(info[0].images.original.url);
            }
        },
    }); 
}

$(document).ready(function(){
    $('#srch').click(function(){
        var input = $('#srch-term').val();
        callGiphyAPIWithSearchTerm(input);
    });
});
