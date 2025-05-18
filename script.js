// Create starry background
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = `${Math.random() * 3}px`;
  star.style.height = star.style.width;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}

// Messages with typewriter effect
const messages = [
  "You’re the melody my heart hums every day.",
  "Every glance at you feels like catching a falling star.",
  "My world aligns perfectly when I think of you."
];

let isTyping = false;
const typewriter = document.getElementById('typewriter');

async function typeMessage(index) {
  if (isTyping) return;
  isTyping = true;
  typewriter.style.display = 'block';
  typewriter.textContent = '';
  const text = messages[index];
  for (let char of text) {
    typewriter.textContent += char;
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  isTyping = false;
}

function revealLetter() {
  const letter = document.getElementById('letter');
  letter.style.display = letter.style.display === 'block' ? 'none' : 'block';
}

// Music playlist
const playlist = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
];

let currentTrack = 0;
const audio = document.getElementById('bg-music');
audio.src = playlist[currentTrack];

audio.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  audio.src = playlist[currentTrack];
  audio.play();
});
