module.exports = msg => {
    console.log("------->msg", msg);
    if (msg.text === "tutoriales capacitor") {
        return tutorialsCapacitor;
    } else {
        return []
    }
};
const tutorialsCapacitor = [
    "Tutorial de ionic 4 + capacitor  https://www.youtube.com/watch?v=MTuttuME414"
];


