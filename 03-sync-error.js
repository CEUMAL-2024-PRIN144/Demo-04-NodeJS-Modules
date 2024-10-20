const naiveErrorProneAsyncFunction = (input, callback) => {
    console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
    setTimeout(() => {
        if (input === 'problematic input') {
            throw new Error('whoops')
        } else {
            let responseData = `Received valid input "${input}"`
            callback(responseData)
        }
    }, 0)
}

let callbackFunc = (data) => {
    console.log(`Something went right. Data: ${data}\n`);
};

try {
    naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch (err) {
    console.log(`Something went wrong. ${err}\n`);
}