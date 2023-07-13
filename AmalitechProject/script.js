const toggleButton = document.getElementById('dark-mode-toggle');
const generalBox = document.querySelector('.general-box');

function toggleDarkMode() {
  if (toggleButton.checked) {
    generalBox.classList.add('dark-mode');
  } else {
    generalBox.classList.remove('dark-mode');
  }
}

toggleButton.addEventListener('change', toggleDarkMode);
