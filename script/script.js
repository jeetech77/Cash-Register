 // Selecting elements of html

const billAmountInput = document.querySelector(".bill-amount");
const cashAmountInput = document.querySelector(".cash-amount");
const calculateBtn = document.querySelector(".btn");
const clearBtn=document.querySelector(".clear-btn");
const alertText=document.querySelector(".alert-text");
const twoThouNote=document.querySelector(".two-thou-note");
const fiveHunNote = document.querySelector(".five-hun-note");
const hunNote = document.querySelector(".hun-note");
const twenNote=document.querySelector(".twen-note");
const tenNote=document.querySelector(".ten-note");
const fiveNote=document.querySelector(".five-note");
const oneNote=document.querySelector(".one-note");

var listOfNotes=[twoThouNote,fiveHunNote,hunNote,twenNote,tenNote,fiveNote,oneNote]
var changeAmount = [2000, 500, 100, 20, 10, 5, 1]

// To show anoter input field

billAmountInput.addEventListener('focusout',()=>{
    var billAmount = Number(billAmountInput.value);
    if (billAmount !== 0) {
        cashAmountInput.style.visibility = "visible";
    }
})

// Logic processing here

calculateBtn.addEventListener("click", () => {
    var billAmount = Number(billAmountInput.value);
    var cashAmount = Number(cashAmountInput.value);
    leftAmount = cashAmount - billAmount;
    if (billAmount>cashAmount) {
        alertText.innerText=`Cash amount is less than bill amount.`;
        alertText.style.backgroundColor="red";
        return('');
    }
    alertText.innerText=`Left amount : ${leftAmount}`;
    alertText.style.backgroundColor="green";
    changeAmount.map((note,index) => {
        numOfNotes = leftAmount / note;
        numOfNotes = Math.floor(numOfNotes)
        leftAmount = leftAmount - (numOfNotes * note);
        listOfNotes[index].innerText=numOfNotes;
        if (numOfNotes>0) {
            listOfNotes[index].style.color="green";
            listOfNotes[index].style.fontWeight="bolder";
        }
    });
});

// Checking valid amounts

billAmountInput.addEventListener('focusin',clearFields)
function clearFields(){
    billAmountInput.value='';
    cashAmountInput.value='';
    alertText.innerHTML="";
    cashAmountInput.style.visibility = "hidden";
    alertText.style.backgroundColor = "inherit";
    listOfNotes.map(value=>{
        value.innerHTML="0";
        value.style.color="inherit";
        value.style.fontWeight="inherit";
    })
}