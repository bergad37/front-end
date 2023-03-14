
const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");

const messageForm=document.getElementById("message-me");


messageForm.addEventListener("submit",(e)=>{
    e.preventDefault();//prevent form from the defualt behaviour  

const name=document.getElementById("msg-name").value;
const email=document.getElementById("msg-email").value;
const message=document.getElementById("message").value;

const data={
    name:name,
    email:email,
    message:message
}


fetch('http://localhost:2000/api/v1/comments',
{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(data)
})
.then((response) => {
   return response.json();
})
.then((data) => {
    alarm.textContent=data.message;  
        box.style.display="block";
    console.log(data)
})
.catch((err)=>{
    alert(err)
})
})
