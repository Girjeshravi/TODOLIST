let addCardBtn=document.querySelector('#addCard');
let todoContainer=document.querySelector('#todo');


addCardBtn.addEventListener("click",addTask);
 let count=100000;

function addTask(){
    let card=document.createElement("div");
    card.id= `card-${count++}`
    card.className="card";
    card.innerText="Test Card";
    card.setAttribute("contenteditable","true");// this line will help to edit the above text
    cardParentDiv.append(card);
    todoContainer.append(cardParentDiv);
    card.focus();


    // dragstart
    addCardBtn.addEventListener("dragstart",(eventDetails)=>{
        let draggedCard=eventDetails.target;
        // we store that unique data of the element
        eventDetails.dataTransfer.setData("text/plan",draggedCard.id);
        draggedCard.style.opacity=0.5;
    })

    // dragend
    addCardBtn.addEventListener("dragend",(eventDetails)=>{
        dragged.style.opacity=1;
    })

    // drop 
    // dragenter
    // dragover

    let todo=document.querySelector("#todo");
    let progress=document.querySelector('#progress');
    let done=document.querySelector('#done');

    // todo.addEventListener("dragover",(eventDetails)=>{
    //     eventDetails.preventDefault();
    // })
    // todo.addEventListener("dragenter",(eventDetails)=>{
    //     eventDetails.preventDefault();
    // })
    // todo.addEventListener("drop",(eventDetails)=>{
    //     eventDetails.preventDefault();
    // })

    let dragEvents=["dragover","dragenter","drop"];
    dragEvents.forEach((dropEvent)=>{
         let columns=document.querySelectorAll(".column");
         for(let c of columns){ // todo,progress,done
            c.addEventListener(dropEvent,(eventDetails)=>{
                eventDetails.preventDefault(); // will prevent of an element to drag over an element while dragging
            if(dropEvent=="drop"){
                // get that id of the card that has beeen dragged here
                let cardId=eventDetails.dataTransfer.getData("text/plan");
                let draggedCard=document.querySelector(`#${cardId}`);
                let currentColumn=eventDetails.target;
                currentColumn.append(draggedCard);
            }
        })
         }
    })
} 