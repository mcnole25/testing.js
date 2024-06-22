# Introduction

A small and fast Javascript library to make writing test code a little easier.

Sometimes basic things in JS require long functions, so I made a library for them.

Note: This library is more for my use, so all code is subject to change.

**Found a(ny) bug(s) in the code? Please submit an issue to let me know.**

Visit the [Javascript Cheat Sheet](https://htmlcheatsheet.com/js) and [HTML Canvas Reference](https://www.w3schools.com/tags/ref_canvas.asp) to learn basic Javascript.

# Copy Paste Code

```
<!DOCTYPE html><html><head><script src="https://rawcdn.githack.com/mcnole25/testing.js/cab0a5dcd9ce6bb2490ca9c11beacc84fdfa531a/testing.js"></script></head><body><script>
// Your code here...
</script></body></html>
```

# Functions

print(*text*) - Creates a new div element and writes it to the document, kind of like Python.

editPrint(*line*, *text*) - Replaces an already existing line with new text.

createButton(*text*, *function*) - Creates a button with text and a function.

createInput(*id*) - Creates a new text input. ID parameter is required.

createSlider(*id*, *min*, *max*, *step*) - Creates a new input slider with these parameters. Default value for sliders are 0.

createCanvas(*width*, *height*) - Creates a new canvas for the document, like p5.js. Check the canvas reference for more info.

drawCube(*x*, *y*, *size*, *hue*) - Draws an isometric cube (approximation) to the canvas.

isPrime(*num*) - Checks if a number is a prime number, and returns a boolean.

# Variables

mouseX / mouseY - Self explanatory. Returns cursor X/Y position.

ctx - Variable for 2D canvas context.

z1, z2, z3, etc. - These are variables used internally by functions. Do NOT use them.
