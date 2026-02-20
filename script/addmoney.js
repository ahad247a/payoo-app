document.getElementById('add-money-btn').addEventListener("click",function(){
    const bankaccount=getValueFromInput('add-money-bank')
    if(bankaccount=='Select A Bank'){
        alert('please select a bank')
        return
    }

    const accno = getValueFromInput("add-money-number")
    if(accno.length !=11 ){
        alert('invalid acc no')
        return
    }

    const amount=getValueFromInput('add-money-amount')
    const newBalance=getBalance()+ Number(amount)


    const pin = getValueFromInput("add-money-pin")
    if(pin =="1234"){
        alert(`add money success from 
                ${bankaccount}
              at  ${new Date()}`)
        setBalance(newBalance)


        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML=`
        <div class="transaction-card py-5 bg-base-100">
            add money success from 
                ${bankaccount}
              at  ${new Date()}
            </div>
        `
            history.append(newHistory)
    }
    else{
        alert('invalid pin')
        return
    }

})