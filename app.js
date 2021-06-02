var input=document.querySelector("textarea");
var button=document.querySelector(".btn");
var result=document.querySelector(".result");

const url = "https://api.funtranslations.com/translate/mandalorian.json";

function getURL (text){
    return url+ "?"+"text="+text;
}

function errorHandler (error) {
    console.log(error);
    alert("Error with the server. Please check your input or try after some time")
}

function clickHandler(){
    fetch(getURL(input.value))
    .then(resp => resp.json())
    .then(json => {
        result.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}
button.addEventListener("click",clickHandler);