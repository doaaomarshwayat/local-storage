//select element

let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {
    span.addEventListener("click" , (e) =>{
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
         if (e.target.classList.contains("add-item")) {
            addItem();
        }
         if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
         if (e.target.classList.contains("show-items")) {
            showItems();
        }
    })
});

function showMessage() {
    if (theInput.value === ''){
        results.innerHTML = 'input cant be Empty';
    }
}


function checkItem() {
    if (theInput.value !== ''){
        //chech if input value exist in local stprage
        if(localStorage.getItem(theInput.value)){
            results.innerHTML ='found local item with name <span>${theInput.value}</span>';
            
        }else{
             results.innerHTML ='no local item with the name <span>${theInput.value}</span>';
        }
        
    }else{
        showMessage();
    }
}

function addItem() {
    if (theInput.value !== ''){
        //to set Item we need key and value
       localStorage.setItem(theInput.value, "test");
       results.innerHTML = "local storge item <span>${theInput.value}</span> added";
       theInput.value = "";
       
    }else{
        showMessage();
    }
}
function deleteItem() {
    
    if (theInput.value !== ''){
       //we need to check it the item exist
       if(localStorage.getItem(theInput.value)){
        localStorage.removeItem(theInput.value);
        results.innerHTML = "local storage item <span>${theInput.value}</span> deleted";
        theInput.value = "";
       }else{
        results.innerHTML = "no local storge item with the name <span>${theInput.value}</span>";
        
       }
    }else{
        showMessage();
    }
}
function showItems() {
    //.length mean there exist element in local dtorage
   if(localStorage.length) {
    //console.log("found element ${localstorage.length}");
    results.innerHTML = "";
    //loop for key value for object entries of lcalStorage , please read about object.entries
    for (let [key,value] of object.entries(localStorage)) {
        results.innerHTML += '<span>${key} </span>';
    }
   }else{
    results.innerHTML = "local storge is empty";
   }
}
