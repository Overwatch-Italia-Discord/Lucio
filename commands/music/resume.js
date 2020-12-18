const Discord = require('discord.js');

module.exports = {
    name: 'riprendi',
    aliases: ['resume'],
    category: 'Music',
    utilisation: '{prefix}resume',

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

        if (!client.player.getQueue(message).paused) {
            emb.setDescription(`${client.emotes.error} La **musica** sta già **suonando**!`)
            return message.channel.send(emb);
        }

        client.player.resume(message);

        emb.setDescription(`${client.emotes.success} Brano **${client.player.getQueue(message).playing.title}** ripreso.`)
        message.channel.send(emb);
    },
};