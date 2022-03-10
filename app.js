// TO DO
//add event listeners to drum elements
//add animation when button is clicked
//play music()

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(()=>{
        currentKey.classList.remove('pressed')
    },250)
}

const playMusic=(path)=>{
    const audio = new Audio(path);
    audio.play();
}


document.addEventListener("keypress", (event) => {
    const triggeredKey= event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})

const makeSound = (key) => {
    
    switch(key){
        case "w":
            playMusic("/sounds/boom.wav");
            break;
        case "a":
            playMusic("/sounds/clap.wav");
            break;
        case "s":
            playMusic("/sounds/hihat.wav");
            break;
        case "d":
            playMusic("/sounds/kick.wav");
            break;
        case "j":
            playMusic("/sounds/openhat.wav");
            break;
        case "k":
            playMusic("/sounds/ride.wav");
            break;
        case "l":
            playMusic("/sounds/snare.wav");
            break; 
        case "i":
           playMusic("/sounds/tom.wav");
            break;
        case "o":
            playMusic("/sounds/tink.wav");
            break;            
    }
}

const handleDrumClick = (event) => {
    let innerText = event.target.innerText;
    console.log(innerText);
    animate(innerText);
    makeSound(innerText)
}

var drums = document.querySelectorAll(".drum")
for (let i = 0 ; i < drums.length; i++){
    drums[i].addEventListener("click", handleDrumClick);
}

