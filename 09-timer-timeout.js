// setTimeout((data) => {
//     console.log(`${data} - Will write once after 5 seconds.`);
// }, 5000, "My timer");

const countdown = (counter) => {
    console.log(counter);

    if (counter === 0) {
        console.log('Count down completed.');
        return;
    }

    setTimeout(() => {
        countdown(counter - 1);
    }, 1000);
}

countdown(5);