// The DOM (Document Object Model) is a programming interface for web documents.
// It represents the structure of a web page as a tree-like hierarchy, where every element (like tags, className, id, attributes, text, etc.) is a node. 
// The DOM allows you to interact with, modify, and manipulate the content, structure, and style of a webpage using programming languages like JavaScript.
// we can manipulate HTML & CSS using "DOM" method, and i we can give logic, action  and animation to webPage using "DOM" method.

let nav = document.getElementById("nav"); // using document.getElementById we can access "HTMl" id(id="") element value.

let menuName = document.getElementsByName("menu"); // using document.getElementsByName we can access "HTML" name(name="") element value.

let langList = document.getElementsByClassName("languages-list"); // using document.getElementsByClassName we can access "HTML" class(class="") elememt value.


// using document.querySelector we can access "HTML" any identifier/classes, but only first element. 
let lang = document.querySelector("#LC"); // we can access class(class="") by using .(Dot)and then value.

let Development = document.querySelector(".DVP"); // we can access id(id="") by using #(Hash) and then value. 

let List = document.querySelector(".Development-List");

let fieldList = document.querySelectorAll(".list"); // using document.querySelectorAll we can access all elements, Classes and identifier .


// --------------------------------- i am manipulating HTML & CSS here --------------------------------------
// General styles for body
// Setting styles for the entire webpage body
document.body.style.fontFamily = "Arial, sans-serif";  // Set font family to Arial
document.body.style.margin = "0";  // Remove default margin from body
document.body.style.padding = "0";  // Remove default padding from body
document.body.style.boxSizing = "border-box";  // Ensure padding and border are included in the element's total width and height
document.body.style.background = "#f0f0f0";  // Set the background color of the body to a light grey

// Navbar styles
const navbar = document.querySelector(".navbar");  // Select the navbar element with the class 'navbar'
navbar.style.backgroundColor = "#333";  // Set the background color of navbar to dark grey
navbar.style.padding = "10px 0";  // Add 10px padding on top and bottom of navbar
navbar.style.textAlign = "center";  // Center-align the text in the navbar

// Select the <ul> inside the navbar and apply styles
const navbarUl = navbar.querySelector("ul");
navbarUl.style.listStyleType = "none";  // Remove default list styling (bullets or numbers)
navbarUl.style.margin = "0";  // Remove default margin
navbarUl.style.padding = "0";  // Remove default padding

// Select all <li> items inside the navbar and apply styles
const navbarItems = navbar.querySelectorAll("li");
navbarItems.forEach((li) => {
  li.style.display = "inline";  // Set each list item to display in a horizontal line (inline)
  li.style.margin = "0 20px";  // Add horizontal margin between each navbar item
});

// Select all <a> (anchor) links inside the navbar and apply styles
const navbarLinks = navbar.querySelectorAll("li a");
navbarLinks.forEach((a) => {
  a.style.color = "white";  // Set the text color of links to white
  a.style.textDecoration = "none";  // Remove the default underline from links
  a.style.fontSize = "18px";  // Set the font size of the links to 18px

  // Hover effect for links: underline when the user hovers over the link
  a.addEventListener("mouseenter", () => {
    a.style.textDecoration = "underline";  // Add an underline when hovering over a link
  });
  // Remove the underline when the mouse leaves the link
  a.addEventListener("mouseleave", () => {
    a.style.textDecoration = "none";  // Remove underline when mouse leaves
  });
});

// Programming Languages container styles
const languagesContainer = document.querySelector(".languages-container");  // Select the element with the class 'languages-container'
languagesContainer.style.textAlign = "center";  // Center-align the text inside the container
languagesContainer.style.background = "linear-gradient(to right, #4340f0, #07f562)";  // Apply a gradient background to the container
languagesContainer.style.padding = "10px";  // Add padding inside the container
languagesContainer.style.marginTop = "10px";  // Add some margin on top of the container
languagesContainer.style.borderRadius = "10px";  // Round the corners of the container

// Select the <h2> inside the languages container and apply styles
const languagesTitle = languagesContainer.querySelector("h2");
languagesTitle.style.color = "white";  // Set the text color of the title to white
languagesTitle.style.fontSize = "30px";  // Set the font size of the title to 30px

// Select the languages list (<ul>) and apply styles
const languagesList = languagesContainer.querySelector(".languages-list");
languagesList.style.listStyleType = "none";  // Remove default list styling (bullets or numbers)
languagesList.style.margin = "0";  // Remove default margin
languagesList.style.padding = "0";  // Remove default padding
languagesList.style.fontSize = "20px";  // Set the font size of the list items to 20px

// Select all <li> items inside the languages list and apply styles
const languageItems = languagesList.querySelectorAll("li");
languageItems.forEach((li) => {
  li.style.color = "white";  // Set the text color of the list items to white
  li.style.margin = "10px 0";  // Add vertical margin between the items

  // Hover effect for list items: change color to red when hovering
  li.addEventListener("mouseenter", () => {
    li.style.color = "red";  // Change text color to red on hover
    li.style.cursor = "pointer";  // Change cursor to a pointer (hand) on hover
  });
  // Remove the color change when mouse leaves the list item
  li.addEventListener("mouseleave", () => {
    li.style.color = "white";  // Revert text color to white when hover ends
  });
});

// Development section styles
const development = document.querySelector(".Development");  // Select the element with the class 'Development'
development.style.textAlign = "center";  // Center-align the text inside the development section
development.style.background = "linear-gradient(to right, #4340f0, #07f562)";  // Apply the same gradient background as the languages container
development.style.padding = "10px";  // Add padding inside the development section
development.style.marginTop = "10px";  // Add margin on top of the section
development.style.borderRadius = "10px";  // Round the corners of the section

// Select the <h2> inside the development section and apply styles
const developmentTitle = development.querySelector("h2");
developmentTitle.style.color = "white";  // Set the text color of the title to white
developmentTitle.style.fontSize = "30px";  // Set the font size of the title to 30px

// Select the development list (<ul>) and apply styles
const developmentList = development.querySelector(".Development-List");
developmentList.style.listStyleType = "none";  // Remove default list styling (bullets or numbers)
developmentList.style.margin = "0";  // Remove default margin
developmentList.style.padding = "0";  // Remove default padding
developmentList.style.fontSize = "20px";  // Set the font size of the list items to 20px

// Select all <li> items inside the development list and apply styles
const developmentItems = developmentList.querySelectorAll("li");
developmentItems.forEach((li) => {
  li.style.color = "white";  // Set the text color of the list items to white
  li.style.margin = "10px 0";  // Add vertical margin between the items

  // Hover effect for list items: change color to red when hovering
  li.addEventListener("mouseenter", () => {
    li.style.color = "red";  // Change text color to red on hover
    li.style.cursor = "pointer";  // Change cursor to a pointer (hand) on hover
  });
  // Remove the color change when mouse leaves the list item
  li.addEventListener("mouseleave", () => {
    li.style.color = "white";  // Revert text color to white when hover ends
  });
});
