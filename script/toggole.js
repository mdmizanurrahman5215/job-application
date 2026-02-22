console.log("toogle.js");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

function toogle(id, interviewFilterArray) {
  console.log(id);
  console.log(interviewFilterArray);
  

  const selected = document.getElementById(id);

  //   console.log(selected);

  allBtn.classList.remove("selected");
  interviewBtn.classList.remove("selected");
  rejectedBtn.classList.remove("selected");
  selected.classList.add("selected");
  if (id == "all-filter-btn") {
    generateCard(cards);
    calculateCount(cards);
    availableCount(cards);
  }
  if (id == "interview-filter-btn") {
    generateCard(interviewCards);
    calculateInterviewCount(interviewCards);
    availableCount(interviewCards);
  }
  if (id == "rejected-filter-btn") {
    generateCard(rejectedCards);
    calculateRejectCount(rejectedCards);
    availableCount(rejectedCards);
  }
}


