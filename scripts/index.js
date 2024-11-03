// function play(){
//     const home = document.getElementById("home");
//     const ground = document.getElementById("ground");
//     home.classList.add("hidden")
//     ground.classList.remove("hidden")
// }

// function loopingGame(){
//     const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     const random = Math.floor(Math.random() * alphabet.length)
//     console.log(alphabet[random])
// }


let Alphabet;
function loopingGame(){
    Alphabet = randomAlphabet()
    document.getElementById("mainText").innerText = Alphabet;
    setBG(Alphabet)

}
function play(){
    hideElement("home");
    showElement("ground")
    loopingGame()  
}

let score =  document.getElementById("point");
let life = document.getElementById("life")
document.addEventListener("keyup", function(E){
    let key = E.key;
    if(key == Alphabet){
        score.innerText = parseInt(score.innerText) + 1;
        removeBG(Alphabet)
        loopingGame()
        
    }
    else{
        if(life.innerText > 1){
            life.innerText = parseInt(life.innerText) - 1;
        }
        else{
            hideElement("ground")
            showElement("Score")
            document.getElementById("result").innerText = score.innerText;
        } 
    }
})

function again(){
    hideElement("Score");
    showElement("ground");
    score.innerText = 0;
    life.innerText = 5;

}

