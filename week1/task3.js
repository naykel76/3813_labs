let people = [
    {
        name: 'Bill',
        password: '12345'
    },
    {
        name: 'Sam',
        password: '98765'
    },
    {
        name: 'Mike',
        password: '24680'
    }
]

console.log(people);

people = JSON.stringify(people);
console.log(people);

people = JSON.parse(people)
console.log(people);
