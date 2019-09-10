'use strict'

const Telegraf = require('telegraf')
var morgan = require('morgan')
// import { boilers }  from './constants'

const config = require('./config')

const app = new Telegraf(config.secret_token)
app.telegram.getMe().then((botInfo) => {
    console.log('botInfo', botInfo)
    app.options.username = botInfo.username
})
// bot.use(morgan('combined'))
const process_message = (message, cb) => new Promise((resolve, reject) => {
    const response = cb(message)

    if (response) {
        return resolve(response.result)
    }

    return reject()
})

app.hears(/^tutoriales.*/i, async ctx => {
    console.log(ctx)
    await ctx.reply('Hey there')
})


app.on('text', async ctx => {
    console.log('ctx ----------->', ctx)
    try {
        if(ctx.message.text === '/tutoriales'){
            tutorial.forEach(async toturial => {
                // app.telegram.sendMessage(ctx.message.chat.id, toturial.url).then(data => {
                //     console.log('-------->', data)
                // })
                await ctx.reply(`Pronto agregaremos los mejores tutoriales de ionic, mientras tanto, disfruta de estos super tutoriales ${toturial.url}`)
            })

        } else  if(ctx.message.text === 'hola'){
            await ctx.reply('Hola :D')
        } else  if(ctx.message.text === 'boilers'){
            boilers.forEach(async boiler => {
                await ctx.reply(boiler.url)
            })
        }
        else {
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



const tutorial = [
        {
            url: 'https://medium.com/ngxs/ngxs-facade-3aa90c41497b'
        }, {
            url: 'https://www.youtube.com/watch?v=REgMMe2fYKA'
        }, {
            url: 'http:url'
        }
    ]


const boilers = [
    {
        url: 'http://www.jomendez.com/ionic-boilerplate-full-app/'
    }
]

app.startPolling()
