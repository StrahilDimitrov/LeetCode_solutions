function sortedPeople(names, heights) {
    let myPerson = [];
    let result = [];

    class Person {
        constructor(name, height) {
            this.name = name;
            this.height = height;
        }
    }

    for (let i = 0; i < names.length; i++) {
        let currentPerson = new Person(names[i], heights[i]);

        myPerson.push(currentPerson);
    }

    const sortedArray = myPerson.sort(((first, second) => second.height - first.height));

    for(const person of sortedArray){
        result.push(person.name);
    }

    return result;
}

sortedPeople(["Alice", "Bob", "Bob"], [155, 185, 150])