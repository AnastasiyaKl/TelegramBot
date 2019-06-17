const firebase = require('firebase');

const Telegraf = require('telegraf');
const token = '899478487:AAFK0VtsD7tOrbzp1UYso3ahiNy3Z090Msk';

//const WebHooks = require('node-webhooks');

const firebaseConfig = {
    apiKey: "AIzaSyBwobfTTiY794xNFCVavrzbOnkJMyFYq7A",
    authDomain: "weatherbot-b16fb.firebaseapp.com",
    databaseURL: "https://weatherbot-b16fb.firebaseio.com",
    projectId: "weatherbot-b16fb",
    storageBucket: "weatherbot-b16fb.appspot.com",
    messagingSenderId: "419208145579",
    appId: "1:419208145579:web:b38df2277851fe91"
};

const bot = new Telegraf(token, {
    webHook: {
        port: 3000
    }
});
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// firebase.database().ref('doc').set({
//     field1: '1',
//     field2: '2',
// });

// Set telegram webhook
bot.telegram.setWebhook(`https://api.telegram.org/bot899478487:AAFK0VtsD7tOrbzp1UYso3ahiNy3Z090Msk/setWebhook?`);

// Start https webhook
bot.startWebhook('/setWebhook');

bot.hears('hi', ctx => {
    return ctx.reply('Hey!');

});

bot.startPolling();

bot.command('today', ctx => {
    return ctx.reply('Weather forecast for today');
});




