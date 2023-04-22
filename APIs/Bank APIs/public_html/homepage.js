if (x.length != 0) {
    
// Create a new table element
var table = document.createElement("table");

// Create a header row for the table
var headerRow = table.insertRow(0);

var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);
var headerCell4 = headerRow.insertCell(3);
var headerCell5 = headerRow.insertCell(4);
var headerCell6 = headerRow.insertCell(5);
var headerCell7 = headerRow.insertCell(6);
var headerCell8 = headerRow.insertCell(7);
var headerCell9 = headerRow.insertCell(8);
var headerCell10 = headerRow.insertCell(9);

headerCell1.innerHTML = "User";
headerCell2.innerHTML = "Date";
headerCell3.innerHTML = "Time";
headerCell4.innerHTML = "Category";
headerCell5.innerHTML = "SubCategory";
headerCell6.innerHTML = "CompanyName";
headerCell7.innerHTML = "Value";
headerCell8.innerHTML = "WantOrNeed";
headerCell9.innerHTML = "Index";
headerCell10.innerHTML = "Suggestion";

// Create a row for each object in the array
for (var i = 0; i < x.length; i++) {
  var row = table.insertRow(i+1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
   var cell10 = row.insertCell(9);
  cell1.innerHTML = x[i][0];
  cell2.innerHTML = x[i][1];
  cell3.innerHTML = x[i][2];
  cell4.innerHTML = x[i][3];
  cell5.innerHTML = x[i][4];
  cell6.innerHTML = x[i][5];
  cell7.innerHTML = x[i][6];
  cell8.innerHTML = x[i][7];
  cell9.innerHTML = x[i][8];
  cell10.innerHTML = x[i][9];


if (x[i][6] < 0 ) {
    row.classList.add("light-red");
}
else {
    row.classList.add("light-green");
}



}

// Append the table to the HTML document
document.body.appendChild(table);


    document.getElementById("balence").innerHTML = "Balence: £" + y[0][1];
    document.getElementById("interest").innerHTML = "Interest: " + z + "%";
    document.getElementById("Person").value = t;
    
    
    
}