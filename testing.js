function print(z2) {
let z1 = document.createElement("div");
z1.innerText = z2;
document.body.appendChild(z1);
}
function editPrint(z3, z4) {
document.getElementsByTagName("div")[z3].innerHTML = z4;
}
function createButton(z6, z7) {
let z5 = document.createElement("button");
z5.innerText = z6;
z5.onclick = z7;
document.body.appendChild(z5);
}
function createInput(z9) {
let z8 = document.createElement("input");
z8.id = z9;
document.body.appendChild(z8);
}
function createSlider(z11, z12, z13, z14) {
let z10 = document.createElement("input");
z10.type = "range";
z10.value = 0;
z10.id = z11;
z10.min = z12;
z10.max = z13;
z10.step = z14;
document.body.appendChild(z10);
}
document.onmousemove = function(z15) {
mouseX = z15.pageX;
mouseY = z15.pageY;
}
function createCanvas(z17, z18) {
let z16 = document.createElement("canvas");
z16.id = "myCanvas";
z16.width = z17;
z16.height = z18;
document.body.appendChild(z16);
ctx = myCanvas.getContext("2d");
}
function drawCube(z19, z20, z21, z22) {
ctx.beginPath();
ctx.moveTo(z19, z20);
ctx.lineTo(z19 - z21, z20 - z21 * 0.5);
ctx.lineTo(z19 - z21, z20 - z21 * 1.125 - z21 * 0.5);
ctx.lineTo(z19, z20 - z21 * 1.125 * 1);
ctx.closePath();
ctx.fillStyle = "hsl(" + z22 + ", 100%, 35%)";
ctx.fill();
ctx.beginPath();
ctx.moveTo(z19, z20);
ctx.lineTo(z19 + z21, z20 - z21 * 0.5);
ctx.lineTo(z19 + z21, z20 - z21 * 1.125 - z21 * 0.5);
ctx.lineTo(z19, z20 - z21 * 1.125 * 1);
ctx.closePath();
ctx.fillStyle = "hsl(" + z22 + ", 100%, 50%)";
ctx.fill();
ctx.beginPath();
ctx.moveTo(z19, z20 - z21 * 1.125);
ctx.lineTo(z19 - z21, z20 - z21 * 1.125 - z21 * 0.5);
ctx.lineTo(z19 - z21 + z21, z20 - z21 * 1.125 - (z21 * 0.5 + z21 * 0.5));
ctx.lineTo(z19 + z21, z20 - z21 * 1.125 - z21 * 0.5);
ctx.closePath();
ctx.fillStyle = "hsl(" + z22 + ", 100%, 65%)";
ctx.fill();
}
