const Discord = require('discord.js');

module.exports = (client, message, query, tracks) => {
    const emb = new Discord.MessageEmbed()
	.setColor('#fa9c1e')
	.setDescription(`${client.emotes.error} Tempo scaduto, azione **annullata**.`)
    message.channel.send(emb);
};