/*
Script from Erraticstuff OmO
https://github.com/Erraticstuff/dark-mode/
*/
//Variables
var getkey = localStorage.getItem("theme");
var div = document.getElementById("container");

//MAIN
if (getkey == "undefined") {
  localStorage.setItem("theme", "white");
}
                
function toggle(div) {
  if (getkey == "white") {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "white");
  }
  document.getElementById("warning").innerHTML = "Note : Please refresh this page to save the changes";
} 
                
if (getkey !== "white") {
  document.querySelector("link[href='white-mode.css']").href = "dark-mode.css";
} else {
  document.querySelector("link[href='dark-mode.css']").href = "white-mode.css";
}
//END
//For testing if the value changed vvv
document.getElementById("val").innerHTML = localStorage.getItem("theme");
