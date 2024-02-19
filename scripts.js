// Script to open and close sidebar
function action_open() {
  let sidebar = document.getElementById("mySidebar");
  let overlay = document.getElementById("myOverlay");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
  }
}

function action_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");