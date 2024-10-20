process.stdout.write("Hello, please enter some text: ");

const callback = (userInput) => {
    let input = userInput.toString().trim();
    console.log(`You entered: ${input}`);

    process.exit();
};

process.stdin.on("data", callback);