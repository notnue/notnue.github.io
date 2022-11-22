let Counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

    Counter.innerText = count;
    count++
    
    if(count > 3) location.replace('https://phaseshift.in/eventPage/CLDHKD')
    
},1000)
