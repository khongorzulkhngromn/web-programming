var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  var x2 = document.getElementsByClassName("mySlides2");
  var x3 = document.getElementsByClassName("mySlides3");
  var x4 = document.getElementsByClassName("mySlides4");
  var x5 = document.getElementsByClassName("mySlides5");

  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";
    x2[i].style.display = "none";
    x3[i].style.display = "none";
    x4[i].style.display = "none";
    x5[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x1.length) {
    myIndex = 1;
  }
  x1[myIndex - 1].style.display = "block";
  x2[myIndex - 1].style.display = "block";
  x3[myIndex - 1].style.display = "block";
  x4[myIndex - 1].style.display = "block";
  x5[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}