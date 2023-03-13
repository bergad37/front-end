
const alarm=document.getElementById("alarm");
const box=document.getElementById("alert-container");



const blogTable=document.getElementById("blog-table");

fetch('http://localhost:2000/api/v1/blogs')
.then((result) => {
    return result.json();
})
.then((result)=>{
    console.log(result)
   result.data.forEach(result => {

    console.log(result._id);
    const row=document.createElement("tr");
    row.id = `result-${result._id}`;
    const postDate=document.createElement("td");
    const title=document.createElement("td");
    const author=document.createElement("td");
    const content=document.createElement("td");
    const image=document.createElement("td");
    const action=document.createElement("td");
    const deleteButton=document.createElement("button");
    const imagesource=document.createElement("img");
     const update=document.createElement("button");
      image.appendChild(imagesource);

      //set the values
      imagesource.src=result.imageUrl;
      postDate.textContent=result.postedAt;
      title.textContent=result.title;
      author.textContent=result.Author;
      content.textContent=result.message;
      deleteButton.textContent='Delete post';
      update.textContent='Update post';
      action.appendChild(deleteButton)
      action.appendChild(update);

      row.appendChild(postDate);
      row.appendChild(image);
      row.appendChild(title);
      row.appendChild(author);
      row.appendChild(content);
      row.appendChild(action);
      
      blogTable.appendChild(row);
//Deleting a blog
      deleteButton.addEventListener("click", function() {
        deleteBlog(result._id);
      });
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

//draft
// const editForm=document.getElementById("edit-blog")
// function updateBlog(blogId,updatedData){
//     fetch(`http://127.0.0.1:2000/api/v1/blogs/${blogId}`,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//     .then((result) => {
//         return result.json(); 
//     })
//     .then((result)=>{
//         console.log(result)
//         alarm.textContent=result.message;  
//         box.style.display="block";
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }





