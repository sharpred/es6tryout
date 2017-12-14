doSomething = (a, b) => {
    console.log(`do a ${a} : ${b}`);
}

doSomethingWithRest = (a, b, ...args) => {
    console.log(`I care about ${a} and ${b}`);
    console.log("***** args");
    args.forEach(arg => {
        console.log(`who gives a monkeys about ${arg}`);
    });
}

exports.helpers = {
    doSomething: doSomething,
    doSomethingWithRest: doSomethingWithRest
};