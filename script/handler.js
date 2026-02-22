function selectHandler(e) {
  const isInterviewClicked = e.target.closest(".interview-btn");
  const isRejectedBtnClicked = e.target.closest(".rejected-btn");
  const isDeletedBtnClicked = e.target.closest(".card-delete-btn");

  if (!isInterviewClicked && !isRejectedBtnClicked && !isDeletedBtnClicked) {
    return;
  }

  console.log(isRejectedBtnClicked);
  console.log(isDeletedBtnClicked);
  const card = e.target.closest(".card");
  const cardId = card.dataset.id;

  const selectedCard = cards.find((card) => card.id == cardId);

  //   interview select

  if (isInterviewClicked) {
    const statusElem = card.querySelector(".status");
    statusElem.innerText = "Interview";
    statusElem.classList.remove(
      "bg-gray-600",
      "bg-green-500",
      "bg-red-500",
      "text-white",
      "text-black",
      "font-bold",
    );
    statusElem.classList.add("bg-green-500", "text-black", "font-bold");

    selectedCard.statusColor = "bg-green-500 text-black font-bold";
    selectedCard.status = "Interview";

    const exist = interviewCards.some((card) => card.id == cardId);
    if (!exist) {
      interviewCards.push(selectedCard);
    }
    calculateInterviewCount(interviewCards);

    const matchedIndex = rejectedCards.findIndex((card) => card.id == cardId);

    if (matchedIndex !== -1) {
      rejectedCards.splice(matchedIndex, 1);
      calculateRejectCount(rejectedCards);
    }

    if (matchedIndex !== -1) {
      const filtered = rejectedCards.filter((card) => card.id !== cardId);
      console.log(filtered);
      generateCard(filtered);
      avaiblejob(filtered);
    }
  }

  //   reject select

  if (isRejectedBtnClicked) {
    const statusElem = card.querySelector(".status");
    statusElem.innerText = "Rejected";
    statusElem.classList.remove(
      "bg-gray-600",
      "bg-green-500",
      "bg-red-500",
      "text-white",
      "text-black",
      "font-bold",
    );
    statusElem.classList.add("bg-red-500", "text-black", "font-bold");
    selectedCard.statusColor = "bg-red-500 text-black font-bold";
    selectedCard.status = "Rejected";

    const exist = rejectedCards.some((card) => card.id == cardId);
    selectedCard.statusColor = "bg-red-500 text-black font-bold";
    selectedCard.status = "Rejected";

    if (!exist) {
      rejectedCards.push(selectedCard);
      calculateRejectCount(rejectedCards);
    }
    const matchedIndex = interviewCards.findIndex((card) => card.id == cardId);

    if (matchedIndex !== -1) {
      interviewCards.splice(matchedIndex, 1);
      calculateInterviewCount(interviewCards);
    }
    if (matchedIndex !== -1) {
      const filtered = interviewCards.filter((card) => card.id !== cardId);
      generateCard(filtered);
      avaiblejob(filtered);
    }
  }

  //   delete section
  if (isDeletedBtnClicked) {
    const allMatched = cards.findIndex((card) => card.id == cardId);
    const interviewMatched = interviewCards.findIndex(
      (card) => card.id == cardId,
    );
    const rejectedMatched = rejectedCards.findIndex(
      (card) => card.id == cardId,
    );

    if (allMatched !== -1) {
      cards.splice(allMatched, 1);
      generateCard(cards);
      calculateCount(cards);
      availableCount(cards);
    }
    if (interviewMatched !== -1) {
      interviewCards.splice(interviewMatched, 1);
      generateCard(interviewCards);
      calculateInterviewCount(interviewCards);
      availableCount(interviewCards);
    }
    if (rejectedMatched !== -1) {
      rejectedCards.splice(rejectedMatched, 1);
      generateCard(rejectedCards);
      calculateRejectCount(rejectedCards);
      availableCount(rejectedCards);
    }
  }
}
