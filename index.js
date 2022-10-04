function openPopup() {
  document.getElementById('boxPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('boxPopup').style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById('boxPopup');
  if (event.target == modal) {
    closePopup();
  }
};

function openPopup2() {
  document.getElementById('boxPopup2').style.display = 'block';
}

function closePopup2() {
  document.getElementById('boxPopup2').style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modal = document.getElementById('boxPopup2');
  if (event.target == modal) {
    closePopup2();
  }
};
