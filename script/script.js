const billAmountInput = document.querySelector(".bill-amount");
const cashAmountInput = document.querySelector(".cash-amount");
const calculateBtn = document.querySelector(".btn");
const twoThouNote=document.querySelector(".two-thou-note");
const fiveHunNote = document.querySelector(".five-hun-note");
const hunNote = document.querySelector(".hun-note");
const twenNote=document.querySelector(".twen-note");
const tenNote=document.querySelector(".ten-note");
const fiveNote=document.querySelector(".five-note");
const oneNote=document.querySelector(".one-note");
var listOfNotes=[twoThouNote,fiveHunNote,hunNote,twenNote,tenNote,fiveNote,oneNote]
var changeAmount = [2000, 500, 100, 20, 10, 5, 1]
billAmountInput.addEventListener('focusout',()=>{
    var billAmount = Number(billAmountInput.value);
    console.log(billAmount);
    if (billAmount !== 0) {
        cashAmountInput.style.visibility = "visible";
    }
})
calculateBtn.addEventListener("click", () => {
    var billAmount = Number(billAmountInput.value);
    if(billAmount!=="" || billAmount!==undefined){
        cashAmountInput.style.visibility="visible";
    }
    var cashAmount = Number(cashAmountInput.value);
    leftAmount = cashAmount - billAmount;
    changeAmount.map((note,index) => {
        numOfNotes = leftAmount / note;
        numOfNotes = Math.floor(numOfNotes)
        leftAmount = leftAmount - (numOfNotes * note);
        listOfNotes[index].append(`${numOfNotes}`);
    });
});