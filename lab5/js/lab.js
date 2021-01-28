/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   01.27.2020
 *
 * (c) Copyright by Blub Corp.
 **/

var currentYear = new Date().getFullYear();

var makeC = "Dodge";
var modelC = "Durango";
var colorC = "Silver";
var yearC = "2001";
var ownItC = true;

var makeO = "Land Rover";
var modelO =  "LR4";
var colorO = "Black";
var yearO = "2010"
var ownItO = false;

document.writeln("Cole's car make: " + makeC + "<br>");
document.writeln("Cole's car model: " + modelC + "<br>");
document.writeln("Cole's car color: " + colorC + "<br>");
document.writeln("Cole's car year: " + yearC + "<br>");
document.writeln("Cole's car age: " + (currentYear - yearC) + "<br>");
document.writeln("Does Cole own it?: ");
if (ownItC) {
  document.writeln("Ye<br>");
} else {
  document.writeln("No<br>");
}

document.writeln("<br>Olivia's car make: " + makeO + "<br>");
document.writeln("Olivia's car model: " + modelO + "<br>");
document.writeln("Olivia's car color: " + colorO + "<br>");
document.writeln("Olivia's car year: " + yearO + "<br>");
document.writeln("Olivia's car age: " + (currentYear - yearO) + "<br>");
document.writeln("Does Olivia own it?: ");
if (ownItO) {
  document.writeln("Yes<br>");
} else {
  document.writeln("Nope<br>");
}
