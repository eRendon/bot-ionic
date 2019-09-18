const express = require('express');
const router = express.Router();
const axios = require("axios");
const token = require("../config.json");
let telegram_url =
    "https://api.telegram.org/bot" + token.secret_token + "/sendMessage";
router.post("/ionic", function(req, res) {

    const  message  = req.body;
    console.log('req', message)
    let reply = "Welcome to telegram weather bot";
    let city_check = message.text.toLowerCase().indexOf("/");
    if (message.text.toLowerCase().indexOf("hi") !== -1) {
        sendMessage(telegram_url, message, reply, res);
    } else if (
        message.text.toLowerCase().indexOf("check") !== -1 &&
        city_check !== -1
    ) {
        city = message.text.split("/")[1];
        get_forecast(city).then(response => {
            post_forecast(telegram_url, response, message, res);
        });
    } else {
        reply = "request not understood, please review and try again.";
        sendMessage(telegram_url, message, reply, res);
        return res.end();
    }
});

function sendMessage(url, message, reply, res) {
    axios
        .post(url, { chat_id: message.chat.id, text: reply })
        .then(response => {
            console.log("Message posted");
            res.end("ok");
        })
        .catch(error => {
            console.log(error);
        });
}
module.exports = router ;
