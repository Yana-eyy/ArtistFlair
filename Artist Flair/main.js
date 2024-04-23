const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

 // Function to shuffle an array (Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Get all the .box elements
  const boxes = document.querySelectorAll('.box');

  // Convert NodeList to an array and shuffle it
  const shuffledBoxes = shuffleArray(Array.from(boxes));

  // Re-append the shuffled boxes to the exhibit container
  const exhibitContainer = document.querySelector('.exhibit-container');
  shuffledBoxes.forEach(box => {
    exhibitContainer.appendChild(box);
  });