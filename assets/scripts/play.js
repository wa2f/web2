const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

// Songs info
const songs = [
  {
    title: 'Feel The Hard Rock',
    artist: 'Hardrox',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/(17) [Hardrox] Feel The Hard Rock (Up To No Good) (HEiko & Maiko Extented Vocal Mix).mp3',
    duration: '3:11',
  },
  {
    title: 'Dance with Me',
    artist: 'www.Farskids250.com',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/1_14 Ladi Dadi _Tommy Trash Remix_ _ _128_.mp3',
    duration: '3:47',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Far East Movement',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 - Aint Coming Down (Yeah Im Trippin Mix) feat Matthew Koma & Sidney Samson.mp3',
    duration: '3:48',
  },
  {
    title: 'Guap',
    artist: 'Big Sean',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/01 Guap.mp3',
    duration: '4:32',
  },
  {
    title: 'Hater Love',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 - Hater Love.mp3',
    duration: '3:35',
  },
  {
    title: 'How We Do (Party)',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 How We Do (Party).mp3',
    duration: '4:06',
  },
  {
    title: 'No Church in the Wild (feat. Frank Ocean)',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 No Church in the Wild (feat. Fran.mp3',
    duration: '4:32',
  },
  {
    title: 'READY',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 - READY.mp3',
    duration: '2:24',
  },
  {
    title: 'Stranger',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/01 - stranger.mp3',
    duration: '3:58',
  },
  //I reached hear......................................
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/music.jpg',
    discPath: 'music/music10.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/music.jpg',
    discPath: 'music/music11.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/music.jpg',
    discPath: 'assets/music/music12.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music13.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music14.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music15.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music16.mp3',
    duration: '1:54',
  },
  {
    title: 'Green Chair',
    artist: 'Diego Nava',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/music1.mp3',
    duration: '1:33',
  },
  {
    title: 'Dance with Me',
    artist: 'Ahjay Stelino',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/music2.mp3',
    duration: '2:22',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music3.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music4.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music5.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music6.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music7.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music8.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music9.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music10.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music11.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'assets/images/cover3.jpg',
    discPath: 'assets/music/music12.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music13.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music14.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music15.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music16.mp3',
    duration: '1:54',
  },
  {
    title: 'Green Chair',
    artist: 'Diego Nava',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/music1.mp3',
    duration: '1:33',
  },
  {
    title: 'Dance with Me',
    artist: 'Ahjay Stelino',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/music2.mp3',
    duration: '2:22',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music3.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music4.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music5.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music6.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music7.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music8.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music9.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music10.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music11.mp3',
    duration: '1:54',
  },
  {
    title: 'Gimme that Bottle',
    artist: 'Michael Ramir',
    coverPath: 'assets/images/cover3.jpg',
    discPath: 'assets/music/music12.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music13.mp3',
    duration: '1:54',
  },


{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music14.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music15.mp3',
    duration: '1:54',
  },

{
    title: 'Gimme that Bottle',
    artist: 'chris Brown',
    coverPath: 'images/image-2.jpg',
    discPath: 'music/music16.mp3',
    duration: '1:54',
  },




];

// Load song initially
loadSong(songs[songIndex]);

// Load the given song
function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}

// Toggle play and pause
function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}

// Update icon
function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

// Update progress bar
function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

// Go to previous song
function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

// Go to next song
function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

// Change song progress when clicked on progress bar
function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));

// Go to next song when next button clicked
prev.addEventListener('click', gotoPreviousSong);

// Go to previous song when previous button clicked
next.addEventListener('click', gotoNextSong.bind(null, false));

// Move to different place in the song
progressContainer.addEventListener('click', setProgress);
