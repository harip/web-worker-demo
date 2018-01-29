onmessage= (event)=>{      
    let idx=0;
    postMessage("Calculating...");

    if (event.data==="start"){
        for (let i=1;i<100000000;i++){            
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
            idx=idx+Math.sqrt(Math.sqrt(i));
        }
    }  

    postMessage(idx);
}
