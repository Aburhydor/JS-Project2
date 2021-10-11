var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetDForm();
  checkbox();
}

function readFormData() {
  var formData = {};

  formData['fName'] = document.getElementById('fName').value;
  formData['lName'] = document.getElementById('lName').value;
  formData['email'] = document.getElementById('email').value;
  formData['list'] = document.getElementById('list').value;
  formData['checkbox'] = document.getElementById('checkbox').value;

  return formData;
}
function insertNewRecord(data) {
  var table1 = document.getElementById('employerList');
  var table = table1.getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fName + ' ' + data.lName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.list;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.checkbox;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = '<button onClick="onEdit(this)">Edit</button>';
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = '<button onClick="onDelete(this)">Delete</button>';
}
function resetDForm() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('list').value = '';
  document.getElementById('checkbox').value = '';
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  var num1 = document.querySelector('table tbody tr td');
  details = [];
  num1.innerText.split(' ');
  details = num1.innerText.split(' ');
  /*var fName = document.getElementById('fName').value;
  var lName = document.getElementById('lName').value;
  var Name = fName + lName;
  var details = [];
  details = Name.split();*/

  document.getElementById('fName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('lName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('email').value = selectedRow.cells[1].innerHTML;
  document.getElementById('list').value = selectedRow.cells[2].innerHTML;
  document.getElementById('checkbox').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fName + formData.fName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.list;
  selectedRow.cells[3].innerHTML = formData.value;
}
function onDelete(td) {
  if (confirm('are you sure to delete this record?')) {
    row = td.parentElement.parentElement;
    var table1 = document.getElementById('employerList');
    var table = table1.deleteRow(row.rowIndex);
    resetDForm();
  }
}

function checkbox() {
  var checked = document.getElementById('checkbox');
  if (checked.checked == true) {
    cell4.innerHTML = '<a href="#">yes</a>';
  } else {
    cell4.innerHTML = '<a href="#">No</a>';
  }
}
