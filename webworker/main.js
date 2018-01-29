var calcWorker=new Worker("worker.js");
let counterval=0;

calcWorker.onmessage=event=>{
    document.getElementById("finalValue").innerHTML=event.data;
}

const startCalcBtn=document.getElementById("startCalculation");
startCalcBtn.addEventListener('click',()=>{
    document.getElementById("finalValue").innerHTML="Calculating...";
    calcWorker.postMessage('start');
});