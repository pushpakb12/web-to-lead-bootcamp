let captchacheked = false;


function beforesubmit(event){

    if(captchacheked){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("input value", inputdate.value);  // string --> date (en_IN)

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatedDate;
    }else{
        
        alert("please check the reCAPTCHA box to SUBMIT THE LEAD");
        event.preventDefault();
    }

}

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
     if (response == null || response.value.trim() == ""){
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value =
             JSON.stringify(elems);
         } } 
     setInterval(timestamp, 500); 

     function captchasuccess(){
       captchacheked =true;
     }
