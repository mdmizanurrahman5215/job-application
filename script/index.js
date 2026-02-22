

// const jobCard = [...jobCards];
const cards = [...jobCards];
const interviewCards = [];
const rejectedCards = [];


const total = getElementFromId("total-result");
const interviewCount = getElementFromId("interview-result");
const rejectedCount = getElementFromId("rejected-result");
const allbtn = document.getElementById("all-filter-btn");
const interviewbtn = document.getElementById("interview-filter-btn");
const rejectedbtn = document.getElementById("rejected-filter-btn");
const cardContainerElem = getElementFromId("card-container");
const avaiblejob = document.getElementById("available-job")

// result counting

function calculateCount() {
  total.innerText = cards.length;
  avaiblejob.innerText =`${ cards.length} of 8 Jobs`
  interviewCount.innerText = interviewCards.length;
  rejectedCount.innerText = rejectedCards.length;
}
calculateCount();

cardContainerElem.addEventListener("click", function (e) {
  const interiewClicked = e.target.closest(".interview-btn") 
  const rejectedClicked = e.target.closest(".rejected-btn")
  const deleteClicked = e.target.closest(".card-delete-btn")
  if(!interiewClicked && !rejectedClicked && !deleteClicked){
    return
  }
  const card = e.target.closest(".card");
  console.log(card);
  
  if (!card) return;
 
  const cardId = card.dataset.id;
  console.log(cardId);
  
  const selectedCard = cards.find((card) => card.id == cardId);
  console.log(selectedCard);

  if (e.target.classList.contains("interview-btn")) {
    const statusElem = card.querySelector(".status");
    statusElem.innerText = "Interview";
    statusElem.classList.remove("bg-red-500", "text-black");
    statusElem.classList.add("bg-green-500", "text-black");
    selectedCard.statusColor = "bg-green-500 text-black";
    selectedCard.status = "Interview";

    const matchedIndex = rejectedCards.findIndex((card) => card.id == cardId);

    if (matchedIndex !== -1) {
      rejectedCards.splice(matchedIndex, 1);
    }

    const alreadyExists = interviewCards.some((card) => card.id == cardId);

    if (!alreadyExists) {
      interviewCards.push(selectedCard);
      calculateCount();
      console.log("Interview List:", interviewCards);
    }
  }

  if (e.target.classList.contains("rejected-btn")) {
    const statusElem = card.querySelector(".status");
    statusElem.innerText = "Rejected";
    statusElem.classList.remove("bg-gray-600", "text-white");
    statusElem.classList.add("bg-red-500", "text-black");
    selectedCard.statusColor = "bg-red-500 text-black";
    selectedCard.status = "Rejected";
    const matchedIndex = interviewCards.findIndex((card) => card.id == cardId);
    console.log(matchedIndex);
    if (matchedIndex !== -1) {
      interviewCards.splice(matchedIndex, 1);
    }
    const alreadyExists = rejectedCards.some((card) => card.id == cardId);

    if (!alreadyExists) {
      rejectedCards.push(selectedCard);
      calculateCount();
    }
  }

  if(deleteClicked){
    console.log("Card delete btn clicked");
     const allMatched = cards.findIndex((card) => card.id == cardId);
     const interviewMatched = interviewCards.findIndex((card) => card.id == cardId);
     const rejectedMatched = rejectedCards.findIndex((card) => card.id == cardId);
  
     

    if (allMatched !== -1) {
      cards.splice(allMatched, 1);
      generateCard(cards)
      calculateCount();
    

    }
    if (interviewMatched !== -1) {
      interviewCards.splice(interviewMatched, 1);
       generateCard(interviewCards)
      calculateCount();
      // avaiblejob.innerText =`${ interviewCards.length} of 8 Jobs`
    }
    if (rejectedMatched !== -1) {
      rejectedCards.splice(rejectedMatched, 1);
       generateCard(rejectedCards)
      calculateCount();
      // avaiblejob.innerText =`${ rejectedCards.length} of 8 Jobs`
    }
    
    calculateCount();

    
  }

});

function toogle(id) {
  const selected = document.getElementById(id);
  console.log(id);

  allbtn.classList.remove("selected");
  interviewbtn.classList.remove("selected");
  rejectedbtn.classList.remove("selected");
  selected.classList.add("selected");
  if (id === "interview-filter-btn") {
    generateCard(interviewCards);
  } else if (id === "rejected-filter-btn") {
    generateCard(rejectedCards);
  } else {
    generateCard(cards);
  }
}
generateCard(cards);
