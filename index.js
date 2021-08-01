const Discord = require("discord.js")
const client = new Discord.Client()
var Grapheme = require('grapheme-splitter');
var splitter = new Grapheme();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  const str = msg.content
  if (/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(str))
  {
  if  (splitter.splitGraphemes(str).length === 1) {
    msg.react(str);
  }
  }
})

client.login(process.env.TOKEN)
