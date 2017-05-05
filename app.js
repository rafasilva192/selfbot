const Eris = require('eris')
const config = require ('./config/config.json')

const services = require('./src/services/index.js')
const validationService = new services.validation()
const messageService = new services.message()

const bot = new Eris(config.token)

bot.config = config

let isReady

bot.on('ready', () => {
    isReady = true
    console.log('ready')
})

bot.on('messageCreate', (msg) => {
    
    if (isReady && validationService.isOwner(msg.author.id)) {
        messageService.handleMessage(msg, bot)
    }
    console.log(msg.channel.name, msg.author.username, msg.content)

})



//bot.on('warn', (msg) => { if (msg.includes('Authentication')) { log.warn(msg) } })
//bot.on('error', (err) => log.err(err, 'Bot'))
//bot.on('disconnect', () => log.log('Disconnected from Discord', 'Disconnect'))


bot.connect()
//.catch(err => log.err(err, 'Login'))
