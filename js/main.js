/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function pageLoaded() {
  console.log("Page loaded...");

  setDynamicWidthOfChildrenDiv('center_slider_div');
  setDynamicWidthOfChildrenDiv('main_slider_div');
  setDynamicWidthOfChildrenDiv('second_slider_div');

  closeIntro();

  Email.send("chad@btczero.io",
    "chad@btczero.io",
    "This is a subject",
    "this is the body",
    {token: "90d093d2-7a9a-4470-bf48-90c02928574e"});

}
