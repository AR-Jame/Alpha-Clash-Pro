function hideElement(id){
    const Id = document.getElementById(id);
    Id.classList.add("hidden");
}

function showElement(id){
    const Id = document.getElementById(id);
    Id.classList.remove("hidden")
}

function randomAlphabet(){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const random = Math.floor(Math.random() * alphabet.length)
    return alphabet[random]
}

function setBG(id){
    const Id = document.getElementById(id);
    Id.classList.add("bg")
}

function removeBG(id){
    const Id = document.getElementById(id);
    Id.classList.remove("bg")
}

