// // let submitbtn=document.getElementById('login-btn');  //calling the submitt button on log in form
// // const logform=document.getElementById('login-form');




// // submitbtn.addEventListener("click",(event) =>{
// //   event.preventDefault();
// //   let input1 = document.getElementById("except1");
// //   let input2 = document.getElementById("except2");

// //   // alert messages
// //   let msg1 = "Fill in the username";
// //   let msg2 = "Enter the password";

// //   // selecting the input fields
// //   let x = document.getElementById("admin");
// //   let x1 = x.value;

// //   let y = document.getElementById("passcode");
// //   let y1 = y.value;

// //   if (x1 == '') {
// //     input1.innerText = msg1;
// //   } else if (y1 == '') {
// //     input2.innerText = msg2;
// //   } else if(x1==' ' && y1==''){
// //     input1.innerText =msg1;
// //     input2.innerText = msg2;
// //   }
// //   else
// //   input1.innerText='';
// //   input2.innerText='';
// //   });

// //   function navigate(){
// //   // Get the element for the "About" title
// // var aboutTitle = document.getElementById("about-title");

// // // Get the position of the "About" title
// // var aboutTitlePosition = aboutTitle.offsetTop;
// // // Scroll to the position of the "About" title
// // window.scrollTo({
// //   top: aboutTitlePosition,
// //   behavior: "smooth"
// // });
// //   }

// // Adding a blog panel visible
// const blogbtn=document.getElementById('add-blog');
// const panel=document.querySelector('#blog-panel');

// function addblog() {
//     panel.classList.add('visiblee');
//     console.log(blogbtn);
// console.log(panel);
// }

// blogbtn.onclick=addblog;

// // Adding a blog to my table
// const author=document.getElementById('author');
// const title=document.getElementById('ttle');
// const date=document.getElementById('date');
// const message=document.getElementById('message');
// const add=document.getElementById('newpost');
// console.log(add);
// console.log(message);
// console.log(date);
// blogs=JSON.parse(localStorage.getItem('Blogs')) || [];

// function saveBlog(){
// let blg={};

// blg.authors=author.value;
// blg.ttles=title.value;
// blg.dates=date.value;
// blg.messages=message.value;
// blogs.push(blg);

// var items=JSON.stringify(blogs);

// localStorage.setItem('Blogs',items); 

// let ff=localStorage.getItem(Blogs[0]);
// console.log('hi')
// //Creating a new blog



//  // Getting  a reference to the table body
//  var tableBody = document.getElementById('my-table');

//  // Create a new row element
//  var newRow = document.createElement('tr');
//  // Create four new column elements
//  var titleCol = document.createElement('td');
//  var authorCol = document.createElement('td');
//  var dateCol = document.createElement('td');
//  var updateCol = document.createElement('td');
//  var deleteCol = document.createElement('td');

//  // Insert data into the new columns
//  titleCol.textContent = localStorage.getItem(Blogs[0].ttles);
//  authorCol.textContent = localStorage.getItem(Blogs[0].authour);
//  dateCol.textContent = localStorage.getItem(Blogs[0].date);

//  // Create update and delete buttons
//  var updateButton = document.createElement('button');
//  updateButton.textContent = "Edit";
//  updateButton.setAttribute('edit-btn');
//  var deleteButton = document.createElement('button');
//  deleteButton.textContent = "Delete";
//  updateButton.setAttribute('class','delete-btn');

//  // Add the buttons to the update and delete columns
//  updateCol.appendChild(updateButton);
//  deleteCol.appendChild(deleteButton);

//  // Add the columns to the new row
//  newRow.appendChild(titleCol);
//  newRow.appendChild(authorCol);
//  newRow.appendChild(dateCol);
//  newRow.appendChild(updateCol);
//  newRow.appendChild(deleteCol);

//  // Add the new row to the table body
//  tableBody.appendChild(newRow);
// }
// add.onclick=saveBlog;


// // //Adding an event to  a navbar

// // const deletebtn=document.getElementById('delete');
// // const editbtn=document.getElementById('edit');
// // const bloglist=document.getElementsByClassName('box');


// // function deleteblog() {
// //     console.log(bloglist);    
// // }

// // bloglist.onclick=deleteblog;



