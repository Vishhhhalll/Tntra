function validForm() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;
  let date = document.getElementById("date").value;
  let title = document.getElementById("title").value;
  let exprc =  document.getElementById("exprc").value;

  let fnameError = document.getElementById("fnameError");
  let lnameError = document.getElementById("lnameError");
  let emailError = document.getElementById("emailError");
  let pnumberError = document.getElementById("pnumberError");
  let genderError = document.getElementById("genderError");
  let addressError = document.getElementById("addressError");
  let dateError = document.getElementById("dateError");
  let titleError = document.getElementById("titleError");
  let exprcError = document.getElementById("exprcError");

  if (!firstname || firstname.length < 3) {
    fnameError.textContent = "FirstName must be at least 3 characters!";
    return false;
  } else {
    fnameError.textContent = "";
    true;
  }
  if (!lastname || lastname.length < 3) {
    lnameError.textContent = "LastName must be at least 3 characters!";
    return false;
  } else {
    lnameError.textContent = "";
    true;
  }
  if (!email || !email.match) {
    emailError.textContent = "Please enter a valid email address!";
    return false;
  } else {
    emailError.textContent = "";
    true;
  }
  if (!phonenumber || phonenumber.length < 10) {
    pnumberError.textContent =
      "PhoneNumber must be at least 10 characters!";
      return false;
  } else {
    pnumberError.textContent = "";
    true;
  }
  // if (!gender || gender.length < 1) {
  //   genderError.textContent = "Please select gender!";
  // } else {
  //   genderError.textContent = "";
  // }
  if (!address || address.length < 5) {
    addressError.textContent = "Address must be at least 5 characters!";
    return false;
  } else {
    addressError.textContent = "";
    true;
  }
  if (!date) {
    dateError.textContent = "Please select date!";
    return false;
  } else {
    dateError.textContent = "";
    true;
  }
  if (!title || title.length < 5) {
    titleError.textContent = "Title must be at least 5 characters!";
    return false;
  } else {
    titleError.textContent = "";
    true;
  }
  if (!exprc || exprc.length < 10) {
    exprcError.textContent = "Experience must be at least 10 characters!";
    return false;
  } else {
    exprcError.textContent = "";
    true;
  }

  document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";

    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let fname = row.insertCell(0);
    let lname = row.insertCell(1);
    let temail = row.insertCell(2);
    let pnumber = row.insertCell(3);
    let tgender = row.insertCell(4);
    let add = row.insertCell(5);
    let tdate = row.insertCell(6);
    let ttitle = row.insertCell(7);
    let exprc = row.insertCell(8);

    fname.innerHTML = document.getElementById("firstname").value;
    lname.innerHTML = document.getElementById("lastname").value;
    temail.innerHTML = document.getElementById("email").value;
    pnumber.innerHTML = document.getElementById("phonenumber").value;
    tgender.innerHTML = document.getElementById("gender").value;
    add.innerHTML = document.getElementById("address").value;
    tdate.innerHTML = document.getElementById("date").value;
    ttitle.innerHTML = document.getElementById("title").value;
    exprc.innerHTML = document.getElementById("exprc").value;
    return false;
  };
}

