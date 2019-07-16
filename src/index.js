//This file is within <head>
document.addEventListener("DOMContentLoaded", () => { //Once the page has been loaded, do everything in here
  function whateverFunction(){
    let newTask = document.querySelector('#new-task-description')
    
    let value = newTask.value
    let var2 = document.querySelector("#tasks");
    
    let newListElement = document.createElement("li")
    newListElement.innerText = value
    var2.appendChild(newListElement)
  }
  
  
  document.querySelector("#create-task-form").addEventListener('submit', (eventObj) => {console.log(eventObj)
    eventObj.preventDefault()
    // let variable = document.querySelector("#new-task-description")
    // console.log(eventObj.target)
    whateverFunction()
    console.log(newTask.value)
  })
 
  
let removeButton =   document.createElement("button") 
removeButton.innerText = "Remove last task!"
removeButton.style = "font-size: 2em; font-family: 'Papyrus';"

document.body.appendChild(removeButton)

removeButton.addEventListener('click', function() {
  //go into the ul, remove last li
  let var2 = document.querySelector("#tasks");
  var2.lastChild.remove()
})

});


// form.addEventListener('submit', (eventObj) => {console.log(eventObj)})
// LOG; eventObj