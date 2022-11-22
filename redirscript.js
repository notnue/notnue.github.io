let counter = document.querySelector('h2');
let count = 1;

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count > 3) location.replace('https://www.google.com/')
    
},1000)
