const Discord = require('discord.js');

module.exports = {
    name: 'stop',
    aliases: ["ferma", "fermo", "dc", "disconnect", "leave"],
    category: 'Music',
    utilisation: '{prefix}stop',

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

        client.player.setRepeatMode(message, false);
        client.player.stop(message);
        
        emb.setDescription(`${client.emotes.success} Ho **interrotto** la **riproduzione**`)
        message.channel.send(emb);
    },
};