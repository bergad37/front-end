function validatelog() {
    let input1 = document.getElementById("except1");
    let input2 = document.getElementById("except2");
  
    // alert messages
    let msg1 = "Fill in the username";
    let msg2 = "Enter the password";
  
    // selecting the input fields
    let x = document.getElementById("admin");
    let x1 = x.value;
  
    let y = document.getElementById("passcode");
    let y1 = y.value;
  
    if (x1 == '') {
      input1.innerText = msg1;
    } else if (y1 == "") {
      input2.innerHTML = msg2;
    } else {
      input1.innerText = "";
      input2.innerText = "";
    }
  }
  