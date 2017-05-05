const ping = (bot) => {
    getPing: bot.registerCommand('ping', () => {
        this.bot.createMessage(msg.channel.id, 'Pong!').then(m => this.edit(m, `${m.content} (${m.timestamp - msg.timestamp}ms)`))
    }, {
            aliases: ['pong']
        })
}

module.exports = ping