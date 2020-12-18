const Discord = require('discord.js');

module.exports = {
    name: 'effetto',
    aliases: ['filter'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
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

        if (!args[0]) {
            emb.setDescription(`${client.emotes.error} Perfavore **specifica** un **filtro**, per esempio: \`${client.config.prefix}effetto 8D\``)
            return message.channel.send(emb)
        }

        const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) {
            emb.setDescription(`${client.emotes.error} Questo **filtro** non **esiste**!`)
            return message.channel.send(emb)
        }

        const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

        const queueFilters = client.player.getQueue(message).filters;
        const filtersUpdated = {};
        filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterRealName]) {
            emb.setDescription(`${client.emotes.music} **Attivo** l'effetto alla **canzone**...`)
            return message.channel.send(emb)
        } else {
            emb.setDescription(`${client.emotes.music} **Disattivo** l'effetto alla **canzone**...`)
            return message.channel.send(emb)
        }
    },
};