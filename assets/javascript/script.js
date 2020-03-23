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
  genius(str);
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
    "https://rest.bandsintown.com/artists/" + getArtist + "/events?app_id=d1243d59a55aac63620cde2da9cb8533";
      bandOptions = {
        url:queryURL,
        method: "GET"
      }
      $.ajax(bandOptions).then(function(response) {
        console.log(response);
        // response is an array
        // I have to loop through array to get info I want
        for ( var i = 0; i < response.length; i++) {
        // i want venue information from response
          console.log(response[i].venue.name);
          console.log(response[i].venue.city);
          console.log(response[i].venue.country);
        }

      })
     var artistEl = document.getElementById("artist");
      console.log(artistEl);
      
  }
var Angel = {
  name: "Angel",
  cohort: "Web Development",
  grad_date:{
    month: "May",
    day: "1",
    year: "2020"
  }
}
console.log(Angel.grad_date.day);