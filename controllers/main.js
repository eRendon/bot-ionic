const arrayControllers = [require("./comands"), require("./tutorials")];

module.exports = function(msg, bot) {
  let arrayResponse = [];
  arrayControllers.some(controller => {
    console.log("controller", controller);
    let arrayResponseController = controller(msg);
    console.log("arrayResponseController", arrayResponseController);
    if (arrayResponseController[0]) {
      console.log("arrayResponse", arrayResponse);
      arrayResponse = arrayResponseController;
      return true;
    } else {
        console.log(arrayResponseController.length)
      return false;
    }
  });

  arrayResponse.map(async response => {
    console.log("response", response);
    await bot.sendMessage(msg.chat.id, response);
  });
};

const errors = ['No hay tutoriales para este comando, por favor, escribe "comandos" para ver lo que puedes aprender de mi']
