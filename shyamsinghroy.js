const songs = [
  {
    title: "Rise of Shyam",
  
    cover: "https://i.ytimg.com/vi/60P5xR4GxvE/maxresdefault.jpg",
    src: "music/Rise of Shyam.mp3"
  },
  
  {
    title: "Pranavalaya",
  
    cover: "https://i.ytimg.com/vi/4CKFAb1FNns/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpBhzEE-mWKOEaB52IIy90NQTyJg",
    src: "music/Pranavalaya.mp3"
  },
  
  {
    title: "Sirivennela",
    
    cover: "https://i.ytimg.com/vi/m2kU2b9PYcs/maxresdefault.jpg",
    src: "music/3-Sirivennala.mp3"
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
