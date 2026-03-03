"use strict";

$("#CircleForm").validate({});

function displayCircle() {
  if ($("#CircleForm").valid()) {
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";

    let radius;
    let radiusfp;
    let diameter;
    let circumference;
    let area;
    let result;

    radius = document.getElementById("radius").value;

    radiusfp = parseFloat(radius);

    diameter = calcDiameter(radiusfp);
    circumference = calcCircumference(radiusfp);
    area = calcArea(radiusfp);

    document.getElementById("diameter").innerHTML = diameter.toString();
    document.getElementById("circumference").innerHTML =
      circumference.toString();
    document.getElementById("area").innerHTML = area.toString();
  }
}

function calcDiameter(radiusvalue) {
  return 2*radiusvalue;
}

function calcCircumference(radiusvalue) {
  return 2*Math.PI*radiusvalue;
}

function calcArea(radiusvalue) {
  return Math.PI*(radiusvalue*radiusvalue);
}

function clearForm() {
  document.getElementById("radius").value = "";
  document.getElementById("radiuserror").innerHTML = "";
  document.getElementById("diameter").innerHTML = "";
  document.getElementById("circumference").innerHTML = "";
  document.getElementById("area").innerHTML = "";
}