const textDisplay = document.getElementById('text');
const words = ['Coder.', 'Developer.', 'Problem Solver.', 'Creator.'];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
    textDisplay.textContent = currentWord.substring(0, j);
  } else {
    j++;
    textDisplay.textContent = currentWord.substring(0, j);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
