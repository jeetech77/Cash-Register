// Selecting elements of document

const billAmountInput = document.querySelector(".bill-amount");
const cashAmountInput = document.querySelector(".cash-amount");
const notesContainer = document.querySelector(".flex-container");
const calculateBtn = document.querySelector(".btn");
const alertText = document.querySelector(".alert-text");
const listOfNotes = document.querySelectorAll(".notes")
let amoutOfNotes = [2000, 500, 100, 20, 10, 5, 1]

// To show Cash amount input field

billAmountInput.addEventListener('focusout', () => {
    let billAmount = Number(billAmountInput.value);
    if (billAmount !== 0) {
        cashAmountInput.style.visibility = "visible";
    }
})

// Logic processing here

calculateBtn.addEventListener("click", () => {
    let billAmount = Number(billAmountInput.value);
    let cashAmount = Number(cashAmountInput.value);
    //  Checking for no values
    if (billAmount === 0 || cashAmount === 0) {
        alertText.innerText = `Uppps, Enter some amount please.`;
        alertText.style.backgroundColor = "red";
        return; // Exiting the function here.
    }
    // Checking for less values
    if (billAmount > cashAmount) {
        alertText.innerText = `Cash amount is less than bill amount.`;
        alertText.style.backgroundColor = "red";
        return; // Exiting the function here.
    }
    // Checking for equal amouts
    if (billAmount === cashAmount) {
        alertText.innerText = `No Amount to be returned.`;
        alertText.style.backgroundColor = "green";
        return; // Exiting the function here.
    }

    leftAmount = cashAmount - billAmount;
    notesContainer.style.visibility = "visible";
    alertText.innerText = `Left amount : ${leftAmount}`;
    alertText.style.backgroundColor = "green";
    amoutOfNotes.map((note, index) => {
        numOfNotes = leftAmount / note;
        numOfNotes = Math.floor(numOfNotes)
        leftAmount = leftAmount - (numOfNotes * note);
        if (numOfNotes > 0) {
            listOfNotes[index].innerText = `${amoutOfNotes[index]} Notes : ${numOfNotes}`;
            listOfNotes[index].style.color = "green";
            listOfNotes[index].style.fontWeight = "bolder";
        }
    });
});

// Checking valid amounts

billAmountInput.addEventListener('focusin', clearFields);
cashAmountInput.addEventListener('focusin', clearNotesField)

function clearFields() {
    billAmountInput.value = '';
    cashAmountInput.value = '';
    cashAmountInput.style.visibility = "hidden";
    clearNotesField();
}

function clearNotesField() {
    alertText.innerHTML = "";
    alertText.style.backgroundColor = "inherit";
    notesContainer.style.visibility = "hidden";
}