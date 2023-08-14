//Deposit section
document.getElementById('btn-deposit').addEventListener('click',function(){//step number 1
    //console.log('I got clicked');

    //2 step get the deposit ammount deposit-field

    const depositAmmountMain=document.getElementById('deposit-field');
    const depositTotalMain=depositAmmountMain.value;
//Convert value string to number
    const stringToNumDeposit=parseFloat(depositTotalMain)

    //console.log(depositTotalMain);

    // step:3 get the deposit ammount

   //for non input field need to use innerText to get the text
    const depositTotalElement=document.getElementById('deposit-total');
    const prevDepositTotal=depositTotalElement.innerText;
    // conver value string to number
    const stringToNumPrevTotal=parseFloat(prevDepositTotal)

// step 4 Add numbers to set the total deposit 
    const depositSum=stringToNumPrevTotal + stringToNumDeposit;

    //set the deposit total
    depositTotalElement.innerText=depositSum

    //console.log(depositTotal);

// step - 5 get ballance current total
const balanceTotalElement=document.getElementById("balance-total");
const prevBalanceTotalString=balanceTotalElement.innerText;
const prevBalanceTotal=parseFloat(prevBalanceTotalString);

// step 6 calculate current totAL BALA
const currrenTotalBalance=prevBalanceTotal + stringToNumDeposit;

// Set the current balance
balanceTotalElement.innerText=currrenTotalBalance;



    //step-7 - extra clear the deposit field

    depositAmmountMain.value="";

})