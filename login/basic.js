// ================= SIGN UP =================

let formdata = document.querySelector("#formdata");

if(formdata){

    formdata.addEventListener("submit",(e)=>{
        e.preventDefault();

        let data = {
            name: formdata[0].value,
            email: formdata[1].value,
            pass: formdata[2].value,
        };

        localStorage.setItem("userdata", JSON.stringify(data));

        alert("Signup Successfully");

        // formdata.reset();
    });

}

// ================= LOGIN =================

let logdata = document.querySelector("#logindata");

if(logdata){

    logdata.addEventListener("submit",(e)=>{
        e.preventDefault();

        let login = {
            email: logdata[0].value,
            pass: logdata[1].value
        };

        let lsd = localStorage.getItem("userdata");

        if(lsd){

            let userdata = JSON.parse(lsd);

            if(
                login.email === userdata.email &&
                login.pass === userdata.pass
            ){
                alert("Login Successfully");
            }
            else{
                alert("Invalid Email or Password");
            }

        }
        else{
            alert("No User Found");
        }

        logdata.reset();
    });

}