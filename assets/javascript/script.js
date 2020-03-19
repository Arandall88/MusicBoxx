// dAeQi-3K7wMf5YkR2OSWP-lvt3SY5JtuF9EKZmH4Ik7brQxXfpMGtY0uWKzEOJe1 Client Id
// ntTHfcs5w9I3cLfkmUfE98Drvpj9605nlReLjTwX0rJlkisTFURNesPNoRutvbSC-bgj_IF1BFSAOgC4a465Vw client secret
// In7z5zIvdo5XP5c3P720z22-4x4lIBwbH_Eke9sOion9sWvvv3dcrUFQ6bV5iIFo  access token
// https://REDIRECT_URI/#access_token=ACCESS_TOKEN&state=STATE
// Deezer application ID 402084
// Deezer Secret Key 84869eb24183ff5f22f1c715ee08c5ee
$("#submit-button").click(genius);
function genius() {
  var api_url =
      "https://api.genius.com/search?access_token=6stGl_AhiQF-yaqXNIYYERqz147RjWWIxPU01IuBDbpoEpryb_ECXzWhfypCwDLr",
    options = {
      url: api_url + "&q=Beyonce",
      method: "GET"
    };

  $.ajax(options).then(function(response) {
    console.log(response);
  });
}
// create a fucntion to get deezer info
// create a button click to console log deezer info
// find out how to use deezer to get artist info