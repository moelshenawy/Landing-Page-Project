/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// Select All (sections)
let allSections = document.querySelectorAll("section");

// Select The (ul (navBarList))
const ul = document.querySelector("#navbar__list");

// Create Fragment Element
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Build menu
allSections.forEach(function (element) {
  // Get Data-Nav (Name)
  const dataNav = element.getAttribute("data-nav");
  // Create (li)
  const myList = document.createElement("li");
  // Create Links
  const myLinks = document.createElement("a");

  //Remove li default style
  myList.style.listStyle = "none";

  //Add Attributes To (myLinks('a'))

  myLinks.setAttribute("href", `#${dataNav}`);
  //Add Attributes to MyLinks ('li')
  myLinks.setAttribute("class", "menu__link");
  myLinks.textContent = dataNav;
  // Apend (links ('a') ) To the (myList ('li'))
  myList.appendChild(myLinks);

  // Scroll to section on link click
  myLinks.addEventListener("click", function (e) {
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  });

  // apend fragment To (myList ('li'))
  fragment.appendChild(myList);
});
ul.appendChild(fragment);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

////////////////////////////////////////////////////////////////

/**
 * End Main Functions
 * Begin Events
 *
 */
const addClass = () => {
  allSections.forEach((section_) => {
    // Add class 'active' to section when near top of viewport
    const sectionsTop = section_.getBoundingClientRect().top;
    const sectionsName = section_.getAttribute("data-nav");
    const links = document.querySelectorAll("a.menu__link");

    if (sectionsTop >= 0 && sectionsTop <= 300) {
      section_.classList.add("your-active-class");
      links.forEach((link) => {
        if (link.textContent === sectionsName) {
          link.classList.add("your-active-class");
        } else {
          link.classList.remove("your-active-class");
        }
      });
    } else {
      section_.classList.remove("your-active-class");
    }
  });
};
// Add
window.addEventListener("scroll", addClass);

////////////////////////////////////////////////////////////////
// Define the botton variable
let toTop = document.querySelector(".goTop");

// added classes for the bottom to show on or of
window.onscroll = function () {
  this.scrollY >= 550
    ? toTop.classList.add("show")
    : toTop.classList.remove("show");
  // function to go Up on The Page
  toTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

////////////////////////////////////////////////////////////////

// Hide fixed navigation bar while not scrolling
const nav = document.querySelector(".navbar__menu");
const toScroll = window.scrollY;
window.addEventListener("scroll", () => {
  if (toScroll < window.scrollY) {
    nav.classList.remove("nav_Hidden");
  } else {
    nav.classList.add("nav_Hidden");
  }
});
