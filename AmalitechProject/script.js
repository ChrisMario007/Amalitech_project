// const toggleButton = document.getElementById('dark-mode-toggle');
// const generalBox = document.querySelector('.general-box');

// function toggleDarkMode() {
//   if (toggleButton.checked) {
//     generalBox.classList.add('dark-mode');
//   } else {
//     generalBox.classList.remove('dark-mode');
//   }
// }

// toggleButton.addEventListener('change', toggleDarkMode);

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
  if (toggleButton.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

toggleButton.addEventListener('change', toggleDarkMode);
