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

  function navigate(){
  // Get the element for the "About" title
var aboutTitle = document.getElementById("about-title");

// Get the position of the "About" title
var aboutTitlePosition = aboutTitle.offsetTop;
// Scroll to the position of the "About" title
window.scrollTo({
  top: aboutTitlePosition,
  behavior: "smooth"
});
  }
array.forEach(element => {
  
});



const emailInput = document.querySelector("#email");

emailInput.addEventListener("input", function(event) {
  let email = event.target.value;
  let isValid = /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
  if (!isValid) {
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "1px solid green";
  }
});