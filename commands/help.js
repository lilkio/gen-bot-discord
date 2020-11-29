const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://i.pinimg.com/originals/c3/ab/54/c3ab5421bc8fcab06a1e5c70df5cbdb4.gif')
.setFooter('©️ Made by lil Kio#0001™️')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`$spotify` To Get A Spotify Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$nordvpn` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
