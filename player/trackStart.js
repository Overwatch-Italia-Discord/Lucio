const Discord = require('discord.js');

module.exports = (client, message, track) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.music} Riproduco **${track.title}**`)
    message.channel.send(emb);
};