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
billAmountInput.addEventListener('focusout',()=>{
    var billAmount = Number(billAmountInput.value);
    console.log(billAmount);
    if (billAmount !== 0) {
        cashAmountInput.style.visibility = "visible";
    }
})
calculateBtn.addEventListener("click", () => {
    var billAmount = Number(billAmountInput.value);
    var cashAmount = Number(cashAmountInput.value);
    if (billAmount>cashAmount) {
        alertText.innerText=`Your bill is more than the cash you are providing.`;
        alertText.style.backgroundColor="red";
        exit();
    }
    leftAmount = cashAmount - billAmount;
    alertText.innerText=`Your left amout is ${leftAmount}`;
    alertText.style.backgroundColor="green";
    changeAmount.map((note,index) => {
        numOfNotes = leftAmount / note;
        numOfNotes = Math.floor(numOfNotes)
        leftAmount = leftAmount - (numOfNotes * note);
        listOfNotes[index].append(`${numOfNotes}`);
    });
});
clearBtn.addEventListener('click',()=>{
    billAmountInput.value='';
    cashAmountInput.value='';
    alertText.innerHTML="";
    alertText.style.backgroundColor = "white";
    listOfNotes.map(value=>{
        value.innerHTML="";
    })
})