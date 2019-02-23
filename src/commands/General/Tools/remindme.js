const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'creates a reminder',
			usage: '<when:time> <text:...str>',
			usageDelim: ', '
		});
	}

	async run(msg, [when, text]) {
		const reminder = await this.client.schedule.create('reminder', when, {
			data: {
				channel: msg.channel.id,
				user: msg.author.id,
				text
			}
		});

		return msg.sendEmbed(new MessageEmbed()
        .setAuthor("Reminder", "https://media.discordapp.net/attachments/548662983169933322/548690507249877013/latest.png")
		.setThumbnail("https://media.giphy.com/media/hI2zGZkPL6boA/giphy.gif")
		.setColor(0x00AE86)
        .addField('❯ Utilisateur', msg.author, true)
		.addField('❯ ID', reminder.id, true)
		.addField('❯ Rappel', text, true)
		.addBlankField(true)
		.addField('❯ Expiration', when, true)
        .setFooter(` ${msg.author.username}, l'horloge te surveille, désormais.. `, 'https://cdn-images-1.medium.com/max/800/0*3IFEy-hfoIpgFjBl.gif')
		);
	}

};