'use strict';

var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
  if(!isValid()) {
    alert("Įveskite duomenis");
    return;
  }
  var table = document.getElementById("table"),
  newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
  cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  name = document.getElementById("name").value,
  lname = document.getElementById("lname").value,
  age = document.getElementById("age").value;

  cell1.innerHTML = name;
  cell2.innerHTML = lname;
  cell3.innerHTML = age;
});

var button1 = document.getElementById("button1");
var input1 = document.getElementById("name");
var input2 = document.getElementById("lname");
var input3 = document.getElementById("age");
button1.addEventListener("click", function () {
input1.value = "";
input2.value = "";
input3.value = "";
});

var button2 = document.getElementById("button2");
button2.addEventListener("click", function() {
  if(document.getElementById("table").rows.length > 1) {
    document.getElementById("table-info").deleteRow(0);
  } else {
      alert("Nebėra ką trinti");
  }
});

var button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
  if(document.getElementById("table").rows.length > 1) {
  document.getElementById("table-info").deleteRow(-1);
  } else {
      alert("Nebėra ką trinti");
  }
});

function isValid() {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var age = document.getElementById("age").value;
    if (name == "" || lname == "" || age == "" || age <= 0){
      return false;
    }
    return true;
  }
