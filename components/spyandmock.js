function greet(firstName,lastName){
    return "Hello! " + this.getfullName(firstName,lastName)
}

function getfullName(firstName,lastName){
    return firstName + " " + lastName
}

module.exports = {greet,getfullName};
