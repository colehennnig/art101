/**
 * Author:    Cole Hennig, Olivia Hamilton
 * Created:   02.04.2020
 *
 * (c) Copyright by Blub Corp.
 **/

function sort_name() {
  var person = window.prompt("Please enter your name:");
  var ssn = window.prompt("and then just your social security pls:");
  var nameArray = person.split('');
  var sorted = nameArray.sort();
  var name = nameArray.join('');
  return name;
}

newName = sort_name();
document.write("We have stolen your identity with your social security number, here is what you go by now: ", newName, "<br>");
