document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("svg");
  const area = new AreaCalculator().calculateArea(svg);
  document.querySelector("#area").innerText = area;
});
