// use JS to set input to a variable
// d1243d59a55aac63620cde2da9cb8533 Bands in town app id 
function searchFunction() {
  input = document.getElementById("myInput");
  input.value
}
var eventsHeader = document.getElementById("events-header");
  eventsHeader.innerHTML = " <strong>Hey!</strong>"
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
    console.log("genius");
    console.log(response.response.hits[0]);
    if ( response.response.hits.length > 0) {
      var headerImage = response.response.hits[0].result.primary_artist.header_image_url;
      var artist = $("<img>").attr("src", headerImage);
      var lyricsUrl = response.response.hits[0].result.url;
      var lyrics = $("<a>").attr("href", lyricsUrl).text("lyrics");
      $("#artists").append(artist, lyrics);
    } 
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
        console.log("bands");
        console.log(response);
        // response is an array
        // I have to loop through array to get info I want
        for ( var i = 0; i < response.length; i++) {
        // i want venue information from response
        var name = $("<h3>").text(response[i].venue.name)
        var city = $("<p>").text(response[i].venue.city)
        var country = $("<p>").text(response[i].venue.country)
        $("#events").append(name, city, country);
          console.log(response[i].venue.name);
          console.log(response[i].venue.city);
          console.log(response[i].venue.country);
          eventsHeader.innerHTML = " <strong></strong>"
        }

      })
     var artistEl = document.getElementById("artist");
      
  }
// var Angel = {
//   name: "Angel",
//   cohort: "Web Development",
//   grad_date:{
//     month: "May",
//     day: "1",
//     year: "2020"
//   }
// }
// console.log(Angel.grad_date.day);