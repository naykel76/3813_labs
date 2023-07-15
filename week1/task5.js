function convUpperCase(value) {
    return value.toUpperCase();
}

console.log(convUpperCase('declarative function'));

const convUpperCase1 = function (value) {
    return value.toUpperCase();
};

console.log(convUpperCase1('expression function'));

let convUpperCase2 = (value) => value.toUpperCase();

console.log(convUpperCase2('arrow function'));
