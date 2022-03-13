// This command exists so that you have to do the associated command
// to setup the bot. (This is also because of REST/HTTP not relying on the
// associated Gateway event.)

const Command = require('~/lib/structures/Command');

const { success } = require('~/lib/util/constants').emoji;

module.exports = class SetupCommand extends Command {

	constructor(creator) {
		super(creator, {
			name: 'setup',
			description: 'Sets up the modmail forum channels.'
		});
		this.filePath = __filename;
	}

	async execute(ctx, { client, guild }) {
		const channelID = await client.forums.reset(guild);
		await client.forums.logger.init(guild);

		return `${success} Setup complete. Your tickets will now appear in <#${channelID}>`;
	}

};
