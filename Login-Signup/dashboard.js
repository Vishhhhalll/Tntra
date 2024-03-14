function dataInLocal() {
  let pname = document.getElementById("productName").value;
  let p_id = document.getElementById("productID").value;
  let qty = document.getElementById("quantity").value;

  let pname_err = document.getElementById("productError")
  let p_id_err = document.getElementById("idError")
  let qty_err = document.getElementById("qtyError")

  if (!pname || pname.length < 3) {
    pname_err.textContent = "ProductName must be at least 3 characters!";
    return false;
  } else {
    pname_err.textContent = "";
    true;
  }
  if (!p_id || p_id.length < 3) {
    p_id_err.textContent = "ProductId must be at least 1 characters!";
    return false;
  } else {
    p_id_err.textContent = "";
    true;
  }
  if (!qty || qty.length < 1) {
    qty_err.textContent = "Quantity must be at least 1 characters!";
    return false;
  } else {
    qty_err.textContent = "";
    true;
  }

  let data = JSON.parse(localStorage.getItem("myForm")) || [];
  data.push({
    pname: pname,
    p_id: p_id,
    qty: qty,

  })

  localStorage.setItem("myForm", JSON.stringify(data))
  dataTable()
}

function dataTable() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = '';

  let data = JSON.parse(localStorage.getItem("myForm")) || [];

  data.forEach(function (ele, i) {
    let row = tableBody.insertRow();
    let row1 = row.insertCell(0);
    let row2 = row.insertCell(1);
    let row3 = row.insertCell(2);
    let row4 = row.insertCell(3);

    row1.innerHTML = ele.pname;
    row2.innerHTML = ele.p_id;
    row3.innerHTML = ele.qty;
    row4.innerHTML = "<button id='dltBtn' onclick='deleteRow(" + i + ")'>Delete</button>";

  });
}

function deleteRow(index) {
  let data = JSON.parse(localStorage.getItem("myForm")) || [];
  data.splice(index, 1);
  localStorage.setItem("myForm", JSON.stringify(data))
  dataTable();

}


dataTable();

function displayTable() {
  let x = document.getElementById("myForm");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let hideBtn =  false;
let addbtn = document.getElementById("addbtn");
let dltBtn = document.getElementById("dltBtn");

let data=  localStorage.getItem("users");
let currentUser=  localStorage.getItem("current-user");
if(data){
  let dataArray = JSON.parse(data)


 dataArray.map(user => {
    if(user.email === currentUser && user.role === "admin"){
      hideBtn = true;

    }
  });
  
}
if(hideBtn)
{
 addbtn.style.display = "block"
  } else{
   addbtn.style.display = "none"
    };


if(hideBtn)
{
 dltBtn.style.display = "block"
  } else{
   dltBtn.style.display = "none"
    }
    
    
    
    // let role = document.getElementById
    
    // for (x in localStorage){
    //   console.log(localStorage.getItem(x));
    // }
// if()