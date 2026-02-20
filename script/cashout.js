document.getElementById('cashout-btn').addEventListener('click',function(){
    const cashoutNumberInput  = document.getElementById('cashout-number')
    const cashoutNumber = cashoutNumberInput.value
    console.log(cashoutNumber)
    if(cashoutNumber.length != 11){
        alert('Invalid Agent Number')
        return
    }
    
    const cashoutAmountInput = document.getElementById('cashout-amount')
    const cashoutAmount = cashoutAmountInput.value 
    console.log(cashoutAmount)
    
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText
    console.log(balance)
    const newBalance = Number(balance)-Number(cashoutAmount)
    if(newBalance < 0 ){
        alert('Invalid Balance')
        return
    }
    

    const cashoutPinInput = document.getElementById('cashout-pin')
    const pin =cashoutPinInput.value 
    if(pin==='1234'){
        alert('cashout successful')

   const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML=`
        <div class="transaction-card py-5 bg-base-100">
            cash out success to 
                ${cashoutNumber} to ${cashoutAmount}
              at  ${new Date()}
            </div>
        `
            history.append(newHistory)

        console.log('new balance ',newBalance)
        balanceElement.innerText=newBalance
    }
    else{
        alert('Invalid Pin')
        return
    }
})