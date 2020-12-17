module.exports = {
    name: 'loop',
    aliases: ['lp'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nessun **brano **attualmente **in **riproduzione**`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** !`);
        };
    },
};