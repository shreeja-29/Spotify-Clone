const songs = [
  {
    title: "Samayama",
  
    cover: "https://i.ytimg.com/vi/Zz1M1iVEkwM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0oIoKV_DEp_HNnNOlkzN2i2-6ag",
    src: "music/Samayama (1).mp3"
  },
  {
    title: "Odiyamma",
    
    cover: "https://cdn.telugu360.com/wp-content/uploads/2023/11/maxresdefault-13.jpg",
    src: "music/Odiyamma.mp3"
  },
  {
    title: "Gajju Bomma",
    
    cover: "https://i.ytimg.com/vi/oLGdf-JuLWA/maxresdefault.jpg",
    src: "music/Gaaju Bomma.mp3"
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