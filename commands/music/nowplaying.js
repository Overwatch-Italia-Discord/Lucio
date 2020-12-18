const Discord = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

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

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
            if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
        });

        message.channel.send({
            embed: {
                color: '#fa9c1e',
                author: { name: track.title },
                fields: [
                    { name: 'Canale', value: track.author, inline: true },
                    { name: 'Richiesto da', value: track.requestedBy.username, inline: true },
                    { name: 'Da Playlist', value: track.fromPlaylist ? 'Si' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Durata', value: track.duration, inline: true },
                    { name: 'Effetti', value: filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop', value: client.player.getQueue(message).repeatMode ? 'Si' : 'No', inline: true },
                    { name: 'In Pausa', value: client.player.getQueue(message).paused ? 'Si' : 'No', inline: true },

                    { name: 'Progressione', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};