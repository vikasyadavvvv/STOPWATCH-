const timedisplay  =document.querySelector("#timedisplay");
const startbtn =document.querySelector("#startbtn");
const pausebtn =document.querySelector("#pausebtn");
const resetbtn =document.querySelector("#resetbtn");

let starttime =0;
let elapsedtime=0;
let currenttime =0;
let paused=true;
let intervalId;
let hrs=0;
let mins=0;
let secs=0;



startbtn.addEventListener("click",()=>{
   if(paused){
    paused=false;
    starttime=Date.now() - elapsedtime;
    intervalId=setInterval(updatetime,1000);
   }

});
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedtime=Date.now() - starttime;
        clearInterval(intervalId);
    }
});
resetbtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalId);
    starttime =0;
 elapsedtime=0;
 currenttime =0;
 hrs=0;
 mins=0;
 secs=0;
 timedisplay.textContent ="00:00:00";

});


function updatetime(){
    elapsedtime=Date.now()-starttime;
    secs=Math.floor((elapsedtime /1000) %60);
    mins=Math.floor((elapsedtime /(1000 * 60) )%60);
    hrs=Math.floor((elapsedtime /(1000 * 60 * 60)) %60);

    secs=padd(secs);
    mins=padd(mins);
    hrs=padd(hrs);

    timedisplay.textContent = `${hrs}:${mins}:${secs}`;

function padd(unit){
  return(("0")+unit).length > 2 ? unit : "0"+ unit;
}


}