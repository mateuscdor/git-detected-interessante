const { default: makeWASocket, readMessages, getBusinessProfile, useMultiFileAuthState, groupFetchAllParticipating, fetchPrivacySettings, WA_DEFAULT_EPHEMERAL, getDevice, downloadContentFromMessage, useSingleFileAuthState, fetchLatestBaileysVersion, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, jidDecode, proto, makeInMemoryStore } = require("./lib/@adiwajshing/baileys")//require("./lib/@adiwajshing/baileys")
const { serialize, resolve, banner, agent, assert, hex, sendResponse, aleatory, http, verificado, live, mention, sleep, notFoundButton, notFoundTemplate, notFound, downloadMediaMessage, verify, check, getBuffer, getRandom, getGroupAdmins, runtime, parseMs, downloadAndSaveMediaMessage, textF } = require("./lib/myfunc")
const fetch = require('node-fetch') 
const fs = require("fs-extra")
const pi = require('pino')
const store = makeInMemoryStore({ logger: pi().child({ level: 'fatal', stream: 'store' }) })
store.readFromFile('./src/storage.json')
setInterval(() => store.writeToFile('./src/storage.json'), 500)

console.log(banner.string)
const connectToWhatsApp = async () => {
const { state, saveCreds } = await useMultiFileAuthState('./src/session')
const { version } = await fetchLatestBaileysVersion()
const conn = makeWASocket({
version,
logger: pi({ level: 'fatal' }),
printQRInTerminal: true,
auth: state,
browser: ["UndefinedBot Multi Device", "Chrome", "3.0"],
getMessage: async key => {
return { conversation: 'Aguarde, recebendo mensagens...'
}
}
})
store?.bind(conn.ev)
conn.ev.on('creds.update', saveCreds)
process.env.HOME == '/app' ? setInterval(() => { conn.ev.on('creds.update', saveCreds); console.log('Chaves de acesso sendo salvas agora...') }, 18000000) : setInterval(() => { conn.ev.on('creds.update', saveCreds); console.log('Chaves de acesso sendo salvas agora...') }, 600000)

const moment = require("moment-timezone")
const { exec } = require("child_process")
const chalk = require('chalk')
const ddg = require("ddgimages-node")
const toMs = require('ms')
const { jsPDF } = require('jspdf')
const tradutor = require("@vitalets/google-translate-api")
const cheerio = require('cheerio')
const axios = require('axios')
const dds = require('duck-duck-scrape')
const colors = require('colors')
const request = require("request")
const ffmpeg = require("fluent-ffmpeg")
const crypto = require('crypto')
const speed = require("performance-now")

//git add .
//git commit -am "rest-api's" && git push heroku master
//https://lolis-life-api.herokuapp.com/getLoli
//https://lolis-life-api.herokuapp.com/getNsfwLoli
//https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
//https://github.com/clhuang/heroku-buildpack-webp-binaries.git
//https://github.com/pathwaysmedical/heroku-buildpack-tesseract
//heroku/nodejs
//lib/utils/generics : const generateMessageID = () => 'BAE5' + (0, crypto_1.randomBytes)(6).toString('hex').toUpperCase();

const { LevelingXp, virtex, Inteligence, velha, ConnectionUpdate, akinator } = require("./lib/functions.js")
const { recognize, webp2gifFile, tiktokdownloader } = require("./lib/convert")
const { telegraPh, uploadFileUgu, fileio } = require("./lib/uploader")
//const { xnxx } = require('./lib/porn')
const { mediafire, wikipedia } = require("./lib/scraper")
const { writeExifImg200, writeExifVid200, writeExifImg512, writeExifVid512, writeExif } = require('./lib/exift')
const { pinterest, pinteres } = require('./lib/pinterest')
const { getMessage, saveCash, getCash, getTimeDat, reloadGhost, saveMessage, getUserId, saveData, saveGroupId, getGroupId, getLevel, getXp, saveLevel, saveXp, getRank, saveCommand, saveUsedCommand, getCommand } = require("./lib/level")

const dailyTTT = JSON.parse(fs.readFileSync('./lib/tictac/diarioTTT.json'))
const cdTTT = 120000 
const crTTT = "```Jogo da velha by: REZEN```"
const { addTTTset, TTTposition, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, tttme, ttthelp } = require('./lib/ttt.js')
const change = () => { const IndexSec = { IndexSecundaria } = require('./lib/functions'); global.IndexSec }

conn.ws.on('CB:call', async function ({ content }) {
const config = JSON.parse(fs.readFileSync('./src/config.json'))
if (content[0].tag == 'offer' && config.call) {
conn.sendMessage(content[0].attrs['call-creator'], { text: "Bloqueado!" }).then(() => { conn.updateBlockStatus(content[0].attrs['call-creator'], "block") })
}
})

conn.ev.on('chats.upsert', async function (chats) {
chats[0].id.endsWith('@g.us') ? "" : conn.sendMessage(chats[0].id, { text: 'Olá 👍' })
})

/*
conn.ev.on('group-participants.update', async function (update) {
const database = JSON.parse(fs.readFileSync('./src/database.json'))
const group = await conn.groupMetadata(update.id)
const description = group.desc ? group.desc : ""
const config = JSON.parse(fs.readFileSync('./src/config.json'))
if (update.action == 'add' && verify(update.participants[0], database.autoban)) {
conn.sendMessage(update.id, { text: config.autoban.replace('#n', update.participants[0].split("@")[0]), contextInfo: { mentionedJid: [update.participants[0]] } }).then(() => { conn.groupParticipantsUpdate(update.id, [update.participants[0]], 'remove') })
return
}
if (!update.participants[0].startsWith(55) && verify(update.id, database.antifake) && update.action == 'add') {
conn.sendMessage(update.id, { text: config.antifake.replace('#n', update.participants[0].split("@")[0]), contextInfo: { mentionedJid: [update.participants[0]] } }).then(() => { conn.groupParticipantsUpdate(update.id, [update.participants[0]], 'remove') })
return
} else if (verify(update.id, database.wellcome)) {
if (update.action == 'add') {
if (process.env.HOME == '/app') {
ppims = await conn.profilePictureUrl(update.participants[0], 'image').catch((err) => ppimg = "https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg")
image = await new knights.Welcome2().setAvatar(ppims).setUsername('@' + update.participants[0].split("@")[0]).setBg(config.welcome).setGroupname(group.subject).setMember(group.participants.length).toAttachment()
conn.sendMessage(update.id, { image: image.toBuffer(), contextInfo: { mentionedJid: [update.participants[0]] }, caption: config.bv.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description) }).catch((err) => conn.sendMessage(update.id, { text: config.entrar.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } }))
} else {
ppims = await conn.profilePictureUrl(update.participants[0], 'image').catch((err) => ppimg = "https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg")
image = "https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png&text1=Olá @" + update.participants[0].split("@")[0] + "&text2=Bem vindo ao grupo: " + group.subject + "&text3=#" + group.participants.length + "&avatar=" + ppims
conn.sendMessage(update.id, { image: { url: image }, contextInfo: { mentionedJid: [update.participants[0]] }, caption: config.bv.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description) }).catch((err) => conn.sendMessage(update.id, { text: config.entrar.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } }))
}
}
} else if (verify(update.id, database.wellcomeText)) {
if (update.action == 'add') {
conn.sendMessage(update.id, { text: config.entrar.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } })
}
if (update.action == 'remove') {
conn.sendMessage(update.id, { text: config.sair.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } })
}
}
})
*/

conn.ev.on('messages.upsert', async function ({ messages }) {
const database = JSON.parse(fs.readFileSync('./src/database.json'))
const config = JSON.parse(fs.readFileSync('./src/config.json'))
const basedata = JSON.parse(fs.readFileSync('./src/database.json'))
change()
if (verify(messages[0].key.remoteJid, database.x9)) {
if (messages[0].messageStubType == "29") {
conn.sendMessage(messages[0].key.remoteJid, { text: `O Administrador @${messages[0].key.participant.split("@")[0]} Promoveu @${messages[0].messageStubParameters[0].split("@")[0]}`, contextInfo: { mentionedJid: [messages[0].messageStubParameters[0], messages[0].key.participant] } })
}
if (messages[0].messageStubType == "30") {
conn.sendMessage(messages[0].key.remoteJid, { text: `O Administrador @${messages[0].key.participant.split("@")[0]} Rebaixou @${messages[0].messageStubParameters[0].split("@")[0]}`, contextInfo: { mentionedJid: [messages[0].messageStubParameters[0], messages[0].key.participant] } })
}
}
if (messages[0].messageStubType == "20") {
conn.sendMessage(messages[0].key.remoteJid, { text: `@${messages[0].participant.split('@')[0]} Obrigado por me adicionar no grupo: ${messages[0].messageStubParameters[0]}`, contextInfo: { mentionedJid: [messages[0].participant] } })
}
if (!messages) return
try {
if (messages[0].key.remoteJid == 'status@broadcast') return conn.readMessages(messages[0].key) //conn.sendReadReceipt(messages[0].key.remoteJid, messages[0].key.participant, [messages[0].key.id])
if (messages[0].key.id.startsWith('BAE5') || messages[0].key.id.startsWith('SEX5')) return
const m = serialize(conn, messages[0])
const { type, now, fromMe, from, isGroup, pushName, isQuotedMsg, mentioned, quotedMsg } = m
if (type == null) return
const budy = (type === 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'senderKeyDistributionMessage') ? (m.message.conversation ? m.message.conversation : (m.message.extendedTextMessage ? m.message.extendedTextMessage.text : '')) : '' || ''
const sender = isGroup ? (m.key.participant ? m.key.participant : m.key.participant) : m.key.remoteJid
const aguardar = config.await[Math.floor(Math.random() * config.await.length)]
const body = budy ? budy : ''
const prefix = config.multiprefix ? body.match(/^[!*.#-/?]/gi) : (body.startsWith(config.prefix) ? config.prefix : false)
const args = body.trim().split(/ +/).slice(1)
const timedat = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const argx = args.join(" ")
const command = prefix ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : false
const content = JSON.stringify(m)
const metadata = isGroup ? await conn.groupMetadata(from).catch((err) => {}) : ''
const icmd = body.startsWith(prefix)
const groupName = isGroup ? metadata.subject : ''
const iMe = sender.match(conn.user.id.split(':')[0] + "@s.whatsapp.net") ? true : false
const groupMembers = isGroup ? metadata.participants : ''
const owner = config.owner.includes(sender) ? true : false
const groupMembersAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const iGroupAdmin = groupMembersAdmins.includes(sender) ? true : false
const iBotGroupAdmin = groupMembersAdmins.includes(conn.user.id.split(':')[0] + "@s.whatsapp.net") ? true : false
const reply = (message) => conn.sendMessage(from, { text: message }, { quoted: m })
const repls = (message) => {
conn.sendMessage(from, { react: { text: message, key: m.key } })
}
const tictactoe = JSON.parse(fs.readFileSync('./lib/tictac/tictactoe.json'))
const reloadTTT = () => { global._ttt = JSON.parse(fs.readFileSync('./lib/tictac/tttset.json')) }

//blz = await conn.groupFetchAllParticipating()
//console.log(blz)
//console.log(await fetchProps())
//console.log(await fetchAbt())
//console.log(blz['120363021666642593@g.us'])
//console.log(await conn.getBusinessProfile(conn.user.id.split(':')[0] + "@s.whatsapp.net"))
//console.log(getDevice(m.key.id))

const sendResponse = (option, text, buttons, template, quot) => {
conn.sendMessage(from, { image: option, caption: text ? text : " ", buttons: buttons !== null ? (buttons ? buttons : [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }]) : null, templateButtons: template ? template : null }, { quoted: quot ? null : m })
}

const sendResponses = (option, text, buttons, template, gif, quot) => {
conn.sendMessage(from, { option, caption: text ? text : " ", gifPlayback: gif ? gif: false, buttons: buttons !== null ? (buttons ? buttons : [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }]) : null, templateButtons: template ? template : null }, { quoted: quot ? null : m })
}

if (verify(from, database.antilinkH) && isGroup && iBotGroupAdmin && !iGroupAdmin && body.match(/https:|http:|www/)) {
linkx = await conn.groupInviteCode(from)
if (body.match(linkx)) return reply("Link deste grupo, inofensivo.")  
conn.sendMessage(from, { text: "Link detectado, Irei remover você. @" + sender.split("@")[0], contextInfo: { mentionedJid: [sender] } }, { quoted: m }).then(() => conn.groupParticipantsUpdate(from, [sender], 'remove'))
}

if (icmd && !iMe && !owner) for (cmdblock of database.commandBlock) if (body.match(cmdblock)) return reply("Comando bloqueado.")

if (!isGroup && !iMe && !owner && config.antipv) conn.sendMessage(from, { text: 'AntiPv ativado.' }, { quoted: m }).then(() => conn.updateBlockStatus(sender, 'block') )

if (verify(from, database.antilinkN) && isGroup && iBotGroupAdmin && !iGroupAdmin && body.match(/chat.whatsapp.c/)) {
linkx = await conn.groupInviteCode(from)
if (body.match(linkx)) return reply("Link deste grupo, inofensivo.")  
conn.sendMessage(from, { text: "Link detectado, Irei remover você. @" + sender.split("@")[0], contextInfo: { mentionedJid: [sender] } }, { quoted: m }).then(() => conn.groupParticipantsUpdate(from, [sender], 'remove'))
}

if (isGroup) {
for (let i of database.afk) if (body.match(i.id.split('@')[0])) {
if (check(i.id, database.afk)) {
a = parseMs(Date.now() - database.afk[check(i.id, database.afk)].hr)
b = 'Olá @' + sender.split('@')[0] + '\n@' + database.afk[check(i.id, database.afk)].id.split('@')[0] + ' Está inativo desde: ' + database.afk[check(i.id, database.afk)].time + '\nHá ' + a.hours + ' Horas ' + a.minutes + ' Minutos e ' + a.seconds + ' Segundos' + '\nRecado: ' + database.afk[check(i.id, database.afk)].message
conn.sendMessage(from, { text: b, contextInfo: { mentionedJid: [sender, database.afk[check(i.id, database.afk)].id] } }, { quoted: m })
}
}
if (check(sender, database.afk)) {
a = parseMs(Date.now() - database.afk[check(sender, database.afk)].hr)
b = 'Bem vindo de volta @' + database.afk[check(sender, database.afk)].id.split('@')[0] + '\nInativo desde: ' + database.afk[check(sender, database.afk)].time + '\nHá ' + a.hours + ' Horas ' + a.minutes + ' Minutos e ' + a.seconds + ' Segundos'
conn.sendMessage(from, { text: b, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
database.afk.splice(check(sender, database.afk), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
return
}
}

if (TTTposition(from) !== undefined) {
reloadTTT()
const endPos = TTTposition(from)
if (_ttt[endPos].config.status == "on" && (120000 - (Date.now() - _ttt[endPos].config.autoEnd) <= 0)) {
if (verify(from, database.leveling)) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 35) + 35)
saveXp(_ttt[endPos].info.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(_ttt[endPos].info.player)
if (checkTTTIdEnd == undefined) addTTTId(_ttt[endPos].info.player)
addTTTpoints(_ttt[endPos].info.player, randomEndTTTXP)
conn.sendMessage(_ttt[endPos].info.group, { text: `${_ttt[endPos].info.playername} O tempo de jogo expirou. Punição: ${randomEndTTTXP} XP \u{1F52E}`, contextInfo: { mentionedJid: [_ttt[endPos].info.player] } })
} else {
conn.sendMessage(_ttt[endPos].info.group, { text: `${_ttt[endPos].info.playername} O tempo de jogo expirou.`, contextInfo: { mentionedJid: [_ttt[endPos].info.player] } })
}
_ttt.splice(endPos, 1)
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}
}

const iImage = (type == 'imageMessage')
const iVideo = (type == 'videoMessage')
const iSticker = (type == 'stickerMessage')
const iQimage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const iQaudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const iQdocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const iQvideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const iQsticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

//composing
icmd && config.composing ? conn.sendPresenceUpdate('composing', from) : ""
config.online ? conn.sendPresenceUpdate('available', from) : ""
config.read ? conn.readMessages(m.key) : ""

if (!isGroup && icmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', timedat.underline, command.green.underline, 'from'.red.underline, pushName.green.underline)
if (icmd  && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', timedat.underline, command.green.underline, 'from'.red.underline, pushName.green.underline, 'in'.red.underline, groupName.green.underline)

switch (command) {
case'ping': {(async () => {
var a = require('performance-now')
var b = a()
var c = a() - b
conn.sendMessage(from, { text: `\`\`\`Velocidade: ${c.toFixed(4)}ms\`\`\`` }, { quoted: m })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'sty':
a = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'Whatsapp Web'
break

case"r":
return console.log(JSON.stringify(eval(args.join(" "))))
break

case'gerarnum':
reply('Procurando números com o ddd ' + `${args[0] ? args[0] : '21'}`)
P0 = 1
while (P0) {
if (P0 == 100) return reply('Testei 100 números e nenhum deles existe! Tente novamente.')
P1 = args[0] ? args[0] : 21
P2 = Math.random() * (9999 - 1000) + 1000
P3 = Math.random() * (9999 - 1000) + 1000
P4 = '55' + P1+ P2.toFixed(0) + P3.toFixed(0)
P5 = await conn.onWhatsApp(P4)
if (P5[0] !== undefined && P5[0].exists) {
reply('Encontrado: wa.me//' + P4)
break
}
P0++
}
break

//ConfiguraçõesOwner...

case'add-dono':
if (iMe || owner) {
if (args[0] !== undefined && args[0].match("@")) dono = args[0].split("@")[1] + "@s.whatsapp.net"
if (args[0] !== undefined && !args.join(" ").match("@") && !isNaN(Number(args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "")))) dono = args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
if (verify(dono, config.owner)) {
reply('Esse número já está incluso.')
} else {
config.owner.push(dono)
reply('Configurado com sucesso.')
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
} else {
return reply(config.msg.owner)
}
break

case'setbvimage':
try {
if (iQimage) {
upka = await downloadMessage('image', m)
spka = await telegraPh(upka)
config.welcome = spka
reply('Imagem de boas vindas alterada com sucesso.')
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
} catch (err) {
return reply(config.msg.error.upload)
}
break

case'setprefix':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined || args[0].length > 1) return reply('Apenas um caractere.')
config.prefix = args[0]
reply('Prefixo alterado para: ' + args[0])
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
} else {
return reply(config.msg.negar)
}
break

case'multiprefix':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (config.multiprefix) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
reply('Multi Prefix ativado.')
config.multiprefix = true
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
if (args[0] == 0) {
reply('Multi Prefix desativado.')
config.multiprefix = false
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
} else {
reply(config.msg.negar)
}
break

case'antipv':
if (iMe || owner) {
if (args[0] == undefined) {
if (config.antipv) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
}, { quoted: m })
}
}
if (args[0] == '1') {
reply('AntiPv ativado.')
config.antipv = true
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
if (args[0] == '0') {
reply('AntiPv desativado.')
config.antipv = false
fs.writeFileSync("./src/config.json", JSON.stringify(config, null, 2))
}
} else {
return reply(config.msg.owner)
}
break

//ConfiguraçõesOwner...

//YoutubeDownload

case config.comandos[0]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
try {
reply(aguardar)
ax = require('youtubei.js')
bx = await new ax()
cx = await bx.search(args.join(" "))
buttons = [
{ buttonId: prefix + 'subplaybmp4 ' + cx.videos[0].id, buttonText: { displayText: 'VÍDEO' }, type: 1},
{ buttonId: prefix + 'subplaybmp3 ' + cx.videos[0].id, buttonText: { displayText: 'ÁUDIO' }, type: 1}
]
conn.sendMessage(from, {
image: { url: "https://" + cx.videos[0].metadata.thumbnails[0].url.split("https://")[1].split("?")[0] },
caption: `Titulo: ${cx.videos[0].title}\nId: ${cx.videos[0].id}\nCanal: ${cx.videos[0].channel.name}\nViews: ${cx.videos[0].metadata.view_count}\nDuração: ${cx.videos[0].metadata.duration.simple_text}\nUpload: ${cx.videos[0].metadata.published}\n\n${cx.videos[0].description}`,
buttons: buttons,
headerType: 4
})
} catch (err) {
return reply(config.msg.error.err)
}
break

case'subplaybmp3':
reply(config.msg.baixar)
ax = require('youtubei.js')
bx = await new ax()
dx = getRandom('.mp3')
sx = await bx.download(args.join(" "), {
format: 'mp4',
quality: '64k',
type: 'audio'
})
sx.pipe(fs.createWriteStream(dx))
sx.on('end', () => {
conn.sendMessage(from, { audio: fs.readFileSync(dx), mimetype: 'audio/mpeg' }).then(() => fs.unlinkSync(dx) )
})
sx.on('error', (err) => {
fs.unlinkSync(dx)
return reply(config.msg.error.err)
})
break

case'subplaybmp4':
reply(config.msg.baixar)
ax = require('youtubei.js')
bx = await new ax()
dx = 'mp3'// getRandom('.mp4')
sx = await bx.download(args.join(" "), {
format: 'mp4',
quality: '360p',
type: 'videoandaudio'
})
sx.pipe(fs.createWriteStream(dx))
sx.on('end', () => {
conn.sendMessage(from, { video: fs.readFileSync(dx) }).then(() => fs.unlinkSync(dx) )
})
sx.on('error', (err) => {
fs.unlinkSync(dx)
return reply(config.msg.error.err)
})
break

case config.comandos[1]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
try {
reply(aguardar)
fx = require( 'yt-search' )
jx = await fx(args.join(" "))
lx = 0
sections = []
if (jx.videos.length == 0) return reply("Nenhum resultado.")
for (let x = 0; x < jx.videos.length; x++) {
lx++
sections.push({
title: lx,
rows: [
{ title: jx.videos[x].author.name + ": " + jx.videos[x].title, rowId: prefix + "ytmp3 " + jx.videos[x].url, description: "ÁUDIO: " + jx.videos[x].timestamp },
{ title: jx.videos[x].author.name + ": " + jx.videos[x].title, rowId: prefix + "ytmp4 " + jx.videos[x].url, description: "VÍDEO: " + jx.videos[x].timestamp }
]
})
}
conn.sendMessage(from, {
text: "Total: " + jx.videos.length,
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
}, { quoted: { key : { participant : '0@s.whatsapp.net' }, 
message: {
imageMessage: {
"mimetype": "image/jpeg",
"caption": " ", 
"jpegThumbnail": await getBuffer(jx.videos[0].image)
} } } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'ytmp3':
reply(config.msg.baixar)
try {
nx = require('ytdl-core')
hx = getRandom('.mp3')
bx = await nx(args.join(" "), { quality: '249' }).pipe(fs.createWriteStream(hx))
bx.on("finish", function () {
conn.sendMessage(from, { audio: fs.readFileSync(hx), mimetype: "audio/mpeg" }).then(() => fs.unlinkSync(hx) )
})
} catch (err) {
fs.unlinkSync(hx)
return reply(config.msg.error.err)
}
break

case'ytmp4':
reply(config.msg.baixar)
try {
nx = require('ytdl-core')
hx = getRandom('.mp4')
bx = await nx(args.join(" "), { quality: '18' }).pipe(fs.createWriteStream(hx))
bx.on("finish", function () {
conn.sendMessage(from, { video: fs.readFileSync(hx) }).then(() => fs.unlinkSync(hx) )
})
} catch (err) {
fs.unlinkSync(hx)
return reply(config.msg.error.err)
}
break

//YoutubeDownload

//GameAndTTT

case config.comandos[2]:
if (args[0] == undefined || !args[0].match("@")) return reply("Marque o oponente.")
mentionX = args[0].split("@")[1] + "@s.whatsapp.net"
xx = check(from, database.game)
yx = false
if (xx) {
Object.keys(database.game[xx].jogos).forEach((i) => {
if (database.game[xx].jogos[i].x == sender || database.game[xx].jogos[i].x == mentionX) {
yx = i
}
if (database.game[xx].jogos[i].o == sender || database.game[xx].jogos[i].o == mentionX) {
yx = i
}
})
if (yx === false) {
database.game[xx].jogos.push({ online: false, x: sender, o: mentionX, jogar: sender, finish: false, time: 0, winner: null, matrix: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"] })
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: `\`\`\`JØGØ DA VËLHA\`\`\`` + "\n\n@" + sender.replace("@s.whatsapp.net","") + `\`\`\` Desafiou você a uma partida de jogo da velha...\`\`\`` + "\n\n@" + mentionX.split("@")[0] + `\`\`\` Aceite digitando S or N\`\`\``, contextInfo: { mentionedJid: [sender, mentionX] } }, { quoted: m })
} else {
if (database.game[xx].jogos[yx].online) {
conn.sendMessage(from, { text: `\`\`\`Jogo em andamento... @\`\`\`` + database.game[xx].jogos[yx].x.split("@")[0] + `\`\`\` VS @\`\`\`` + database.game[xx].jogos[yx].o.split("@")[0] + "\n\n" + "❌: @" + database.game[xx].jogos[yx].x.split("@")[0] + "\n" + "⭕: @" + database.game[xx].jogos[yx].o.split("@")[0] + "\n\n" + `\`\`\`Sua Vez: @\`\`\`` + database.game[xx].jogos[yx].jogar.split("@")[0] + "\n\n" + database.game[xx].jogos[yx].matrix[0] + "  " + database.game[xx].jogos[yx].matrix[1] + "  " + database.game[xx].jogos[yx].matrix[2] + "\n" + database.game[xx].jogos[yx].matrix[3] + "  " + database.game[xx].jogos[yx].matrix[4] + "  " + database.game[xx].jogos[yx].matrix[5] + "\n" + database.game[xx].jogos[yx].matrix[6] + "  " + database.game[xx].jogos[yx].matrix[7] + "  " + database.game[xx].jogos[yx].matrix[8], contextInfo: { mentionedJid: [sender, database.game[xx].jogos[yx].o] } }, { quoted: m })
} else {
conn.sendMessage(from, { text: `\`\`\`Jogo em andamento... @\`\`\`` + database.game[xx].jogos[yx].x.split("@")[0] + `\`\`\` VS @\`\`\`` + database.game[xx].jogos[yx].o.split("@")[0] + "\n\n" + "❌: @" + database.game[xx].jogos[yx].x.split("@")[0] + "\n" + "⭕: @" + database.game[xx].jogos[yx].o.split("@")[0] + "\n\n" + `\`\`\`Sua Vez: @\`\`\`` + database.game[xx].jogos[yx].jogar.split("@")[0] + "\n\n" + database.game[xx].jogos[yx].matrix[0] + "  " + database.game[xx].jogos[yx].matrix[1] + "  " + database.game[xx].jogos[yx].matrix[2] + "\n" + database.game[xx].jogos[yx].matrix[3] + "  " + database.game[xx].jogos[yx].matrix[4] + "  " + database.game[xx].jogos[yx].matrix[5] + "\n" + database.game[xx].jogos[yx].matrix[6] + "  " + database.game[xx].jogos[yx].matrix[7] + "  " + database.game[xx].jogos[yx].matrix[8] + "\n" + `\`\`\`Aguardando confirmação...\`\`\``, contextInfo: { mentionedJid: [sender, database.game[xx].jogos[yx].o] } }, { quoted: m })
}
}
} else {
database.game.push({ id: from, jogos: [ { online: false, x: sender, o: mentionX, jogar: sender, finish: false, time: 0, winner: null, matrix: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"] } ] })
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: `\`\`\`JØGØ DA VËLHA\`\`\`` + "\n\n@" + sender.replace("@s.whatsapp.net","") + `\`\`\` Desafiou você a uma partida de jogo da velha...\`\`\`` + "\n\n@" + mentionX.split("@")[0] + `\`\`\` Aceite digitando S or N\`\`\``, contextInfo: { mentionedJid: [sender, mentionX] } }, { quoted: m })
}
break

case config.comandos[3]:
xx = check(from, database.game)
yx = false
if (xx) {
Object.keys(database.game[xx].jogos).forEach((i) => {
if (database.game[xx].jogos[i].x == sender) {
yx = i
}
if (database.game[xx].jogos[i].o == sender) {
yx = i
}
})
if (yx !== false && database.game[xx].jogos[yx].online == true && Date.now() >= database.game[xx].jogos[yx].time) {
reply("Jogo Resetado.")
database.game[xx].jogos.splice(yx, 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
} else {
if (database.game[xx].jogos[yx].online) {
px = parseMs(database.game[xx].jogos[yx].time - Date.now())
ux = database.game[xx].jogos[yx].online ? "Jogo em andamento...\nTempo restante: " + px.minutes + " Minutos " + px.seconds + " Segundos" : "Esgotado!"
reply(ux)
} else {
reply("Jogo Resetado.")
database.game[xx].jogos.splice(yx, 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
}
}
}
break

//GameAndTTT

//FunctionsExtra

case config.comandos[4]:
ay = await axios.get("https://api.apiflash.com/v1/urltoimage?access_key=9943acd6d63341d1a759ebb1bfe0ae3c&format=png&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&quality=100&url=" + args.join(" "))
conn.sendMessage(from, { image: { url: ay.data.url } }, { quoted: m })
break

case config.comandos[5]:
conn.sendMessage(from, { image: { url: "http://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(args[0]) +  "&ecc=L&margin=50&size=750x750" } }, { quoted: m })
break

case config.comandos[6]:
ny = await downloadMessage('image', m)
sy = await uploadFileUgu(ny)
ay = await axios.get("http://api.qrserver.com/v1/read-qr-code/?fileurl=" + sy.url + "&outputformat=json")
if (ay.data[0].symbol[0].error !== null) return reply("QrCode inválido.")
conn.sendMessage(from, { text: "Resposta do QrCode: " + ay.data[0].symbol[0].data }).then(() => fs.unlinkSync(ny))
break

case config.comandos[7]: {(async () => {
if (isQuotedMsg && type === "extendedTextMessage") {
reply(aguardar)
var a = await tradutor(quotedMsg.conversation, { to: "pt" })
conn.sendMessage(from, { text: a.text }, { quoted: m })
} else {
reply(aguardar)
var a = await tradutor(args.join(" "), { to: "pt" })
conn.sendMessage(from, { text: a.text }, { quoted: m })
}
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[8]:
reply(aguardar)
ay = await axios.get("https://www.invertexto.com/gerador-de-pessoas", {
headers: {
"user-agent": agent()
}
})
$y = cheerio.load(ay.data)
gy = "Nome: " + $y('input.form-control').eq(0).attr('value') + "\nCpf: " + $y('input.form-control').eq(1).attr('value') + "\nTelefone: " + $y('input.form-control').eq(2).attr('value') + "\nData de nascimento: " + $y('input.form-control').eq(3).attr('value') + "\nIdade: " + $y('input.form-control').eq(4).attr('value') + "\nCep: " + $y('input.form-control').eq(6).attr('value') + "\nEndereço: " + $y('input.form-control').eq(7).attr('value') + "\nCidade: " + $y('input.form-control').eq(8).attr('value') + "\nEstado: " + $y('input.form-control').eq(9).attr('value') + "\nEmail: " + $y('input.form-control').eq(10).attr('value').split('@')[0] + "@gmail.com" + "\nSenha: " + $y('input.form-control').eq(12).attr('value') + "\nAltura: " + $y('input.form-control').eq(17).attr('value') + "\nPeso: " + $y('input.form-control').eq(18).attr('value')
reply(gy)
break

case config.comandos[9]:
if (!iQimage) return reply('Apenas imagem.')
reply(aguardar)
try {
np = await downloadMediaMessage('image', m)
sp = await uploadFileUgu(np)
op = await axios.get("https://www.google.com/searchbyimage?image_url=" + sp.url, {
headers: {
"user-agent": agent
}
})
$p = cheerio.load(op.data)
up = $p('div.r5a77d').text().replace('Resultados para ', 'Resultados para: ') + "\n\n"
kp = $p('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').length
if (kp == 0) return reply(config.msg.error.result)
for (let i = 0; i < kp; i++) {
qp = $p('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').eq(i).text() || "Indisponível"
pp = $p('div[class="VwiC3b MUxGbd yDYNvb"]').eq(i).text().split(" — ")[1] || "Indisponível"
vp = $p('a[class="cz3goc BmP5tf"]').eq(i).attr('href') || "Indisponível"
up += `❑ Titulo: ${qp}\n❑ Descrição: ${pp}\n❑ Link: ${vp}\n\n`
}
reply(up)
} catch (err) {
return reply(config.msg.error.upload)
}
break

case config.comandos[10]:
if (!iQimage) return reply('Apenas imagem.')
reply(aguardar)
try {
ap = require('googlethis')
np = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
sp = await fileio(np)
await fs.unlinkSync(np)
bp = await ap.search(sp, { ris: true })
cp = ""
Object.keys(bp.results).forEach((x) => {
qp = bp.results[x].title || "Indisponível"
zp = bp.results[x].description || "Indisponível"
yp = bp.results[x].url || "Indisponível"
cp += `❑ Titulo: ${qp}\n❑ Descrição: ${zp}\n❑ Url: ${yp}\n\n`
})
reply(cp)
} catch (err) {
return reply(config.msg.error.upload)
}
break

case config.comandos[11]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
ap = require('googlethis')
bp = await ap.search(args.join(" "), { page: 0, safe: true })
cp = ""
Object.keys(bp.results).forEach((x) => {
cp += `❑ Titulo: ${bp.results[x].title}\n❑ Descrição: ${bp.results[x].description.replace("N/A", "Indisponível")}\n❑ Url: ${bp.results[x].url}\n\n`
})
conn.sendMessage(from, { text: cp }, { quoted: m })
break

case config.comandos[14]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
ap = await wikipedia(args.join(" "))
conn.sendMessage(from, { text: ap }, { quoted: m })
break

case config.comandos[12]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
ap = require('google-it')
bp = await ap({ 'query': args.join(" ") })
cp = ""
for (let i of bp) {
cp += `❑ Titulo: ${i.title}\n❑ Descrição: ${i.snippet}\n❑ Link: ${i.link}\n\n`
}
conn.sendMessage(from, { text: cp }, { quoted: m })
break

case config.comandos[15]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
akjt = require('googlethis')
bkjt = await akjt.image(args.join(" "), { page: 0, safe: true })
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < bkjt.length; i++) {
sections[0].rows.push({
title: bkjt[i].origin.title,
rowId: prefix + "imgx " + bkjt[i].url
})
}
conn.sendMessage(from, { text: bkjt.length + " Resultados", title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
break

case'imgx':
conn.sendMessage(from, { image: { url: args.join(" ") } }, { quoted: m })
break

case'igstalk':
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
ak = await superagent.get("https://www.instagram.com/" + args.join(" ") + "/?__a=1").set("user-agent", agent())
gk = ak._body
console.log(gk)
if (gk.graphql == undefined) return reply(config.msg.error.result)
bk = gk.graphql.user
ck = `Nome: ${bk.full_name}\nID: ${bk.id}\nSeguidores: ${bk.edge_followed_by.count}\nSeguindo: ${bk.edge_follow.count}\nPostagens: ${bk.edge_owner_to_timeline_media.count}\n\n${bk.biography}`
conn.sendMessage(from, { image: { url: bk.profile_pic_url_hd }, caption: ck, contextInfo: { externalAdReply: {
title: "Vizualizar @"+ bk.username,
body: "Perfil",
mediaType: 1,
thumbnail: await getBuffer(bk.profile_pic_url_hd),
sourceUrl: "https://instagram.com/" + bk.username
} } })
break

case config.comandos[16]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
gktr = require('g-i-s')
gktr(args.join(" "), logResults)
function logResults(error, results) {
if (error) {
reply(config.msg.error.err)
} else {
hktr = results[Math.floor(Math.random() * results.length)]
if (hktr.url.match(/webp/)) return reply(config.msg.error.err)
conn.sendMessage(from, { image: { url: hktr.url } }, { quoted: m })
}
}
break

case config.comandos[17]:
akkg = await pinterest(args.join(" "))
bkkg = akkg.result[Math.floor(Math.random() * akkg.result.length)]
conn.sendMessage(from, { image: { url: bkkg } }, { quoted: m })
break

case config.comandos[18]: {(async () => {
reply(aguardar)
var { data } = await http("https://brasilapi.com.br/api/ddd/v1/" + args[0], { method: "get", headers: { "user-agent": agent() } })
if (data.type == "ddd_error") return reply("DDD inexistente")
var a = 'Estado: ' + data.state + '\nDDD: ' + args.join(" ") + '\n\n'
for (let i = 0; i < data.cities.length; i++) {
a += data.cities[i] + "\n"
}
a += '\nTotal: ' + a.cities.length
conn.sendMessage(from, { text: a }, { quoted: m })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[19]: {(async () => {
reply(aguardar)
var { data } = await http("https://br.uptodown.com/android/search/" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.name').find('a').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.name').eq(i).find('a').text(),
rowId: prefix + "uptload " + $('div.name').eq(i).find('a').attr('href')
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? " aplicativos" : " aplicativo"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'uptload': {(async () => {
reply(config.msg.baixar)
var { data } = await http(args.join(" ") + "/download", { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
conn.sendMessage(from, { document: { url: $('a#detail-download-button').attr('href') }, mimetype: "application/apk", fileName: $('h1#detail-app-name').text().replace(/\n/i, "") + '.apk' })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[20]: {(async () => {
reply(aguardar)
var { data } = await http("https://mcpedl.org/?s=" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('h2.entry-title').find('a').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('h2.entry-title').find('a').eq(i).text(),
rowId: prefix + "minecraft " + $('h2.entry-title').find('a').eq(i).attr('href')
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? " Versões" : " versão"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[21]: {(async () => {
reply(aguardar)
var { data } = await http('https://ws75.aptoide.com/api/7/apps/search?query=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var a = data.datalist.list
var n = a.length; if (!n) return reply("Nenhum resultado encontrado.")
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: a[i].name,
rowId: prefix +  "aptdown " + a[i].file.path_alt + '|' + a[i].name
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? " aplicativos" : " aplicativo"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'aptdown': 
reply(config.msg.baixar)
conn.sendMessage(from, { document: { url: args.join(" ").split("|")[0] }, mimetype: "application/apk", fileName: args.join(" ").split("|")[1] + '.apk' })
break

case'minecraft': {(async () => {
reply(config.msg.baixar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('h1.entry-title').attr('content') + '.apk'
var { data } = await http("https://mcpedl.org/dw_file.php?id=" + $('div.entry-buttons-wrap').find('a').attr('href').replace('/getfile/', ""), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var b = $('a.btn').attr('href')
conn.sendMessage(from, { document: { url: b }, mimetype: "application/apk", fileName: a })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[22]: {(async () => {
reply(aguardar)
var { data } = await http("https://fvid.party/?url=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('section#results').find('a').attr('href') || undefined
var b = $('section#results').find('a').attr('download') || ''
if (!a) return reply(config.msg.error.download)
conn.sendMessage(from, { video: { url: a }, caption: b }, { quoted: m })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[23]: {(async () => {
reply(aguardar)
var { data } = await http("https://downloadgram.org/", {
method: "post",
data:  new URLSearchParams(Object.entries({ url: args.join(" "), submit: "" })),
headers: {
"accept": "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": agent()
}
})
var $ = cheerio.load(data)
var a = $('html').html().split('rel="noopener noreferrer" href="')[1].split('"')[0].replace(/;/g, "&")
if (!a) return reply(config.msg.error.download)
a.includes('.mp4?') ? conn.sendMessage(from, { video: { url: a } }, { quoted: m }) : conn.sendMessage(from, { image: { url: a } }, { quoted: m })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[24]:
av = await tiktokdownloader(args.join(" "))
if (av.result.nowatermark == undefined) return reply(config.msg.error.download)
conn.sendMessage(from, { video: { url: av.result.nowatermark } }, { quoted: m })
break

case config.comandos[25]:
reply('Demorar falhou.')
avn = await mediafire(args.join(" "))
console.log(avn)
break

case config.comandos[26]: {(async () => {
reply(aguardar)
var { data } = await http('https://animesonehd.xyz/?s=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.AnimesDesc').length; if (!n) return reply('Nenhum resultado.')
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.AnimesDesc').eq(i).text().split('–')[0].replace(/\n/g, ""),
rowId: prefix + "onehd " + $('article.AnimesItem').eq(i).find('a').attr('href')
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? ' resultados para está busca.' : ' resultado para está busca.'), title: args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'onehd': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('div#capaAnime').find('img').attr('src')
var b = $('b:contains("Episódios:")').parent().text().match(/Lançamento/g) ? $('b:contains("Dia de Lançamento:")').parent().text() : $('b:contains("Episódios:")').parent().text()
var p = $('div.epTitulo').text().split('–')[0].replace(/\n/g, "")
var c = p + '\n' + $('b:contains("Formato:")').parent().text().slice(9) + '\n' + $('b:contains("Gênero:")').parent().text().slice(8) + '\n' + $('b:contains("Estúdio:")').parent().text().slice(9) + '\n' + $('b:contains("Ano:")').parent().text().slice(5) + '\n' + $('b:contains("Autor:")').parent().text().slice(7) + '\n' + b + '\n\n' + $('div#sinopse2').text().slice(9)
conn.sendMessage(from, { image: { url: a }, caption: c, templateButtons: [ { urlButton: { displayText: p, url : args.join(" ") } } ] })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[167]: {(async () => {
reply(aguardar)
var { data } = await http('https://animesfalse.com/?s=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.title').length; if (!n) return reply('Nenhum resultado.')
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.title').eq(i).find('a').text(),
rowId: prefix + "anifase " + $('div.title').eq(i).find('a').attr('href')
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? ' resultados para está busca.' : ' resultado para está busca.'), title: args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'anifalse': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.bnt_gen').length
var u = assert($('div.bnt_gen').find('a'), "text", n, "", data, ", ")
var p = $('div.capa_poster').find('img').attr('src')
var a = 'Titulo: ' + $('h1').text() + '\nGênero: ' + u.slice(2) + '\n' + $(`div.info-nome:contains('Temporadas')`).parent().text().replace(" ", "").replace('as', 'as:') + '\n' + $(`div.info-nome:contains('Episódios')`).parent().text().replace(" ", "").replace(' Episódios', '').replace('os', 'os:') + '\n' + $(`div.info-nome:contains('Ano')`).parent().text().replace(" ", "").replace('no', 'no:') + '\n' + $(`div.info-nome:contains('Duração média')`).parent().text().replace(" ", "").replace('ia', 'ia:') + '\n\n' + $('div.sinopse').text()
conn.sendMessage(from, { image: { url: p }, caption: a, templateButtons: [ { urlButton: { displayText: $('h1').text(), url : args.join(" ") } } ] })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[28]: {(async () => {
reply(aguardar)
var { data } = await http("https://gofilmes.me/search.php?s=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('span.t-tit').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('span.t-tit').eq(i).text(),
rowId: prefix + "thexs " + $('div.poster').eq(i).find('a').attr('href')
})
}
var u = sections[0].rows = sections[0].rows.filter((array) => !array.rowId.match(/series/g))
var p = sections[0].rows.length; if (!p) return reply(config.msg.error.result)
conn.sendMessage(from, { text: " ", title: p + (p >= 2 ? " filmes" : " filme"), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case"thexs": {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.link').find('a').length >= 4 ? 3 : $('div.link').find('a').length
var templateButtons = []
for (let i = 0; i < n; i++) {
templateButtons.push({
urlButton: { displayText: $('div.link').find('a').eq(i).text(), url : $('div.link').find('a').eq(i).attr('href') }
})
}
var s = $('h2').text() + '\n' + $('div.col-2').find('a').eq(0).attr('title').split("Filmes de ")[1] + '\n' + $('strong:contains("Duração:")').parent().text().slice(9) + '\n' + $('strong:contains("Áudio:")').parent().text().slice(7) + '\n' + $('strong:contains("Direção:")').parent().text().slice(9) + '\n' + $('strong:contains("IMDb:")').eq(0).parent().text().slice(6) + '\n\n' + $('strong:contains("Sinopse:")').parent().text().slice(9)
var u = $('div.bg').find('img').attr('src')
console.log(s)
console.log(u)
conn.sendMessage(from, { image: { url: u }, caption: s, templateButtons })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[29]: {(async () => {
reply(aguardar)
var { data } = await http("https://filmeseries.top/search.php?s=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.poster').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.poster-nome').eq(i).text(),
rowId: prefix + "westx " + $('div.poster').eq(i).find('a').attr('href')
})
}
conn.sendMessage(from, { text: " ", title: n + (n >= 2 ? " filmes" : " filme"), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case"westx": {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.player').find('a').length >= 4 ? 3 : $('div.player').find('a').length
var templateButtons = []
for (let i = 0; i < n; i++) {
templateButtons.push({
urlButton: { displayText: $('div.player').find('a').eq(i).text(), url : $('div.player').find('a').eq(i).attr('href') }
})
}
var s = $('div.tt').text() + '\n' + $('div.info').eq(2).text() + '\n' + $('div.info').eq(1).text() + '\n' + $('div.info').eq(0).text() + '\n' + $('div.rate').text() + '\n\n' + $('span.sinopse').text().replace(/\n/g, '')
var u = $('div.capa').find('img').attr('src')
conn.sendMessage(from, { image: { url: u }, caption: s, templateButtons })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break
//pendente
case config.comandos[30]: {(async () => {
reply(aguardar)
var { data } = await http('https://nhentai.net.br/?s=' + encodeURIComponent(args.join(" ")), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('span.thumb-titulo').length
var sections = [{ title: config.bot, rows: [] }]
if (n == 0) return reply(config.msg.error.result)
for (let i = 0; i < n; i++) {
sections[0].rows.push({ title: $('span.thumb-titulo').eq(i).text().split(']')[1], rowId: prefix + "mash " + $('div.thumb-conteudo').eq(i).find('a').eq(1).attr('href') })
}
conn.sendMessage(from, { text: " ", title: n + " RESULTADOS", buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'mash': {(async () => {
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('ul.post-fotos').find('img').length
var s = $('ul.post-fotos').find('img').eq(0).attr('src')
var u = $('h1.post-titulo').find('span').text() + '\n' + n + ' Páginas\n' + $('strong:contains("Cor:")').parent().text().replace('Cor: ', '') + '\n' + assert($('strong:contains("Tags:")').parent().find('a'), 'text', $('strong:contains("Tags:")').parent().find('a').length, '', data, ', ').slice(2)
sendResponse({ url: s }, u, null, [{ index: 1, urlButton: { displayText: $('h1.post-titulo').find('span').text(), url: argx } }, { index: 2, quickReplyButton: { displayText: 'PDF', id: prefix + 'pdf ' + argx } }, { index: 3, quickReplyButton: { displayText: 'IMAGEM', id: prefix + 'westh ' + argx } }])
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'pdf': {(async () => {
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('ul.post-fotos').find('img').length; if (!n) return reply('Este hentai não pode ser baixado em pdf.')
var p = new jsPDF()
var b = $('h1.post-titulo').find('span').text() + '.pdf'
reply('Fazendo download... Aguarde, pôde demorar um pouco, ' + parseMs(5000 * n).minutes + ' minuto(s) e ' + parseMs(5000 * n).seconds + ' segundo(s)')
var { data } = await http($('ul.post-fotos').find('img').eq(0).attr('src'), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' })
var u = Buffer.from(data).toString('base64')
p.addImage(u, 'JPEG', 2.4, 7, 205, 285)
for (let i = 0; i < n; i++) {
await sleep(5000)
p.addPage()
var { data } = await http($('ul.post-fotos').find('img').eq(i).attr('src'), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' })
var u = Buffer.from(data).toString('base64')
p.addImage(u, 'JPEG', 2.4, 7, 205, 285)
}
p.save(b)
conn.sendMessage(from, { document: fs.readFileSync(b), mimetype: "application/pdf", fileName: b }).catch((err) => { notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...'); fs.unlinkSync(b) })
await fs.unlinkSync(b)
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'westh': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('ul.post-fotos').find('img').length
var u = assert($('ul.post-fotos').find('img'), 'alt', n, '#', data)
var s = assert($('ul.post-fotos').find('img'), 'src', n, '*', data)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({ title: u.split('#')[i].split('#')[0], rowId: prefix + 'westhx ' + s.split('*')[i].split('*')[0] })
}
conn.sendMessage(from, { text: n + ' Páginas\n' + $('strong:contains("Cor:")').parent().text().replace('Cor: ', '') + '\n' + assert($('strong:contains("Tags:")').parent().find('a'), 'text', $('strong:contains("Tags:")').parent().find('a').length, '', data, ', ').slice(2), title: $('h1.post-titulo').find('span').text(), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'westhx': {(async () => {
reply(aguardar)
conn.sendMessage(from, { image: { url: args.join(" ") } }, { quoted: m })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[13]: {(async () => {
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
var { data } = await http("https://www.xvideos.com/?k=" + args.join(" ").replace(/ /g, "+") + "&sort=random", { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('p.title').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('p.title').eq(i).find('a').attr('title'),
rowId: prefix + "xvdl " + "https://www.xvideos.com" + $('p.title').eq(i).find('a').attr('href')
})
}
conn.sendMessage(from, { text: n + (n >= 2 ? " videos" : " video"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'redtube': {(async () => {
var { data } = await http('https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=' + argx.replace(/ /g, "+") + '&thumbsize=big&max_duration=15', { method: "get", headers: { "user-agent": agent() } })
var n = data.videos.length
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: data.videos[i].video.title,
rowId: prefix + "redt " + data.videos[i].video.video_id
})
}
conn.sendMessage(from, { text: n + " Videos", title: "Resultados para: " + argx, buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'redt': {(async () => {
var { data } = await http('https://api.redtube.com/?data=redtube.Videos.getVideoById&video_id=' + argx + '&output=json&thumbsize=big', { method: "get", headers: { "user-agent": agent() } })
var u = data.video.title.slice(0, 50) + '...\n' + data.video.duration + ' min\n' + data.video.views + ' Views : ' + data.video.rating + ' 👍'
var b = data.video.url
var c = data.video.title
var d = data.video.thumbs[0].src
var { data } = await http(b, { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
if ($('title').text().match(/Verified/g)) return reply('Video não encontrado.')
var { data } = await http($('html').html().split('"format":"mp4","videoUrl":"')[1].split('"')[0].replace(/\\/g, ""), { method: "get", headers: { "user-agent": agent() } })
var s = []
var n = data.length >= 3 ? 3 : data.length
for (let i = 0; i < n; i++) {
if (data[i].quality !== '1080') {
s.push({ index: i + 2, quickReplyButton: { displayText: data[i].quality, id: prefix + "dlxnxx " + data[i].videoUrl + "|" + c } })
}
}
s.push({ index: 1, urlButton: { displayText: c, url: b } })
sendResponse({ url: d }, u, null, s)
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xvdl': {(async () => {
if (!argx.includes('xvideos')) return reply(config.msg.error.reject)
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('title').text().replace(" - XVIDEOS.COM", "")
var u = a.slice(0, 50) + '...\n' + $('div.video-metadata').find('ul').find('li').find('a').find('span.name').eq(0).text() + '\n' + $('h2.page-title').find('span.duration').text() + '\n' + $('div#v-views').find('strong').eq(0).text() + ' Views : ' + $('div.good').find('span').text() + ' 👍'
sendResponse({ url: $('html').html().split("html5player.setThumbUrl('")[1].split("');")[0] }, u, null, [{ index: 1, urlButton: { displayText: a, url: argx } }, { index: 2, quickReplyButton: { displayText: 'BAIXA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlLow('")[1].split("');")[0] + '|' + a } }, { index: 3, quickReplyButton: { displayText: 'MÉDIA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0] + '|' + a } }])
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xnxx': {(async () => {
reply(aguardar)
var { data } = await http("https://www.xnxx.com/search/hits/" + (argx.split("|")[1] == '10-20' ? "10-20 " : "0-10") + "min/" + argx.split("|")[0].replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('span.name').length
if (n == 0) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.thumb-under').eq(i).find('p > a').text(),
rowId: prefix + "xnxxdl " + "https://www.xnxx.com" + $('div.thumb-under').eq(i).find('p > a').attr('href')
})
}
conn.sendMessage(from, { text: n + " videos", title: "Resultados para: " + argx.split("|")[0], buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xnxxdl': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('div.clear-infobar').find('strong').text().slice(0, 50)
var u = a + '...\n' + $('div.clear-infobar').find('span.metadata').find('a.gold-plate').text() + '\n' + $('div.clear-infobar').find('span.metadata').text().split('-')[2].replace(/\n/g, "").trim() + ' Views : ' + $('div#video-votes').find('span.rating-box').text() + ' 👍'
sendResponse({ url: $('html').html().split("html5player.setThumbUrl('")[1].split("');")[0] }, u, null, [{ index: 1, urlButton: { displayText: a, url: argx } }, { index: 2, quickReplyButton: { displayText: 'BAIXA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlLow('")[1].split("');")[0] + '|' + a } }, { index: 3, quickReplyButton: { displayText: 'MÉDIA', id: prefix + 'dlxnxx ' + $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0] + '|' + a } }])
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'dlxnxx':
reply(config.msg.baixar)
conn.sendMessage(from, { document: { url: argx.split("|")[0] }, mimetype: "video/mp4", fileName: argx.split("|")[1] + ".mp4" })
break

case'evocar': {(async () => {
var { data } = await http("https://verpaugrande.com/?s=", { method: "get", headers: { "user-agent": agent() } })
console.log(data)
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

//Xvideos

//AnimeDownload

case'search': {(async () => {
reply(aguardar)
var { data } = await http("https://veranimesbr.com/?s=" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.aniItem').find('a').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.aniItem').find('a').eq(i).find('h2.aniTitulo').text(),
rowId: prefix + "xvx " + $('div.aniItem').find('a').eq(i).attr('href')
})
}
conn.sendMessage(from, { text: n + " animes", title: "Resultados para: " + args.join(" ") || "Home", buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xvx': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.epiRes').length
var sections = [{ title: config.bot, rows: [] }]
var s = $('h1').text().replace("Online - Ver Animes BR", "")
var u = $('b:contains("Estúdio:")').parent().text().slice(9) + '\n' + $('b:contains("Status:")').parent().text().slice(8) + '\n' + $('b:contains("Ano:")').parent().text().replace("Ano: ", "") + '\n\n' + $('div.animeSinopseContainer').find('p').text()
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.epiTipo').eq(i).text(),
rowId: prefix + "xvvx " + $('div.epiItem').find('a').eq(i).attr('href')
})
}
conn.sendMessage(from, { text: u, title: s, buttonText: s, sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xvvx': {(async () => {
reply(config.msg.baixar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('title').text().split('Assistir ')[1].split(' - Ver Animes BR')[0] + ".mp4"
var b = $('html').html().split('window.open("')[1].split('"')[0]
conn.sendMessage(from, { document: { url: b }, mimetype: "video/mp4", fileName: a })//catch((err) => sendResponse({ url: './src/404.mp4
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'animefan': {(async () => {
reply(aguardar)
var { data } = await http("https://animefan.cc/?s=" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('article.Animes_Ani').find('a').length; if (!n) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('article.Animes_Ani').find('a').eq(i).attr('title'),
rowId: prefix + "xfnx " + $('article.Animes_Ani').find('a').eq(i).attr('href')
})
}
conn.sendMessage(from, { text: n + " Resultados", title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xfnx': {(async () => {
reply(aguardar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div.paginacao').find('a.page-numbers').length
var a = []
var s = $('strong:contains("Gênero:")').parent().text().replace(/\n/g, "").slice(8) + "\n" + $('strong:contains("Estúdio:")').parent().text().replace(/\n/g, "").slice(9) + "\n" + $('strong:contains("Status:")').parent().text().replace(/\n/g, "").slice(8) + "\n\n" + $('strong:contains("Sinopse:")').parent().text().replace(/\n/g, "").slice(9)
var u = $('strong:contains("Nome:")').parent().text().replace(/\n/g, "").slice(6)
for (let i = 0; i < n; i++) {
a.push($('div.paginacao').find('a.page-numbers').eq(i).attr('href'))
}
var b = a.filter((i, l) => a.indexOf(i) == l)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < b.length; i++) {
var { data } = await http(b[i], { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var n = $('div#listaEpisodios').find('a').length
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div#listaEpisodios').find('a').eq(i).attr('title').split("Online")[0],
rowId: prefix + "xfsx " + $('div#listaEpisodios').find('a').eq(i).attr('href')
})
}
}
conn.sendMessage(from, { text: s, title: u, buttonText: u, sections })
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case'xfsx': {(async () => {
reply(config.msg.baixar)
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
var a = $('h1.boxtPlayer').text().replace(/\n/g, "") + '.mp4'
var b = $('div.video').find('video#my-video').find('source').attr('src')
conn.sendMessage(from, { document: { url: b }, mimetype: "video/mp4", fileName: a }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[27]:
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
try {
reply(aguardar)
noau = await axios.get("https://animefire.net/pesquisar/" + args.join(" ").replace(/ /g, "-"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
no$u = cheerio.load(noau.data)
noku = no$u('div.card-group').find('a').length
if (ku == 0) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < noku; x++) {
sections[0].rows.push({
title: no$u('h3.animeTitle').eq(x).text(),
rowId: prefix + "xax " + no$u('div.card-group').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, { text: noku + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections })
} catch (err) {
return reply(config.msg.error.result)
}
break

case'xax':
reply(aguardar)
try {
aufs = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ufs = cheerio.load(aufs.data)
kufs = $ufs('div.div_video_list').find('a').length
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < kufs; x++) {
sections[0].rows.push({
title: $ufs('div.div_video_list').find('a').eq(x).text(),
rowId: prefix + "xbx " + $ufs('div.div_video_list').find('a').eq(x).attr('href').replace("animes", "download")
})
}
conn.sendMessage(from, { text: `${$ufs(`b:contains("Status do Anime:")`).parent().text().replace(" ", "").replace(" ", "").replace("Status", "Status ")}\n${$ufs(`b:contains("Estúdios:")`).parent().text().replace(" ", "").replace(" ", "")}\n${$ufs(`b:contains("Ano:")`).parent().text().replace(" ", "").replace(" ", "").replace("Ano:", "Lançamento:")}\n\n${$ufs(`b:contains("Sinopse:")`).parent().text().replace(" Sinopse:  ", "")}`, title: $ufs('h1').text(), buttonText: "SELECIONAR", sections })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'xbx':
reply(aguardar)
try {
aotp = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$otp = cheerio.load(aotp.data)
kotp = $otp('html').html().match(/<a download=/g).length
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < kotp; x++) {
sections[0].rows.push({
title: $otp('div.d-flex').find('a').eq(x).text(),
rowId: prefix + "xcx " + $otp('div.d-flex').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, { text: kotp + " Disponíveis", title: "Escolha a qualidade de video.", buttonText: "SELECIONAR", sections })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'xcx':
reply(config.msg.baixar)
conn.sendMessage(from, { document: { url: args.join(" ") }, mimetype: "video/mp4", fileName: args.join(" ").split("[AnimeFire.net] ")[1] + '.mp4' }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[31]:
reply(aguardar)
auyl = await axios.get("https://www.muitohentai.com/buscar/" + args.join(" ").replace(/ /g, "+") + "/", {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$uyl = cheerio.load(auyl.data)
kuyl = $uyl('div.data').find('h3').find('a').length
if (kuyl == 0) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < kuyl; x++) {
sections[0].rows.push({
title: $uyl('div.data').find('h3').find('a').eq(x).text(),
rowId: prefix + "lxl " + "https://www.muitohentai.com" + $uyl('div.data').find('h3').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, { text: kuyl + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections })
break

case'lxl':
reply(aguardar)
aupf = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$upf = cheerio.load(aupf.data)
kupf = $upf('div.items').find('div.data').length
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < kupf; x++) {
sections[0].rows.push({
title: $upf('div.items').find('div.poster').find('span.c').eq(x).text(),
rowId: prefix + "lxlxl " + "https://www.muitohentai.com" + $upf('div.items').find('div.poster').find('a').eq(x).attr('href').replace("episodios", "baixar-hentai")
})
}
conn.sendMessage(from, { text: `Lançamento: ${$upf('div.extra').find('span.date').text()}\n\n${$upf('div.wp-content').find('p').text()}`, title: $upf('div.data').find('h1').text(), buttonText: "SELECIONAR", sections })
break

case'lxlxl':
reply("Fazendo download... Aguarde. Pôde demorar bastante! 15 minutos.")
auqi = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$uqi = cheerio.load(auqi.data)
xuqi = $uqi('div.module').find('a').eq(0).attr('href')
xnqi = $uqi('div.module').find('a').eq(1).attr('href')
console.log(xuqi)
console.log(xnqi)
yuqi = $uqi('h1.epih1').text() + '.mp4'
conn.sendMessage(from, { document: { url: xuqi }, mimetype: "video/mp4", fileName: yuqi }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

//pendente

case'hentait':
reply("Aguarde...")
a = await axios.get("https://www.hentaistube.com/buscar/?s=" + args.join(" ").replace(/ /g, "+"))
$ = cheerio.load(a.data)
k = $('div.epiItem').length
var sections = [{ title: config.bot, rows: [] }]
s = 0
for (let x = 0; x < k; x++) {
if ($('div.epiItem').find('a').eq(x).attr('href').match(/-episodios/g)) {
s++
sections[0].rows.push({
title: $('div.epiItem').find('a').eq(x).find('div.epiItemNome').text().replace("- Episódios", ""),
rowId: "$vxv " + $('div.epiItem').find('a').eq(x).attr('href'),
description: " "
})
}
}
n = ""
if (s !== 1) {
n = " hentais"
} else {
n = " hentai"
}
conn.sendMessage(from, {
text: s + n,
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'vxv':
reply("Aguarde...")
traa = await axios.get(args.join(" "))
tra$ = cheerio.load(traa.data)
trak = tra$('div.pagAniLista').find('li').length
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < trak; x++) {
sections[0].rows.push({
title: tra$('div.pagAniLista').find('li').eq(x).find('a').text(),
rowId: prefix + "vxxv " + tra$('div.pagAniLista').find('li').eq(x).find('a').attr('href')
})
}
conn.sendMessage(from, { text: `${tra$(`b:contains("Tipo de Episódio")`).parent().text()}\n${tra$(`b:contains("Censura")`).parent().text()}\n${tra$(`b:contains("Publicado")`).parent().text()}\n${tra$(`b:contains("Tags e Gêneros")`).parent().text()}\n\n${tra$('div#sinopse2').text()}`, title: tra$(`b:contains("Hentai")`).parent().text(), buttonText: "SELECIONAR", sections })
break

case'vxxv':
reply("Fazendo download... Aguarde.")
pisa = await axios.get(args.join(" "))
pis$ = cheerio.load(pisa.data)
piss = pis$('title').text().split("Assistir ")[1].split(' legendado')[0].replace("Episódio", "Ep") + ".mp4"
pisk = pis$('div.panel').find('video').attr('src')
conn.sendMessage(from, { document: { url: pisk }, mimetype: "video/mp4", fileName: piss })
break

//AnimeDownload

//BannerCommands

//TextoUnico

case config.comandos[32]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
aars = require("mintake")
bars = ["984dd03e-220d-4335-a6ba-7ac56b092240", "71074346-5cb3-4b7d-9b8b-a84e4f142ba4", "88bacc38-e755-450a-bbc1-f5671d77c8a7"]
cars = bars[Math.floor(Math.random() * bars.length)]
dars = await aars.ephoto4("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [args.join(" ")], cars)
ears = "https://s1.ephoto360.com" + dars.image
conn.sendMessage(from, { image: { url: ears }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[34]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
ttaf = require("mintake")
ttbf = ["df2d7c1e-7319-4157-a02c-0c7f71f41cc3", "868cf218-c4c9-432a-b737-8d43ecdc580c", "c542dab0-ea54-44a5-9976-c6af66f71d9c", "7cdb6c7b-1c37-41c6-b50d-500c6111833d", "a60760ea-f266-4064-bde0-8d02f174254d", "a5cbd215-ac33-46e2-97e5-5bd6e1c800b3", "6ac134d1-f593-499d-8641-e7ce45af680e", "c82cbc01-e167-47bb-8714-02b073c3738d"]
ttcf = ttbf[Math.floor(Math.random() * ttbf.length)]
ttdf = await ttaf.ephoto4("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [args.join(" ")], ttcf)
ttef = "https://s1.ephoto360.com" + ttdf.image
conn.sendMessage(from, { image: { url: ttef }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[35]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
arjj = require("mintake")
brjj = ["9424ca60-11e4-4904-86b9-10ecf2442f5c", "eafc98ed-6ba6-4a30-88e1-e73b059eeca1", "a2983d77-ca9d-4d95-b5fe-06c65f59f8cd", "a381c3b1-7505-4299-9d8a-a6c92f6ef228"]
crjj = brjj[Math.floor(Math.random() * brjj.length)]
drjj = await arjj.ephoto4("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [args.join(" ")], crjj)
erjj = "https://s1.ephoto360.com" + drjj.image
conn.sendMessage(from, { image: { url: erjj }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[33]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
rrat = require("mintake")
rrbt = ["1508810c-a33b-4261-ad04-48dea8932865", "a04d53f2-1449-4491-9f96-041e7ea7c47d", "42d73af1-9c38-43b5-abdb-de0bb435dfbe", "3a75b5da-ec04-4216-8c4e-c900359cfd0d", "200c1bb0-cb27-4838-80c8-d140867c1739", "26fd6ea7-92b5-4747-9de5-c537289e2318", "cd5465d9-9c5e-4d08-9f1b-3b9f3a45a858"]
rrct = rrbt[Math.floor(Math.random() * rrbt.length)]
rrdt = await rrat.ephoto4("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [args.join(" ")], rrct)
rret = "https://s1.ephoto360.com" + rrdt.image
conn.sendMessage(from, { image: { url: rret }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[36]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
uial = require("mintake")
uibl = ["4a479eb7-49a4-4246-a940-21e04deaa034", "09bc04ad-8ffb-4ba0-8785-fef9e8b3e9f7", "2206787c-e5df-4dd1-a764-2a92efa5d874", "fcfd610d-9d82-43cb-81e6-edce7ff9f748", "0ab2892e-876f-472c-9527-84c92775d5dd", "ce67e7f4-f686-470a-bd82-4f6b5d00e3b0", "a755d11c-24d3-4d96-850e-1fd7422e7ca4", "1acee5af-85c5-4d95-b094-d3de3c015e58", "1cde3da2-d4c5-4e62-977d-4fcfe11227f9", "8bea6f94-2410-4041-91f7-510a2406cee3", "5d3ab9be-f632-478e-97f1-06909af65f89", "d2e568d6-fbc9-4551-afdc-325dc386a892", "126b33de-e5e4-4b56-90ab-0bc9d6c89eee", "3f8db561-d7ea-4695-91a6-ca7f480330fb", "6fceb9a9-ad87-43b0-8ada-40b305ee6491", "cd28234a-77e4-48df-8b97-881e8d017e55", "e1ca407e-cfe3-43a9-a59c-56bc7f4d9055", "7d42e33c-6b8b-4ce7-bc77-0f708d187deb", "6407f152-1529-45e5-9ff1-afff870e84de", "7f044e87-0a33-4e01-b131-c9a1eebf2531", "5b5411eb-369f-49d1-bb7c-7325f15cdf40", "a837624c-2d78-4be9-a019-1f86eaa7e0f3", "96bbc10f-6cec-4193-ad18-af7d692837b0"]
uicl = uibl[Math.floor(Math.random() * uibl.length)]
uidl = await uial.ephoto4("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [args.join(" ")], uicl)
uiel = "https://s1.ephoto360.com" + uidl.image
conn.sendMessage(from, { image: { url: uiel }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[37]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
pvaw = require("mintake")
pvbw = ["87f0f8f1-fa23-4417-8a94-ba6c0b371635", "ced7cbe7-f8e5-4db1-b1cd-cb13d1dd1d52", "f42255ff-a569-41a0-8f33-acc269a52921", "8a37f145-b22f-4054-9eb4-113d84129a08", "a37c9d01-8c15-422e-ab02-b7cea4556745", "b79db6e6-4230-4f90-abab-388de6800f83", "2738bb7d-95dd-49e6-b7fd-43e90f1d77b2", "4feaddcf-8623-4a68-bb6d-e70ab0081642", "98aff386-d5ea-470f-aa88-032b1257ed61", "478263bb-3913-4dce-b827-cc09ce4c0b5e", "5c650d06-328d-486e-8f4a-311eb5942001", "d80b45dd-c23d-4e76-af69-a24e59ad73bc", "594b82d8-fed4-43a3-8b39-b8359d1bdb18", "df4302f5-e7ff-4cba-a3ed-2559d6d4cf6a"]
pvcw = pvbw[Math.floor(Math.random() * pvbw.length)]
pvdw = await pvaw.ephoto4("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [args.join(" ")], pvcw)
pvew = "https://s1.ephoto360.com" + pvdw.image
conn.sendMessage(from, { image: { url: pvew }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[38]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
ampv = require("mintake")
bmpv = ["r4o5wsey1", "d8f5f0x19", "vlqxqbknu", "df9c5iu0o", "g2cnx1qud", "8rewm9ker", "orlnd1jpd", "494bu708o", "83hscot72", "uz62srd8q", "u0jzc2s0m", "n44ofsn5a", "6jnveqwxq", "t79vujrpa", "rc3mgmhml", "0g71vg2s8", "4bltauy76", "rxplur13r", "dx729wun2"]
cmpv = bmpv[Math.floor(Math.random() * bmpv.length)]
dmpv = await ampv.ephoto4("https://en.ephoto360.com/make-team-logo-online-free-432.html", [args.join(" ")], cmpv)
empv = "https://s1.ephoto360.com" + dmpv.image
conn.sendMessage(from, { image: { url: empv }, contextInfo: { isForwarded: true } }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[39]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[41]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[42]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[43]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[44]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[45]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/break-wall-text-effect-871.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[46]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[47]:
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
kkua = require("mintake")
await kkua.textpro("https://textpro.me/create-logo-joker-online-934.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

//TextoUnico

//TextoDuplo

case config.comandos[48]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[49]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[40]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[50]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

case config.comandos[51]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
break

case config.comandos[52]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
reply(aguardar)
akku = require("mintake")
await akku.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...') )
break

//TextoDuplo

//BannerCommands

//StickersCommand

case config.comandos[53]:
try {
if (iImage || iQimage) {
reply(aguardar)
aqps = await downloadMediaMessage('image', m)
kcpe = await writeExifImg512(aqps, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: kcpe } }, { quoted: m })
await fs.unlinkSync(kcpe)
}
if (iVideo || iQvideo) {
reply(aguardar)
apke = await downloadMediaMessage('video', m)
apku = await writeExifVid512(apke, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: apku } }, { quoted: m })
await fs.unlinkSync(apku)
}
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[54]:
try {
if (iImage || iQimage) {
reply(aguardar)
akup = await downloadMediaMessage('image', m)
ckas = await writeExifImg200(akup, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: ckas } }, { quoted: m })
await fs.unlinkSync(ckas)
}
if (iVideo || iQvideo) {
reply(aguardar)
nons = await downloadMediaMessage('video', m)
nonx = await writeExifVid200(nons, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: nonx } }, { quoted: m })
await fs.unlinkSync(nonx)
}
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[55]:
try {
if (iImage || iQimage) {
reply(aguardar)
ghkp = getRandom('.webp')
hkgp = await downloadAndSaveMediaMessage("image", getRandom('.png'), m)
exec(`ffmpeg -i ${hkgp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${ghkp}`, async (err) => {
pghk = await writeExif(ghkp, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: pghk } }, { quoted: m })
await fs.unlinkSync(ghkp)
await fs.unlinkSync(hkgp)
await fs.unlinkSync(pghk)
})
}
if (iVideo || iQvideo) {
reply(aguardar)
qyhu = getRandom('.webp')
yyvn = await downloadAndSaveMediaMessage("video", getRandom('.mp4'), m)
exec(`ffmpeg -i ${yyvn} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${qyhu}`, async (err) => {
cyvp = await writeExif(qyhu, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: cyvp } }, { quoted: m })
await fs.unlinkSync(qyhu)
await fs.unlinkSync(yyvn)
await fs.unlinkSync(cyvp)
})
}
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[56]:
if (!iQsticker) return reply('Apenas sticker.')
try {
reply(aguardar)
avok = await downloadAndSaveMediaMessage('sticker', getRandom('.webp'), m)
cvpu = await writeExif(avok, { packname: args.join(" ").split('|')[0] ? args.join(" ").split('|')[0] : groupName, author: args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : pushName })
await conn.sendMessage(from, { sticker: { url: cvpu } }, { quoted: m })
await fs.unlinkSync(avok)
await fs.unlinkSync(cvpu)
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[57]:
if (argx == "" || argx.length > 20) return reply(config.msg.error.reject)
try {
reply(aguardar)
axuy = await axios.get("https://tenor.com/search/" + args.join(" ").replace(/ /g, "-") + "-gifs", {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" 
} })
$xuy = cheerio.load(axuy.data)
bxuy = $xuy('html').html().match(/GifFavButton/g).length
if (bxuy == 0) return reply(config.msg.error.result)
var sections = [{ title: config.bot, rows: [] }]
for (let i = 0; i < bxuy; i++) {
sections[0].rows.push({
title: $xuy('div.Gif').eq(i).find('img').attr('src').split("/")[4].split(".gif")[0].replace(/-/g, " "),
rowId: prefix + "twestr " + $xuy('div.Gif').eq(i).find('img').attr('src')
})
}
conn.sendMessage(from, { text: "Total: " + bxuy, title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
} catch (err) {
return reply(config.msg.error.api)
}
break

case'twestr':
reply(aguardar)
ivoq = getRandom('.gif')
iasx = getRandom('.webp')
exec(`wget ${args.join(" ")} -O ${ivoq} && ffmpeg -i ${ivoq} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${iasx}`, async (err) => {
if (err) return reply(config.msg.error.api)
uics = await writeExif(iasx, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: uics } }, { quoted: m })
await fs.unlinkSync(ivoq)
await fs.unlinkSync(iasx)
await fs.unlinkSync(uics)
})
break

case config.comandos[58]:
if (argx == "" || argx.length > 2) return reply(config.msg.error.reject)
reply(config.msg.sticker)
try {
const { EmojiAPI } = require("emoji-api")
pcce = new EmojiAPI()
pcce.get(args.join(" ")).then((exbu) => {
uxbu = getRandom('.png')
gxbu = getRandom('.webp')
exec(`wget ${exbu.images[0].url} -O ${uxbu} && ffmpeg -i ${uxbu} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${gxbu}`, async (err) => {
nxbu = await writeExif(gxbu, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: nxbu } }, { quoted: m })
await fs.unlinkSync(uxbu)
await fs.unlinkSync(gxbu)
await fs.unlinkSync(nxbu)
})
})
} catch (err) {
return reply(config.msg.error.api)
}
break

case config.comandos[59]:
if (argx == "") return reply(config.msg.error.reject)
reply(aguardar)
try {
axus = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(argx.split("+")[0])}_${encodeURIComponent(argx.split("+")[1])}`)
yxpu = getRandom('.png')
cxhs = getRandom('.webp')
exec(`wget ${axus.data.results[0].url} -O ${yxpu} && ffmpeg -i ${yxpu} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${cxhs}`, async (err) => {
dxke = await writeExif(cxhs, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: dxke } }, { quoted: m })
await fs.unlinkSync(yxpu)
await fs.unlinkSync(cxhs)
await fs.unlinkSync(dxke)
})
} catch (err) {
return reply(config.msg.error.api)
}
break

case config.comandos[60]:
if (argx == "" || argx.length > 30) return reply(config.msg.error.reject)
reply(aguardar)
try {
pwmn = getRandom('.webp')
swmn = await axios.get("https://api.xteam.xyz/attp?file&text=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" 
},
responseType: 'arraybuffer'
})
fs.writeFileSync(pwmn, swmn.data)
dwmn = await writeExif(pwmn, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: dwmn } }, { quoted: null })
await fs.unlinkSync(pwmn)
await fs.unlinkSync(dwmn)
} catch (err) {
return reply(config.msg.error.api)
}
break

case config.comandos[61]:
reply(aguardar)
fxzs = await axios.get("https://www.maiscelular.com.br/fichas-tecnicas/?q=" + args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36",
}
})
f$sz = cheerio.load(fxzs.data)
fknp = f$sz('div.itemp').find('a').length
if (fknp == 0) return reply("Nenhum resultado encontrado.")
var sections = [{ title: config.bot, rows: [] }]
for (let x = 0; x < fknp; x++) {
sections[0].rows.push({
title: f$sz('div.itemp').find('a').eq(x).find('strong').text(),
rowId: prefix + "ficha https://www.maiscelular.com.br" + f$sz('div.itemp').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, { text: fknp + " Resultados", title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
break

case'ficha':
reply(aguardar)
xzsf = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36",
}
})
$szf = cheerio.load(xzsf.data)
ckuf = $szf('div.compvs_disp').find('a#hlkCapaPreco').find('img').attr('alt') || 'Sem informação:'
ksgf = $szf('div.compvs_disp').find('a#hlkCapaPreco').find('span.preco').text() || ' $ 0000'
cvzf = `${$szf('div.compvs_disp').find('a').find('img').attr('alt')}: ${ckuf} ${ksgf}\n${$szf(`td:contains('CPU')`).parent().text().replace('CPU', 'CPU: ')}\n${$szf(`td:contains('Data lançamento')`).parent().text().replace('Data lançamento', 'Data lançamento: ')}\n${$szf(`td:contains('Versão do sistema')`).parent().text().replace('Versão do sistema', 'Versão do sistema: ')}\n${$szf(`td:contains('Atualização firmware')`).parent().text().replace('Atualização firmware', 'Atualização firmware: ')}\n${$szf(`td:contains('Memória RAM')`).parent().text().replace('Memória RAM', 'Memória RAM: ')}\n${$szf(`td:contains('Memória interna')`).parent().text().replace('Memória interna', 'Memória interna: ')}\n${$szf(`td:contains('Tipo da tela')`).parent().text().replace('Tipo da tela', 'Tipo da tela: ')}\n${$szf(`td:contains('Resolução')`).parent().eq(0).text().replace('Resolução', 'Resolução: ')}\n${$szf(`td:contains('Touchscreen')`).parent().text().replace('Touchscreen', 'Touchscreen: ')}\n${$szf(`td:contains('Capacidade bateria')`).parent().text().replace('Capacidade bateria', 'Capacidade bateria: ')}\n${$szf(`td:contains('Resolução câmera principal')`).parent().text().replace('Resolução câmera principal', 'Resolução câmera principal: ')}\n${$szf(`td:contains('Resolução câmera frontal')`).parent().text().replace('Resolução câmera frontal', 'Resolução câmera frontal: ')}\n${$szf(`td:contains('Tamanho')`).parent().eq(0).text().replace('Tamanho', 'Tamanho: ')}\n${$szf(`td:contains('Resistência à água e outros')`).parent().text().replace('Resistência à água e outros', 'Resistência à água e outros: ')}\n\n${$szf('div[itemprop="description"]').find('p').text()}`
conn.sendMessage(from, { image: { url: $szf('div.compvs_disp').find('a').find('img').attr('src') }, caption: cvzf }, { quoted: m }).catch((err) => notFound(conn, from, m, { quoted: m }, cvzf) )
break

case"addf":
if (!iQsticker) return reply("Apenas figurinhas.")
caua = argx ? argx : hex(5)
if (verify(caua, database.sticker)) {
reply("Já existe uma figurinha com este mesmo nome. Tente outro...")
} else {
reply("Figurinha adicionada... você pode ver a lista de figurinhas usando: " + prefix + 'listf')
database.sticker.push(caua)
await downloadAndSaveMediaMessage('sticker', './src/stickers/' + caua + '.webp', m)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'listf':
lpos  = "Lista de figurinhas:\n\n"
for (let i of database.sticker) {
lpos+= i + '\n'
}
lpos+= '\nTotal: ' + database.sticker.length + '\nVocê pode pegar uma figurinha com o comando: ' + prefix + 'getf "figurinha"'
conn.sendMessage(from, { text: lpos }, { quoted: verificado(config.quoted) })
break

case'getf':
if (verify(argx, database.sticker)) {
conn.sendMessage(from, { sticker: fs.readFileSync('./src/stickers/' + argx + '.webp') }, { quoted: m })
} else {
laos  = "Figurinha não encontrada... disponíveis:\n\n"
for (let i of database.sticker) {
laos+= i + '\n'
}
laos+= '\nTotal: ' + database.sticker.length
conn.sendMessage(from, { text: laos }, { quoted: verificado(config.quoted) })
}
break

case config.comandos[62]: case config.comandos[64]:
if (isQuotedMsg && quotedMsg.stickerMessage.isAnimated == false) {
reply(aguardar)
qxpi = getRandom(".jpeg")
gxei = await downloadAndSaveMediaMessage("sticker", getRandom('.webp'), m)
exec(`ffmpeg -i ${gxei} ${qxpi}`, async (err) => {
if (err) return reply(config.msg.error.err)
conn.sendMessage(from, { image: fs.readFileSync(qxpi) }, { quoted: m })
await fs.unlinkSync(gxei)
await fs.unlinkSync(qxpi)
})
} else if (quotedMsg.stickerMessage.isAnimated == true) {
try {
reply(aguardar)
ppxs = await downloadAndSaveMediaMessage("sticker", getRandom('.webp'), m)
qxps = await webp2gifFile(ppxs)
conn.sendMessage(from, { video: { url: qxps }, gifPlayback: true, gifAttribution: 2 }, { quoted: m })
await fs.unlinkSync(ppxs)
} catch (err) {
return reply(config.msg.error.api)
}
}
break

//StickersCommand

//EditCommand

case config.comandos[65]:
if (!iQimage || !iImage) return reply('Apenas imagem.')
reply(aguardar)
hvqo = await downloadMediaMessage("image", m)
await recognize(hvqo, { lang: "eng+pt", oem: 1, psm: 3 })
.then((nvqo) => conn.sendMessage(from, { text: nvqo.trim() }, { quoted: m }) ).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro...') )
break

case config.comandos[66]:
if (!iQvideo || !iVideo) return
reply(aguardar)
qupx = getRandom(".mp4")
gupx = await downloadAndSaveMediaMessage("video", getRandom(".mp4"), m)
exec(`ffmpeg -i ${gupx} -vf reverse -af areverse ${qupx}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(gupx) }
conn.sendMessage(from, { video: fs.readFileSync(qupx), mimetype: 'video/mp4' }, { quoted: m })
await fs.unlinkSync(gupx)
await fs.unlinkSync(qupx)
})
break   

case config.comandos[70]:
if (!iQvideo || !iVideo) return
reply(aguardar)
bsqx = getRandom(".mp4")
bsgx = await downloadAndSaveMediaMessage("video", getRandom(".mp4"), m)
exec(`ffmpeg -i ${bsgx} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${bsqx}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(bsgx) }
conn.sendMessage(from, { video: fs.readFileSync(bsqx), mimetype: 'video/mp4' }, { quoted: m })
await fs.unlinkSync(bsgx)
await fs.unlinkSync(bsqx)
})
break

case config.comandos[69]:
if (!iQvideo || !iVideo) return
reply(aguardar)
qxbs = getRandom(".mp4")
gxbs = await downloadAndSaveMediaMessage("video", getRandom(".mp4"), m)
exec(`ffmpeg -i ${gxbs} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${qxbs}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(gxbs) }
conn.sendMessage(from, { video: fs.readFileSync(qxbs), mimetype: 'video/mp4' }, { quoted: m })
await fs.unlinkSync(gxbs)
await fs.unlinkSync(qxbs)
})
break   

case config.comandos[71]:
if (!iQaudio) return
reply(aguardar)
qtls = getRandom('.mp3')
gtls = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${gtls} -filter:a "atempo=0.7,asetrate=70100" ${qtls}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(gtls) }
conn.sendMessage(from, { audio: fs.readFileSync(qtls), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(gtls)
await fs.unlinkSync(qtls)
})
break

case config.comandos[68]:
if (!iQaudio) return
reply(aguardar)
piqt = getRandom('.mp3')
pigt = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${pigt} -filter:a "atempo=0.5,asetrate=44100" ${piqt}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(pigt) }
conn.sendMessage(from, { audio: fs.readFileSync(piqt), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(pigt)
await fs.unlinkSync(piqt)
})
break

case config.comandos[72]:
if (!iQaudio) return
reply(aguardar)
hxql = getRandom('.mp3')
hxgl = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${hxgl} -af equalizer=f=30:width_type=o:width=2:g=50 ${hxql}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(hxgl) }
conn.sendMessage(from, { audio: fs.readFileSync(hxql), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(hxgl)
await fs.unlinkSync(hxql)
})
break

case config.comandos[73]:
if (!iQaudio) return
reply(aguardar)
qlrs = getRandom('.mp3')
glrs = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${glrs} -filter:a "atempo=0.9,asetrate=95100" ${qlrs}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(glrs) }
conn.sendMessage(from, { audio: fs.readFileSync(qlrs), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(glrs)
await fs.unlinkSync(qlrs)
})
break

case config.comandos[63]:
if (!iQvideo || !iVideo) return
reply(aguardar)
qipo = getRandom('.mp3')
gipo = await downloadAndSaveMediaMessage("video", getRandom('.mp3'), m)
exec(`ffmpeg -i ${gipo} ${qipo}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(gipo) }
conn.sendMessage(from, { audio: fs.readFileSync(qipo), mimetype: 'audio/mpeg' }, { quoted: m })
await fs.unlinkSync(gipo)
await fs.unlinkSync(qipo)
})
break

case config.comandos[67]:
if (!iQaudio) return reply('Apenas audio.')
reply(aguardar)
qiin = getRandom('.mp3')
giin = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${giin} -filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75" ${qiin}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(giin) }
conn.sendMessage(from, { audio: fs.readFileSync(qiin), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(giin)
await fs.unlinkSync(qiin)
})
break

case config.comandos[74]:
if (!iQaudio) return
reply(aguardar)
inqx = getRandom('.mp3')
ingx = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${ingx} -filter_complex "areverse" ${inqx}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(ingx) }
conn.sendMessage(from, { audio: fs.readFileSync(inqx), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(ingx)
await fs.unlinkSync(inqx)
})
break

case config.comandos[75]:
if (!iQaudio) return
reply(aguardar)
qaux = getRandom('.mp3')
gaux = await downloadAndSaveMediaMessage('audio', getRandom('.mp3'), m)
exec(`ffmpeg -i ${gaux} -af volume=12 ${qaux}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(gaux) }
conn.sendMessage(from, { audio: fs.readFileSync(qaux), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(gaux)
await fs.unlinkSync(qaux)
})
break

case config.comandos[76]:
if (argx == "") return reply(config.msg.error.reject)
pcaj = require('./lib/gtts')(args[0])
pcbj = args.join(" ").slice(3)
pccj = getRandom('.mp3')
pcdj = getRandom('.mp3')
pcaj.save(pccj, pcbj, function () {
exec(`ffmpeg -i ${pccj} -filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75" ${pcdj}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(pccj) }
conn.sendMessage(from, { audio: fs.readFileSync(pcdj), mimetype: 'audio/mpeg' }, { quoted: m })
await fs.unlinkSync(pccj)
await fs.unlinkSync(pcdj)
})
})
break

case config.comandos[77]:
if (argx == "") return reply(config.msg.error.reject)
axsi = require('./lib/gtts')(args[0])
bxsi = args.join(" ").slice(3)
cxsi = getRandom('.mp3')
axsi.save(cxsi, bxsi, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('./src/error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(cxsi) }
conn.sendMessage(from, { audio: fs.readFileSync(cxsi), mimetype: 'audio/mpeg' }, { quoted: m })
await fs.unlinkSync(cxsi)
})
break

//EditCommand

case config.comandos[78]:
//dono
break

case config.comandos[79]: case config.comandos[80]:
vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Carlos</xyz>\n' 
+ 'ORG:Bot developer WA;\n'
+ 'TEL;type=CELL;type=VOICE;waid=559984620740:+55 99 8462-0740\n'
+ 'X-WA-BIZ-NAME:Carlos</xyz>\n'
+ 'X-WA-BIZ-DESCRIPTION:Dono e criador do bot.\n'
+ 'END:VCARD'
conn.sendMessage(from, { contacts: { displayName: 'Carlos</xyz>', contacts: [{ vcard }] } })
break

case config.comandos[81]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (metadata.announce) {
conn.sendMessage(from, { text: "Abrir?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Fechar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
conn.groupSettingUpdate(from, 'not_announcement')
}
if (args[0] == 0) {
conn.groupSettingUpdate(from, 'announcement')
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[82]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (metadata.ephemeralDuration == undefined || 0) {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
conn.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
}
if (args[0] == 0) {
conn.sendMessage(from, { disappearingMessagesInChat: false })
}
} else {
reply(config.msg.negar)
}
break

//FunctionsAtivação

case config.comandos[83]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.wellcome)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.wellcome)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.wellcome.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.wellcome)) {
database.wellcome.splice(verify(from, database.wellcome), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[88]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.wellcomeText)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.wellcomeText)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.wellcomeText.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.wellcomeText)) {
database.wellcomeText.splice(verify(from, database.wellcomeText), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[84]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antifake)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antifake)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antifake.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antifake)) {
database.antifake.splice(verify(from, database.antifake), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[89]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.leveling)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.leveling)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.leveling.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.leveling)) {
database.leveling.splice(verify(from, database.leveling), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[85]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antilinkN)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antilinkN)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antilinkN.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antilinkN)) {
database.antilinkN.splice(verify(from, database.antilinkN), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[86]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antilinkH)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antilinkH)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antilinkH.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antilinkH)) {
database.antilinkH.splice(verify(from, database.antilinkH), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[90]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.simi)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.simi)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.simi.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.simi)) {
database.simi.splice(verify(from, database.simi), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[91]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.x9)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.x9)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.x9.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.x9)) {
database.x9.splice(verify(from, database.x9), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[92]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.badword)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.badword)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.badword.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.badword)) {
database.badword.splice(verify(from, database.badword), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[87]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.nsfw)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.nsfw)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.nsfw.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.nsfw)) {
database.nsfw.splice(verify(from, database.nsfw), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[93]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.autologin)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.autologin)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.autologin.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.autologin)) {
database.autologin.splice(verify(from, database.autologin), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[94]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.usedNewCommand)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.usedNewCommand)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.usedNewCommand.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.usedNewCommand)) {
database.usedNewCommand.splice(verify(from, database.usedNewCommand), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

//FunctionsAtivação

//GetLevelAndCommands

case config.comandos[95]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) return reply("Checar todos? -all. Determinado número? número de mensagens após o comando.")
if (args[0].match("-all")) {
vse = check(from, database.level)
if (vse) {
database.level[vse].data.sort((a, b) => (a.message < b.message) ? 1 : -1)
xse = ""
yse = []
zse = 0
nse = database.level[vse].data.length
for (let i = 0; i < nse; i++) {
zse++
xse += `${zse}
❑ Usuário: @${database.level[vse].data[i].user.split('@')[0]}
❑ Mensagens: ${database.level[vse].data[i].message}
❑ Comandos dados: ${database.level[vse].data[i].command}\n\n`
yse.push(database.level[vse].data[i].user)
}
conn.sendMessage(from, { text: xse, contextInfo: { mentionedJid: yse } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
} else {
vsn = check(from, database.level)
usn = args[0]
if (vsn) {
database.level[vsn].data.sort((a, b) => (a.message < b.message) ? 1 : -1)
xsn = "Membros com " + usn + " Mensagens ou menos:\n\n"
ysn = []
zsn = 0
nsn = database.level[vsn].data.length
for (let i = 0; i < nsn; i++) {
if (database.level[vsn].data[i].message <= usn) {
zsn++
xsn += `${zsn}
❑ Usuário: @${database.level[vsn].data[i].user.split('@')[0]}
❑ Mensagens: ${database.level[vsn].data[i].message}
❑ Comandos dados: ${database.level[vsn].data[i].command}\n\n`
ysn.push(database.level[vsn].data[i].user)
}
}
conn.sendMessage(from, { text: xsn, contextInfo: { mentionedJid: ysn } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[96]:
if (iMe || owner || iGroupAdmin) {
vks = check(from, database.level)
uks = args.join(" ").split("|")[0] ? args.join(" ").split("|")[0] : 0
hks = args.join(" ").split("|")[1] ? args.join(" ").split("|")[1] : 9
gks = args.join(" ").split("|")[2] ? args.join(" ").split("|")[2] : 5000
kks = []
if (vks) {
nks = database.level[vks].data.length
for (let i = 0; i < nks; i++) {
if (database.level[vks].data[i].message <= uks) {
for (let l of groupMembers) {
if (database.level[vks].data[i].user == l.id) {
if (l.admin == null) {
if (kks.length <= hks) {
kks.push(l.id)
}
}
}
}
}
}
if (kks.length == 0) return reply("Nenhum participante possui " + uks +  " Mensagen(s) ou menos.")
for (let i = 0; i < kks.length; i++) {
setTimeout(() => conn.groupParticipantsUpdate(from, [kks[i]], 'remove'), gks * i)
}
} else {
reply("Não há dados sobre o grupo.")
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[97]:
if (iMe || owner || iGroupAdmin) {
tps = argx
jps = verify(tps, database.commandBlock)
if (jps) {
reply("Este comando já está incluso.")
} else {
reply("Comando bloqueado.")
database.commandBlock.push(tps)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[98]:
if (iMe || owner || iGroupAdmin) {
tps = argx
jps = verify(tps, database.commandBlock)
if (jps) {
reply("Comando desbloqueado.")
database.commandBlock.splice(jps, 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
} else {
reply("Este comando não está incluso.")
}
} else {
reply(config.msg.negar)
}
break
//reromar
case config.comandos[99]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) return reply("Checar todos? -all. Determinado tempo? número de dias após o comando.")
if (args[0].match("-all")) {
vbs = check(from, database.ghost)
if (vbs) {
xbs = ""
ybs = []
zbs = 0
nbs = database.ghost[vbs].data.length
for (let i = 0; i < nbs; i++) {
zbs++
ebs = timedat.slice(0, 2) - database.ghost[vbs].data[i].time.slice(0, 2)
if (ebs == 1) kbs = timedat.slice(0, 2) - database.ghost[vbs].data[i].time.slice(0, 2) + " Dia atrás"
if (ebs == 0) kbs = "Hoje"
if (ebs >= 2) kbs = timedat.slice(0, 2) - database.ghost[vbs].data[i].time.slice(0, 2) + " Dias atrás"
xbs += `${zbs}
❑ Usuário: @${database.ghost[vbs].data[i].id.split('@')[0]}
❑ Ultima mensagen: ${kbs} :${database.ghost[vbs].data[i].time.slice(5)}\n\n`
ybs.push(database.ghost[vbs].data[i].id)
}
conn.sendMessage(from, { text: xbs, contextInfo: { mentionedJid: ybs } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
} else {
vqs = check(from, database.ghost)
uqs = args[0]
if (vqs) {
xqs = ""
yqs = []
zqs = 0
nqs = database.ghost[vqs].data.length
for (let i = 0; i < nqs; i++) {
if (timedat.slice(0, 2) - database.ghost[vqs].data[i].time.slice(0, 2) >= uqs) {
zqs++
eqs = timedat.slice(0, 2) - database.ghost[vqs].data[i].time.slice(0, 2)
if (eqs == 1) kqs = timedat.slice(0, 2) - database.ghost[vqs].data[i].time.slice(0, 2) + " Dia atrás"
if (eqs == 0) kqs = "Hoje"
if (eqs >= 2) kqs = timedat.slice(0, 2) - database.ghost[vqs].data[i].time.slice(0, 2) + " Dias atrás"
xqs += `${zqs}
❑ Usuário: @${database.ghost[vqs].data[i].id.split('@')[0]}
❑ Ultima mensagen: ${kqs} :${database.ghost[vqs].data[i].time.slice(5)}\n\n`
y.push(database.ghost[vqs].data[i].id)
}
}
if (zqs == 0) return reply("Não há nenhum participante offline por " + uqs + " Dia(s)")
conn.sendMessage(from, { text: xqs, contextInfo: { mentionedJid: yqs } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[100]:
database.afk.push({ id: sender, message: args.join(" "), time: timedat, hr: Date.now() })
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
reply('Mensagem de ausência criada com sucesso.')
break

//GetLevelAndCommands

case'eveal':
try {
a = await axios.get("https://www.google.com/search?tbs=sbi:AMhZZiur-9lFdg9smD2tZ0QEaX8DZ9LzeznmrrCp7YckndkCLoTXp02cnE096tWaLS8Fp2Xmls0MsaJmjvhcG9sAfRO6con2XXR8S-G-iMTYmB8DXctIusbCgCk6QKtXO_1x2el66jVMjqx9g3rnNqEqpCP3_18s1mFgb_1yoKsYQFkXwQhA9FqjLH_1_17gOw-6TOeyt3EyPnlJz1_1cYWpA8i7Okw9_1tLbYVx_16qnqdRK9y_1NQNt5JoPPDoyIjCC0zbrsnBCMApafbjJI9n07A3pkfcCHGivmsemdnvDH2cPvqYFc7-HIgMyoQr4H6IR9a0Rll_13o1--2aehwtWHGcym6eE0Cf4P3Dk53w", {//args.join(" ").split("|")[0], {
headers: {
"user-agent": agent()
}
})
$ = cheerio.load(a.data)
console.log(eval(args.join(" ")))
} catch (err) {
reply(err)
}
break

case config.comandos[101]:
t = textF(args.join(" "))
f = check(t, database.palavra)
if (f) {
reply("Essa palavra já está inclusa.")
} else {
j = t.replace("a", "_").replace("e", "_").replace("i", "_").replace("o", "_").replace("u", "_")
database.palavra.push({ id: t, palavra: j })
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "Palavra adicionada." }, { quoted: m })
}
break

case config.comandos[102]:
if (args[0] == undefined) return reply("Caso queira iniciar um jogo digite -init, Caso queira responder digite a resposta após o comando.")
if (args[0].match("-init")) {
f = check(sender, database.anagrama)
if (f) {
j = await parseMs(database.anagrama[f].time - Date.now())
t = "Você tem um jogo em andamento @" + database.anagrama[f].id.split("@")[0] + "\n\nDesembaralhe: " + database.anagrama[f].enbaralhada + "\n\nTentativas: " + database.anagrama[f].tentativas + "\nTempo restante: " + j.minutes + " Minutos " + j.seconds + " Segundos"
conn.sendMessage(from, { text: t, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
} else {
r = database.palavra[Math.floor(Math.random() * database.palavra.length)]
l = "Jogo iniciado @" + sender.split("@")[0] + "\n\nDesembaralhe: " + r.palavra + "\n\nTentativas: 3\nTempo de jogo: 2 Minutos"
conn.sendMessage(from, { text: l, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
database.anagrama.push({ id: sender, palavra: r.id, enbaralhada: r.palavra, tentativas: 3, time: Date.now() + toMs("2m") })
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
} else {
f = check(sender, database.anagrama)
if (f) {
if (database.anagrama[f].id == sender && database.anagrama[f].tentativas !== 0 && database.anagrama[f].palavra == textF(args.join(" "))) {
j = await parseMs(database.anagrama[f].time - Date.now())
t = "Palavra correta @" + database.anagrama[f].id.split("@")[0] + "\n\nA palavra era: " + database.anagrama[f].palavra + "\n\nTentativas restantes: " + database.anagrama[f].tentativas + "\nTempo restante: " + j.minutes + " Minutos " + j.seconds + " Segundos"
conn.sendMessage(from, { text: t, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
database.anagrama.splice(f, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
} else {
if (database.anagrama[f].time <= Date.now()) {
t = "Tempo esgotado! @" + database.anagrama[f].id.split("@")[0] + "\n\nA palavra era: " + database.anagrama[f].palavra
conn.sendMessage(from, { text: t, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
database.anagrama.splice(f, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
return
}
if (database.anagrama[f].tentativas  == 1) {
t = "Tentativas esgotadas! @" + database.anagrama[f].id.split("@")[0] + "\n\nA palavra era: " + database.anagrama[f].palavra
conn.sendMessage(from, { text: t, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
database.anagrama.splice(f, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
return
}
if (database.anagrama[f].tentativas !== 1) {
database.anagrama[f].tentativas += -1
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
j = await parseMs(database.anagrama[f].time - Date.now())
t = "Resposta errada @" + database.anagrama[f].id.split("@")[0] + "\n\nDesembaralhe: " + database.anagrama[f].enbaralhada + "\n\nTentativas restantes: " + database.anagrama[f].tentativas + "\nTempo restante: " + j.minutes + " Minutos " + j.seconds + " Segundos"
conn.sendMessage(from, { text: t, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
}
}
} else {
reply("Você não tem nenhum jogo ativo. Para iniciar digite " + prefix + "anagrama -init")
}
}
break

//pendente

case config.comandos[103]:
ids = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
idg = [...Object.keys(store.presences[ids]), conn.user.id.split(':')[0] + "@s.whatsapp.net"]
conn.sendMessage(from, { text: 'Lista de usuarios online\nTotal: ' + idg.length + '\n\n' + idg.map(v => '· @' + v.replace(/@.+/, '')).join`\n`, contextInfo: { mentionedJid: idg } }, { quoted: m })
break

case config.comandos[104]:
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'remove')
} else {
reply(config.msg.negar)
}
break

case config.comandos[160]:
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'demote')
} else {
reply(config.msg.negar)
}
break

case config.comandos[161]:
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'promote')
} else {
reply(config.msg.negar)
}
break

case config.comandos[105]:
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (argx.length >= 14 ? args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : "")], 'add')
} else {
reply(config.msg.negar)
}
break

case"mek":
console.log(JSON.stringify(m, null, 2))
break

case config.comandos[106]:
try {
if (iQimage) {
reply(aguardar)
u = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
s = await telegraPh(u)
reply(s)
await fs.unlinkSync(u)
} 
if (iQvideo) {
reply(aguardar)
u = await downloadAndSaveMediaMessage('video', getRandom('.mp4'), m)
s = await telegraPh(u)
reply(s)
await fs.unlinkSync(u)
}
} catch (err) {
return reply(config.msg.error.upload)
}
break

//ImageEditor

case config.comandos[107]:
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
npso = await downloadMediaMessage('image', m)
sope = await uploadFileUgu(npso)
conn.sendMessage(from, { image: { url: "https://api.popcat.xyz/gun?image=" + sope.url } })
} catch (err) {
return reply(config.msg.error.err)
}
break
/*
case config.comandos[108]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
unni = await downloadMediaMessage('image', m)
ynni = await new imgCanva.Greyscale().getImage(unni)
conn.sendMessage(from, { image: ynni }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[109]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
upte = await downloadMediaMessage('image', m)
ykte = await new imgCanva.Gay().getImage(upte)
conn.sendMessage(from, { image: ykte }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[110]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
jjsu = await downloadMediaMessage('image', m)
jjsy = await new imgCanva.Blur().getImage(jjsu)
conn.sendMessage(from, { image: jjsy }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[111]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
ujjp = await downloadMediaMessage('image', m)
yjjp = await new imgCanva.Rip().getImage(ujjp)
conn.sendMessage(from, { image: yjjp }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[112]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
ttru = await downloadMediaMessage('image', m)
ttry = await new imgCanva.Triggered().getImage(ttru)
conn.sendMessage(from, { image: ttry }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[113]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
uttr = await downloadMediaMessage('image', m)
yttr = await new imgCanva.Trash().getImage(uttr)
conn.sendMessage(from, { image: yttr }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[114]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
vxqe = await downloadMediaMessage('image', m)
vzqe = await new imgCanva.Wanted().getImage(vxqe)
conn.sendMessage(from, { image: vzqe }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[115]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
opyu = await downloadMediaMessage('image', m)
opya = await new imgCanva.Circle().getImage(opyu)
conn.sendMessage(from, { image: opya }, { quoted: m })
} catch (err) {
return reply(config.msg.error.err)
}
break

case config.comandos[116]:
if (process.env.HOME !== '/app') return reply('Só poderá ser usado quando eu estiver hopesdado no heroku.')
if (!iQimage) return reply('Apenas imagem.')
try {
reply(aguardar)
ugpi = await downloadMediaMessage('image', m)
hgpi = await new imgCanva.Circle().getImage(ugpi)
pgpi = await writeExifImg512(hgpi, { packname: groupName, author: pushName })
await conn.sendMessage(from, { sticker: { url: pgpi } }, { quoted: m })
await fs.unlinkSync(pgpi)
} catch (err) {
return reply(config.msg.error.err)
}
break
*/

//ImageEditor

//SfW

case config.comandos[117]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/sfw/neko', 'https://api.waifu.im/random/?selected_tags=marin-kitagawa', 'https://api.waifu.im/random/?selected_tags=waifu', 'https://nekos.life/api/v2/img/neko', 'https://waifu.pics/api/sfw/waifu', 'http://api.nekos.fun:8080/api/neko', 'https://waifu.pics/api/sfw/megumin', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[118]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/sfw/neko', 'http://api.nekos.fun:8080/api/neko', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/neko', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[119]: {(async () => {
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/megumin', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[133]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=selfies', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[134]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=marin-kitagawa', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[135]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=maid', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[136]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=uniform', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[137]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=oppai', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[138]: {(async () => {
reply(aguardar)
var { data } = await http('https://api.waifu.im/random/?selected_tags=mori-calliope', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[120]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://akaneko-api.herokuapp.com/api/sfwfoxes', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/fox_girl']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[132]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://api.waifu.im/random/?selected_tags=ass', 'https://api.waifu.im/random/?selected_tags=milf', 'https://api.waifu.im/random/?selected_tags=ecchi', 'https://api.waifu.im/random/?selected_tags=ero']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[121]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://nekobot.xyz/api/image?type=hentai', 'https://api.waifu.im/random/?selected_tags=oral', 'http://api.nekos.fun:8080/api/feet', 'https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=hentai', 'http://api.nekos.fun:8080/api/hentai', 'https://nekobot.xyz/api/image?type=tentacle', 'https://waifu.pics/api/nsfw/waifu', 'https://nekobot.xyz/api/image?type=hboobs', 'https://nekobot.xyz/api/image?type=hkitsune', 'https://waifu.pics/api/nsfw/neko', 'https://nekobot.xyz/api/image?type=hanal', 'https://nekobot.xyz/api/image?type=hthigh', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[122]: {(async () => {
reply(aguardar)
var { data } = await http('https://waifu.pics/api/nsfw/waifu', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[123]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/nsfw/neko', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=paizuri', 'https://nekobot.xyz/api/image?type=paizuri', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[124]: {(async () => {
reply(aguardar)
var { data } = await http('https://nekobot.xyz/api/image?type=hkitsune', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[125]: {(async () => {
reply(aguardar)
var { data } = await http('https://nekobot.xyz/api/image?type=hanal', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[126]: {(async () => {
reply(aguardar)
var { data } = await http('https://nekobot.xyz/api/image?type=hboobs', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[127]: {(async () => {
reply(aguardar)
var { data } = await http('https://nekobot.xyz/api/image?type=hthigh', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[128]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/feet', 'https://nekobot.xyz/api/image?type=paizuri']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[129]: {(async () => {
reply(aguardar)
var { data } = await http('https://nekobot.xyz/api/image?type=tentacle', { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(sender, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[130]: {(async () => {
reply(aguardar)
var { data } = await http(aleatory(['https://akaneko-api.herokuapp.com/api/mobilewallpapers', 'https://akaneko-api.herokuapp.com/api/nsfwmobilewallpapers']), { method: "get", headers: { "user-agent": agent() } })
conn.sendMessage(from, { image: { url: resolve(data, 'img') }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
})().catch((err) => sendResponse({ url: './src/404.jpg' }))} break

case config.comandos[131]: {(async () => {
if (args[0] == undefined) return conn.sendMessage(from, { text: 'Olá, sou o akinator?', headerType: 1, buttons: [{ buttonId: prefix + command + ' init', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + command + ' n', buttonText: { displayText: 'NÃO' }, type: 1 }] }, { quoted: m })
if (args[0] == 'n') return reply('Blz então...')
if (args[0] == 's') return conn.sendMessage(from, { text: 'Sabia! quer jogar mais uma?', headerType: 1, buttons: [{ buttonId: prefix + command + ' init', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + command + ' n', buttonText: { displayText: 'NÃO' }, type: 1 }] }, { quoted: m })
akinator (conn, from, args[0], prefix, sender, m, args[1])
})().catch((err) => reply(String(config.evocar ? err : config.msg.error.err)))} break

case config.comandos[139]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/dance', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[140]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/cry', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[141]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/sfw/slap', 'https://api.waifu.pics/sfw/bonk']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[142]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/kick', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[143]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/nom', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[144]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/sfw/kiss', 'https://nekos.life/api/v2/img/kiss']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[145]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://nekos.life/api/v2/img/hug', 'https://waifu.pics/api/sfw/hug']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[146]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://nekos.life/api/v2/img/smug', 'https://waifu.pics/api/sfw/smug']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[148]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('http://api.nekos.fun:8080/api/boobs', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[149]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('http://api.nekos.fun:8080/api/anal', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[150]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://nekos.life/api/v2/img/cuddle', 'https://waifu.pics/api/sfw/cuddle']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[151]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://nekos.life/api/v2/img/tickle', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[147]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/sfw/poke', 'http://api.nekos.fun:8080/api/poke']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[152]:
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http(aleatory(['https://waifu.pics/api/nsfw/blowjob', 'http://api.nekos.fun:8080/api/bj']), { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case config.comandos[153]:
reply(aguardar)
var { data } = await http('https://randomwaifu.altervista.org/', { method: "get", headers: { "user-agent": agent() } })
var $ = cheerio.load(data)
conn.sendMessage(from, { image: { url: 'https://randomwaifu.altervista.org/'+ $('div.imgbox').find('img').attr('src') }, caption: $('center').find('p').text(), headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => sendResponse({ url: './src/404.jpg' }))
break

case config.comandos[154]:
nsfi = verify(from, database.nsfw) ? ddg.SafetyLevels.OFF : ddg.SafetyLevels.STRICT
nufi = await ddg.search(args.join(" ") + ' cut mobile wallpapers', nsfi)
cofi = nufi[Math.floor(Math.random() * nufi.length)]
conn.sendMessage(from, { image: { url: cofi.image } }, { quoted: m }).catch((err) => sendResponse({ url: './src/404.jpg' }, " ", null))
break

case config.comandos[155]:
nsfr = verify(from, database.nsfw) ? ddg.SafetyLevels.OFF : ddg.SafetyLevels.STRICT
nufr = await ddg.search(args.join(" "), nsfr)
cofr = nufr[Math.floor(Math.random() * nufr.length)]
conn.sendMessage(from, { image: { url: cofr.image } }, { quoted: m }).catch((err) => sendResponse({ url: './src/404.jpg' }, " ", null))
break

case config.comandos[156]:
if (args[0] == undefined) return reply('Defina a dificuldade\nEx.: ' + prefix + 'tictac easy')
tttPosition = TTTposition(from)
reloadTTT()
if (tttPosition !== undefined) if (_ttt[tttPosition].config.status == "on") return reply("Há um jogo em andamento...")
if (args[0].length < 1 || (args[0].toLowerCase() !== 'easy' && args[0].toLowerCase() !== 'normal' && args[0].toLowerCase() !== 'hard' && args[0].toLowerCase() !== 'impossible')) return reply('Defina a dificuldade. Ex.: ' + prefix + 'tictac easy')
addTTTset(args[0].toUpperCase(), sender, pushName, from)
reloadTTT()
tttPosition = TTTposition(from)
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0 && _ttt[tttPosition].config.difficulty !== "EASY") {
IA(tttPosition)
reloadTTT()
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2))
reloadTTT()
}
conn.sendMessage(from, { text: `O jogo começou!\nModo: *${_ttt[tttPosition].config.difficulty}*` }, { quoted: m }).then(() => conn.sendMessage(from, { text: `🌀1️⃣2️⃣3️⃣\n🅰🔲🔲🔲\n🅱🔲🔲🔲\n©️🔲🔲🔲` }) ).then(() => conn.sendMessage(from, { text: `Caso não saiba como jogar digite: ${prefix}ttthelp` }) )
break

case config.comandos[157]:
tttPosition = TTTposition(from)
if (tttPosition == undefined) return reply('Você ainda não iniciou um jogo... Digite ' + prefix + 'tictac [DIFICULDADE] para iniciar.')
if (_ttt[tttPosition].info.group !== from) return reply('Você ainda não iniciou um jogo... Digite ' + prefix + 'tictac [DIFICULDADE] para iniciar.')
if (_ttt[tttPosition].info.player !== sender) return reply('Não é você que está jogando. Aguarde o jogo atual acabar...')
if (args[0].toLowerCase() !== 'a1' && args[0].toLowerCase() !== 'a2' && args[0].toLowerCase() !== 'a3' && args[0].toLowerCase() !== 'b1' && args[0].toLowerCase() !== 'b2' && args[0].toLowerCase() !== 'b3' && args[0].toLowerCase() !== 'c1' && args[0].toLowerCase() !== 'c2' && args[0].toLowerCase() !== 'c3') return reply(`Digite o comando com uma coordenada.\nExemplo: ${prefix}cd a1`)
switch (args[0].toLowerCase()) {
case 'a1':
if (_ttt[tttPosition].esp.a1 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.a1 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
} 
}
break

case 'a2':
if (_ttt[tttPosition].esp.a2 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.a2 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
} 
}
break

case 'a3':
if (_ttt[tttPosition].esp.a3 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.a3 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
} 
}
break

case 'b1':
if (_ttt[tttPosition].esp.b1 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.b1 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
} 
}
break

case 'b2':
if (_ttt[tttPosition].esp.b2 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.b2 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
}
}
break

case 'b3':
if (_ttt[tttPosition].esp.b3 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.b3 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
}
}
break

case 'c1':
if (_ttt[tttPosition].esp.c1 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.c1 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
}
}
break

case 'c2':
if (_ttt[tttPosition].esp.c2 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.c2 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
}
}
break

case 'c3':
if (_ttt[tttPosition].esp.c3 !== "🔲") {
conn.sendMessage(from, { text: 'O espaço já foi ocupado\nTente outra coordenada.' }, { quoted: m })
} else {
_ttt[tttPosition].esp.c3 = "❌"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()  
if (_ttt[tttPosition].config.Activate1 == "on") {
IA(tttPosition); reloadTTT()
}
}
break

default:
}

if (WinnerX(tttPosition)) {
if (verify(from, database.leveling)) {
switch (_ttt[tttPosition].config.difficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 30) + 20
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 35) + 25
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 40) + 30
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 45) + 35
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
}
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
.then(() => conn.sendMessage(from, { text: `Vitória do Jogador. Recompensa: +${randomTTTXP} XP \u{1F52E}` }) )
} else {
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
.then(() => conn.sendMessage(from, { text: 'Vitoria do jogador.' }) )
}
const currentTTTwins = getTTTwins(_ttt[tttPosition].info.player)
const checkTTTIdWin = getTTTId(_ttt[tttPosition].info.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(_ttt[tttPosition].info.player)
addTTTwin(_ttt[tttPosition].info.player, 1)
if (verify(from, database.leveling)) addTTTpoints(_ttt[tttPosition].info.player, randomTTTXP)
_ttt.splice(tttPosition, 1)
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
} else if (WinnerO(tttPosition)) {
if (verify(from, database.leveling)) {
switch (_ttt[tttPosition].config.difficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 20) + 20)
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 30) + 30)
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0 - (Math.floor(Math.random() * 35) + 35)
saveXp(_ttt[tttPosition].info.player, from, randomTTTXP)
break
}
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
.then(() => conn.sendMessage(from, { text: `Vitória do Bot. Punição: ${randomTTTXP} XP \u{1F52E}` }) )
} else {
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
.then(() => conn.sendMessage(from, { text: 'Vitória do Bot.' }) )
}
const currentTTTdefeats = getTTTdefeats(_ttt[tttPosition].info.player)
const checkTTTIdDefeat = getTTTId(_ttt[tttPosition].info.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(_ttt[tttPosition].info.player)
addTTTdefeat(_ttt[tttPosition].info.player, 1)
if (verify(from, database.leveling)) addTTTpoints(_ttt[tttPosition].info.player, randomTTTXP)
_ttt.splice(tttPosition, 1)
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
} else if (Tie(tttPosition)) {
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
.then(() => conn.sendMessage(from, { text: 'Empate. Não houve ganhos nem perdas.' }) )
const currentTTTties = getTTTties(_ttt[tttPosition].info.player)
const checkTTTIdTie = getTTTId(_ttt[tttPosition].info.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(_ttt[tttPosition].info.player)
addTTTtie(_ttt[tttPosition].info.player, 1)
_ttt.splice(tttPosition, 1)
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
} else {
_ttt[tttPosition].config.Activate1 = "on"
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
conn.sendMessage(from, { text: `\u{1F300}1️⃣2️⃣3️⃣\n\u{1F170}${_ttt[tttPosition].esp.a1}${_ttt[tttPosition].esp.a2}${_ttt[tttPosition].esp.a3}\n\u{1F171}${_ttt[tttPosition].esp.b1}${_ttt[tttPosition].esp.b2}${_ttt[tttPosition].esp.b3}\n©️${_ttt[tttPosition].esp.c1}${_ttt[tttPosition].esp.c2}${_ttt[tttPosition].esp.c3}` }, { quoted: m })
}
break

case config.comandos[158]:
if (iMe || owner || iGroupAdmin) {
if (iQimage) {
bxse = await downloadMediaMessage('image', m)
conn.sendMessage(from, { image: bxse, contextInfo: { mentionedJid: mention(groupMembers) } })
} else if (iQaudio) {
bxsh = await downloadMediaMessage('audio', m)
conn.sendMessage(from, { audio: bxsh, mimetype: 'audio/mp4', ptt : true, contextInfo: { mentionedJid: mention(groupMembers) } })
} else if (iQvideo) {
bxsk = await downloadMediaMessage('video', m)
conn.sendMessage(from, { video: bxsk, contextInfo: { mentionedJid: mention(groupMembers) } })
} else if (iQsticker) {
bxsg = await downloadMediaMessage('sticker', m)
conn.sendMessage(from, { sticker: bxsg, contextInfo: { mentionedJid: mention(groupMembers) } })
} else {
conn.sendMessage(from, { text: argx ? argx : "*", contextInfo: { mentionedJid: mention(groupMembers) } })
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[159]:
if (iMe || owner || iGroupAdmin) {
mess = ''
for (let i of groupMembers) {
mess += '· @' + i.id.split('@')[0] + '\n'
}
conn.sendMessage(from, { text: argx ? argx + '\n\n' + mess : mess, contextInfo: { mentionedJid: mention(groupMembers) } })
} else {
reply(config.msg.negar)
}
break

case config.comandos[162]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.contato)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.contato)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.contato.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.contato)) {
database.contato.splice(verify(from, database.contato), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[163]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.texto)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.texto)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.texto.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.texto)) {
database.texto.splice(verify(from, database.texto), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[164]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.loc)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.loc)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.loc.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.loc)) {
database.loc.splice(verify(from, database.loc), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[165]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.catalogo)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.catalogo)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.catalogo.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.catalogo)) {
database.catalogo.splice(verify(from, database.catalogo), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case config.comandos[166]:
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.once)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.once)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.once.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.once)) {
database.once.splice(verify(from, database.once), 1)
fs.writeFileSync("./src/database.json", JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.desativar.replace('#r', command) }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
reply(config.msg.negar)
}
break

case'heroku':
reply('Atualizando para o heroku, aguarde...')
exec('sh upload.sh', async(err, stdout) => {
if (err) return reply(err)
reply(stdout.trim())
})
break

case 'gif-smile':
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/smile', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case 'gif-bully':
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/bully', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case 'gif-blush':
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/blush', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case 'gif-lick':
var S = getRandom('.mp4')
var E = getRandom('.gif')
reply(aguardar)
var { data } = await http('https://waifu.pics/api/sfw/lick', { method: "get", headers: { "user-agent": agent() } })
var U = resolve(data, 'gif')
if (data.isAxiosError || !U.match(/.gif|.GIF/g)) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
}
exec(`wget ${U} -O ${E} && ffmpeg -i ${E} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${S}`, async (err) => {
if (err) {
conn.sendMessage(from, { video: fs.readFileSync('./src/404.mp4'), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
}
conn.sendMessage(from, { video: fs.readFileSync(S), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(E)
await fs.unlinkSync(S)
})
break

case'ss':
var g = await conn.groupFetchAllParticipating()
var n = []
var p = []
for (let i of g) {
n.push(i.id)
for (let f of i.participants) {
p.push(f.id)
}
}
exec('cd src/session && ls', async (err, stdout) => {
var a = stdout.match(/--0.json/g).length
for (let i = 0; i < a; i++) {
var b = stdout.split('sender-key-')[i + 1].split('--')[0]
var c = stdout.split('us--')[i + 1].split('--0')[0]
var u = (c.match('-') ? c.split('-')[0] : c) + '@s.whatsapp.net'
if (n.includes(b)) {
if (p.includes(u)) {
} else {
console.log('Arquivo inútil:'.green, ('sender-key-' + b + '--' + c + '--0.json').yellow)
exec('cd src/session && rm -rf sender-key-' + b + '--' + c + '--0.json', async (err, stdout) => {
})
}
} else {
console.log('Arquivo inútil:'.green, ('sender-key-' + b + '--' + c + '--0.json').yellow)
exec('cd src/session && rm -rf sender-key-' + b + '--' + c + '--0.json', async (err, stdout) => {
})
}
}
var s = stdout.match(/sender-key-memory/g).length
for (let i = 0; i < s; i++) {
var e = stdout.split('sender-key-memory-')[i + 1].split('.json')[0]
if (n.includes(e)) {
} else {
console.log('Arquivo inútil:'.green, ('sender-key-memory-' + e + '.json').yellow)
exec('cd src/session && rm -rf sender-key-memory-' + e + '.json', async (err, stdout) => {
})
}
}
var y = stdout.match(/pre-key/g).length
for (let i = 0; i < (y - 1); i++) {
var q = stdout.split('pre-key-')[i + 1].split('.json')[0]
console.log('Arquivo inútil:'.green, ('pre-key-' + q + '.json').yellow)
exec('cd src/session && rm -rf pre-key-' + q + '.json', async (err, stdout) => {
})
}
})
break

default:
}
virtex (conn, from, m, sender, isGroup, iBotGroupAdmin, iGroupAdmin, body, pushName, type)
velha (conn, from, m, sender, isGroup, body) 
Inteligence (conn, from, m, body, type, isQuotedMsg, quotedMsg, reply)
LevelingXp (conn, from, m, sender, isGroup, groupMembers, icmd, command, pushName, timedat)
IndexSecundaria (conn, from, m, sender, isGroup, groupMembers, command, pushName, icmd, timedat, body, type, iGroupAdmin, iBotGroupAdmin, iMe, isQuotedMsg, quotedMsg, args, argx, metadata, owner, reply, prefix, iImage, iVideo, iSticker, iQimage, iQaudio, iQvideo, iQsticker, groupMembersAdmins, aguardar)
{(async () => {
var g = await conn.groupFetchAllParticipating()
var n = []
var p = []
for (let i of g) {
n.push(i.id)
for (let f of i.participants) {
p.push(f.id)
}
}
exec('cd src/session && ls', async (err, stdout) => {
var a = stdout.match(/--0.json/g).length
for (let i = 0; i < a; i++) {
var b = stdout.split('sender-key-')[i + 1].split('--')[0]
var c = stdout.split('us--')[i + 1].split('--0')[0]
var u = (c.match('-') ? c.split('-')[0] : c) + '@s.whatsapp.net'
if (n.includes(b)) {
if (p.includes(u)) {
} else {
console.log('Arquivo inútil'.green, ':'.red, ('sender-key-' + b + '--' + c + '--0.json').yellow)
exec('cd src/session && rm -rf sender-key-' + b + '--' + c + '--0.json', async (err, stdout) => {
})
}
} else {
console.log('Arquivo inútil'.green, ':'.red, ('sender-key-' + b + '--' + c + '--0.json').yellow)
exec('cd src/session && rm -rf sender-key-' + b + '--' + c + '--0.json', async (err, stdout) => {
})
}
}
var s = stdout.match(/sender-key-memory/g).length
for (let i = 0; i < s; i++) {
var e = stdout.split('sender-key-memory-')[i + 1].split('.json')[0]
if (n.includes(e)) {
} else {
console.log('Arquivo inútil'.green, ':'.red, ('sender-key-memory-' + e + '.json').yellow)
exec('cd src/session && rm -rf sender-key-memory-' + e + '.json', async (err, stdout) => {
})
}
}
var y = stdout.match(/pre-key/g).length
var x = []
for (let i = 0; i < y; i++) {
var q = stdout.split('pre-key-')[i + 1].split('.json')[0]
x.push(q)
}
var g = Math.max(...x)
var h = x.filter((number) => number != g)
for (let f of h) {
console.log('Arquivo inútil'.green, ':'.red, ('pre-key-' + f + '.json').yellow)
exec('cd src/session && rm -rf pre-key-' + f + '.json', async (err, stdout) => {
})
}
var k = stdout.match(/session-/g).length
var z = []
for (let f of store.chats.all()) {
f.id.endsWith('@g.us') ? "" : z.push(f.id)
}
for (let i = 0; i < k; i++) {
var d = stdout.split('session-')[i + 1].split('.json')[0]
var o = (d.includes(".") ? d.split(".")[0] : d) + '@s.whatsapp.net'
if (z.includes(o)) {
} else {
if (o !== conn.user.id.split(':')[0] + "@s.whatsapp.net") {
console.log('Arquivo inútil'.green, ':'.red, ('session-' + d + '.json').yellow)
exec('cd src/session && rm -rf session-' + d + '.json', async (err, stdout) => {
})
}
}
}
})
})()}
} catch (err) {
return console.log('Error:'.yellow, err)
}
})
ConnectionUpdate (conn)
}
connectToWhatsApp().catch((err) => console.log(err)); module.exports = { connectToWhatsApp }