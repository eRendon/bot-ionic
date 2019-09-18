const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./controllers/router");
const mainController = require("./controllers/main");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const token = require("./config.json");

const port = process.env.PORT || 3000;
const host = process.env.HOST;
const externalUrl =
  process.env.CUSTOM_ENV_VARIABLE || "https://my-app.herokuapp.com";
const bot = new TelegramBot(token.secret_token, {
  webHook: { port: port, host: host }
});
// const bot = new TelegramBot(token.secret_token, { polling: true });
app.use("/bot", router);
bot.setWebHook(externalUrl + ":443/bot" + token.secret_token);

// function get_forecast(city) {
//   let new_url =
//     openWeatherUrl + city + "&appid=" + process.env.OPENWEATHER_API_KEY;
//   return axios
//     .get(new_url)
//     .then(response => {
//       let temp = response.data.main.temp;
//       //converts temperature from kelvin to celsuis
//       temp = Math.round(temp - 273.15);
//       let city_name = response.data.name;
//       let resp = "It's " + temp + " degrees in " + city_name;
//       return resp;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

bot.onText(/\/echo (.+)/, async (msg, match) => {
  console.log("msg", msg);
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  await bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", async msg => {
  console.log("msg------->", msg);
  const Hi = ["hola", "hi", "Hello", "buenas"];
  const chatId = msg.chat.id;
  const chatitle = msg.chat.title;

  if (msg.new_chat_members !== undefined) {
    const nameNewMember = msg.new_chat_member.first_name;

    await bot.sendMessage(
      chatId,
      "Hola " +
        nameNewMember +
        ", bienvenid@ al grupo " +
        +"" +
        chatitle +
        "" +
        ". Soy ionic-bot y estoy para ayudarte. Puedes escribirme al privado 'comandos' para ver la lista de acciones disponibles. Podrás encontrar mucha ayuda para iniciar en este fabuloso mundo"
    );
  }
  if (msg.text) {
    Hi.forEach(async greet => {
      if (
        msg.text
          .toString()
          .toLowerCase()
          .indexOf(greet) === 0
      ) {
        await bot.sendMessage(
          msg.chat.id,
          `Bienvenido ${msg.from.first_name}. Escribe "comandos" para ver la lita de comandos`
        );
      }
    });
  }
});

bot.onText(/\/start/, async msg => {
  await bot.sendMessage(
    msg.chat.id,
    `Bienvenido ${msg.from.first_name}. Escribe "comandos" en mi privado para ver la lita de comandos`
  );
});

// bot.onText(/\/*tutoriales angular/, msg => {
//   tutorialsAngular.forEach(async angular => {
//     await bot.sendMessage(msg.chat.id, angular);
//   });
// });

bot.onText(/\/*tutoriales/, async msg => {
  mainController(msg, bot);
  // await bot.sendMessage(msg.chat.id, `Bienvenido ${msg.chat.username}. Por favor, escribe al privado "comandos" y te contaré qué puedes aprender de mi`);
});

bot.onText(/\/*comandos/, msg => {
  commands.forEach(async command => {
    await bot.sendMessage(msg.chat.id, command);
  });
});

const commands = [
  "Estos son nuestros comandos disponibles:",
  "tutoriales angular",
  "tutoriales capacitor",
  "cursos",
  "capacitor"
];

app.listen(3000, () => console.log("Telegram bot is listening on port 3000!"));
