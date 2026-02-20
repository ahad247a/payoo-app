document.getElementById("pay-bill-btn").addEventListener('click',function(){
    const bankaccount=getValueFromInput('add-money-bank')
    if(bankaccount=='Select To Pay'){
        alert('please select a method')
        return
    } 

    const payNumber = getValueFromInput("pay-bill-number")
    if (payNumber.length !==11){
        alert("acc no invalid")
        return
    }

    const amount = getValueFromInput("pay-bill-amount")
    const newBalance = getBalance()-Number(amount)

    if(newBalance < 0){
        alert("Invalid balance")
        return
    }

    const pin = getValueFromInput("pay-bill-pin")

    if(pin =="1234"){
      alert(`pay bill  success from 
                ${payNumber}
              at  ${new Date()}`)
        
        setBalance(newBalance)  
        
        
         const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML=`
        <div class="transaction-card py-5 bg-base-100">
            send money success from 
                ${payNumber}
              at  ${new Date()}
            </div>
        `
            history.append(newHistory)
    }
    else{
        alert("invalid pin ")
    }
})