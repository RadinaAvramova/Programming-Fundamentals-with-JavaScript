function convertToJSON(name,lastName,hairColor) {
    //TODO: Create an object with the given input
    let person = {
        name, 
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');