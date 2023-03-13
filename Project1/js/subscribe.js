// const subscribeForm=document.getElementById("enter-mail");
// console.log(subscribeForm);
const subscribersList=document.getElementById("sub")

// subscribeForm.addEventListener("submit",(e)=>{
//     e.preventDefault();//prevent form from the defualt behaviour  

// const Email=document.getElementById("mail").value;
// const data={email:Email}

// fetch('http://localhost:2000/api/v1/followers',
// {
// method:"POST",
// headers:{
//     "Content-Type":"application/json"
// },
// body:JSON.stringify(data)
// })
// .then((response) => {
//    return response.json();
// })
// .then((data) => {
//     alert(data.message)
// })
// })

fetch('http://localhost:2000/api/v1/followers')
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
    });
  
});
