var button = document.createElement("p");

button.innerText = "Shianime";

button.className = "btn";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://shianime.id/", "_blank");
});
document.getElementById("btncnt").appendChild(button);