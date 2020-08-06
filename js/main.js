var time = 5000;
    var a = 0;

function showSlides() {
   var slides = document.getElementsByClassName("mySlides");
  if(a < slides.length ) {
      a++;
  }
  else {
      a = 1;
  }

  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[a-1].style.display = "block"; 

  setTimeout("showSlides()", time);
}

showSlides();

function call() {
    window.alert("call this number on screen: 0784891420")
}