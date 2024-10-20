const errorProneAsyncApi = (input, callback) => {
    console.log(`Running errorProneAsyncApi with input: ${input}...\n`);
    setTimeout(() => {
        let myErr;
        if (input === 'problematic input') {
            myErr = new Error('whoops');
            callback(myErr);
        } else {
            let responseData = `Received valid input "${input}"`;
            callback(myErr, responseData);
        }
    }, 3000)
}

const errorFirstCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong. ${err}\n`);
    } else {
        console.log(`Something went right. Data: ${data}\n`);
    }
};

errorProneAsyncApi('problematic input', errorFirstCallback);