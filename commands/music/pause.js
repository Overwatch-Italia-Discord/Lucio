const Discord = require('discord.js');

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        const emb = new Discord.MessageEmbed()
        .setColor('#fa9c1e')
        
        if (!message.member.voice.channel) {
            emb.setDescription(`${client.emotes.error} Devi essere in un **canale vocale** per poter **utilizzare** questo comando!`)
            return message.channel.send(emb)
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            emb.setDescription(`${client.emotes.error} Devi essere nel mio stesso **canale vocale** per poter **utilizzare** questo comando!`)
            return message.channel.send(emb)
        }

        if (!client.player.getQueue(message)) {
            emb.setDescription(`${client.emotes.error} **Nessun** brano **attualmente** in **riproduzione**.`)
            return message.channel.send(emb)
        }

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Questo **brano** è già in pausa`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} **paused** !`);
    },
};