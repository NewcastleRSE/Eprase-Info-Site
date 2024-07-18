
//fetch
function getContent(file) {
	window.location.assign(file);
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
