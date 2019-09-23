module.exports = msg => {
    if (msg.text === "boilers") {
        return boilers;
    } else {
        return []
    }
}

const boilers = [
    'https://gitlab.com/andressantos/vuejs_ionic4_capacitor_typescript/tree/master'
]
