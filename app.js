const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
const colors = [
  "#2ecc71",
  "#27ae60",
  "#e67e22",
  "#d35400",
  "#f1c40f",
  "#f39c12",
  "#e74c3c",
  "#c0392b",
  "#3498db",
  "#2980b9",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
//canvas.addEventListener("click", )
