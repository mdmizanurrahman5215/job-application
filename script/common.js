const updateInterAvailableCount = (iterview) => {
  avaiblejob.innerText = `${iterview.length} of 8 Jobs`;
};

function calculateCount(array) {
  const length = array.length;

  totalElem.innerText = length;
}
function calculateInterviewCount(array) {
  interviewElem.innerText = array.length;
}
function calculateRejectCount(array) {
  rejectedElem.innerText = array.length;
}
function availableCount(array) {
  availableJob.innerText = `${array.length} of 8 Jobs`;
}
