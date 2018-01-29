let counterval=0;

const calcContrl=document.getElementById("showCurrentCalc");

let idx=0;
function startCalculations(data){      
    
    if (data==="start"){
        for (let i=1;i<100000000;i++){            
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
        }
    }  
}

const startCalcBtn=document.getElementById("startCalculation");
startCalcBtn.addEventListener('click',()=>{
    document.getElementById("finalValue").innerHTML="Calculating...";
    startCalculations('start');  
    document.getElementById("finalValue").innerHTML=idx;
});