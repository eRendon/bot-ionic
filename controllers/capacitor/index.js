module.exports = msg => {
    console.log("------->msg", msg);
    if (msg.text === "tutoriales capacitor") {
        return tutorialsCapacitor;
    } else {
        return false
    }
};
const tutorialsCapacitor = [
    "Tutorial de ionic 4 + capacitor  https://www.youtube.com/watch?v=MTuttuME414",
    'MeetUp capacitor whit ionic developers team https://www.youtube.com/watch?v=tDW2C6rcH6M'
];


