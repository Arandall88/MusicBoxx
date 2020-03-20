// use JS to set input to a variable
function searchFunction() {
  input = document.getElementById("myInput");
  input.value
}

// grab input value
// when you click submit that input value should be what is searched
// ================STRETCH GOAL
// show input value on HTML PAGE
$("#get-music").click(function(){
  var str = $("#myInput").val();
  bandsintown(str);
  genius(str);
  console.log(str);
});

function genius (getArtist) {
  var api_url =
      "https://api.genius.com/search?access_token=6stGl_AhiQF-yaqXNIYYERqz147RjWWIxPU01IuBDbpoEpryb_ECXzWhfypCwDLr",
    options = {
      url: api_url + "&q=" + getArtist,
      method: "GET"
    
    };

  $.ajax(options).then(function(response) {
    console.log(response);
})


}

function bandsintown (getArtist) {

  var queryURL =
    "https://rest.bandsintown.com/artists/" + getArtist + "?app_id=codingbootcamp";
      bandOptions = {
        url:queryURL,
        method: "GET"
      }
      $.ajax(bandOptions).then(function(response) {
        console.log(response);

      })
     
  }
