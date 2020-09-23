import Genius from "genius-api";

const accessToken =
  "reAx8fk5uxatjo5EAcKwZEGqBNsIyZGsXVe7Lha25lGz1B05YrSBvLfWdxlAjzxC";
const genius = new Genius(accessToken);

// genius API does not have an artist entrypoint.
// Instead, search for the artist => get a song by that artist => get API info on that song => get artist id
Genius.prototype.getArtistIdByName = function getArtistIdByName(artistName) {
  const normalizeName = name => name.replace(/\./g, '').toLowerCase()   // regex removes dots
  const artistNameNormalized = normalizeName(artistName)

  return this.search(artistName)
    .then((response) => {
      for (let i = 0; i < response.hits.length; i += 1) {
        const hit = response.hits[i]
        if (hit.type === 'song' && normalizeName(hit.result.primary_artist.name) === artistNameNormalized) {
          return hit.result
        }
      }
      throw new Error(`Did not find any songs whose artist is "${artistNameNormalized}".`)
    })
    .then(songInfo => songInfo.primary_artist.id)
}

const genius = new Genius(accessToken)
genius.getArtistIdByName('Drake')
.then(artistId => { /* ... */ })
.catch(err => console.error(err))

genius.songsByArtist(artistId, {
    per_page: 50,
    sort: 'popularity',
})
.then(songs => songs.map(song => song.url)) // has more song info like 'id', 'title', ...

Genius.prototype.getSongLyrics = function getSongLyrics(geniusUrl) {
  return fetch(geniusUrl, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) return response.text();
      throw new Error("Could not get song url ...");
    })
    .then(parseSongHTML);
};

// parse.js
import cheerio from "cheerio";

function parseSongHTML(htmlText) {
  const $ = cheerio.load(htmlText);
  const lyrics = $(".lyrics").text();
  const releaseDate = $("release-date .song_info-info").text();
  return {
    lyrics,
    releaseDate,
  };
}