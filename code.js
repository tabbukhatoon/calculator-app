let input=document.querySelector("input");
let button=document.querySelectorAll("button");
console.log(input);
console.log(button);
let str='';
button.forEach((box)=>{
box.addEventListener("click",(e)=>{
    console.log('button was clicked');
    console.log(e.target.textContent);
   if(e.target.textContent==='AC'){
str='';
input.value=str;
   }
//    else if(e.target.textContent==='DEL'){
// str=str.substring(0,length-1);
// input.value=str;
//    }

else if(e.target.textContent.trim()==='DEL'){
    str=str.substring(0,length-1)
    input.value=str;
}
   else if(e.target.textContent==='='){
str=eval(str);
input.value=str;
   }
   else{
    str+=e.target.textContent;
    input.value=str;

   }
    
})
})


