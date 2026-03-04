const comchoice = document.getElementById("computer");
const userchoice = document.getElementById("user");
const result = document.getElementById("result");

const choice = document.querySelectorAll("button");

let resultFinal;
let computerchoice;
let option;

choice.forEach((button) => {
    button.addEventListener("click", () => {

        option = button.innerText;
        userchoice.innerText = option;

        getrandom();

    })
})


function getrandom(){

    const options = ["Rock","Paper","Scissors"];

    computerchoice = options[Math.floor(Math.random()*3)];

    comchoice.innerText = computerchoice;

    getresult();
}


function getresult(){

 if(computerchoice === option)
    resultFinal = "Draw"

 else if(option === "Rock" && computerchoice === "Scissors")
    resultFinal = "Win"

 else if(option === "Paper" && computerchoice === "Rock")
    resultFinal = "Win"

 else if(option === "Scissors" && computerchoice === "Paper")
    resultFinal = "Win"

 else
    resultFinal = "Lose"

 result.innerText = resultFinal;

}