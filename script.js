
  function selectMenuItem(element, id) {
    // Remove 'selected' class from all menu items
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
      item.classList.remove('selected');

    });

    // Add 'selected' class to the clicked menu item
    element.classList.add('selected');

    // Scroll to the selected container
    var container = document.getElementById(id);
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }

   // Array of different developer titles
   var developerTitles = ["Web Developer", "Mobile Application Developer", "UI/UX Designer"];

// Index to track the current title
var currentIndex = 0;

// Function to update the developer title
function updateDeveloperTitle() {
  var titleElement = document.getElementById('developer-title');
  if (titleElement) {
    titleElement.innerText = developerTitles[currentIndex];
    currentIndex = (currentIndex + 1) % developerTitles.length; // Increment index, loop back if needed
  }
}

// Interval to update the developer title every 3 seconds (adjust as needed)
setInterval(updateDeveloperTitle, 1500);
