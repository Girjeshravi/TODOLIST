let addCardBtn =document.getElementById('addCard');
let todoContainer=document.getElementById('todo');

let count=1;
addCardBtn.addEventListener("click",()=>{
    let superCard=document.createElement("div");
    let card=document.createElement("div");
    card.className="card";
    card.id="card"+count++;
    card.innerText="Test Card";

    card.setAttribute("contenteditable","true");
    card.setAttribute("draggable","true");
    superCard.append(card);
    todoContainer.append(superCard);

    card.addEventListener("click",(event_details)=>{
        let clickedCard=event_details.target;
        if(clickedCard.innerText=="Test Card"){
            clickedCard.innerText="";

        }
    })
    card.addEventListener("blur",(event_details)=>{
        let blurredCard=event_details.target;
        // get parent of the blurred card
        let parent =blurredCard.parentElement;
        
        // delet the card if it is empty

        if(blurredCard.innerText==""){
            blurredCard.remove();
        }
    })
    // dragstart event
    // dragend event
    card.addEventListener("dragstart",(event_details)=>{
        card.style.opacity="0.2";
        event_details.dataTransfer.setData("text",card.id);
    })
    card.addEventListener("dragend",(event_details)=>{
        card.style.opacity="1.0";
    })
    // dragover,dragenter,drop 
    // todoContainer.addEventListener("dragover",(event_details)=>{
    //     event_details.preventDetails();
    // })
    // todoContainer.addEventListener("dragenter",(event_details)=>{
    //     event_details.preventDefault();
    // })
    // todoContainer.addEventListener("drop",(event_details)=>{
    //     event_details.preventDefault();
    // })

    // progress, done
    let dragEvents=["dragover","dragenter","drop"]
    dragEvents.forEach((drag)=>{ 
        let container=document.querySelectorAll(".column");

        for(let t of container){
            t.addEventListener(drag,(event_details)=>{
                event_details.preventDefault();
        
            if((drag=="drop")){
                let cardId=event_details.dataTransfer.getData("text");
                let draggedCard=document.getElementById(cardId);
                let columnToBeMoved=event_details.target;
                columnToBeMoved.append(draggedCard);
            }
        })
        }
    })

})