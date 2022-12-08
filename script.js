const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

document.addEventListener("keydown", function(e) {
    jump();
});

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setTimeout(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"))
    
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop > 300){
        alert("GAME OVER!!!")
    }
}, 10)


















