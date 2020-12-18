const Discord = require('discord.js');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    category: 'Music',
    utilisation: '{prefix}loop',

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

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            emb.setDescription(`${client.emotes.success} Ripetizione **disabilitata**!`)
            return message.channel.send(emb);
        } else {
            client.player.setRepeatMode(message, true);
            emb.setDescription(`${client.emotes.success} Ripetizione **abilitata**!`)
            return message.channel.send(emb);
        };
    },
};