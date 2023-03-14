const loginForm=document.getElementById("login-form");

const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

const usermail=document.getElementById("usermail").value;
const password=document.getElementById("password").value;

const data={email:usermail,password:password};


fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/login',
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
    alert(err)
});
})