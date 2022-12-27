const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 38, 200 - 30, 15, 100);
ctx.fillRect(350 - 38, 200 - 30, 15, 100);
ctx.fillRect(260 - 38, 200 - 30, 60, 200);
ctx.fillRect(230, 370 + 30, 15, 150);
ctx.fillRect(260, 370 + 30, 15, 150);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();
