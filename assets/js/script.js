'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**copy ca to clipboard */
function copyToClipboard() {
  // Select the text element
  var copyText = document.getElementById("copyText");

  // Create a textarea element to temporarily hold the text to copy
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = copyText.textContent;

  // Append the textarea to the body
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // Show Bootstrap alert for success
  var copyAlert = document.getElementById("copyAlert");
  copyAlert.classList.add("show");

  // Hide the alert after 3 seconds
  setTimeout(function() {
      copyAlert.classList.remove("show");
  }, 2000);
}