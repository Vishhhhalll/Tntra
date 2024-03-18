function checkPass(){

    let newPass = document.getElementById("newPass").value;
    let msgError = document.getElementById("newPassError")
    
    if(!newPass){
        msgError.innerHTML = "Please check your password!"
        return false
    }else{
      msgError.innerHTML = "";
    }
    
    
    let data=  localStorage.getItem("users");
    let currentUser=  localStorage.getItem("current-user");
    
    if(data){
      let dataArray = JSON.parse(data)
      let updatedDataArray = dataArray.map(user => {
        if(user.email === currentUser ){
          user.psw = newPass;
        }
        return user;
      });
      
      localStorage.setItem("users", JSON.stringify(updatedDataArray))
      window.location.href="login.html"
    }
    return true;
  }    

