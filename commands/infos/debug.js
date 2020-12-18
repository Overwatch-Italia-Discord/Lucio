const Discord = require('discord.js');

module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        const emb = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.success} Il bot è connsesso in \`${client.voice.connections.size}\` canali!`)
        .setColor("#fa9c1e");
        message.channel.send(emb);
    },
};