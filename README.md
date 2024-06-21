# Introduction

A small and fast Javascript library to make writing test code a little easier.

Sometimes basic things in JS require long functions, so I made a library for them.

Note: This library is more for my use, so all code is subject to change.

Visit the [Javascript Cheat Sheet](https://htmlcheatsheet.com/js) and [HTML Canvas Reference](https://www.w3schools.com/tags/ref_canvas.asp) to learn basic Javascript.

# Copy Paste Code

```
<!DOCTYPE html><html><head>
<script src="https://cdn.jsdelivr.net/gh/mcnole25/testing.js@master/testing.js"></script>
</head><body><script>
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

# Variables

mouseX / mouseY - Self explanatory. Returns cursor X/Y position.

ctx - Variable for 2D canvas context.
