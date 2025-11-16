/* 1pt student uses either the <script>....</script> within the document or links an external js doc 
When you click on the hamburger menu  this icon: image.png  it shows and hides the side nav bar. I have already taken care of the positioning for you.    (2pts) 
HINT you will need to create a global boolean that controls this (isOpen = true)  
1 point:  click on the hamburger menu and the side menu hides 
1 point: click on the hamburger menu and the side menu shows 
When the nav bar is hidden, the page changes width  (3pts)  -- see figma file below 
1 point:  When the side bar is shown - the content is in the original place 
2 point:  When the side bar is not shown - the content moves over and takes up more room. 
on MOBILE the side bar nav must take up the full screen, and users need to click the menu button to hide it again  (see figma file below and check out apple.com in the responsive view for more info)  (3pts)  HINT: this is easier than you think!!! This is just all CSS :) 
1 point: the side bar is no longer on the top, it's hidden behind the hamburger menu 
1 point: the nav bar is shown and hidden by the hamburger menu */


/*menu show/hide*/
let isOpen = true; // nav starts open

function hideBar() {
    // grab the nav and the content area
    const nav = document.getElementsByClassName('navStyle')[0];
    const content = document.getElementsByClassName('container-content')[0];

    if (isOpen) {
        // hide the nav
        nav.style.display = "none";

        // let the content take the full width
        content.style.position = "absolute";
        content.style.left = "0";
        content.style.width = "100%";
    } else {
        // show the nav
        nav.style.display = "block";

        // put the content back in its original place (matches your CSS)
        content.style.position = "absolute";
        content.style.left = "25vw";
        content.style.width = "65vw";
    }

    // flip the boolean
    isOpen = !isOpen;
}

// when you click the menu circle, run hideBar()
document.getElementById("menu").addEventListener("click", hideBar);
