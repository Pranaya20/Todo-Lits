const submit = document.getElementById('submit-btn');
const input = document.getElementById('task');

submit.addEventListener("click", formSubmit = ()=>{
    document.getElementById('error').innerHTML = ""; 
    let task = document.getElementById("box");
    if(input.value == ''){
       document.getElementById('error').innerHTML = "Please Enter your task";
    }else{
        let li = document.createElement('li');
        li.textContent = input.value;
        let pos = task.firstElementChild;
        if(pos == null){
            task.appendChild(li);
        }else{
            task.insertBefore(li, task.children[0]);
        }
       
        input.value=""  

        let a = document.createElement('a');
        a.textContent = "x";
        a.href = "javascript:void(0)"
        // a.className = "remove";
        a.id = "remove";
        li.appendChild(a); 
    }

    let deletbtn = document.getElementById('remove');
        deletbtn.addEventListener('click',handleClick = (e)=>{
            let  box = document.getElementById('box');
            let li = e.target.parentNode;
            box.removeChild(li);
        })
  
    
})
