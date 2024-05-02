let addCardBtn=document.querySelector('#addCard');
let todoContainer=document.querySelector('#todo');


addCardBtn.addEventListener("click",addTask);

function addTask(){
    let cardParentDiv=document.createElement("div");

    let card=document.createElement("div");

    card.className="card";
    card.innerText="Test Card";
    card.setAttribute("contenteditable","true");// this line will help to edit the above text
    cardParentDiv.append(card);
    todoContainer.append(cardParentDiv);
    card.focus(); // will redirect us to do the block card to edit the text

    // problem 1 (empty card should automatically be removed)

    card.addEventListener("blur",(eventDetails)=>{
        let blurredCard=eventDetails.target;
        let parentOfBlurredCard=blurredCard.parentElement;
        if(blurredCard.innerText.trim()==""){
            parentOfBlurredCard.remove();
        }
    })
    // problem 2 => make default text empty
    card.addEventListener("click",(eventDetails)=>{
        let clickedCard=eventDetails.target;
        if(clickedCard.innerText.trim()==`Test Card`){
            clickedCard.innerText="";
        }
    })
    let selector =document.createElement("select");
    selector.innerHTML=`
    <option value="todo1">ToDo</option>
    <option value="progress1">Progress</option>
    <option value="done1">Done</option>
     `
    // let option1=document.createElement("option");
    // option1.value="todo";
    // option1.innerText="ToDo";

    // let option2=document.createElement("option");
    // option2.value="todo";
    // option2.innerText="ToDo";

    // selector.append(option1);
    // selector.append(option2);

    cardParentDiv.append(selector);

    // if names of option values and ids were same
    // todo=todo

    // selector.addEventListener("change",(eventDetails)=>{
    //     let selectedOption=eventDetails.target.value;
    //     let selectedContainer=document.querySelector(`#${selectedOption}`);
    //     selectedContainer.append(card);
    // })

    // if names of option values and ids were differernt
    let selectedMapping={
        todo1:"todo",
        progress1:"progress",
        done1:"done"
    }
    selector.addEventListener("change",(eventDetails)=>{
        let selectedOption=eventDetails.target.value;
        let realId=selectedMapping[selectedOption];
        let selectedConatiner=document.querySelector(`#${realId}`);
        selectedConatiner.append(cardParentDiv ); // the doubt is ye jo card hain second card ko refer kr raha hain na to sir apan agar upar wale pe selection change kr rhe to ye uspe kaise refer kr sakta hain
    })
}