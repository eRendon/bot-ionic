module.exports = msg => {
  console.log("boilersboilers", msg);
  if (msg.text === "boilers") return boilers;
};

const boilers = [
  "https://gitlab.com/andressantos/vuejs_ionic4_capacitor_typescript/tree/master"
];
