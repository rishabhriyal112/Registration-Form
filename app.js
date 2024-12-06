const form=document.querySelector("form")
const username = document.querySelector("#username")
const email =document.querySelector("#Email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#confirm-password")
const submit = document.querySelector("#btn")

form.addEventListener("submit",(e) => {
    e.preventDefault( )

    validateInputs( )
})

const validateInputs = ( ) =>{
    const usernamevalue = username.value.trim()
    const emailvalue = email.value.trim()
    const passwordvalue = password.value.trim()
    const cpasswordvalue = cpassword.value.trim()

    if(usernamevalue === ""){
        setError(username,"Username is Required")
    }
    else{
        setSuccess(username)
    }


    if(passwordvalue === ""){
        setError(password,"Password is Required")
    }
    else if (passwordvalue.length<8){
        setError(password,"Password must be at least 8 characters")
    }
    else{
        setSuccess(password)
    }


    if(cpasswordvalue === ""){
        setError(cpassword,"Please Confirm the Password")
    }
    else if (cpasswordvalue !== passwordvalue){
        setError(cpassword,"Password doesn't match")
    }
    else{
        setSuccess(cpassword)
    }
    

    if(emailvalue === ""){
        setError(email,"Email is Required")
    }
    else if(!validemail(emailvalue)){
        setError(email,"Provide a valid Email Address")
    }
    else{
        setSuccess(email)
    }
}


const setError = (element,message)=> {
    const inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText = message

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element =>{
    const inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innerText =' '

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

function validemail(e){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e)
}
