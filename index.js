
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       //this.style.color = "red"; // changing color to red;
       //this.innerHTML = "HII";
        var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       addAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keypress", function(event) // event inside the function is method to get the properties and methods of a key is pressed
{
    var keys = event.key.toLowerCase();
    makeSound(keys);
    addAnimation(keys)
});



function makeSound(key)
{
    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log();
            break;
       }

}
// funcrion to button event listiner
// function handleClick()
// {
//     alert("Event occur");
// }


// Adding animations

function addAnimation(key)
{
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    // removing the function after interval

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
