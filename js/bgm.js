const bgm = document.getElementById("bgm");

/* 플레이리스트 */
const playlist = [
  {src: "audio/bgm1.mp3", title: "First Memory", artist: "Unknown", thumb: "images/bgm-thumb1.jpg"},
  {src: "audio/bgm2.mp3", title: "Night Archive", artist: "Unknown", thumb: "images/bgm-thumb2.jpg"},
  {src: "audio/bgm3.mp3", title: "Silent World", artist: "Unknown", thumb: "images/bgm-thumb3.jpg"}
];

let currentTrack = 0;

function loadTrack(index) {
  const track = playlist[index];
  bgm.src = track.src;

  const titleEl = document.querySelector(".bgm-title");
  const artistEl = document.querySelector(".bgm-artist");
  const thumbEl = document.querySelector(".bgm-thumb img");

  if (titleEl) titleEl.textContent = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (thumbEl) thumbEl.src = track.thumb;
}

function toggleBGM() {
  if (!bgm.src) loadTrack(currentTrack);

  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  bgm.play();
}

bgm.addEventListener("ended", nextTrack);
