//Dialog box
const alarmBox=document.getElementById("alert2");
const box=document.getElementById("alert");
//logout button
const logout=document.getElementById("logout-button");

const addBlog=document.getElementById("add-blog");
console.log(addBlog);
console.log(alarmBox)
console.log(box);

const title=document.getElementById("ttle");
const Author=document.getElementById("author");
const message=document.getElementById("content");

const img=document.getElementById("image1");
img.classList.add("pictures");





// HANDLING IMAGE UPLOAD
let file = null;
img.addEventListener("change", (e) => {
let temp = e.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(temp);
reader.onload = () => {
file = reader.result;
};
});

//Handling image
addBlog.addEventListener("submit",(e)=>{
    e.preventDefault();


const data={title:title.value,Author:Author.value,message:message.value,imageUrl:file};
    
    fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((result) => {
        return result.json();
    })
    .then((result)=>{
        alarmBox.textContent=result.Message;  
        box.style.display="block";
    })
    .catch((err) => {
        alert(err)
    });
})

logout.addEventListener("click",(event)=>{
    event.preventDefault();
    localStorage.clear();
    window.location.href="/index.html"
})