const likebtn=document.getElementById("like");
const sendbtn=document.getElementById("send");

let count=0;
 likebtn.addEventListener("click",function(){
   if(count==0){
     likebtn.style.background="#400c84";
     likebtn.style.color="#ffffff";
     count=1;
   }
   else{
     likebtn.style.background="#ffffff";
     likebtn.style.color="#000000";
     count=0;
   }
 })
sendbtn.addEventListener("click",function(){
  console.log("sended");
})
