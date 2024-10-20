setInterval((data) => {
    let date = new Date();
    console.log(`${data} - Writing every 1 second. ${date.toLocaleString()}`);
}, 1000, "My timer 1");   

setInterval((data) => {
    let date = new Date();
    console.log(`${data} - Writing every 5 second. ${date.toLocaleString()}`);
}, 5000, "My timer 2");   