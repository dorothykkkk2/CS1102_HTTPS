function showAlert() {
    alert("Hello, Welcome to our website!");
}

var paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", function() {
    this.style.color = "blue";
});
  
paragraph.addEventListener("mouseout", function() {
    this.style.color = "black";
});