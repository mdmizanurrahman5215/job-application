console.log("index.js");

const cards = [...jobCards]
const interviewCards = []
const rejectedCards = []
 
window.addEventListener("load", function(){
  generateCard(cards)
  calculateCount(cards)
  availableCount(cards)
  
})


const totalElem = document.getElementById("total-result")
const interviewElem = document.getElementById("interview-result")
const rejectedElem = document.getElementById("rejected-result")
const availableJob = document.getElementById("available-job")
const cardContainerElem = document.getElementById("card-container")
console.log(cardContainerElem);

cardContainerElem.addEventListener("click", selectHandler)



