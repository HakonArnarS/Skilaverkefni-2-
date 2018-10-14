

var mario = document.querySelector("#mario");

var startPositionLeft =210;
var startPositionTop = 300;
var goRight = function(e){
    if(e.key==="ArrowRight"){
        startPositionLeft = startPositionLeft + 160;
        startPositionTop = startPositionTop -50;
        mario.style.left = startPositionLeft + "px";
        mario.style.top = startPositionTop + "px";
    }
   else if(e.key==="ArrowLeft"){
        startPositionLeft = startPositionLeft - 160;
        startPositionTop = startPositionTop + 50;
        mario.style.left = startPositionLeft + "px";
        mario.style.top = startPositionTop + "px"; 
    }
    
    else if(e.key==="downKey"){
        startPositionLeft = 210;
        startPositionTop = 300;
        mario.style.left = startPositionLeft + "px";
        mario.style.top = startPositionTop + "px";
    }
    /*    
    if (startPositionTop===100){
        pinky.c
    }*/
}
var pinky = document.querySelector("#pinky");


//*********************pinky + mario fyrir ofan, hljóð fyrir neðan



var sound = document.createElement("AUDIO");
sound.src = "audio/soundtrack.mp3";
sound.autoplay = true; 

var soundOff = document.querySelector("#off");
var soundOn = document.querySelector("#on");



var On = function(){
    sound.autoplay = true;
    sound.paused=false; 
    soundOn.style.display="none"; 
    soundOff.style.display="inline";
    console.log(sound.played);
    console.log(sound.paused);
}
var Off = function() {
    sound.muted = true;
    soundOff.style.display="none";
    soundOn.style.display="inline";
}
soundOff.onclick=Off; 
soundOn.onclick=On; 

/*
var Off = function(){
    sound.muted = true;
    soundOff.style.display = "Inline-block";
    soundOn.style.display = "none";   
}
var On = function(){
    sound = true;
    soundOn.style.display = "Inline-block";
    soundOff.style.display = "none";     
}

*/
/*
vil viljum audio file
við viljum sýna volume takka 
við viljum smooth hreyfingar í pinky og 
mario að hoppa

fari ekki neðar en byrjunarreitur
eftir 6.skiptið fari niður á jörðu
on click volume -muted
drauginn upp þegar Mario er yfir vatninu 
*/
/*
document.onkeydown = goRight;
*/



var getRandom = function(number){
    var randomNumber = Math.random();
    var multipliedRandomNumber = randomNumber*number+1;
    var integer = Math.floor(multipliedRandomNumber);
    return integer;
}


var getDate = function(){
    return getRandom(31) + "."+ getRandom(12) 
}
console.log(getDate()); 