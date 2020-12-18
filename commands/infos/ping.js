const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',
    execute(client, message) {
        const emb = new Discord.MessageEmbed()      
        .setDescription(`${client.emotes.success} **${client.ws.ping}ms**`)
        .setColor('#fa9c1e');
        message.channel.send(emb);
    },
};