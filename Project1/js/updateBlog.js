 const box=document.getElementById("elements");

const editForm=document.getElementById("edit-blog");
const titlebox=document.getElementById("ttle");
const contentb=document.getElementById("content");
const img=document.getElementById("image");
//image
const updateButton=document.getElementById("update-btn");
// const savedId=localStorage.getItem('id');

fetch(`https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs/${localStorage.getItem('id')}`)
.then((result) => {
    return result.json()
}).then((result) => {
    
    const row=document.createElement("section");
    row.classList.add("who");
    //row.id = `result-${result.data._id}`;
    
    const postDate=document.createElement("h4");
    
    
    const image=document.createElement("div");
    image.classList.add("who-img","center");


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

    

      //set the values
      imagesource.src=result.data.imageUrl;
      postDate.textContent=result.data.postedAt;
      title.textContent=result.data.title;
      author.textContent='Author: '+result.data.Author;
      content.textContent=result.data.message;
      row.appendChild(image);
      row.appendChild(body);
      

      box.appendChild(row);

      titlebox.value=result.data.title;
      contentb.textContent=result.data.message;

});


let file=null;
img.addEventListener("change", (e) => {
    let temp = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(temp);
    reader.onload = () => {
    file = reader.result;
    };
    });

updateButton.addEventListener("click", (e) => {
   
    const blogData = {
        title: titlebox.value,
        message: contentb.value,
        imageUrl: file
    };
    fetch(`https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs/${localStorage.getItem('id')}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    })
    .then((result) => {
        return result.json()
    })
    .then((result) => {
        alert.log(result);
    })
    .catch((err)=>{
        console.log(err)
    })
});