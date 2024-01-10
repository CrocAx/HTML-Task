var toggleButton = document.getElementById("actionButton");
var toggleParagraph = document.getElementById("toggleParagraph");

if (toggleButton && toggleParagraph) {
  toggleButton.addEventListener("click", function () {
    toggleVisibility(toggleParagraph);
  });
}

function toggleVisibility(element) {
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var day = now.getDate();
  var month = now.getMonth() + 1; // Months are zero-based
  var year = now.getFullYear();

  // Pad single digit minutes with a leading zero
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var timeString = hours + ":" + minutes;
  var dateString = day + "/" + month + "/" + year;

  // Update the content of the clock
  document.getElementById("clock").innerHTML = dateString + " " + timeString;

  // Update every 1 minute
  setTimeout(updateClock, 60000);
}

// Initial call to display the clock
updateClock();
