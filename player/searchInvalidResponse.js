const Discord = require('discord.js');

module.exports = (client, message, query, tracks, content, collector) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.error} Devi specificare un numero da **1** a **${tracks.length}**!`)
    message.channel.send(emb);
};