function processUserInput(callback) {
    var name = "\x1b[34mAll Student\x1b[0m"; // "\x1b[34m" represents blue color, "\x1b[0m" resets the color
    callback(name);
}
processUserInput(function (name) {
    console.log("\x1b[34mWelcome, " + name + "\x1b[0m"); // "\x1b[34m" represents blue color, "\x1b[0m" resets the color
});
