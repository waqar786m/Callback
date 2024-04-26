function processUserInput(callback: any) {
    let name = "All Student"
    callback(name);
}

processUserInput(function(name: string) {
    console.log("Welcome, " + name)
});
