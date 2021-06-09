
const buttons = document.querySelectorAll(".childs");
const message = document.getElementById("message");

const randomJ = Math.trunc(Math.random() * (jokeDB.length - 0) + 0);

for(let x = 0; x <= buttons.length; x++) {
    buttons[x].addEventListener("click", function() {
        message.textContent = jokeDB[x++];
        message.classList.remove("hidden");    
        if (jokeDB[x] == undefined) {
            x = 0;
        }   
    });
}