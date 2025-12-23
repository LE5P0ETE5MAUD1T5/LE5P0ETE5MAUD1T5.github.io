const bgm = document.getElementById("bgm");

function toggleBGM() {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}
