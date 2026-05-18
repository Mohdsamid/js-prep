let formdata = document.querySelector("#formdata")
formdata.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(formdata[0].value)
    // console.log(formdata[1].value)
    // console.log(formdata[2].value)
    let data = {
    name:formdata[0].value,
    email:formdata[1].value,