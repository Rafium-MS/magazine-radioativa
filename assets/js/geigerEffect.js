export function setRadiation(level) {
  const needle = document.getElementById('geigerNeedle');
  if (!needle) return;

  const angles = {
    green: 'translate(-50%, -100%) rotate(45deg)',
    yellow: 'translate(-50%, -100%) rotate(90deg)',
    red: 'translate(-50%, -100%) rotate(135deg)'
  };

  needle.style.transform = angles[level];
  playGeigerSound(level);
}

function playGeigerSound(level) {
  const counter = document.querySelector('.geiger-counter');
  if (!counter) return;

  counter.style.animation = 'pulse 0.5s ease';
  setTimeout(() => { counter.style.animation = ''; }, 500);
}
