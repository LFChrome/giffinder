// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
    function giphyURLWithSearchTerm(searchTerm) {
        // write a function that will return a url for the giphy API with
        // the searchTerm provided in the parameters
        var newUrl = 'https://api.giphy.com/v1/stickers/search?q=parameter&api_key=dc6zaTOxFJmzC';
        return newUrl.replace('parameter', searchTerm);
    }
    
    function appendImageToBody(srcURL) {
        $('body').append('<img src="' + srcURL + '">');
    }

    function callGiphyAPIWithSearchTerm(searchTerm) {
        $.ajax({
            url: giphyURLWithSearchTerm(searchTerm),
            method: "GET",
            success: function(response) {
            var info = response.data;
                // Log the whole response to the console
                //console.log(response);
                if (info.length > 0) {
                // Log the first image of the data to the console
                    console.log(info[0].url);
                // Log the "type" property of the first image object to the console
                    console.log(info[0].type);   
                // Log the "title" property of the first image object to the console
                    console.log(info[0].title);
                }
          },
        }); 
    }
  
  
  
});
