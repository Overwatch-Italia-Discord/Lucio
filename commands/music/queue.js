const Discord = require('discord.js');

module.exports = {
    name: 'coda',
    aliases: ["queue", "q"],
    category: 'Music',
    utilisation: '{prefix}queue',

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

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) {
            emb.setDescription(`${client.emotes.error} **Nessun** brano **attualmente** in **riproduzione**.`)
            return message.channel.send(emb)
        }

        emb.setTitle("Coda delle Canzoni");
        emb.setDescription(`Nella coda ci sono \`${queue.tracks.length}\` canzoni.`)
        emb.addFields(
            { name: 'Attuale', value: "```" + `${queue.playing.title} | ${queue.playing.author}` + "```"},
            { name: 'Coda', value: ("```" + queue.tracks.map((track, i) => {
                return `${i + 1}. ${track.title} | ${track.author}`
            }).slice(0, 5).join('\n\n') + `\n\n${queue.tracks.length > 5 ? `\`\`\` e ${queue.tracks.length - 5} altre canzoni` : "```"}`)}
        )
        message.channel.send(emb);
    },
};