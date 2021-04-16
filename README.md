# React Countries App

## Description
This is a [frontendmentor.io](frontendmentor.io) challenge. The challenge was to take pictures and an API to make the app. The challege doesn't give you any code or markup, just a deisgn, a link to the API they want to use, and a few tips. I used react with react-router-dom since there were mutliple distinct pages. 

## Framework(s)/Package(s)
* ReactJS
* react-router-dom
* SASS/SCSS

## Challenges
* Drop down styling. The styling of the ```<select>``` tag wasn't adequate to meet the design, so I had to import a package which allowed you to create a more customizable drop down.
* Bad performance. At first, all of countries would be rendered to the page, including the image of their flags. This took up bandwidth and made searching for countries noticably slow. To solve both of these issues I implemented lazy loading on the country tiles, so they load in as you scroll versus all at once.
