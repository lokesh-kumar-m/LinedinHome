// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
function modal() {
  console.log('hiii')
  document.getElementById("myModal").style.display = "block";}
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}


function openrel(y){
  var x = document.getElementById("mrel"+y);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function addcmt(y){
  var x = document.getElementById("sendcmt"+y);
  document.getElementById("mrel"+y).style.display='none'
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function likeshov(y){
  document.getElementById('likhov'+y).style.display = "flex";
}
function likhovdisp(y){
  document.getElementById('likhov'+y).style.display = "none";
}
