// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
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
    { title: "I don't want to go around", artist: "Bongi Dube", genre: "pop"},
    { title: "The Chain", artist: "Fleetwood Mac", genre: "pop"},
    { title: "Salakanjaloke", artist: "Babes Wodumo", genre:  "Qom"},
    { title: "Nkalakata", artist: "Mandoza", genre:  "Kwaito"},
   // { title: "", artist: "", genre:  ""}
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    Benjamin: "Rock",
    Puso: "Pop",
    Mmathabo: "R&B",
    Annastasia: "Rock",
    Thabang: "Pop",
    
    // Add preferences for Drax, Rocket, and Groot
    

};

guar.forEach(generatePlaylist => {
    songs[index] = guar.property("");
    
});

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    
    //const BenjaminPlaylist = guardians.map(playlist => playlist.genre);
   // const AnnastasiaPlaylist = songs.map(playlist => playlist.genre);
   // const MmathaboPlaylist = songs.map(playlist => playlist.genre);
  //  const PusoPlaylist = songs.map(playlist => playlist.genre);
//const ThabangPlaylist = songs.map(playlist => playlist.genre, );
    //const  = catwomanGadgets.map(gadget => gadget.name);
    
   // console.log("Benjamin's PlayList:", BenjaminPlaylist);
   // console.log("Annastasia's Playlist:", AnnastasiaPlaylist);
   // console.log("Mmathabo's Playlist:", MmathaboPlaylist);
   // console.log("Puso's Playlist:", PusoPlaylist);
   // console.log("Thabang's Playlist:", ThabangPlaylist );
    //console.log("CatWoman's Gadgets:", catwomanGadgetNames);
  //  playlist.forEach((guardians) => console.log(guardians));
    

}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
