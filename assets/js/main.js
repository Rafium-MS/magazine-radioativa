import { setRadiation } from './geigerEffect.js';
import { expandPost } from './expandPost.js';

window.expandPost = expandPost;

document.addEventListener("DOMContentLoaded", () => {
  setRadiation('green');

  setInterval(() => {
    const levels = ['green', 'yellow', 'red'];
    const random = levels[Math.floor(Math.random() * levels.length)];
    setRadiation(random);
  }, 8000);

  setInterval(() => {
    const elements = document.querySelectorAll('.post-title, .logo');
    const el = elements[Math.floor(Math.random() * elements.length)];
    el.style.animation = 'glitch 0.3s ease-in-out';
    setTimeout(() => { el.style.animation = ''; }, 300);
  }, 15000);
});
