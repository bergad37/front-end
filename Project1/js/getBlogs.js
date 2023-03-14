const subContainer=document.getElementById("elements");

fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/comments')
.then((result) => {
    return result.json();
})
.then((result)=>{
    const allPost=result.data;

   allPost.forEach(result => {

    const row=document.createElement("div");
    row.classList.add("box","bg-light","who","center");
    const title=document.createElement("h3");
    title.classList.add("py-3");
    const email=document.createElement("h4");
    email.classList.add("py-3");
    const content=document.createElement("h5");
    content.classList.add("py-3");
      title.textContent=result.name;
      content.textContent=result.message;
      email.textContent=result.email;
      row.appendChild(title);
      row.appendChild(email);
      row.appendChild(content);
      subContainer.appendChild(row);
   });
})
.catch((error)=>{
    alert(error)
})






