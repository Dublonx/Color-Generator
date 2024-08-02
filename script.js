// Color Generator
document.getElementById("generate").addEventListener("click", function() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  document.getElementById("colorBox").style.backgroundColor = randomColor;
  document.getElementById("colorText").textContent = randomColor;
});