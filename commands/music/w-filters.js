const Discord = require('discord.js');

module.exports = {
    name: 'effetti',
    aliases: ['effects', 'filters'],
    category: 'Music',
    utilisation: '{prefix}effetti',

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
            emb.setDescription(`${client.emotes.error} **Nessun **brano **attualmente **in **riproduzione**.`)
            return message.channel.send(emb)
        }

        const disabledEmoji = client.emotes.error;
        const enabledEmoji = client.emotes.success;

        const filtersStatuses = [[], []];

        Object.keys(client.filters).forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
        });

        message.channel.send({
            embed: {
                color: '#fa9c1e',
                fields: [
                    { name: 'Filtri', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value:  filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.prefix}filter\` to add a filter to a song.`,
                description: `Lista di tutti gli effetti abilitati o disabilitati.\nUsa \`${client.config.prefix}effetto <effetto>\` per abilitare un effetto ad una canzone`,
            },
        });
    },
};