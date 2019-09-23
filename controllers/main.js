const arrayControllers = [
  require("./angular"),
  require("./capacitor"),
  require("./boilers"),
  require("./documentations")
];

module.exports = function(msg, bot) {
  let arrayResponse = [];
  arrayControllers.some(controller => {
    let arrayResponseController = controller(msg.toLowerCase());
    console.log('arrayResponseController', arrayResponseController)
    if (arrayResponseController) {
      arrayResponse = arrayResponseController;
      return true;
    } else {
      console.log('vergo', arrayResponseController);
      return false;
    }
  });

  arrayResponse.map(async response => {
    await bot.sendMessage(msg.chat.id, response);
  });
};

const errors = [
  'No hay tutoriales para este comando, por favor, escribe "comandos" para ver lo que puedes aprender de mi'
];
