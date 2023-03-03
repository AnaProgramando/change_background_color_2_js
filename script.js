function color(z) {
  var a = getComputedStyle(z);
  var b = a.backgroundColor;
  document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}
