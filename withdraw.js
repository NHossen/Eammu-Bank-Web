/*
1.add event handeler with the withdraw button
2.get the withdraw amount from the withdrae input field
2.5 also make sure to convert the input into a number by using parseFloat
3.get previous Withdraw total
4. calculatw total witdraw ammount
5. set total withdraw ammount 
5.get the previous balache
6. calculate new balace total
6-5: set the new blance total
7.clear input
*/


// 1 Add event handelers


document.getElementById("btn-withdraw").addEventListener('click',function(){
    
//2 get withdraw ammount
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
//step 2.5
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

// step 3

const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdraeTotalString=withdrawTotalElement.innerText;
const previousWithdraeTotal=parseFloat(previousWithdraeTotalString);


// step 4 

const currenntWithdrawTotal=previousWithdraeTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currenntWithdrawTotal;

//step 5 

const balanceTotalElement=document.getElementById('balance-total');

const prevBalaceString=balanceTotalElement.innerText;

const prevBalaceNum=parseFloat(prevBalaceString);

//step 6

const newBalaceTotal=prevBalaceNum - newWithdrawAmount;

balanceTotalElement.innerText=newBalaceTotal;

// Step 7
withdrawField.value="";
})