function fuja() {
  var btnNo = document.getElementById("btnN");

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var MaxX = windowWidth - btnNo.offsetWidth;
  var MaxY = windowHeight - btnNo.offsetHeight;

  var randomX = Math.floor(Math.random() * MaxX);
  var randomY = Math.floor(Math.random() * MaxY);

  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
}

function aceitou() {
  var audio = document.getElementById("Audio");
  audio.play();
  var btnYes = document.getElementById("btnY");
  alert("Minde!!!!!!!");
}
