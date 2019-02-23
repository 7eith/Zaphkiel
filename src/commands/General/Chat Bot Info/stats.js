const { Command, version: klasaVersion, Duration } = require('klasa');
const { version: discordVersion } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			guarded: true,
			description: language => language.get('COMMAND_STATS_DESCRIPTION')
		});
	}

	async run(message) {
		let [users, guilds, channels] = [0, 0, 0];

		if (this.client.shard) {
			const results = await this.client.shard.broadcastEval(`[this.users.size, this.guilds.size, this.channels.size]`);
			for (const result of results) {
				users += result[0];
				guilds += result[1];
				channels += result[2];
			}
		}

		return message.sendCode('asciidoc', message.language.get('COMMAND_STATS',
			Duration.toNow(Date.now() - (process.uptime() * 1000)),
			(users || this.client.users.size).toLocaleString(),
			(guilds || this.client.guilds.size).toLocaleString(),
			(channels || this.client.channels.size).toLocaleString()
		));
	}

};
