const randomNumber = (min=105, max=205)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = randomNumber;