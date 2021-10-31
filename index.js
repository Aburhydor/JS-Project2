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
  let name = data.fName + ' ' + data.lName;
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.list;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.checkbox;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML =
    '<button onClick="onEdit(this)" class="replace">Edit</button>';
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = '<button onClick="onDelete(this)">Delete</button>';
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
  var num1 = document.querySelectorAll('table tbody tr td:nth-child(1)');
  //details = [];
  //num1.innerText.split(' ');
  //details = num1.innerText.split(' ');
  /*var fName = document.getElementById('fName').value;
  var lName = document.getElementById('lName').value;
  var Name = fName + lName;
  var details = [];
  details = Name.split();*/
  /*num1.forEach(function (num) {
    details = [];
    num.innerText.split(' ');
    details = num.innerText.split(' ');
  });*/
  document.getElementById('fName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('lName').value = selectedRow.cells[1].innerHTML;
  document.getElementById('email').value = selectedRow.cells[2].innerHTML;
  document.getElementById('list').value = selectedRow.cells[3].innerHTML;
  document.getElementById('checkbox').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fName;
  selectedRow.cells[1].innerHTML = formData.lName;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.list;
  selectedRow.cells[4].innerHTML = formData.checkbox;
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
    cell5.innerHTML = '<a href="#">yes</a>';
  } else {
    cell5.innerHTML = '<a href="#">No</a>';
  }
}
//const selected = document.getElementById('list');
//const error = document.getElementById('error');
//function list(e) {
//  let message = [];
// if (selected.value == 'Male, female') {
//    console.log('you are wrong');
// message.push('pls enter your mail');
// selected.focus();
// return false;
//
//}
//if (message.length > 0) {
// e.preventDefault();
//  error.innerText = message.join(',');
// }
//}
var form = document.getElementById('reg');

function validate() {
  var list = document.getElementById('list');
  const error = document.getElementById('error');

  let message = [];
  if (list.value == 'Male, female') {
    //alert('Gender can not be and female');
    message.push('pls enter your mail');
    console.log('you are not correct');
    error.innerHTML = 'pls select a Gender';
    return false;
  } else {
    error.innerHTML = ' ';
    return onFormSubmit();
  }
}
/*var tb = document.querySelector('table tbody');
tb.addEventListener('click', function (e) {
  if (e.target.className == 'replace') {
    const tr=e.target.parentElement;
    console.log(tr);
  }
});*/
/*var tb = document.querySelector('table tbody');
tb.addEventListener('click', function (e) {
  if (e.target.className == 'replace') {
    const tr = e.target.parentElement.parentElement;
    console(tr);
    tr = onEdit();
  }
});*/
