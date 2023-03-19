const subscribeForm=document.getElementById("enter-mail");

const subscribersList=document.getElementById("subs")

subscribeForm.addEventListener("submit",(e)=>{
    e.preventDefault();//prevent form from the defualt behaviour  

const Email=document.getElementById("mail").value;
const data={email:Email}

fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/followers',
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
    alert(data.message)
})
})

fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/followers')
.then((result) => {
    return result.json();
})
.then((result) => {
    result.data.forEach(element => {
        const subField=document.createElement("div");
        const subEmail=document.createElement("p")
        subEmail.textContent=element.email;
     subField.appendChild(subEmail);
     subscribersList.appendChild(subField); 
    })
});

