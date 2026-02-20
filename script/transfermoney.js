document.getElementById('transfer-btn').addEventListener('click',function(){
    const usernumber = getValueFromInput('transfer-number')

    if(usernumber.length !==11){
        alert("user acc no invalid")
        return
    }

    const amount = getValueFromInput("transfer-amount")
    const newBalance = getBalance()-Number(amount)

    if(newBalance < 0){
        alert("Invalid balance")
        return
    }

    const pin = getValueFromInput("transfer-pin")

    if(pin =="1234"){
      alert(`send money success from 
                ${usernumber}
              at  ${new Date()}`)
        
        setBalance(newBalance)  
        
        
         const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML=`
        <div class="transaction-card py-5 bg-base-100">
            send money success from 
                ${usernumber}
              at  ${new Date()}
            </div>
        `
            history.append(newHistory)
    }
    else{
        alert("invalid pin ")
    }

})