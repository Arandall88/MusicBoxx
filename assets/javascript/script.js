// use JS to set input to a variable
// d1243d59a55aac63620cde2da9cb8533 Bands in town app id 
function searchFunction() {
  input = document.getElementById("myInput");
  input.value
}

// grab input value
// when you click submit that input value should be what is searched
// ================STRETCH GOAL
// show input value on HTML PAGE
$("#artist").click(function(){
  var str = $("#myInput").val();
  bandsintown(str);
  genius();
  console.log(str);
  console.log("click");
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
    "https://rest.bandsintown.com/artists/" + getArtist + "?app_id=d1243d59a55aac63620cde2da9cb8533";
      bandOptions = {
        url:queryURL,
        method: "GET"
      }
      $.ajax(bandOptions).then(function(response) {
        console.log(response);

      })
     var artistEl = document.getElementById("artist");
      console.log(artistEl);
      
  }
