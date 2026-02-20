console.log('java script is connected')

document.getElementById('login-btn').addEventListener('click',function(){
   
    const numberInput = document.getElementById('input-number')
    const contactNumber=numberInput.value 
    console.log(contactNumber)

    const inputPin = document.getElementById('input-pin')
    const pin =inputPin.value 
    console.log(pin)

    if(contactNumber=='01924509479' && pin=='1234'){
        alert('Login Successfull')

        window.location.assign("home.html")
    }
    else{
        alert('Login Failed')
        return
    }

})