'use strict';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as Telegraf from 'telegraf';
const configure = require('./constants/config');
config();

// Criará a instância do bot.
// @ts-ignore
const app = new Telegraf(configure.secret_token);
app.telegram.getMe().then(
  (botInfo: any): any => {
    console.log('botInfo', botInfo);
    app.options.username = botInfo.username;
  },
);
// bot.use(morgan('combined'))
const process_message = (message: any, cb: any) =>
  new Promise((resolve, reject) => {
    const response = cb(message);

    if (response) {
      return resolve(response.result);
    }

    return reject();
  });

app.hears(/^tutoriales.*/i, async (ctx: any) => {
  console.log(ctx);
  await ctx.reply('Hey there');
});

app.on('text', async (ctx: any) => {
  console.log('ctx ----------->', ctx);
  try {
    if (ctx.message.text === '/tutoriales') {
      tutorial.forEach(async toturial => {
        // app.telegram.sendMessage(ctx.message.chat.id, toturial.url).then(data => {
        //     console.log('-------->', data)
        // })
        await ctx.reply(
          `Pronto agregaremos los mejores tutoriales de ionic, mientras tanto, disfruta de estos super tutoriales ${
            toturial.url
          }`,
        );
      });
    } else if (ctx.message.text === 'hola') {
      await ctx.reply('Hola :D');
    } else if (ctx.message.text === 'boilers') {
      boilers.forEach(async boiler => {
        await ctx.reply(boiler.url);
      });
    } else {
      await ctx.reply(
        'Estamo construyendo un bot para que puedas disfrutar de todo el contenido de ionic! espéralo',
      );
    }
  } catch (error) {
    console.log(error);
  }

  let result;

  try {
    // result = await process_message(ctx.message, callback)
  } catch (error) {
    console.log(error);
  }
});

const tutorial = [
  {
    url: 'https://medium.com/ngxs/ngxs-facade-3aa90c41497b',
  },
  {
    url: 'https://www.youtube.com/watch?v=REgMMe2fYKA',
  },
  {
    url: 'http:url',
  },
];

const boilers = [
  {
    url: 'http://www.jomendez.com/ionic-boilerplate-full-app/',
  },
];

app.startPolling();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
