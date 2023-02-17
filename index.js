// let submitbtn=document.getElementById('login-btn');  //calling the submitt button on log in form
// const logform=document.getElementById('login-form');




// submitbtn.addEventListener("click",(event) =>{
//   event.preventDefault();
//   let input1 = document.getElementById("except1");
//   let input2 = document.getElementById("except2");

//   // alert messages
//   let msg1 = "Fill in the username";
//   let msg2 = "Enter the password";

//   // selecting the input fields
//   let x = document.getElementById("admin");
//   let x1 = x.value;

//   let y = document.getElementById("passcode");
//   let y1 = y.value;

//   if (x1 == '') {
//     input1.innerText = msg1;
//   } else if (y1 == '') {
//     input2.innerText = msg2;
//   } else if(x1==' ' && y1==''){
//     input1.innerText =msg1;
//     input2.innerText = msg2;
//   }
//   else
//   input1.innerText='';
//   input2.innerText='';
//   });

//   function navigate(){
//   // Get the element for the "About" title
// var aboutTitle = document.getElementById("about-title");

// // Get the position of the "About" title
// var aboutTitlePosition = aboutTitle.offsetTop;
// // Scroll to the position of the "About" title
// window.scrollTo({
//   top: aboutTitlePosition,
//   behavior: "smooth"
// });
//   }




// const emailInput = document.querySelector("#email");

// emailInput.addEventListener("input", function(event) {
//   let email = event.target.value;
//   let isValid = /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
//   if (!isValid) {
//     emailInput.style.border = "1px solid red";
//   } else {
//     emailInput.style.border = "1px solid green";
//   }
// });



// Adding a blog panel visible
// const blogbtn=document.querySelector("#add-blog")[0];
// const panel=document.querySelector('#blog-panel')[0];

// console.log(blogbtn);
// blogbtn.addEventListener("click",() =>{
//   console.log(",,,,,,,,,,,,");
//   //panel.classList.add("container");
//   panel.style.display="block";
// })


//Adding a blog to my table
const author=document.getElementById('author');
const title=document.getElementById('ttle');
const date=document.getElementById('date');
const message=document.getElementById('message');
const add=document.getElementById('newpost');
console.log(add);
console.log(message);
console.log(date);

blogs=JSON.parse(localStorage.getItem('Blogs')) || [];

function saveBlog(){
let blg={};

blg.authors=author.value;
blg.ttles=title.value;
blg.dates=date.value;
blg.messages=message.value;
blogs.push(blg);
localStorage.setItem('Blogs',JSON.stringify(blogs)); 
}


add.onclick=saveBlog;



