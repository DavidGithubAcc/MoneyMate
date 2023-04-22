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


headerCell1.innerHTML = "User";
headerCell2.innerHTML = "Stock";
headerCell3.innerHTML = "Quantity";
headerCell4.innerHTML = "Price";
headerCell5.innerHTML = "Total";


// Create a row for each object in the array
for (var i = 0; i < x.length; i++) {
  var row = table.insertRow(i+1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = x[i][0];
  cell2.innerHTML = x[i][1];
  cell3.innerHTML = x[i][2];
  
  
  var price  = Math.floor(Math.random() * 101) + 100;
cell4.innerHTML = price;

cell5.innerHTML = price *  x[i][2] ;



if (x[i][6] < 0 ) {
    row.classList.add("light-red");
}
else {
    row.classList.add("light-green");
}



}

// Append the table to the HTML document
document.body.appendChild(table);



    document.getElementById("Person").value = t;
    
    
    
}