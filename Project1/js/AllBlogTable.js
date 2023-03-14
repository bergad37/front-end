
const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");

console.log(alarm);
console.log(box);

const blogTable=document.getElementById("elements");
console.log(blogTable);
fetch('http://localhost:2000/api/v1/blogs')
.then((result) => {
    return result.json();
})
.then((result)=>{
    console.log(result)
   result.data.forEach(result => {

    // console.log(result._id);
    const row=document.createElement("section");
    row.classList.add("who");
    row.id = `result-${result._id}`;
    
    const postDate=document.createElement("h4");
    
    const image=document.createElement("div");
    image.classList.add("who-img");


    const imagesource=document.createElement("img");
    image.appendChild(imagesource);


    const body=document.createElement("div")
    body.classList.add("who","text","bg-darker","p-2","y-1");
    


    const title=document.createElement("h2");
    title.classList.add("py-1","p-1");
    body.appendChild(title);


    const content=document.createElement("p");
    content.classList.add("light-text","justify-text","list","p-1");
    body.appendChild(content);

    const author=document.createElement("p");
    author.classList.add("light-text","justify-text","list","p-1");
    body.appendChild(author);
   


    const action=document.createElement("div");
    const deleteButton=document.createElement("button");
    action.append(deleteButton);
   

     const update=document.createElement("button");
     action.appendChild(update);




      

      //set the values
      imagesource.src=result.imageUrl;
      postDate.textContent=result.postedAt;
      title.textContent=result.title;
      author.textContent='Author: '+result.Author;
      content.textContent=result.message;
      deleteButton.textContent='Delete post';
      update.textContent='Update post';
      action.appendChild(deleteButton)
      action.appendChild(update);

      row.appendChild(image);
      row.appendChild(body);
      row.appendChild(action);
      
      
      blogTable.appendChild(row);
//Deleting a blog
      deleteButton.addEventListener("click", function() {
        if(localStorage.getItem('authtoken')!=""){
        deleteBlog(result._id);
        }else
        alert('You are not logged in')
      });
      update.addEventListener("click",function(){
        const IdToBeUpdated=localStorage.setItem("id",result._id);
        location.href="../Pages/subpages/blogpanel.html";
      })
   });
})
.catch((error)=>{
    console.log(error)
})

function deleteBlog(blogId){
    const token=localStorage.getItem('authtoken');//Get the token of loged user from the database
    fetch(`http://127.0.0.1:2000/api/v1/blogs/${blogId}`,{
        method:"DELETE",
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    .then((result) => {
        return result.json(); 

    })
    .then((result)=>{
        console.log(result)
        alarm.textContent=result.message;  
        box.style.display="block";
        if(result.ok){
        const deletedRow = document.getElementById(`result-${blogId}`);
        deletedRow.parentNode.removeChild(deletedRow);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}





