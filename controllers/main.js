const arrayControllers = [
  require("./comands"),
  require("./tutorials"),
  require("./boilers"),
  require("./documentations")
];

module.exports = function(msg, bot) {
  let arrayResponse = [];
  arrayControllers.some(controller => {
    let arrayResponseController = controller(msg);
    if (arrayResponseController[0]) {
      arrayResponse = arrayResponseController;
      return true;
    } else {
      console.log(arrayResponseController.length);
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
