// Array of song objects
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  { title: "I don't want to go around", artist: "Bongi Dube", genre: "Pop" },
  { title: "The Chain", artist: "Fleetwood Mac", genre: "Pop" },
  { title: "Salakanjaloke", artist: "Babes Wodumo", genre: "Qom" },
  { title: "Nkalakata", artist: "Mandoza", genre: "Kwaito" },
  { title: "Tjovitjo", artist: "Brickz", genre: "Kwaito" }
  // Feel free to add even more songs
];

// Array containing each Guardian's preferred genre
const guardians = [
  { name: "Benjamin", preference: "Rock" },
  { name: "Puso", preference: "Pop" },
  { name: "Mmathabo", preference: "R&B" },
  { name: "Annastasia", preference: "Rock" },
  { name: "Thabang", preference: "Pop" }
  // Add preferences for more Guardians
];

// Function to generate playlists based on preferred genre
function generatePlaylist(guardians, songs) {
  const playlists = guardians.map(guardian => {
      const preferredSongs = songs.filter(song => song.genre === guardian.preference);
      return { name: guardian.name, playlist: preferredSongs };
  });

  // Display the playlists in the HTML
  const playlistElement = document.getElementById("playlist");
  playlistElement.innerHTML = "";
  playlists.forEach(guardianPlaylist => {
      const guardianDiv = document.createElement("div");
      guardianDiv.classList.add("guardian-playlist");

      const guardianName = document.createElement("h3");
      guardianName.textContent = `${guardianPlaylist.name}'s Playlist:`;
      guardianDiv.appendChild(guardianName);

      const songList = document.createElement("p");
      guardianPlaylist.playlist.forEach(song => {
          const songItem = document.createElement("p");
          songItem.textContent = `${song.title} by ${song.artist} (${song.genre})`;
          songList.appendChild(songItem);
      });

      guardianDiv.appendChild(songList);
      playlistElement.appendChild(guardianDiv);
  });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
