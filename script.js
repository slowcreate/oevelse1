document.querySelectorAll(".med").forEach(function (element) {
  element.addEventListener("mousedown", alkoholtekst);
});
document.querySelectorAll(".uden").forEach(function (element) {
  element.addEventListener("mousedown", udenAlkoholtekst);
});
function alkoholtekst() {
  console.log("indeholder alkohol");
}

function udenAlkoholtekst() {
  console.log("alkoholfri");
}
