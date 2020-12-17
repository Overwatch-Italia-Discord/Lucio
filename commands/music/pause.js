module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nessun **brano **attualmente **in **riproduzione**`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Questo **brano** è già in pausa`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} **paused** !`);
    },
};