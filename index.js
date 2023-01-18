const submit = document.getElementById('submit-btn');
const input = document.getElementById('task');
const firstTask = document.getElementById('first-task');
submit.addEventListener("click", formSubmit = ()=>{
    console.log("input.value:-",input.value)
    if(input.value == ''){
       document.getElementById('error').innerHTML = "Please Enter your task";
    }else{
        document.getElementById('error').innerHTML = ""; 
    }
    firstTask.innerHTML =  input.value;
})