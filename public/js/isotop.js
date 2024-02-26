// Get the grid element
var grid = document.querySelector(".grid");

// Initialize Isotope
var iso = new Isotope(grid, {});

// Add event listener for menu filter clicks
document
  .querySelector(".menu_filter")
  .addEventListener("click", function (event) {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      // Get the filter value from the data-filter attribute
      var filterValue = event.target.getAttribute("data-filter");

      // Filter the Isotope grid
      iso.arrange({ filter: filterValue });
    }
  });

// Add event listener for menu filter button clicks
document.querySelectorAll(".menu_filter button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    // Remove the 'active' class from siblings
    var siblings = this.parentNode.querySelectorAll(".active");
    siblings.forEach(function (sibling) {
      sibling.classList.remove("active");
    });

    // Add the 'active' class to the clicked button
    this.classList.add("active");

    // Prevent default behavior
    event.preventDefault();
  });
});
