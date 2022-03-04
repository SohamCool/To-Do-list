const form = document.querySelector('form');
const action = document.querySelector('input[name="addelement"]');

const main = form.parentElement;
const list1 = document.querySelector('.OL');
// const child = main.classList 
const button = document.querySelector('button');
// console.log(list)
// console.log(addbtn);


const unset = ()=>{
    console.log("Function called");
    list1.classList.remove("hidden");
    const tag = list1.classList.value;   
    // list1.innerHTML = "<li>" + action.value + "</li>";
    const livalue = document.createElement("li");
    console.log(livalue);
    livalue.innerHTML = action.value;
  document.getElementById('iol').appendChild(livalue);
  // console.log(action.value);
  console.log("leaving function");
}



document.addEventListener("keyup", (Event)=>{
    // console.log(main);
    if(Event.key =='Enter')
    {
      const todo = action.value;
      if(todo){
        console.log("inside if");
        unset();
        
      }action.value = '';
      
    }
    
    console.log("Outside if");
    
})


// action.addEventListener("keyup", (Event)=>{
//   // console.log(main);
//   if(Event.key =='Enter')
//   {
//     console.log("inside if");
//     unset();
//     action.value = '';
//   }
  
//   console.log("Outside if");
  
// })






// form.addEventListener("click", () => {
//         console.log(action.value);
//         console.log("Function called");
//         list1.classList.remove("hidden");
//         list1.innerHTML = "<li>" + action.value + "</li>";
// })

