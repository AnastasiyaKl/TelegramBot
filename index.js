const Telegraf = require('telegraf');
const token = '899478487:AAFK0VtsD7tOrbzp1UYso3ahiNy3Z090Msk';

const app = new Telegraf(token);

app.hears('hi', ctx => {
    return ctx.reply('Hey!');
});

app.startPolling();

app.command('today', ctx => {
    return ctx.reply('Weather forecast for today');
});


