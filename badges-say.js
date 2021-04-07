
const Discord = require('discord.js');
const db = require('quick.db');
const emoji = {
   'brigade': '<:DiscordStaff:829111849597010021>',
   'partner': '<:discordpartner:829111852288966697> ',
   'events': '<:hypesquad_etkinlikleri:829111850498916372>',
   'brillance': '<:brilliance:829111854659665950>',
   'bravery': '<:bravery:829111852894126091>',
   'balance': '<:balance:829111855526969384>',
   'hunter_gold': '<:bughunterlevel2:829111853908885504>',
   'hunter': '<:hunter:829111847147667517>',
   'support': '<:upearly:829112042992173116>',
   'developers': '<:verifiedbotdev:829111851395973131>',
   'nitro': '<a:nitro:829112247137075239>',
   'boost': '<a:boost:829112247930060820>',
   'bot': '<:bot:829111855108325406> ',
   'onaylıbot':'<:verifiedbot:829111850653581394> '
};

   exports.run =  async (client ,message, args) => {
    let brigade = [];
    let partner = [];
    let events = [];
    let brillance = [];
    let bravery = [];
    let balance = [];
    let hunter_gold = [];
    let hunter = [];
    let support = [];
    let developers = [];
    let nitro = [];
    let onaylı =[];
    message.guild.members.cache.forEach(async(m) => {
        const flags = m.user.flags || await m.user.fetchFlags();
        if(flags.toArray().includes('DISCORD_EMPLOYEE')) brigade.push(m.id);
        if(flags.toArray().includes('DISCORD_PARTNER')) partner.push(m.id);
        if(flags.toArray().includes('HYPESQUAD_EVENTS')) events.push(m.id);
        if(flags.toArray().includes('HOUSE_BRILLIANCE')) brillance.push(m.id);
        if(flags.toArray().includes('HOUSE_BRAVERY')) bravery.push(m.id);
        if(flags.toArray().includes('VERIFIED_BOT')) onaylı.push(m.id);
        if(flags.toArray().includes('HOUSE_BALANCE')) balance.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_2')) hunter_gold.push(m.id);
        if(flags.toArray().includes('BUGHUNTER_LEVEL_1')) hunter.push(m.id);
        if(flags.toArray().includes('EARLY_SUPPORTER')) support.push(m.id);
        if(flags.toArray().includes('VERIFIED_DEVELOPER')) developers.push(m.id);
        let xxx = m.user.avatarURL({ dynamic: true });
        if(xxx.includes('gif')) nitro.push(m.id);
    });
//Elminstêr#0007
    let description = `
     > ${emoji.brigade} Discord Employee **${brigade.length}**
   > ${emoji.partner} Discord Partner **${partner.length}**
   > ${emoji.events} Hypesquad Events **${events.length}**
   > ${emoji.brillance} Brillance **${brillance.length}**
   > ${emoji.bravery} Bravery **${bravery.length}**
   > ${emoji.balance} Balance **${balance.length}**
   > ${emoji.hunter_gold} BugHunter Gold **${hunter_gold.length}**
   > ${emoji.hunter} BugHunter **${hunter.length}**
   > ${emoji.support} Early Supporter **${support.length}**
   > ${emoji.developers} Verified Developer **${developers.length}**
   > ${emoji.nitro} Nitro **${nitro.length}** (not exact)
   > ${emoji.boost} Server Booster **${message.guild.members.cache.filter(m => m.premiumSinceTimestamp).size}** (not exact)
   > ${emoji.bot} Bot **${message.guild.members.cache.filter(m => m.user.bot).size}**
   > ${emoji.onaylıbot} Verified Bot **${onaylı.length}**`;
//Elminstêr#0007
    const embed = new Discord.MessageEmbed()
    .setColor('#E70000')
    .setDescription(description);
    message.channel.send(embed);
    //Elminstêr#0007
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], 
    permLevel: 0,
};
// Elminstêr#0007
exports.help = {
    name: 'rozet-say',
    usage: 'kullanımı',
    description: 'açıklama',
};
//Elminstêr#0007
