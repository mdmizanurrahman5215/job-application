console.log("card.js");

const cardContainer = document.getElementById("card-container");

function generateCard(jobCard) {
  cardContainer.innerHTML = "";

  if (jobCard.length === 0) {
    cardContainer.innerHTML = `
      <section
          id="no-job-container"
          class="bg-white flex flex-col justify-center items-center gap-4 w-full h-[400px] rounded-md"
        >
          <img src="./images/assignment.png" alt="assignment" />
          <h1 class ="text-2xl my-2 ">No Jobs Available</h1>
          <p class ="text-md md:text-2xl">Check back soon for new job opportunities</p>
        </section>
    `;

    return;
  }

  jobCard.forEach((card) => {
    const {
      id,
      companyName,
      description,
      interview,
      location,
      position,
      rejected,
      salary,
      type,
      status,
      statusColor,
    } = card;

    const div = document.createElement("div");
    div.innerHTML = `
     <div
            data-id="${id}"
            class="card bg-white px-6 py-10 rounded-md shadow-sm flex flex-col md:flex-row md:justify-between gap-6"
          >
            <!-- right  -->
            <div  class=" ">
              <h1  class="text-3xl font-bold">${companyName}</h1>
              <h3  class="text-2xl text-gray-700">
               ${position}
              </h3>
              <div class="flex items-center gap-4 my-6">
                <p >${location}</p>
                <span class="flex justify-center items-center">●</span>
                <p >${type}</p>
                <span>●</span>
                <p >${salary}</p>
              </div>
              <span
                class="status text-2xl px-4 py-2 ${statusColor} rounded-md"
                >${status}</span
              >
              <p  class="my-6">
              ${description}
              </p>
              <div  class="flex items-center gap-4">
                <button
              
                  class="interview-btn px-4 py-2 border-2 border-green-500 rounded-md bg-white text-green-500 font-bold cursor-pointer hover:bg-green-500 hover:text-white"
                >
                  ${interview}
                </button>
                <button
                 
                  class=" rejected-btn px-4 py-2 border-2 border-red-500 rounded-md bg-white text-red-500 font-bold hover:bg-red-500 hover:text-white cursor-pointer"
                >
                  ${rejected}
                </button>
              </div>
            </div>

            <!-- left  -->
            <div class="">
              <button
              
                class="card-delete-btn hidden md:block w-[50px] h-[50px] flex justify-center items-center border-2 border-gray-300 rounded-full p-2  cursor-pointer hover:bg-gray-200"
              >
                <img src="../images/Trash.png" alt="" class="w-full" />
              </button>

              <button
              
                class="card-delete-btn   w-full bg-red-500 py-2 rounded-md shadow-sm text-white font-bold text-2xl md:hidden cursor-pointer hover:bg-red-700"
              >
                    Delete
              </button>

            </div>
          </div>
    `;

    cardContainer.appendChild(div);
  });
}
