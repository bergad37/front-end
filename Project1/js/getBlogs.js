// const blogContainer=document.getElementById("features");
const subContainer=document.getElementById("sub");

fetch('http://localhost:2000/api/v1/blogs')
.then((result) => {
    return result.json();
})
.then((result)=>{
    console.log(result.data.slice(-3));
    // Attaching to the blog slot on landing page
    const allPost=result.data;

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






