// Show emotional popup message
function showEmotion(el, text) {
  const popup = document.getElementById('emotionPopup');
  const main = document.getElementById('mainContent');

  // Show popup with message
  popup.innerHTML = text;
  popup.style.display = 'block';
  main.classList.add('dimmed');

  // Hide after delay
  setTimeout(() => {
    popup.style.display = 'none';
    main.classList.remove('dimmed');
  }, 4000);
}

// Floating Hearts Background
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 4 + 's';
  document.querySelector('.hearts-bg').appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 700);
