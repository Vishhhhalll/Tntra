
function dataInLocal(){
let fname = document.getElementById("firstName").value;
let lname = document.getElementById("lastName").value;
let email = document.getElementById("Email").value;
let phone = document.getElementById("phoneNumber").value;
let gender = document.getElementById("Gender").value;
let address = document.getElementById("Address").value;
let date = document.getElementById("Date").value;
let title = document.getElementById("Title").value;
let exprc = document.getElementById("Exprc").value;

let fname_err = document.getElementById("fnameError")
let lname_err = document.getElementById("lnameError")
let email_err = document.getElementById("emailError")
let phone_err = document.getElementById("phoneError")
let gender_err = document.getElementById("genderError")
let address_err = document.getElementById("addError")
let date_err = document.getElementById("dateError")
let title_err = document.getElementById("titleError")
let exprc_err = document.getElementById("exprcError")

if (!fname || fname.length < 3) {
    fname_err.textContent = "FirstName must be at least 3 characters!";
    return false;
  } else {
    fname_err.textContent = "";
    true;
  }
  if (!lname || lname.length < 3) {
    lname_err.textContent = "LastName must be at least 3 characters!";
    return false;
  } else {
    lname_err.textContent = "";
    true;
  }
  if (!email) {
    email_err.textContent = "Please enter a valid email address!";
    return false;
  } else {
    email_err.textContent = "";
    true;
  }
  if (!phone || phone.length < 10) {
    phone_err.textContent = "PhoneNumber must be at least 10 characters!";
    return false;
  } else {
    phone_err.textContent = "";
    true;
  }
  if (!gender) {
    gender_err.textContent = "Please select gender!";
  } else {
    gender_err.textContent = "";
  }
  if (!address || address.length < 5) {
    address_err.textContent = "Address must be at least 5 characters!";
    return false;
  } else {
    address_err.textContent = "";
    true;
  }
  if (!date) {
    date_err.textContent = "Please select date!";
    return false;
  } else {
    date_err.textContent = "";
    true;
  }
  if (!title || title.length < 5) {
    title_err.textContent = "Title must be at least 5 characters!";
    return false;
  } else {
    title_err.textContent = "";
    true;
  }
  if (!exprc || exprc.length < 10) {
    exprc_err.textContent = "Experience must be at least 10 characters!";
    return false;
  } else {
    exprc_err.textContent = "";
    true;
  }


let data = JSON.parse(localStorage.getItem("myForm")) || [];



data.push({
    fname:fname,
    lname:lname,
    email:email,
    phone:phone,
    gender:gender,
    address:address,
    date:date,
    title:title,
    exprc:exprc,

    
})

localStorage.setItem("myForm", JSON.stringify(data))
dataTable()
};

function dataTable(){
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML='';

    let data = JSON.parse(localStorage.getItem("myForm")) || [];

    data.forEach(function(ele,i) {
        let row = tableBody.insertRow();
        let row1 = row.insertCell(0);
        let row2 = row.insertCell(1);
        let row3 = row.insertCell(2);
        let row4 = row.insertCell(3);
        let row5 = row.insertCell(4);
        let row6 = row.insertCell(5);
        let row7 = row.insertCell(6);
        let row8 = row.insertCell(7);
        let row9 = row.insertCell(8);
        let row10 = row.insertCell(9);

        row1.innerHTML = ele.fname;
        row2.innerHTML = ele.lname;
        row3.innerHTML = ele.email;
        row4.innerHTML = ele.phone;
        row5.innerHTML = ele.gender;
        row6.innerHTML = ele.address;
        row7.innerHTML = ele.date;
        row8.innerHTML = ele.title;
        row9.innerHTML = ele.exprc;
        row10.innerHTML = "<button onclick='deleteRow(" + i + ")'>Delete</button>";

    });
}

function deleteRow(index){
    let data = JSON.parse(localStorage.getItem("myForm")) || [];
    data.splice(index,1);
    localStorage.setItem("myForm", JSON.stringify(data))
    dataTable();

}

function reseBtn(){
    document.getElementById("btn")
}

dataTable();
