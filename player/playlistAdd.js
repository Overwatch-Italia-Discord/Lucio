const Discord = require('discord.js');

module.exports = (client, message, playlist) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.music} La playlist **${playlist.title}** è stata aggiunta alla **coda** (\`${playlist.items.length}\` canzoni)`)
    message.channel.send(emb);
};