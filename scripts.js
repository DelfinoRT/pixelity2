 // Script to open and close sidebar
 function action_open() {
    if (document.getElementById("mySidebar").style.display === "block") {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }
  }
   
  function action_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  // Function to get or set the visit count from/to localStorage
function updateVisitCount() {
  let count = localStorage.getItem('visitCount');
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem('visitCount', count);
  document.getElementById('visitCount').textContent = count;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
  updateVisitCount();
});
