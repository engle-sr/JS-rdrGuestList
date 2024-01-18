// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    //console.log(guest);
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});


const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const clearInput = function () {
    guestInput.value = "";
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide"); guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const taskItems = ["Koozies", "Route Details", "t-shirts", "Happy Hour Menu", "Event flyers", "Eventbrite Invitations", "Holler Haulers Details"];

const allGuests = document.querySelectorAll(".guest-list li");

for (let guest of allGuests) {
    let randomTaskIndex = Math.floor(Math.random() * taskItems.length);
    let randomTaskItem = taskItems[randomTaskIndex];

    let listItem = document.createElement("li");
        listItem.innerText =
        `${guest.innerText} is bringing ${randomTaskItem}.`;
        assignedItems.append(listItem);

        taskItems.splice(randomTaskIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});