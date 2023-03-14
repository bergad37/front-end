
const subContainer=document.getElementById("sub");
const blogs=document.getElementById("BLOGS");
fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs')
.then((result) => {
    return result.json();
})
.then((result)=>{
   
    // Attaching to the blog slot on landing page
    const lastThreePosts=result.data.slice(-3);
    const allPost=result.data;

lastThreePosts.forEach(post => {

    const row1=document.createElement("div");
    row1.classList.add("box","bg-light");
   

    const imagesource=document.createElement("img");
    imagesource.classList.add("pictures");
    imagesource.src=post.imageUrl;

    const titleElement = document.createElement("h3");
    titleElement.textContent = post.title;

  const postAuthor = document.createElement("h5");
  const contentElement = document.createElement("p");
  contentElement.classList.add("light-text","py-1");
  contentElement.textContent = post.message;
  
  row1.appendChild(imagesource);
  row1.appendChild(titleElement);
  row1.appendChild(postAuthor);
  row1.appendChild(contentElement);
  blogs.appendChild(row1); // append the post element to the container
});

})
.catch((error)=>{
    alert(error)
})






