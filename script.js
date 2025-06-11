function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("input value", inputdate.value);  // string --> date (en_IN)

    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatedDate;

    
}