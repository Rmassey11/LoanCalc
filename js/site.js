//Get Values from the page
function getValues(){
    let loanTotal = document.getElementById("loanTotal").value;
    let loanLength = document.getElementById("loanLength").value;
    let interestRate = document.getElementById("interestRate").value;

    //Validation
    //Parse into Integers
    loanTotal = parseInt(loanTotal);
    loanLength = parseInt(loanLength);
    interestRate = parseInt(interestRate);
    if(Number.isInteger(loanTotal) && Number.isInteger(loanLength) && Number.isInteger(interestRate)){
        let loanArray = loanCalc(loanTotal,loanLength,interestRate);
        displayLoan(loanArray)
    }
    else{
        alert("You must enter Integers");
    }
}

//Determine Total Principal, Interest, Cost
function loanCalc(loanTotal,loanLength,interestRate){
    let loanArray = []
    let remainingBalance = loanTotal
    let totalInterest = 0
    for( let index = 1;index<=loanLength; index++){
        loanArray.push(index);
        let monthlyPayment = (loanTotal)*(interestRate/1200)/(1-(1+interestRate/1200)^loanLength);
        loanArray.push(monthlyPayment);
        let interestPayment = (remainingBalance*interestRate/1200);
        let principal = (monthlyPayment - interestPayment);
        loanArray.push(principal);
        loanArray.push(interestPayment);
        totalInterest = totalInterest + interestPayment;
        loanArray.push(totalInterest);
        remainingBalance = remainingBalance - principal;
        loanArray.push(remainingBalance);
    }
    return loanArray
}

//Use Formulas for monthlt payment and remaining balance

//Display Values