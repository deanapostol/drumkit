
const length = document.querySelectorAll(".drum").length;
for(i=0; i<length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var button = this.innerHTML;
      playsound(button);
        playanimation(button);

    });
}

document.addEventListener("keypress",function(event){
    playsound(event.key);
    playanimation(event.key);
});

function playsound(button){
    switch(button){
        case "w": 
        var crush = new Audio("crash.mp3");
        crush.play();
        break;
 
        case "a":
         
         var kick= new Audio("kick-bass.mp3");
         kick.play();
        break;
 
 
        case "s": 
     
        var snare = new Audio("snare.mp3");
        snare.play();
        break;
 
        case "d":
        var tom = new Audio("tom-1.mp3");
        tom.play();
        break;
  
        case "j": 
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;
 
        case "k": 
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;
 
        case "l": 
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;
 
 
        default:
 
        console.log(this.innerHTML);
        break;
     }
}

function playanimation(event){

   var thisis =  document.querySelector("."+event)
   thisis.classList.add("pressed");
   setTimeout(() => {
    thisis.classList.remove("pressed")
}, "100")};


