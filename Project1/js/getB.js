// const blogContainer=document.getElementById("features");
const subContainer=document.getElementById("sub");
const blogs=document.getElementById("BLOGS");
fetch('http://localhost:2000/api/v1/blogs')
.then((result) => {
    return result.json();
})
.then((result)=>{
    console.log(result.data.slice(-3));
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


    //Attaching to the blog page
   allPost.forEach(result => {
    const imagesource=document.createElement("img");
    console.log(result._id);

    const row=document.createElement("div");

    row.classList.add("box","bg-light");
    imagesource.classList.add("pictures");
    // row.id = `result-${result._id}`;

    const title=document.createElement("h3");
    const author=document.createElement("h5");
    const content=document.createElement("p");
      //set the values
      imagesource.src=result.imageUrl;
      title.textContent=result.title;
      author.textContent=result.Author;
      content.textContent=result.message;
      row.appendChild(imagesource);
      row.appendChild(title);
      row.appendChild(content);
      row.appendChild(author); 
      subContainer.appendChild(row);
   });
})
.catch((error)=>{
    console.log(error)
})






