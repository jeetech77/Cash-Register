// Selecting elements of document

const billAmountInput = document.querySelector(".bill-amount");
const cashAmountInput = document.querySelector(".cash-amount");
const notesContainer = document.querySelector(".flex-container");
const btnCalculate = document.querySelector(".btn");
const alertText = document.querySelector(".alert-text");
const listOfNotes = document.querySelectorAll(".notes")

let amountOfNotes = [2000, 500, 100, 20, 10, 5, 1]

// To show Cash amount input field

billAmountInput.addEventListener('keyup', () => {

    let billAmount = Number(billAmountInput.value);
    console.log(billAmount);
    if (billAmount <= 0) {
        cashAmountInput.style.visibility = "hidden";
    }
    else if (billAmount !== 0) {
        cashAmountInput.style.visibility = "visible";
    }
})

// Logic processing here

btnCalculate.addEventListener("click", () => {
    let billAmount = Number(billAmountInput.value);
    let cashAmount = Number(cashAmountInput.value);

    //  Checking for no values
    if (billAmount <= 0 || cashAmount <= 0) {
        showError("Enter valid amount please.",'red')
    }

    // Checking for less values
    else if (billAmount > cashAmount) {
        showError("Cash amount is less than bill amount.",'red')
    }
    
    // Checking for equal amouts
    else if (billAmount === cashAmount) {
        showError("No amount to be returned", "green");
    }
    else {
        leftAmount = cashAmount - billAmount;
        notesContainer.style.visibility = "visible";
        alertText.innerText = `Left amount : ${leftAmount}`;
        alertText.style.backgroundColor = "green";
        amountOfNotes.map((note, index) => {
            numOfNotes = leftAmount / note;
            numOfNotes = Math.floor(numOfNotes)
            leftAmount = leftAmount - (numOfNotes * note);
            if (numOfNotes > 0) {
                listOfNotes[index].innerText = `${amountOfNotes[index]} Notes : ${numOfNotes}`;
                listOfNotes[index].style.color = "green";
                listOfNotes[index].style.fontWeight = "bolder";
            }
        });
    }
});

// To hide elements

billAmountInput.addEventListener('focusin', clearFields);
cashAmountInput.addEventListener('focusin', clearNotesField)

function showError(errMsg, errColor) {
    console.log(errMsg);
    console.log(errColor);
    alertText.innerText = errMsg;
    alertText.style.backgroundColor = errColor;
}

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
    listOfNotes.forEach((value, index)=> {
        listOfNotes[index].innerHTML = `${amountOfNotes[index]} Notes : 0`;
        listOfNotes[index].style.color = "white";
        listOfNotes[index].style.fontWeight = "inherit";
    }
    )}