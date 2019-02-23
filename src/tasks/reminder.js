const { Task } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Task {

	async run({ channel, user, text }) {
		const _channel = this.client.channels.get(channel);

		if (_channel) await _channel.sendEmbed(new MessageEmbed()
			.setAuthor("Reminder", "https://media.discordapp.net/attachments/548662983169933322/548690507249877013/latest.png")
			.setThumbnail("https://media.giphy.com/media/hI2zGZkPL6boA/giphy.gif")
			.setColor(0x00AE86)
			.addField('❯ Utilisateur', `<@${user}>`, true)
			.addBlankField(true)
			.addField('❯ Rappel', text, true)
			.addBlankField(true)
			.setFooter(`L'horloge ne te surveille plus, désormais.. `, 'https://cdn-images-1.medium.com/max/800/0*3IFEy-hfoIpgFjBl.gif')
		);
	}

};