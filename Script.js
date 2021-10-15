var SteinEl = document.getElementById("Stein");
var SaksEl = document.getElementById("Saks");
var PapirEl = document.getElementById("Papir");
var Resultat = document.getElementById("tall");
var score = document.getElementById("wincondition");
var robotantall = document.getElementById("botpoeng");
var knapp = document.getElementById("knappen");
const saks = {
    weakness:"stein",
    name: "saks"
}

const stein = {
    weakness:"papir",
    name: "stein"
}

const papir = {
    weakness:"saks",
    name: "papir"
}

const spill = [stein,saks,papir]
var highscore = 0
var botScore = 0

function Brukervalg(item){                  //fungerer som en dommer
    const botValg = spill[Math.round(Math.random()*2)]
    console.log(timer);
    if(timer > -1){
        vinntietap("lost");
        document.getElementById("Fast").innerHTML = "Du er for rask!";
         return
     }
    if(item.weakness == botValg.name)vinntietap("lost");
    if(item.name == botValg.name )vinntietap("tie");
    if(item.name == botValg.weakness)vinntietap("win");
   
}
function vinntietap(status){                //logger poengene til spiller og bot
    if (status == "win") highscore++
    if (status == "lost")botScore++;
    
    robotantall.innerHTML = botScore;
    score.innerHTML = highscore;
    Resultat.innerHTML = status;
    omspill();
    
}

var intervalID
function play(){
    nedtelling()
    timer = 3;
    intervalID = setInterval(nedtelling, 700);
    document.getElementById("Fast").innerHTML = "";
    vinntietap();
}
knapp.addEventListener("click", play)


var timer = 3;
function nedtelling(){                      //teller ned
    document.getElementById("demo").innerHTML = timer--;
    if(timer==-1)clearInterval(intervalID)
  
}


function omspill(){
    if (highscore == 2 || botScore == 2){
        robotantall = null;
        score = null;
        Resultat.innerHTML = "Spill ferdig";
        
       setTimeout(()=> {ferdig()},100);}
    }
function ferdig(){
    if (highscore == 2){
        alert("du vant");
    }
    if (botScore == 2){
        alert("du tapte");
    }
}

