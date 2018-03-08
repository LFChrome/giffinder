// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
function appendImageToBody(srcURL, number) {
    $('#gif' + number).html('<img class="thumbnail" id="#gif' + number + '"src="' + srcURL + '">');
    console.log('success');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    var newUrl = 'https://api.giphy.com/v1/stickers/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';
    $.ajax({
        url: newUrl,
        method: "GET",
        success: function(response) {
            var info = response.data;
            for(var i = 0; i < 12; i++) {
                var random = Math.floor(Math.random() * info.length);
                var URL = info[random].images.original.url;
                appendImageToBody(URL, i);
            }
        },
    }); 
}

// *******************document.ready function************************
$(document).ready(function(){
    $('#srch').click(function(){
        var input = $('#srch-term').val();
        callGiphyAPIWithSearchTerm(input);
    });
    /* $("di").click(function(event) {
        alert( "clicked: " + event.target.id);
    });
    */
});
