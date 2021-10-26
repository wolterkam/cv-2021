This repository includes the source code of my [CV web page](https://cv.kamilwolter.com) in case anyone would be interested in how it was made.

The **src** directory contains the working HTML file and its supplementary SCSS stylesheet as well as an **src/assets** folder with a few SVG images used here and there. Some of the graphics were borrowed from Google's [material icon set](https://fonts.google.com/icons).

![Screenshot](../main/preview.png)

Launching `npm run build` command will trigger a simple script which:

1. Minifies the HTML
2. Compiles the SCSS stylesheed into CSS
3. Copies the assets into the **dist** directory for further deployment

This project also has a "night mode" which should work as long as it's running in a browser that supports [CSS image filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).
