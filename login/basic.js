let formdata = document.querySelector("#formdata")
formdata.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formdata[0].value)
    // console.log(formdata[1].value)
    // console.log(formdata[2].value)
    let data = {
    name:formdata[0].value,
    email:formdata[1].value,
    pass:formdata[2].value,

}
// console.log(data)
localStorage.setItem("userdata",JSON.stringify(data));
})

// let 

let logdata = document.querySelector("#logindata")
logdata.addEventListener("submit",(e)=>{
    e.preventDefault()
    let lsd= localStorage.getItem("userdata")
    console.log(lsd)
    let formdata = JSON.parse(lsd)
    console.log(formdata)
    if(logdata.email===formdata.email && logdata.pass===formdata.pass){
        alert("Log in successfully")
    }
    else{
        alert("Errorrrr")
    }
})
console.log(data);
console.log(logdata);
// let name = document.getElementById("name

// localStorage.setItem("name",formdata[0].value)
// localStorage.getItem(formdata[0].value)
// localStorage.getItem(formdata[1].value)
// localStorage.getItem(formdata[2].value)
