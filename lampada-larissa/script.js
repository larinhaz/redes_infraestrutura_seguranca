const lamp = document.getElementById("lamp");

function isBroken() {
  return lamp.src.indexOf("quebrad") > -1;
}

function ligar() {
  if (!isBroken()) {
    lamp.src = "lampadalig.jpg";
  }
}

function desligar() {
  if (!isBroken()) {
    lamp.src = "lampadadeslig.jpg";
  }
}

function quebrar() {
  lamp.src = "lampadaquebrad.jpg";
}

  