
const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");


const signupForm=document.getElementById("signup-form");


signupForm.addEventListener("submit",(event)=>{
    event.preventDefault();//prevent form from the defualt behaviour  

const fname=document.getElementById("fname").value;
const lname=document.getElementById("lname").value;
const email=document.getElementById("email").value
const password=document.getElementById("passcode").value;

const data={
    fname:fname,
    lname:lname,
    email:email,
    password:password,
}

fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/signup',
{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(data)
})
.then((result) => {
    return result.json();
}).then(result=>{
    alarm.textContent=result.message;  
    box.style.display="block";
  alert(result.message) ;
})
.catch((err)=>{
    window.alert(err);
})
})
