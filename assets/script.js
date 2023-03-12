const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i=0, len = revealElements.length; i < len; i++) {
        const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementOnScreen) {
        revealElements[i].classList.add("revealed")
    }

    else {
        revealElements[i].classList.remove("revealed");
    }
 }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

/* The code above is a JavaScript function that enables a scroll reveal effect.
The effect is achieved by adding a CSS class to elements in the HTML DOM when they come into view, and removing the class when they go out of view.
The first line of code defines a constant variable called revealElements that selects all HTML elements in the DOM that have the attribute data-reveal.
The scrollReveal function is defined with a loop that iterates over all the elements selected by the revealElements variable.
Inside the loop, the getBoundingClientRect() method is used to get the position of each element relative to the viewport.
If the top of the element is less than the height of the window, then it is on the screen and the revealed CSS class is added to it.
If the element is not on the screen, the revealed CSS class is removed.
Finally, the function is set to execute on the scroll and load events of the window object using the addEventListener() method.
The scroll event fires when the user scrolls the webpage, and the load event fires when the page has finished loading. */
