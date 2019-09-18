module.exports = msg => {
    console.log("------->msg", msg);
    if (msg.text === "tutoriales angular") {
        return tutorialsAngular;
    } else {
        return []
    }
};


const tutorialsAngular = [
    "Pronto agregaremos los mejores tutoriales de ionic, mientras tanto, disfruta de estos super tutoriales https://medium.com/ngxs/ngxs-facade-3aa90c41497b",
    "https://www.youtube.com/watch?v=REgMMe2fYKA",
];
