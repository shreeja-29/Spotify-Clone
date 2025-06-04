const songs = [
  {
    title: "Theme of kalki",
  
    cover: "https://i.ytimg.com/vi/CP6vDjbwqV0/maxresdefault.jpg",
    src: "music/Theme of Kalki.mp3"
  },
  {
    title: "Ta Takkara",
    
    cover: "https://i.ytimg.com/vi/MhwjH9FDjOc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtYX0pD4b2iwTfO9usDYK_Anghww",
    src: "music/Ta Takkara.mp3"
  },
  
  {
    title: "Bujji Theme",
  
    cover: "https://i.ytimg.com/vi/Nzf4KPv8R9M/maxresdefault.jpg",
    src: "music/Bujji Theme.mp3"
  },
  


  

];

let currentSongIndex = 0;

const audioPlayer = new Audio();
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentSongTitle = document.getElementById("current-song-title");
const currentArtistName = document.getElementById("current-artist-name");
const songCover = document.querySelector(".music-player img");

function loadSong(index) {
  const song = songs[index];
  audioPlayer.src = song.src;
  currentSongTitle.textContent = song.title;
  currentArtistName.textContent = song.artist;
  songCover.src = song.cover;
}

function playSong() {
  audioPlayer.play();
  playPauseBtn.textContent = "Pause";
}

function pauseSong() {
  audioPlayer.pause();
  playPauseBtn.textContent = "Play";
}

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
});

//load the initial song
loadSong(currentSongIndex);