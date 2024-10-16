
//fetch
function getContent(file) {
	window.location.assign(file);
}
var timeId = null;

window.addEventListener("resize", () => {
  clearTimeout(timeId);
  timeId = setTimeout(sortBanner, 200);
});

window.addEventListener("load",sortBanner);
let portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", sortBanner);


function sortBanner() {
  let w = window.innerWidth;
  let h;
  if(w < 601) {
    h = 126;
  } else if (w < 801) {
    h = 214;
  } else if (w < 1001) {
    h = 240;
  } else if (w < 1201) {
    h = 275;
  } else {
    h = 300;
  }
  let size = w+"px "+h+"px";
  document.getElementById("eprase-header").style.backgroundSize = size;
}

// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "40%";
  x.style.fontSize = "1.2em";
  x.style.paddingTop = "3%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var activebtn = document.getElementsByClassName("testbtn");
  for (i = 0; i < x.length; i++) {
    activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

// Accordions
function myAccFunc(id) {
  //first hide all accordion elements, then open the one we want
  var c = document.getElementsByClassName('accordion-text');
  var n = c.length;
  for(let i=0; i<n; i++) {
	c[i].classList.remove('w3-show');
  	c[i].classList.add('w3-hide');
  }
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
