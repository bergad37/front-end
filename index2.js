window.addEventListener('scroll',function () {
    if(window.scrollY >150){
      document.querySelector('#navbar').style.opacity=0.9;
  
    }else{
      document.querySelector('#navbar').style.opacacity=1;
    }
    
  });
  

  //Validating the input fields of contact form

  let name1=document.querySelector('#name');
  let email=document.querySelector('#email');
  let phone=document.querySelector('#phone');
  let message=document.querySelector('#message');
  const sendbtn=document.getElementById('btn');
  const block1=document.querySelector('#block-1');
  const block2=document.querySelector('#bloc-2');
  const block3=document.querySelector('#bloc-3');
  let input1 = document.getElementById('admin');
     let input2 = document.getElementById('passcode');


//   function check() {
//     if(name1.value=='' || name1.value.length<=3){
// block1.style.display='block';
//     }
//     if(email.value=='' || email.value.length<=3){
//         block2.style.display='block';
//             }
//             if(phone.value=='' || phone.value.length<=3){
//                 block3.style.display='block';
//                     }
//   }
//   sendbtn.onclick=check;

// hard coded password and username
  
function logcheck() {
    if(input1.value!=123 || input2.value!='GadBertrand'){
        alert('The username or password is incorrect');
    }
    
  }

  const b=document.getElementById('login-btn');
  b.onclick=logcheck;




  