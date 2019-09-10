'use strict'

const Telegraf = require('telegraf')
var morgan = require('morgan')

const config = require('./config')

const app = new Telegraf(config.secret_token)

// bot.use(morgan('combined'))
const process_message = (message, cb) => new Promise((resolve, reject) => {
    const response = cb(message)

    if (response) {
        return resolve(response.result)
    }

    return reject()
})

app.on('message', async ctx => {
    console.log('ctx', ctx)
    try {
        if(ctx.message.text === 'tutoriales'){
            await ctx.reply('Pronto agregaremos los mejores tutoriales de ionic, mientras tanto, disfruta de este super tutorial https://www.youtube.com/watch?v=REgMMe2fYKA')
        } else  if(ctx.message.text === 'hola'){
            await ctx.reply('Hola :D')
        } else {
            await ctx.reply('Estamo construyendo un bot para que puedas disfrutar de todo el contenido de ionic! espéralo')
        }
    }
    catch (error) {
        console.log(error)
    }

    let result

    try {
        result = await process_message(ctx.message, callback)
    }
    catch (error) {
        console.log(error)
    }
})

// app.answerInlineQuery()

function prueba (text) {
    let palabras;
    return palabras = [
        {
            tutoriales: 'http:url'
        }, {
            tutoriales: 'http:url'
        }, {
            tutoriales: 'http:url'
        }
    ]
}

app.startPolling()
