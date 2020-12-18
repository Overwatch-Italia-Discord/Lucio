const Discord = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p', 'rispoduci'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
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

        if (!args[0]) {
            emb.setDescription(`${client.emotes.error} Specifica una **playlist** o una **canzone**`)
            return message.channel.send(emb);
        }

        client.player.play(message, args.join(" "));
    },
};