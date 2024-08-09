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
function createSlider(z11, z12, z13, z14, z19) {
let z10 = document.createElement("input");
z10.type = "range";
z10.id = z11;
z10.min = z12;
z10.max = z13;
z10.step = z14;
z10.value = z19;
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
function isPrime(z23) {
if (z23 === 2) return true;
if (z23 % 2 === 0) return false;
for (z24 = 3; z24 <= Math.sqrt(z23); z24 += 2)
if (z23 % z24 === 0) return false; 
return z23 > 1;
}
function printStyle(z20, z21, z22, z25) {
document.getElementsByTagName("div")[z20].style.color = z21;
document.getElementsByTagName("div")[z20].style.fontSize = z22 + "px";
document.getElementsByTagName("div")[z20].style.fontFamily = z25;
}
function backgroundColor(z26) {
document.querySelector("body").style.backgroundColor = z26;
}
function bigSqrt(z29, z30) {
let z27 = 0n;
let z28 = 2n ** ((BigInt(z30) + 10n) * 4n);
while (z28 > 0n) {
if (z27 ** 2n > BigInt(z29) * 10n ** (BigInt(z30) * 2n)) {
z27 -= z28;
} else {
z27 += z28;
}
z28 /= 2n;
}
z27 /= 10n;
return String(String(z27).slice(0, String(z27).length - Number(z30) + 1)) + "." + String(String(z27).slice(String(z27).length - Number(z30) + 1, String(z27).length));
}
