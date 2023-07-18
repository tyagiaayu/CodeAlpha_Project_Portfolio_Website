// JavaScript code

// Function to toggle the navigation menu
document.addEventListener('DOMContentLoaded', function() {
  // Code to execute after the DOM content is loaded
  function navigateTo(sectionId) {
    // Your navigation logic here
    console.log('Navigating to section:', sectionId);
  }

  // Get all the buttons with the class "nav-link-btn"
  const buttons = document.querySelectorAll('.nav-link-btn');

  // Attach click event listeners to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Call the navigateTo function with the corresponding section ID
      const sectionId = button.getAttribute('data-section');
      navigateTo(sectionId);
    });
  });
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }
  
  // Function to scroll to a section when a navigation link is clicked
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 50, // Adjust the value to offset the fixed header height
      behavior: 'smooth'
    });
  }
  
  // Event listener for menu toggle button
  var toggleBtn = document.getElementById('toggleBtn');
  toggleBtn.addEventListener('click', toggleMenu);
  
  // Event listeners for navigation links
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var sectionId = link.getAttribute('href').substr(1);
      scrollToSection(sectionId);
    });
  });
  