// window.addEventListener('scroll',function () {
//     if(window.scrollY >150){
//       document.querySelector('#navbar').style.opacity=0.9;
  
//     }else{
//       document.querySelector('#navbar').style.opacacity=1;
//     }
    
//   });
  

//   //Validating the input fields of contact form

//   let name1=document.querySelector('#name');
//   let email=document.querySelector('#email');
//   let phone=document.querySelector('#phone');
//   let message=document.querySelector('#message');
//   const sendbtn=document.getElementById('bt');
//   const logbtn=document.getElementById('login-btn')
//   const alert1=document.getElementById('alert1');
//   const alert2=document.getElementById('alert2');
//   const alert3=document.getElementById('alert3');
//   const alert4=document.getElementById('alert4');
//   const input1 = document.querySelector('admin');
//   const input2 = document.getElementById('passcode');


//   function check() {
//     if(name1.value=='' || name1.value.length<=3){
// alert1.style.display='block';
//     }
//     if(email.value=='' || email.value.length<=3){
//       alert2.style.display='block';
//             }
//             if(phone.value=='' || phone.value.length<=3){
//                 alert1.style.display='block';
//                 alert2.style.display='block';      
//               }
              
//   }
// sendbtn.onclick=check;
// // hard coded password and username
  
// function logcheck() {
//     if(input1.value!=123 || input1.value==''){
//         alert('The username or password is incorrect');
//         alert3.style.display='block';
//     }
//     if(input2.value!='Gad Bertrand' || input2==''){
//       alert4.style.display='block';
//     }
//   }
// logbtn.onclick=logcheck;





//   //
//   function cheeeeck(){
//   let nameee=document.getElementById('a');
//   let btnn=document.getElementById('d');


//   if(!nameee.value.includes('@')){
// alert('Invalid email');
//   }
// }

// btnn.onclick=cheeeeck;