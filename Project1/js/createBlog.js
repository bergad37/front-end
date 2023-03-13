//Dialog box
const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");
//logout button
const logout=document.getElementById("logout-button");

const addBlog=document.getElementById("add-blog");
console.log(addBlog);


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
addBlog.addEventListener("submit",(e)=>{
    e.preventDefault();

// console.log(file);
const data={title:title.value,Author:Author.value,message:message.value,imageUrl:file};
     console.log(data);
    fetch('http://127.0.0.1:2000/api/v1/blogs',{
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
        alarm.textContent=result.message;  
        box.style.display="block";
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

logout.addEventListener("click",(event)=>{
    event.preventDefault();
    localStorage.clear();
    window.location.href="../Pages/index.html"
})