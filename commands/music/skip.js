module.exports = {
    name: 'skip',
    aliases: ['sk', 'salta'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nessun **brano **attualmente **in **riproduzione**`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - Il **corrente brano** è statato **saltato**`);
    },
};