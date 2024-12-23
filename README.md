# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [github repository](https://github.com/Fbeye04/article-preview-component)
- Live Site URL: [article preview live site](https://fbeye04.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Creating Triangle/Arrow Below Share Popup
  I learned two different methods to create a triangle shape in CSS:

Using Border Method (Preferred method):
.share-popup-arrow {
width: 0;
height: 0;
border-left: 0.5rem solid transparent;
border-right: 0.5rem solid transparent;
border-top: 0.5rem solid hsl(217, 19%, 35%);
}

- JavaScript Functionality
  I learned how to implement interactive behavior using JavaScript:

1. DOM Elements Selection
   const shareButton = document.querySelector('.share-button');
   const sharePopup = document.querySelector('.share-popup');

-- Using querySelector to select specific elements from HTML
-- Storing elements in variables for reuse

2. Event Handling
   javascriptCopyshareButton.addEventListener('click', function(e) {
   e.stopPropagation();
   toggleShare();
   });

Learned about:
-- Adding click event listeners
-- Event propagation and how to stop it
-- Using callback functions for events

3. Toggle Functionality
   javascriptCopyfunction toggleShare() {
   sharePopup.classList.toggle('active');
   shareButton.classList.toggle('active');
   }
   Understanding:
   -- How to toggle CSS classes
   -- Using classList methods
   -- State management using classes

4. Click Outside Detection
   javascriptCopydocument.addEventListener('click', function(event) {
   if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
   sharePopup.classList.remove('active');
   shareButton.classList.remove('active');
   }
   });
   Learned how to:
   -- Detect clicks outside specific elements
   -- Use the contains() method to check element relationships
   -- Implement common UI patterns for closing popups

## Author

- LinkedIn - [Muhammad Fachrezi Barus](https://www.linkedin.com/in/muhammad-fachrezi-barus/)
- Frontend Mentor - [@Fbeye04](https://www.frontendmentor.io/profile/Fbeye04)
- GitHub - [@Fbeye04](https://github.com/Fbeye04)
