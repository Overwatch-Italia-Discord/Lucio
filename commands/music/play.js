module.exports = {
    name: 'play',
    aliases: ['p', 'rispoduci'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Devi **essere** in un **canale vocale** per poter **utilizzare** il Bot!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Specifica una playlist o una canzone subito dopo il comando!`);

        client.player.play(message, args.join(" "));
    },
};