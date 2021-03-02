/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.11.2020
 *
 * (c) Copyright by Blub Corp.
 **/
function print() {
  var name = document.createElement("div");
  name.innerHTML = document.getElementById("user-name").value.split("").sort().join("");
  document.getElementById("output").appendChild(name);
}
