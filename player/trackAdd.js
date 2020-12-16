const Discord = require('discord.js');

module.exports = (client, message, queue, track) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.music} Traccia **${track.title}**  aggiunta alla coda!`)
    message.channel.send(emb);
};