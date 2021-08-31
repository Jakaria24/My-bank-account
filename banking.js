// deposit money
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositBalance = document.getElementById('deposit-input');
    const depositNewBalance = depositBalance.value;
    const depositNewAmount = parseFloat(depositNewBalance);

    const depositTotalBalance = document.getElementById('deposit-balance');
    const depositPreviousBalance = depositTotalBalance.innerText;
    const depositPreviousAmount = parseFloat(depositPreviousBalance);

    const totalDepositBalance = depositNewAmount + depositPreviousAmount;
    depositTotalBalance.innerText =totalDepositBalance;

    depositBalance.value ='';

    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = totalBalance.innerText;
    const newTotalBalance = parseFloat(previousTotalBalance);
    const totalAmount = newTotalBalance + depositNewAmount;
    totalBalance.innerText = totalAmount;
    
})

// withdraw money
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawBalance = document.getElementById('withdraw-input');
    const previousWithdrawBalance = newWithdrawBalance.value;
    const newWithdrawTotalBalance = parseFloat(previousWithdrawBalance);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const currentWithdrawAmount = withdrawAmount.innerText;
    const totalWithdrawAmount = parseFloat(currentWithdrawAmount);
    const myWithdrawAmount = totalWithdrawAmount + newWithdrawTotalBalance;
    withdrawAmount.innerText = myWithdrawAmount;
    
    newWithdrawBalance.value = '';

    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceText);
    const mainBalance = currentBalanceTotal -newWithdrawTotalBalance;
    balanceTotal.innerText = mainBalance;
    
})