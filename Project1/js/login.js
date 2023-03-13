const loginForm=document.getElementById("login-form");

const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

const usermail=document.getElementById("usermail").value;
const password=document.getElementById("password").value;

const data={email:usermail,password:password};
console.log(data);

fetch('http://127.0.0.1:2000/api/v1/login',
{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body: JSON.stringify(data)
})
.then((result) => {
    return result.json();
})
.then(result=>{
    console.log(result);
    if(result.ok){
        localStorage.setItem("authtoken",result.validToken);
        location.href="../Pages/dashboard.html"
    }
    else{
      alarm.textContent=result.message;  
      box.style.display="block";
    }
})
.catch((err) => {
    console.log(err)
});
})