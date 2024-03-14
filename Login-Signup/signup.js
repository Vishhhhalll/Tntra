

function saveData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;
    let role = document.getElementById("role").value;
    let gender = document.getElementById("gender").value;

    let nameError = document.getElementById("nameError")
    let emailError = document.getElementById("emailError")
    let passwordError = document.getElementById("passwordError")
    let roleError = document.getElementById("roleError")
    let genderError = document.getElementById("genderError")

    if (!name || name.length < 3) {
        nameError.textContent = "Name length must be 3 characters!"
        return false;
    } else {
        true;
    }
    if (!email) {
        emailError.textContent = "Please fill the email properly!";
    } else {
        true;
    }
    if (!psw || psw.length < 4) {
        passwordError.textContent = "Password length must be atleast 4 characters!";
    } else {
        true;
    }
    if (!role) {
        roleError.textContent = "Please select the role!"
    } else {
        true;
    }
    if (!gender) {
        genderError.textContent = "Please select gender!"
        return false;
    } else {
        true;


    }

    let data = new Array();

    data = JSON.parse(localStorage.getItem("users")) || [];

    if (data.some((v) => { return v.email == email })) {
        emailError.textContent= "duplicate data";
    } else {

        data.push({
            name: name,
            email: email,
            psw: psw,
            role: role,
            gender: gender,
        })

        localStorage.setItem("users", JSON.stringify(data))
        window.location.href = "login.html"
    }


}

