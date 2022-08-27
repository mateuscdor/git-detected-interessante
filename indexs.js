const { default: makeWASocket, downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, useSingleFileAuthState, fetchLatestBaileysVersion, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, jidDecode, proto, makeInMemoryStore } = require('./lib/@adiwajshing/baileys')
const { serialize, banner, hex, verificado, live, mention, sleep, notFoundButton, notFoundTemplate, notFound, downloadMediaMessage, verify, check, getBuffer, getRandom, getGroupAdmins, runtime, parseMs, downloadAndSaveMediaMessage, textF } = require("./lib/myfunc")
const { state, saveState } = useSingleFileAuthState('./src/session.json')
const chalk = require('chalk')
const fs = require('fs-extra')
const pi = require('pino')
const store = makeInMemoryStore({ logger: pi().child({ level: 'fatal', stream: 'store' }) })
store.readFromFile('./src/store.json')
setInterval(() => store.writeToFile('./src/store.json'), 5000)

console.log(banner.string)
const connectToWhatsApp = async () => {
const { version } = await fetchLatestBaileysVersion()
const conn = makeWASocket({
version,
logger: pi({ level: 'fatal' }),
printQRInTerminal: true,
auth: state,
browser: ["UndefinedBot Multi Device", "Firefox", "3.0"],
getMessage: async key => {
return { conversation: 'wow!'
}
}
})
store?.bind(conn.ev)
setInterval(() => { conn.ev.on('creds.update', saveState); console.log('Chaves de acesso sendo salvas agora...') }, 18000000)

const moment = require("moment-timezone")
const superagent = require('superagent')
const fetch = require('node-fetch') 
const toMs = require('ms')
const cheerio = require('cheerio')
const axios = require("axios")
const ffmpeg = require("fluent-ffmpeg")
const colors = require('colors')
const dds = require('duck-duck-scrape')
const ddg = require("ddgimages-node")
const request = require("request")
const { exec } = require("child_process")
const crypto = require('crypto')
const speed = require("performance-now")

//git add .
//git commit -am "xqpx"
//git push heroku master
//nodemon --watch index.js
//https://github.com/KillovSky/Iris_Files/raw/main/Couple/${theCouple}.1.jpg 1-113

const { getMessage, saveCash, getCash, getTimeDat, reloadGhost, saveMessage, getUserId, saveData, saveGroupId, getGroupId, getLevel, getXp, saveLevel, saveXp, getRank, saveCommand, saveUsedCommand, getCommand } = require("./lib/level")
const { LevelingXp, virtex, Inteligence, velha, ConnectionUpdate, akinator, IndexSecundaria } = require("./lib/functions.js")
const { stickerCircle } = require("./lib/sticker")
const { recognize, webp2gifFile, tiktokdownloader } = require("./lib/convert")
const { telegraPh, uploadFileUgu, fileio, flonime } = require("./lib/uploader")
const { mediafire, wikipedia } = require("./lib/scraper")
const { pinterest, pinteres } = require('./lib/pinterest')
const { writeExifImg200, writeExifVid200, writeExifImg512, writeExifVid512, writeExif } = require('./lib/exift')

const dailyTTT = JSON.parse(fs.readFileSync('./lib/tictac/diarioTTT.json'))
const cdTTT = 300000 
const crTTT = "```Jogo da velha by: REZEN```"
const { addTTTset, TTTposition, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, tttme, ttthelp } = require('./lib/ttt.js')

conn.ws.on('CB:call', async function ({ content }) {
const config = JSON.parse(fs.readFileSync('./src/config.json'))
if (content[0].tag == 'offer' && config.call) {
conn.sendMessage(content[0].attrs['call-creator'], { text: "Bloqueado!" }).then(() => { conn.updateBlockStatus(content[0].attrs['call-creator'], "block") })
}
})

conn.ev.on('group-participants.update', async function (update) {
try {
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
ppimg =  await conn.profilePictureUrl(update.participants[0], 'image').catch((err) => ppimg = "https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg")
conn.sendMessage(update.id, { image: { url: ppimg }, contextInfo: { mentionedJid: [update.participants[0]] }, caption: config.bv.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description) })
}
} else if (verify(update.id, database.wellcomeText)) {
if (update.action == 'add') {
conn.sendMessage(update.id, { text: config.entrar.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } })
}
if (update.action == 'remove') {
conn.sendMessage(update.id, { text: config.sair.replace('#n', update.participants[0].split("@")[0]).replace('#g', group.subject).replace('#d', description), contextInfo: { mentionedJid: [update.participants[0]] } })
}
}
} catch (err) {
}
})

conn.ev.on('messages.upsert', async function ({ messages }) {
const database = JSON.parse(fs.readFileSync('./src/database.json'))
const config = JSON.parse(fs.readFileSync('./src/config.json'))
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
if (messages[0].key.remoteJid == 'status@broadcast') return conn.sendReadReceipt(messages[0].key.remoteJid, messages[0].key.participant, [messages[0].key.id])
if (messages[0].key.id.startsWith('BAE5') && messages[0].key.id.length == 16) return
const m = serialize(conn, messages[0])
const { type,
             now,
             fromMe,
             from,
             isGroup,
             pushName,
             isQuotedMsg,
             mentioned,
             quotedMsg } = m
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
const metadata = isGroup ? await conn.groupMetadata(from) : ''
const icmd = body.startsWith(prefix) ? true : false
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

//console.log(conn.ws)

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
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
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
conn.sendMessage(_ttt[endPos].info.group, { text: `${_ttt[endPos].info.playername} O tempo de jogo expirou\n\nPunição: ${randomEndTTTXP} XP \u{1F52E}`, contextInfo: { mentionedJid: [_ttt[endPos].info.player] } })
} else {
conn.sendMessage(_ttt[endPos].info.group, { text: `${_ttt[endPos].info.playername} O tempo de jogo expirou.`, contextInfo: { mentionedJid: [_ttt[endPos].info.player] } })
}
_ttt.splice(endPos, 1)
fs.writeFileSync('./ttt/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
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

await conn.sendPresenceUpdate('available', from)
await conn.sendReadReceipt(from, sender, [m.key.id])

if (!isGroup && icmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', timedat.underline, command.green.underline, 'from'.red.underline, pushName.green.underline)
if (icmd  && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', timedat.underline, command.green.underline, 'from'.red.underline, pushName.green.underline, 'in'.red.underline, groupName.green.underline)

switch (command) {
case'ro':
if (iMe || owner || iGroupAdmin) {
console.log('Negror')
} else {
console.log('Brancor')
}
break

case'hidetag': case'tag':
if (iMe || owner || iGroupAdmin) {
if (iQimage) {
bxse = await downloadMediaMessage('image', m)
conn.sendMessage(from, { image: bxse, contextInfo: { mentionedJid: await mention(groupMembers) } })
} else if (iQaudio) {
bxsh = await downloadMediaMessage('audio', m)
conn.sendMessage(from, { audio: bxsh, mimetype: 'audio/mp4', ptt : true, contextInfo: { mentionedJid: await mention(groupMembers) } })
} else if (iQvideo) {
bxsk = await downloadMediaMessage('video', m)
conn.sendMessage(from, { video: bxsk, contextInfo: { mentionedJid: await mention(groupMembers) } })
} else if (iQsticker) {
bxsg = await downloadMediaMessage('sticker', m)
conn.sendMessage(from, { sticker: bxsg, contextInfo: { mentionedJid: await mention(groupMembers) } })
} else {
conn.sendMessage(from, { text: argx ? argx : "*", contextInfo: { mentionedJid: await mention(groupMembers) } })
}
} else {
reply(config.msg.negar)
}
break

case'marcar':
if (iMe || owner || iGroupAdmin) {
mess = ''
for (let i of groupMembers) {
mess += '· @' + i.id.split('@')[0] + '\n'
}
conn.sendMessage(from, { text: argx ? argx + '\n\n' + mess : mess, contextInfo: { mentionedJid: await mention(groupMembers) } })
} else {
reply(config.msg.negar)
}
break

case'bc':
if (iMe || owner) {
members = []
for (let i of groupMembers) {
members.push(i.id)
if (args.join(" ").split("|")[2] == '-3') {
if (iQimage) {
med = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
conn.sendMessage(i.id, { image: fs.readFileSync(med), caption: args.join(" ").split("|")[0], templateButtons: [{ index: 1, urlButton: { displayText: 'CRIADOR', url: 'wa.me/559984620740' } }, { index: 2, quickReplyButton: { displayText: 'MENU', id: prefix + 'menu' } }, { index: 3, quickReplyButton: { displayText: 'PING', id: prefix + 'ping' } }] }, { quoted: verificado(args.join(" ").split("|")[1]) })
await fs.unlinkSync(med)
} else {
conn.sendMessage(i.id, { text: args.join(" ").split("|")[0], templateButtons: [{ index: 1, urlButton: { displayText: 'CRIADOR', url: 'wa.me/559984620740' } }, { index: 2, quickReplyButton: { displayText: 'MENU', id: prefix + 'menu' } }, { index: 3, quickReplyButton: { displayText: 'PING', id: prefix + 'ping' } }] }, { quoted: verificado(args.join(" ").split("|")[1]) })
}
}
if (args.join(" ").split("|")[2] == '-2') {
if (iQimage) {
med = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
conn.sendMessage(i.id, { image: fs.readFileSync(med), caption: args.join(" ").split("|")[0], headerType: 4, buttons: [{ buttonId: prefix + 'menu', buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: prefix + 'ping', buttonText: { displayText: 'PING' }, type: 1 }] }, { quoted: verificado(args.join(" ").split("|")[1]) })
await fs.unlinkSync(med)
} else {
conn.sendMessage(i.id, { text: args.join(" ").split("|")[0], headerType: 1, buttons: [{ buttonId: prefix + 'menu', buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: prefix + 'ping', buttonText: { displayText: 'PING' }, type: 1 }] }, { quoted: verificado(args.join(" ").split("|")[1]) })
}
}
if (args.join(" ").split("|")[2] == '-1') {
conn.sendMessage(i.id, { text: args.join(" ").split("|")[0] }, { quoted: verificado(args.join(" ").split("|")[1]) })
}
}
} else {
reply(config.msg.negar)
}
break

case'nuke':
if (iMe || owner) {
for (let i of groupMembers) {
if (i.id !== conn.user.id.split(':')[0] + "@s.whatsapp.net") {
setTimeout(() => conn.groupParticipantsUpdate(from, [i.id], 'remove'), args[0] ? args[0] : 3000)
}
}
} else {
reply(config.msg.negar)
}
break

case'ping':
a = require('performance-now')
b = a()
c = a() - b
conn.sendMessage(from, { text: `\`\`\`Velocidade: ${c.toFixed(4)}ms\`\`\`` }, { quoted: m })
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

case'sty':
a = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'Whatsapp Web'
break

case"r":
return console.log(JSON.stringify(eval(args.join(" "))))
break

case'>':
return console.log(eval(args.join(" ")))
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
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
reply('Configurado com sucesso.')
}
} else {
return reply(config.msg.owner)
}
break

case'setbvimage':
try {
if (iQimage) {
u = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
s = await telegraPh(u)
await fs.unlinkSync(u)
config.welcome = s
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
reply('Imagem de boas vindas alterada com sucesso.')
}
} catch (err) {
return reply(config.msg.errUpload)
}
break

case'setprefix':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined || args[0].length > 1) return reply('Apenas um caractere.')
config.prefix = args[0]
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
reply('Prefixo alterado para: ' + args[0])
} else {
return reply(config.msg.negar)
}
break

case'multiprefix':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (config.multiprefix) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: verificado() })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: verificado() })
}
}
if (args[0] == 1) {
reply('Multi Prefix ativado.')
config.multiprefix = true
fs.writeFileSync('./src/config.json', JSON.stringify(config, null, 2))
}
if (args[0] == 0) {
reply('Multi Prefix desativado.')
config.multiprefix = false
fs.writeFileSync('./src/config.json', JSON.stringify(config, null, 2))
}
} else {
return reply(config.msg.negar)
}
break

case'antipv':
if (iMe || owner) {
if (args[0] == undefined) {
if (config.antipv) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == '1') {
reply('AntiPv ativado.')
config.antipv = true
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (args[0] == '0') {
reply('AntiPv desativado.')
config.antipv = false
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
} else {
return reply(config.msg.owner)
}
break

//ConfiguraçõesOwner...

//YoutubeDownload

case'play':
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
a = require('youtubei.js')
b = await new a()
c = await b.search(args.join(" "))
buttons = [
{ buttonId: '$subplaybmp4 ' + c.videos[0].id, buttonText: { displayText: 'VÍDEO' }, type: 1},
{ buttonId: '$subplaybmp3 ' + c.videos[0].id, buttonText: { displayText: 'ÁUDIO' }, type: 1}
]
conn.sendMessage(from, {
image: { url: "https://" + c.videos[0].metadata.thumbnails[0].url.split("https://")[1].split("?")[0] },
caption: `Titulo: ${c.videos[0].title}\nId: ${c.videos[0].id}\nCanal: ${c.videos[0].channel.name}\nViews: ${c.videos[0].metadata.view_count}\nDuração: ${c.videos[0].metadata.duration.simple_text}\nUpload: ${c.videos[0].metadata.published}\n\n${c.videos[0].description}`,
buttons: buttons,
headerType: 4
})
break

case'subplaybmp3':
repls("📥")
a = require('youtubei.js')
b = await new a()
d = getRandom('.mp3')
s = await b.download(args.join(" "), {
format: 'mp4',
quality: '64k',
type: 'audio'
})
s.pipe(fs.createWriteStream(d))
s.on('end', () => {
conn.sendMessage(from, { audio: fs.readFileSync(d), mimetype: 'audio/mpeg' }).then(() => fs.unlinkSync(d) )
})
s.on('error', (err) => {
fs.unlinkSync(d)
return reply(config.msg.error.err)
})
break

case'subplaybmp4':
repls("📥")
a = require('youtubei.js')
b = await new a()
d = getRandom('.mp4')
s = await b.download(args.join(" "), {
format: 'mp4',
quality: '360p',
type: 'videoandaudio'
})
s.pipe(fs.createWriteStream(d))
s.on('end', () => {
conn.sendMessage(from, { video: fs.readFileSync(d) }).then(() => fs.unlinkSync(d) )
})
s.on('error', (err) => {
fs.unlinkSync(d)
return reply(config.msg.error.err)
})
break

case'playlist':
if (argx == "" || argx.length > 50) return reply(config.msg.error.reject)
reply(aguardar)
f = require( 'yt-search' )
j = await f(args.join(" "))
sections = []
l = 0
if (j.videos.length == 0) return reply("Nenhum resultado.")
for (let x = 0; x < j.videos.length; x++) {
l++
sections.push({
title: l,
rows: [
{ title: j.videos[x].author.name + ": " + j.videos[x].title, rowId: "$ytmp3 " + j.videos[x].url, description: "ÁUDIO: " + j.videos[x].timestamp },
{ title: j.videos[x].author.name + ": " + j.videos[x].title, rowId: "$ytmp4 " + j.videos[x].url, description: "VÍDEO: " + j.videos[x].timestamp }
]
})
}
conn.sendMessage(from, {
text: "Total: " + j.videos.length,
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
}, { quoted: { key : { participant : '0@s.whatsapp.net' }, 
message: {
imageMessage: {
"mimetype": "image/jpeg",
"caption": " ", 
"jpegThumbnail": await getBuffer(j.videos[0].image)
} } } })
break

case'ytmp3':
repls("📥")
try {
n = require('ytdl-core')
h = getRandom('.mp3')
b = await n(args.join(" "), { quality: '249' }).pipe(fs.createWriteStream(h))
b.on("finish", function () {
conn.sendMessage(from, { audio: fs.readFileSync(h), mimetype: "audio/mpeg" }).then(() => fs.unlinkSync(h) )
})
} catch (err) {
fs.unlinkSync(h)
return reply(config.msg.error.err)
}
break

case'ytmp4':
repls("📥")
try {
n = require('ytdl-core')
h = getRandom('.mp4')
b = await n(args.join(" "), { quality: '18' }).pipe(fs.createWriteStream(h))
b.on("finish", function () {
conn.sendMessage(from, { video: fs.readFileSync(h) }).then(() => fs.unlinkSync(h) )
})
} catch (err) {
fs.unlinkSync(h)
return reply(config.msg.error.err)
}
break

//YoutubeDownload

//GameAndTTT

case'ttt':
if (args[0] == undefined || !args[0].match("@")) return reply("Marque o oponente.")
mentionX = args[0].split("@")[1] + "@s.whatsapp.net"
x = check(from, database.game)
y = false
if (x) {
Object.keys(database.game[x].jogos).forEach((i) => {
if (database.game[x].jogos[i].x == sender || database.game[x].jogos[i].x == mentionX) {
y = i
}
if (database.game[x].jogos[i].o == sender || database.game[x].jogos[i].o == mentionX) {
y = i
}
})
if (y === false) {
database.game[x].jogos.push({ online: false, x: sender, o: mentionX, jogar: sender, finish: false, time: 0, winner: null, matrix: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"] })
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: `\`\`\`JØGØ DA VËLHA\`\`\`` + "\n\n@" + sender.replace("@s.whatsapp.net","") + `\`\`\` Desafiou você a uma partida de jogo da velha...\`\`\`` + "\n\n@" + mentionX.split("@")[0] + `\`\`\` Aceite digitando S or N\`\`\``, contextInfo: { mentionedJid: [sender, mentionX] } }, { quoted: m })
} else {
if (database.game[x].jogos[y].online) {
conn.sendMessage(from, { text: `\`\`\`Jogo em andamento... @\`\`\`` + database.game[x].jogos[y].x.split("@")[0] + `\`\`\` VS @\`\`\`` + database.game[x].jogos[y].o.split("@")[0] + "\n\n" + "❌: @" + database.game[x].jogos[y].x.split("@")[0] + "\n" + "⭕: @" + database.game[x].jogos[y].o.split("@")[0] + "\n\n" + `\`\`\`Sua Vez: @\`\`\`` + database.game[x].jogos[y].jogar.split("@")[0] + "\n\n" + database.game[x].jogos[y].matrix[0] + "  " + database.game[x].jogos[y].matrix[1] + "  " + database.game[x].jogos[y].matrix[2] + "\n" + database.game[x].jogos[y].matrix[3] + "  " + database.game[x].jogos[y].matrix[4] + "  " + database.game[x].jogos[y].matrix[5] + "\n" + database.game[x].jogos[y].matrix[6] + "  " + database.game[x].jogos[y].matrix[7] + "  " + database.game[x].jogos[y].matrix[8], contextInfo: { mentionedJid: [sender, database.game[x].jogos[y].o] } }, { quoted: m })
} else {
conn.sendMessage(from, { text: `\`\`\`Jogo em andamento... @\`\`\`` + database.game[x].jogos[y].x.split("@")[0] + `\`\`\` VS @\`\`\`` + database.game[x].jogos[y].o.split("@")[0] + "\n\n" + "❌: @" + database.game[x].jogos[y].x.split("@")[0] + "\n" + "⭕: @" + database.game[x].jogos[y].o.split("@")[0] + "\n\n" + `\`\`\`Sua Vez: @\`\`\`` + database.game[x].jogos[y].jogar.split("@")[0] + "\n\n" + database.game[x].jogos[y].matrix[0] + "  " + database.game[x].jogos[y].matrix[1] + "  " + database.game[x].jogos[y].matrix[2] + "\n" + database.game[x].jogos[y].matrix[3] + "  " + database.game[x].jogos[y].matrix[4] + "  " + database.game[x].jogos[y].matrix[5] + "\n" + database.game[x].jogos[y].matrix[6] + "  " + database.game[x].jogos[y].matrix[7] + "  " + database.game[x].jogos[y].matrix[8] + "\n" + `\`\`\`Aguardando confirmação...\`\`\``, contextInfo: { mentionedJid: [sender, database.game[x].jogos[y].o] } }, { quoted: m })
}
}
} else {
database.game.push({ id: from, jogos: [ { online: false, x: sender, o: mentionX, jogar: sender, finish: false, time: 0, winner: null, matrix: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"] } ] })
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: `\`\`\`JØGØ DA VËLHA\`\`\`` + "\n\n@" + sender.replace("@s.whatsapp.net","") + `\`\`\` Desafiou você a uma partida de jogo da velha...\`\`\`` + "\n\n@" + mentionX.split("@")[0] + `\`\`\` Aceite digitando S or N\`\`\``, contextInfo: { mentionedJid: [sender, mentionX] } }, { quoted: m })
}
break

case'deljogo':
x = check(from, database.game)
y = false
if (x) {
Object.keys(database.game[x].jogos).forEach((i) => {
if (database.game[x].jogos[i].x == sender) {
y = i
}
if (database.game[x].jogos[i].o == sender) {
y = i
}
})
if (y !== false && database.game[x].jogos[y].online == true && Date.now() >= database.game[x].jogos[y].time) {
reply("Jogo Resetado.")
database.game[x].jogos.splice(y, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
} else {
if (database.game[x].jogos[y].online) {
p = parseMs(database.game[x].jogos[y].time - Date.now())
u = database.game[x].jogos[y].online ? "Jogo em andamento...\nTempo restante: " + p.minutes + " Minutos " + p.seconds + " Segundos" : "Esgotado!"
reply(u)
} else {
reply("Jogo Resetado.")
database.game[x].jogos.splice(y, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
}
}
break

//GameAndTTT

//FunctionsExtra

case'print':
a = await axios.get("https://api.apiflash.com/v1/urltoimage?access_key=9943acd6d63341d1a759ebb1bfe0ae3c&format=png&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&quality=100&url=" + args.join(" "))
conn.sendMessage(from, { image: { url: a.data.url } }, { quoted: m })
break

case'getqr':
conn.sendMessage(from, { image: { url: "http://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(args[0]) +  "&ecc=L&margin=50&size=750x750" } }, { quoted: m })
break

case'readqr':
axios.get("http://api.qrserver.com/v1/read-qr-code/?fileurl=" + encodeURIComponent(args[0]) + "&outputformat=json")
.then((res) => {
if (res.data[0].symbol[0].error !== null) return reply("QrCode inválido.")
reply("Resposta do QrCode: " + res.data[0].symbol[0].data)
})
break

case'legenda':
nxs = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
sxs = await flonime(nxs)
gxs = args.join(" ").split('|')[0]
hxs = args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : " "
qxs = 'https://api.memegen.link/images/custom/' + gxs + '/' + hxs + '.png?background=' + sxs
conn.sendMessage(from, { image: { url: qxs } }, { quoted: m }).then(() => fs.unlinkSync(nxs))
break

case'fbwhatch':
repls('⏳')
a = await axios.get("https://fvid.party/?url=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
x = $('section#results').find('a').attr('href') || 'no'
y = $('section#results').find('a').attr('download') || 'no'
if (x == 'no') return reply("Não consegui baixar o video.")
conn.sendMessage(from, { video: { url: x }, caption: y }, { quoted: m })
break

case"traduzir": 
if (isQuotedMsg && type === "extendedTextMessage") {
repls("⏳")
a = require("@vitalets/google-translate-api")
b = await a(quotedMsg.conversation, { to: "pt" })
conn.sendMessage(from, { text: b.text }, { quoted: m })
} else {
repls("⏳")
a = require("@vitalets/google-translate-api")
c = await a(args.join(" "), { to: "pt" })
conn.sendMessage(from, { text: c.text }, { quoted: m })
}
break

case'dadosf':
repls('⏳')
a = await axios.get("https://www.invertexto.com/gerador-de-pessoas", {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
g = "Nome: " + $('input.form-control').eq(0).attr('value') + "\nCpf: " + $('input.form-control').eq(1).attr('value') + "\nTelefone: " + $('input.form-control').eq(2).attr('value') + "\nData de nascimento: " + $('input.form-control').eq(3).attr('value') + "\nIdade: " + $('input.form-control').eq(4).attr('value') + "\nCep: " + $('input.form-control').eq(6).attr('value') + "\nEndereço: " + $('input.form-control').eq(7).attr('value') + "\nCidade: " + $('input.form-control').eq(8).attr('value') + "\nEstado: " + $('input.form-control').eq(9).attr('value') + "\nEmail: " + $('input.form-control').eq(10).attr('value').split('@')[0] + "@gmail.com" + "\nSenha: " + $('input.form-control').eq(12).attr('value') + "\nAltura: " + $('input.form-control').eq(17).attr('value') + "\nPeso: " + $('input.form-control').eq(18).attr('value')
reply(g)
break

case'gm':
repls('⏳')
try {
n = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
s = await uploadFileUgu(n)
fs.unlinkSync(n)
o = await axios.get("https://www.google.com/searchbyimage?image_url=" + s.url, {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(o.data)
u = $('div.r5a77d').text().replace('Resultados para ', 'Resultados para: ') + "\n\n"
k = $('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').length
for (let i = 0; i < k; i++) {
q = $('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').eq(i).text() || "Indisponível"
p = $('div[class="VwiC3b MUxGbd yDYNvb"]').eq(i).text().split(" — ")[1] || "Indisponível"
v = $('a[class="cz3goc BmP5tf"]').eq(i).attr('href') || "Indisponível"
u += `❑ Titulo: ${q}\n❑ Descrição: ${p}\n❑ Link: ${v}\n\n`
}
reply(u)
} catch (err) {
return reply("Falha em fazer upload da imagem.")
}
break

case"greverse":
repls("⏳")
try {
a = require('googlethis')
n = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
s = await fileio(n)
fs.unlinkSync(n)
b = await a.search(s, { ris: true })
c = ""
Object.keys(b.results).forEach((x) => {
q = b.results[x].title || "Indisponível"
z = b.results[x].description || "Indisponível"
y = b.results[x].url || "Indisponível"
c += `❑ Titulo: ${q}\n❑ Descrição: ${z}\n❑ Url: ${y}\n\n`
})
reply(c)
} catch (err) {
return reply("Falha em fazer upload da imagem.")
}
break

case"google":
if (argx.length < 1 || argx.length > 50) return reply("?")
//repls("⏳")
a = require('googlethis')
b = await a.search(args.join(" "), { page: 0, safe: true })
c = ""
Object.keys(b.results).forEach((x) => { c += `❑ Titulo: ${b.results[x].title}\n❑ Descrição: ${b.results[x].description.replace("N/A", "Indisponível")}\n❑ Url: ${b.results[x].url}\n\n` })
conn.sendMessage(from, { text: c }, { quoted: m })
break

case'wikipedia':
a = await wikipedia(args.join(" "))
conn.sendMessage(from, { text: a }, { quoted: m })
break

case'ggs':
if (argx.length < 1 || argx.length > 50) return reply("?")
//repls("⏳")
a = require('google-it')
b = await a({ 'query': args.join(" ") })
c = ""
for (let i of b) { c += `❑ Titulo: ${i.title}\n❑ Descrição: ${i.snippet}\n❑ Link: ${i.link}\n\n` }
conn.sendMessage(from, { text: c }, { quoted: m })
break

case'ggimg':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = require('googlethis')
b = await a.image(args.join(" "), { page: 0, safe: true })
sections = [{title: "xyz", rows: []}]
for (let i = 0; i < b.length; i++) {
sections[0].rows.push({
title: b[i].origin.title,
rowId: "$imgx " + b[i].url
})
}
conn.sendMessage(from, {
text: b.length + " Resultados",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'imgx':
conn.sendMessage(from, { image: { url: args.join(" ") } }, { quoted: m })
break

case'igstalk':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = await fetch("https://www.instagram.com/" + args.join(" ") + "/?__a=1", {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
g = await a.json()
if (g.graphql == undefined) return reply("NotFound, Não encontrado.")
b = g.graphql.user
c = `Nome: ${b.full_name}\nID: ${b.id}\nSeguidores: ${b.edge_followed_by.count}\nSeguindo: ${b.edge_follow.count}\nPostagens: ${b.edge_owner_to_timeline_media.count}\n\n${b.biography}`
conn.sendMessage(from, { image: { url: b.profile_pic_url_hd }, caption: c, contextInfo: { externalAdReply: {
title: "Vizualizar @"+ b.username,
body: "Perfil",
mediaType: 1,
thumbnail: await getBuffer(b.profile_pic_url_hd),
sourceUrl: "https://instagram.com/" + b.username
} } })
break

case'gis':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
g = require('g-i-s')
g(args.join(" "), logResults)
function logResults(error, results) {
if (error) {
reply(config.msg.err)
} else {
h = results[Math.floor(Math.random() * results.length)]
if (h.url.match(/webp/)) return reply(config.msg.err)
conn.sendMessage(from, { image: { url: h.url } }, { quoted: m })
}
}
break

case'pinterest':
a = await pinterestSite(args.join(" "))
b = a[Math.floor(Math.random() * a.length)]
conn.sendMessage(from, { image: { url: b } }, { quoted: m })
break

case'pinteres':
a = await pinterest(args.join(" "))
b = a.result[Math.floor(Math.random() * a.result.length)]
conn.sendMessage(from, { image: { url: b } }, { quoted: m })
break

case'ddd':
if (argx.length < 1 || argx.length > 2) return reply("?")
repls("⏳")
d = await fetch(`https://brasilapi.com.br/api/ddd/v1/${args[0]}`)
e = await d.json()
if (e.type === "ddd_error") return reply("DDD inexistente")
z = `Estado: ${e.state}\nDDD: ${args.join(" ")}\n\n`
for (let i = 0; i < e.cities.length; i++) {
z += e.cities[i] + "\n"
}
z += "\nTotal: " + e.cities.length
conn.sendMessage(from, { text: z }, { quoted: m })
break

case'celular':
reply(aguardar)
xzs = await axios.get("https://www.maiscelular.com.br/fichas-tecnicas/?q=" + args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36",
}
})
$sz = cheerio.load(xzs.data)
knp = $sz('div.itemp').find('a').length
if (knp == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < knp; x++) {
sections[0].rows.push({
title: $sz('div.itemp').find('a').eq(x).find('strong').text(),
rowId: "$ficha https://www.maiscelular.com.br" + $sz('div.itemp').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, {
text: knp + " Resultados",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'ficha':
reply(aguardar)
xzs = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36",
}
})
$sz = cheerio.load(xzs.data)
cku = $sz('div.compvs_disp').find('a#hlkCapaPreco').find('img').attr('alt') || 'Sem informação:'
ksg = $sz('div.compvs_disp').find('a#hlkCapaPreco').find('span.preco').text() || ' $ 0000'
cvz = `${$sz('div.compvs_disp').find('a').find('img').attr('alt')}: ${cku} ${ksg}\n${$sz(`td:contains('CPU')`).parent().text().replace('CPU', 'CPU: ')}\n${$sz(`td:contains('Data lançamento')`).parent().text().replace('Data lançamento', 'Data lançamento: ')}\n${$sz(`td:contains('Versão do sistema')`).parent().text().replace('Versão do sistema', 'Versão do sistema: ')}\n${$sz(`td:contains('Atualização firmware')`).parent().text().replace('Atualização firmware', 'Atualização firmware: ')}\n${$sz(`td:contains('Memória RAM')`).parent().text().replace('Memória RAM', 'Memória RAM: ')}\n${$sz(`td:contains('Memória interna')`).parent().text().replace('Memória interna', 'Memória interna: ')}\n${$sz(`td:contains('Tipo da tela')`).parent().text().replace('Tipo da tela', 'Tipo da tela: ')}\n${$sz(`td:contains('Resolução')`).parent().eq(0).text().replace('Resolução', 'Resolução: ')}\n${$sz(`td:contains('Touchscreen')`).parent().text().replace('Touchscreen', 'Touchscreen: ')}\n${$sz(`td:contains('Capacidade bateria')`).parent().text().replace('Capacidade bateria', 'Capacidade bateria: ')}\n${$sz(`td:contains('Resolução câmera principal')`).parent().text().replace('Resolução câmera principal', 'Resolução câmera principal: ')}\n${$sz(`td:contains('Resolução câmera frontal')`).parent().text().replace('Resolução câmera frontal', 'Resolução câmera frontal: ')}\n${$sz(`td:contains('Tamanho')`).parent().eq(0).text().replace('Tamanho', 'Tamanho: ')}\n${$sz(`td:contains('Resistência à água e outros')`).parent().text().replace('Resistência à água e outros', 'Resistência à água e outros: ')}\n\n${$sz('div[itemprop="description"]').find('p').text()}`
conn.sendMessage(from, { image: { url: $sz('div.compvs_disp').find('a').find('img').attr('src') }, caption: cvz }, { quoted: m })
break

//FunctionsExtra

//ApkDownload

case'uptdown':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = await axios.get("https://br.uptodown.com/android/search/" + args.join(" ").replace(/ /g, "+"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.name').find('a').length
if (k == 0) {
return reply("Nenhum resultado encontrado.")
}
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.name').eq(x).find('a').text(),
rowId: "$uptload " + $('div.name').eq(x).find('a').attr('href'),
description: $('div.description').eq(x).text() || "Desconhecido"
})
}
conn.sendMessage(from, {
text: k + " Resultados",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'uptload':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
a = await axios.get(args.join(" ") + "/download", {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
s = {
url: $('a#detail-download-button').attr('href'),
title: $('h1#detail-app-name').text().replace(/\n/i, ""),
}
conn.sendMessage(from, { document: { url: s.url }, mimetype: "application/apk", fileName: s.title + '.apk' })
break

case'mcpe':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = await axios.get("https://mcpedl.org/?s=" + args.join(" ").replace(/ /g, "+"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('h2.entry-title').find('a').length
if (k == 0) {
return reply("Nenhum resultado encontrado.")
}
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('h2.entry-title').find('a').eq(x).text(),
rowId: "$minecraft " + $('h2.entry-title').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, {
text: k + " Versões",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'aptoide':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
apt = await superagent.get('https://ws75.aptoide.com/api/7/apps/search?query=' + args.join(" ").replace(/ /g, "+")).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
pts = apt._body.datalist.list
fgp = pts.length
if (fgp == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < fgp; x++) {
sections[0].rows.push({
title: pts[x].name,
rowId: prefix +  "aptdown " + pts[x].file.path_alt + ' ' + pts[x].name
})
}
conn.sendMessage(from, { text: fgp + " aplicativos", title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections })
break

case'aptdown':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
conn.sendMessage(from, { document: { url: args[0] }, mimetype: "application/apk", fileName: args[1] + '.apk' })
break

case'minecraft':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
b = await axios.get("https://mcpedl.org/dw_file.php?id=" + $('div.entry-buttons-wrap').find('a').attr('href').replace('/getfile/', ""), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
c = cheerio.load(b.data)
x = $('h1.entry-title').attr('content') + '.apk'
y = c('a.btn').attr('href')
conn.sendMessage(from, { document: { url: y }, mimetype: "application/apk", fileName: x })
break

case'instagram':
a = await axios("https://downloadgram.org/", {
method: "POST",
data:  new URLSearchParams(Object.entries({ url: args.join(" "), submit: "" })),
headers: {
"accept": "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
$ = cheerio.load(a.data)
h = $('html').html().split('rel="noopener noreferrer" href="')[1].split('"')[0].replace(/;/g, "&")
console.log(h)
if (h.includes('.mp4?')) {
conn.sendMessage(from, { video: { url: h } }, { quoted: m })
} else {
conn.sendMessage(from, { image: { url: h } }, { quoted: m })
}
break

case"insta":
h = await axios("https://www.w3toys.com/reels/", {
method: "POST",
data: new URLSearchParams(Object.entries({ link: args.join(" "), submit: "" })),
headers: {
"accept": "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
$ = cheerio.load(h.data)
h = $('html').html().split('rel="noopener noreferrer" href="')[1].split('"')[0].replace(/;/g, "&")
if (h.includes('.mp4?')) {
conn.sendMessage(from, { video: { url: h } }, { quoted: m })
} else {
conn.sendMessage(from, { image: { url: h } }, { quoted: m })
}
break

case'tiktok':
a = await tiktokdownloader(args.join(" "))
if (a.result.nowatermark == undefined) return reply('Falha no download.')
conn.sendMessage(from, { video: { url: a.result.nowatermark } }, { quoted: m })
break

case'face':
//try {
u = await axios.get('https://mobile.facebook.com/groups/1069589153882231/permalink/1140197906821355/?sfnsn=wiwspwa&ref=share&_rdc=1&_rdr', {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(u.data)
console.log($('title').text())
//console.log('https://mobile.facebook.com' + $('html').html().split('<div class="bz"><a href="')[1].split('"')[0])
//} catch (err) {
//reply('Falha.')//&#125;"><div class="by">/video_redirect/?src=https%3A%2F%2Fvideo-for1-1.xx.fbcdn.net
//}
break
//ApkDownload

//SearchAnimeAndFilmesAndHentai

case'anime':
wei = await superagent.get('https://animesonehd.xyz/?s=' + args.join(" ").replace(/ /g, "+")).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
$wi = cheerio.load(wei.text)
pwi = $wi('div.AnimesDesc').length
if (pwi == 0) return reply('Nenhum resultado.')
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < pwi; x++) {
sections[0].rows.push({
title: $wi('div.AnimesDesc').eq(x).text().split('–')[0].replace(/\n/g, ""),
rowId: prefix + "onehd " + $wi('article.AnimesItem').eq(x).find('a').attr('href')
})
}
conn.sendMessage(from, { text: pwi == 1 ? '1 resultado para está busca.' : pwi + ' resultados para está busca.', title: args.join(" "), buttonText: "SELECIONAR", sections })
break

case'onehd':
wei = await superagent.get(args.join(" ")).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
$wi = cheerio.load(wei.text)
swi = $wi('div#capaAnime').find('img').attr('src')
law = $wi(`b:contains('Episódios:')`).parent().text().match(/Lançamento/g) ? $wi(`b:contains('Dia de Lançamento:')`).parent().text() : $wi(`b:contains('Episódios:')`).parent().text()
taw = 'Titulo: ' + $wi('div.epTitulo').text().split('–')[0].replace(/\n/g, "") + '\n' + $wi(`b:contains('Formato:')`).parent().text() + '\n' + $wi(`b:contains('Gênero:')`).parent().text() + '\n' + $wi(`b:contains('Estúdio:')`).parent().text() + '\n' + $wi(`b:contains('Ovas:')`).parent().text() + '\n' + $wi(`b:contains('Ano:')`).parent().text() + '\n' + $wi(`b:contains('Autor:')`).parent().text() + '\n' + law + '\n\n' + $wi('div#sinopse2').text()
conn.sendMessage(from, { image: { url: swi }, caption: taw, contextInfo: { externalAdReply: { title: $wi('div.epTitulo').text().split('–')[0].replace(/\n/g, ""), mediaType: 1, thumbnail: await getBuffer(swi), sourceUrl: args.join(" ") } } })
break

case'animes':
mpi = await superagent.get('https://animesfalse.com/?s=' + args.join(" ").replace(/ /g, "+")).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
$mi = cheerio.load(mpi.text)
pmi = $wi('div.AnimesDesc').length
if (pmi == 0) return reply('Nenhum resultado.')
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < pmi; x++) {
sections[0].rows.push({
title: $mi('div.title').eq(x).find('a').text(),
rowId: prefix + "anifalse " + $mi('div.title').eq(x).find('a').attr('href')
})
}
conn.sendMessage(from, { text: pmi == 1 ? '1 resultado para está busca.' : pmi + ' resultados para está busca.', title: args.join(" "), buttonText: "SELECIONAR", sections })
break

case'anifalse':
mpi = await superagent.get(args.join(" ")).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
$mi = cheerio.load(mpi.text)
mui = $mi('div.bnt_gen').length
msi = ""
for (let x = 0; x < mui; x++) {
msi += $mi('div.bnt_gen').eq(x).find('a').text() + ', '
}
mei = $mi('div.capa_poster').find('img').attr('src')
mhi = 'Titulo: ' + $mi('h1').text() + '\nGênero: ' + msi + '\n' + $mi(`div.info-nome:contains('Temporadas')`).parent().text().replace(" ", "").replace('as', 'as:') + '\n' + $mi(`div.info-nome:contains('Episódios')`).parent().text().replace(" ", "").replace(' Episódios', '').replace('os', 'os:') + '\n' + $mi(`div.info-nome:contains('Ano')`).parent().text().replace(" ", "").replace('no', 'no:') + '\n' + $mi(`div.info-nome:contains('Duração média')`).parent().text().replace(" ", "").replace('ia', 'ia:') + '\n\n' + $mi('div.sinopse').find('p').text()
conn.sendMessage(from, { image: { url: mei }, caption: mhi, contextInfo: { externalAdReply: { title: $mi('h1').text(), mediaType: 1, thumbnail: await getBuffer(mei), sourceUrl: args.join(" ") } } })
break

case'filmes': 
reply(config.msg.await)
x = await axios.get("https://gofilmes.me/search.php?s=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
k = $('span.t-tit').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('span.t-tit').eq(x).text(),
rowId: "$thexs " + $('div.poster').eq(x).find('a').attr('href')
})
}
conn.sendMessage(from, {
text: " ",
title: k + " RESULTADOS",
buttonText: "SELECIONAR",
sections
})
break

case"thexs":
reply(config.msg.await)
x = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
s = {
duration: $(`strong:contains("Duração:")`).parent().text() || 'Indisponível',
audio: $(`strong:contains("Áudio:")`).parent().text() || 'Indisponível',
nota: $(`strong:contains("IMDb:")`).eq(0).parent().text() || 'Indisponível',
diretor: $(`strong:contains("Direção:")`).parent().text() || 'Indisponível',
desc: $(`strong:contains("Sinopse:")`).parent().text().replace('Sinopse: ', '') || 'Indisponível',
title: $('h2').text() || 'Indisponível',
img: $('div.bg').find('img').attr('src') || 'Indisponível',
category: $('div.col-2').find('a').eq(0).attr('title').split("Filmes de ")[1] || 'Indisponível'
}
k = $('div.link').find('a').length
if (k >= 4) k = 3
templateButtons = []
for (let x = 0; x < k; x++) {
templateButtons.push({
urlButton: { displayText: $('div.link').find('a').eq(x).text(), url : $('div.link').find('a').eq(x).attr('href') }
})
}
conn.sendMessage(from, {
image: { url: s.img },
caption: `Titulo: ${s.title}\nCategoria: ${s.category}\n${s.duration}\n${s.audio}\n${s.diretor}\n${s.nota}\n\n${s.desc}`,
templateButtons
})
break

case'films': 
reply(config.msg.await)
x = await axios.get("https://filmeseries.top/search.php?s=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
k = $('div.poster').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.poster-nome').eq(x).text(),
rowId: "$westx " + $('div.poster').eq(x).find('a').attr('href')
})
}
conn.sendMessage(from, {
text: " ",
title: k + " RESULTADOS",
buttonText: "SELECIONAR",
sections
})
break

case"westx":
reply(config.msg.await)
x = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
s = {
duration: $('div.info').eq(1).text(),
upload: $('div.info').eq(0).text(),
nota: $('div.rate').text(),
desc: $('span.sinopse').text().replace(/\n/g, ''),
title: $('div.tt').text(),
img: $('div.capa').find('img').attr('src'),
category: $('div.info').eq(2).text()
}
k = $('div.player').find('a').length
if (k >= 4) k = 3
templateButtons = []
for (let x = 0; x < k; x++) {
templateButtons.push({
urlButton: { displayText: $('div.player').find('a').eq(x).text(), url : $('div.player').find('a').eq(x).attr('href') }
})
}
conn.sendMessage(from, {
image: { url: s.img },
caption: `Titulo: ${s.title}\nCategoria: ${s.category}\nDuração: ${s.duration}\nLançamento: ${s.upload}\nNota: ${s.nota}\n\n${s.desc}`,
templateButtons
})
break

case'nhentai': 
reply(config.msg.await)
x = await axios.get("https://nhentai.net.br/?s=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
k = $('span.thumb-titulo').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('span.thumb-titulo').eq(x).text().split(']')[1],
rowId: "$westh " + $('div.thumb-conteudo').eq(x).find('a').eq(1).attr('href')
})
}
conn.sendMessage(from, {
text: " ",
title: k + " RESULTADOS",
buttonText: "SELECIONAR",
sections
})
break

case'westh': 
reply(config.msg.await)
x = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(x.data)
k = $('ul.post-fotos').find('img').length
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('ul.post-fotos').find('img').eq(x).attr('alt'),
rowId: "$westhx " + $('ul.post-fotos').find('img').eq(x).attr('src')
})
}
n = $(`strong:contains("Categorias:")`).parent().text().replace('Hentai', 'Hentai ').replace('Doujinshi', 'Doujinshi ').replace('Hentai Sem Censura', 'Hentai Sem Censura ').replace('One-Shot', 'One-Shot ').replace('Mangá Hengai', 'Mangá Hentai ').replace('Animes Hentai', 'Animes Hentai ').replace('Hentai 3D', 'Hentai 3D ').replace('Comics', 'Comics ').replace('Imagens', 'Imagens ').replace('Jav', 'Jav ').replace('Hentai Yaoi', 'Hentai Yaoi ').replace('Futanari', 'Futanari ').replace('Anal', 'Anal ').replace('Virgem', 'Virgem ')
g = $(`strong:contains("Tags:")`).parent().text().replace('Ahegao', 'Ahegao ').replace('Biquíni', 'Biquíni ').replace('Bondage', 'Bondage ').replace('Boquete', 'Boquete ').replace('Brinquedos Sexuais', 'Brinquedos Sexuais ').replace('Camisinha', 'Camisinha ').replace('Colegial', 'Colegial ').replace('Creampie', 'Creampie ').replace('Dark Skin', 'Dark Skin ').replace('Dormindo', 'Dormindo ').replace('Dupla Penetração', 'Dupla Penetração ').replace('Elfa', 'Elfa ').replace('Anal', 'Anal ').replace('Empregada', 'Empregada ').replace('Enfermeira', 'Enfermeira ').replace('Exibicionismo', 'Exibicionismo ').replace('Footjob', 'Footjob ').replace('Furry', 'Furry ').replace('Futanari', 'Futanari ').replace('Garota Demônio', 'Garota Demônio ').replace('Gordinha', 'Gordinha ').replace('Gravidez', 'Gravidez ').replace('Grupal', 'Grupal ').replace('Harém', 'Harém ').replace('Incesto', 'Incesto ').replace('Lingerie', 'Lingerie ').replace('Maiô', 'Maiô ').replace('Masturbação', 'Masturbação ').replace('MILF', 'MILF ').replace('Natal', 'Natal ').replace('Netorare', 'Netorare ').replace('Óculos', 'Óculos ').replace('Onahole', 'Onahole ').replace('Paizuri', 'Paizure ').replace('Pau Grande', 'Pau Grande ').replace('Peitinhos', 'Peitinhos ').replace('Peitões', 'Peitôes ').replace('Pelos Pubianos', 'Pelos Pubianos ').replace('Professora', 'Professora ').replace('Raio-X', 'Raio-X ').replace('Romance', 'Romance ').replace('Succubus', 'Succubus ').replace('Tentáculos', 'Tentáculos ').replace('Tomboy', 'Tomboy ').replace('Trap', 'Trap ').replace('Yaoi', 'Yaoi ').replace('Yuri', 'Yuri ')
h = $(`strong:contains("Cor:")`).parent().text()
o = $(`strong:contains("Páginas")`).parent().text()
z = $('h1.post-titulo').find('span').text()
conn.sendMessage(from, {
text: n + '\n' + g + '\n' + h + '\n' + o,
title: z,
buttonText: "SELECIONAR",
sections 
})
break

case'westhx':
reply("Aguarde... Enviando.")
conn.sendMessage(from, { image: { url: args.join(" ") } }, { quoted: m })
break

//SearchAnimeAndFilmesAndHentai

case'itr':
conn.sendMessage(from, { text: "nha" }, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },
message: { 
"extendedTextMessage": {
"text": " ",
"title": " ",
"jpegThumbnail": fs.readFileSync("./img.jpg")
}
} 
} })
break

//Xvideos

case'xvideos':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
try {
a = await axios.get("https://www.xvideos.com/?k=" + args.join(" ").replace(/ /g, "+") + "&sort=random")
$ = cheerio.load(a.data)
k = $('p.title').length
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('p.title').eq(x).find('a').attr('title'),
rowId: "$nft " + "https://www.xvideos.com" + $('p.title').eq(x).find('a').attr('href'),
description: $('p.metadata').eq(x).find('span.name').text() + " " + $('p.title').eq(x).find('a').find('span.duration').text()
})
}
conn.sendMessage(from, {
text: k + " videos",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
} catch (err) {
return reply("Nenhum resultado.")
}
break

case'nft':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
try {
a = await axios.get(args.join(" "))
$ = cheerio.load(a.data)
s = {
title: $('title').text().replace(" - XVIDEOS.COM", ""),
profile: $('div.video-metadata').find('span.name').eq(0).text(),
views: $('div#v-views').find('strong.mobile-hide').text(),
url: $('html').html().split("html5player.setVideoUrlHigh('")[1].split("');")[0]
}
conn.sendMessage(from, { document: { url: s.url }, mimetype: "video/mp4", fileName: s.title + ".mp4" })
} catch (err) {
return reply(config.msg.err)
}
break

//Xvideos

//AnimeDownload

case'search':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = await axios.get("https://veranimesbr.com/?s=" + args.join(" ").replace(/ /g, "+"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.aniItem').find('a').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.aniItem').find('a').eq(x).find('h2.aniTitulo').text(),
rowId: "$xvx " + $('div.aniItem').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, {
text: k + " animes",
title: "Resultados para: " + args.join(" ") || "Home",
buttonText: "SELECIONAR",
sections
})
break

case'xvx':
repls("⏳")
try {
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.epiRes').length
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.epiTipo').eq(x).text(),
rowId: "$xvvx " + $('div.epiItem').find('a').eq(x).attr('href'),
description: $('div.epiRes').eq(x).text()
})
}
conn.sendMessage(from, {
text: `${$(`b:contains("Estúdio:")`).parent().text()}\n${$(`b:contains("Status:")`).parent().text()}\nLançamento: ${$(`b:contains("Ano:")`).parent().text().replace("Ano: ", "")}\n\n${$('div.animeSinopseContainer').find('p').text()}`,
title: $('h1').text().replace("Online - Ver Animes BR", ""),
buttonText: "SELECIONAR",
sections
})
} catch (err) {
return reply(config.msg.err)
}
break

case'xvvx':
try {
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
s = $('title').text().split('Assistir ')[1].split(' - Ver Animes BR')[0] + ".mp4"
k = $('html').html().split('window.open("')[1].split('"')[0]
conn.sendMessage(from, { document: { url: k }, mimetype: "video/mp4", fileName: s })
} catch (err) {
return reply("Falha em fazer o download.")
}
break

case'animefan':
if (argx.length < 1 || argx.length > 50) return reply("?")
repls("⏳")
a = await axios.get("https://animefan.cc/?s=" + args.join(" ").replace(/ /g, "+"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('article.Animes_Ani').find('a').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('article.Animes_Ani').find('a').eq(x).attr('title'),
rowId: "$xfnx " + $('article.Animes_Ani').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, {
text: k + " Resultados",
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'xfnx':
repls("⏳")
try {
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.paginacao').find('a.page-numbers').length
u = []
for (let x = 0; x < k; x++) {
u.push($('div.paginacao').find('a.page-numbers').eq(x).attr('href'))
}
n = u.filter((i, l) => u.indexOf(i) == l)
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < n.length; x++) {
e = await axios.get(n[x], {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
g = cheerio.load(e.data)
for (let o = 0; o < g('div#listaEpisodios').find('a').length; o++) {
sections[0].rows.push({
title: g('div#listaEpisodios').find('a').eq(o).attr('title').split("Online")[0],
rowId: "$xfsx " + g('div#listaEpisodios').find('a').eq(o).attr('href')
})
}
}
conn.sendMessage(from, {
text: $(`strong:contains("Gênero:")`).parent().text().replace(/\n/g, "") + "\n" + $(`strong:contains("Estúdio:")`).parent().text().replace(/\n/g, "") + "\n" + $(`strong:contains("Status:")`).parent().text().replace(/\n/g, "") + "\n\n" + $(`strong:contains("Sinopse:")`).parent().text().replace(/\n/g, "").replace("Sinopse: ", ""),
title: $(`strong:contains("Nome:")`).parent().text().replace(/\n/g, "").replace("Nome: ", ""),
buttonText: "SELECIONAR",
sections
})
} catch (err) {
reply(config.msg.err)
}
break

case'xfsx':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
try {
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
x = $('h1.boxtPlayer').text().replace(/\n/g, "") + '.mp4'
y = $('div.video').find('video#my-video').find('source').attr('src')
conn.sendMessage(from, { document: { url: y }, mimetype: "application/apk", fileName: x })
} catch (err) {
return reply("Falha em fazer o download.")
}
break

case'animefire':
if (argx.length < 1 || argx.length > 50) return reply("?")
//repls("⏳")
a = await axios.get("https://animefire.net/pesquisar/" + args.join(" ").replace(/ /g, "-"), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.card-group').find('a').length
if (k == 0) return reply("Nenhum resultado encontrado.")
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('h3.animeTitle').eq(x).text(),
rowId: "$xax " + $('div.card-group').find('a').eq(x).attr('href'),
description: $('span.horaUltimosEps').eq(x).text()
})
}
conn.sendMessage(from, {
text: k + " Resultados",
title: "Pesquisado por: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
break

case'xax':
//repls("⏳")
try {
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('div.div_video_list').find('a').length
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.div_video_list').find('a').eq(x).text(),
rowId: "$xbx " + $('div.div_video_list').find('a').eq(x).attr('href').replace("animes", "download")
})
}
conn.sendMessage(from, {
text: `${$(`b:contains("Status do Anime:")`).parent().text().replace(" ", "").replace(" ", "")}\n${$(`b:contains("Estúdios:")`).parent().text().replace(" ", "").replace(" ", "")}\n${$(`b:contains("Ano:")`).parent().text().replace(" ", "").replace(" ", "").replace("Ano:", "Lançamento:")}\n\n${$(`b:contains("Sinopse:")`).parent().text().replace(" Sinopse:  ", "")}`,
title: $('h1').text(),
buttonText: "SELECIONAR",
sections
})
} catch (err) {
reply(config.msg.err)
}
break

case'xbx':
//repls("⏳")
try {
a = await axios.get(args.join(" "), {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
k = $('html').html().match(/<a download=/g).length
sections = [{title: "xyz", rows: []}]
for (let x = 0; x < k; x++) {
sections[0].rows.push({
title: $('div.d-flex').find('a').eq(x).text(),
rowId: "$xcx " + $('div.d-flex').find('a').eq(x).attr('href')
})
}
conn.sendMessage(from, {
text: k + " Disponíveis",
title: "Escolha a qualidade de video.",
buttonText: "SELECIONAR",
sections
})
} catch (err) {
reply(config.msg.err)
}
break

case'xcx':
reply("Fazendo download... Aguarde. Pôde demorar um pouco.")
try {
conn.sendMessage(from, { document: { url: args.join(" ") }, mimetype: "video/mp4", fileName: args.join(" ").split("[AnimeFire.net] ")[1] + '.mp4' })
} catch (err) {
reply("Falha em fazer o download.")
}
break

//AnimeDownload

//BannerCommands

//TextoUnico

case"hacker":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["984dd03e-220d-4335-a6ba-7ac56b092240", "71074346-5cb3-4b7d-9b8b-a84e4f142ba4", "88bacc38-e755-450a-bbc1-f5671d77c8a7"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"angel":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["df2d7c1e-7319-4157-a02c-0c7f71f41cc3", "868cf218-c4c9-432a-b737-8d43ecdc580c", "c542dab0-ea54-44a5-9976-c6af66f71d9c", "7cdb6c7b-1c37-41c6-b50d-500c6111833d", "a60760ea-f266-4064-bde0-8d02f174254d", "a5cbd215-ac33-46e2-97e5-5bd6e1c800b3", "6ac134d1-f593-499d-8641-e7ce45af680e", "c82cbc01-e167-47bb-8714-02b073c3738d"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"soldado":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["9424ca60-11e4-4904-86b9-10ecf2442f5c", "eafc98ed-6ba6-4a30-88e1-e73b059eeca1", "a2983d77-ca9d-4d95-b5fe-06c65f59f8cd", "a381c3b1-7505-4299-9d8a-a6c92f6ef228"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"logo":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["1508810c-a33b-4261-ad04-48dea8932865", "a04d53f2-1449-4491-9f96-041e7ea7c47d", "42d73af1-9c38-43b5-abdb-de0bb435dfbe", "3a75b5da-ec04-4216-8c4e-c900359cfd0d", "200c1bb0-cb27-4838-80c8-d140867c1739", "26fd6ea7-92b5-4747-9de5-c537289e2318", "cd5465d9-9c5e-4d08-9f1b-3b9f3a45a858"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"freefire":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["4a479eb7-49a4-4246-a940-21e04deaa034", "09bc04ad-8ffb-4ba0-8785-fef9e8b3e9f7", "2206787c-e5df-4dd1-a764-2a92efa5d874", "fcfd610d-9d82-43cb-81e6-edce7ff9f748", "0ab2892e-876f-472c-9527-84c92775d5dd", "ce67e7f4-f686-470a-bd82-4f6b5d00e3b0", "a755d11c-24d3-4d96-850e-1fd7422e7ca4", "1acee5af-85c5-4d95-b094-d3de3c015e58", "1cde3da2-d4c5-4e62-977d-4fcfe11227f9", "8bea6f94-2410-4041-91f7-510a2406cee3", "5d3ab9be-f632-478e-97f1-06909af65f89", "d2e568d6-fbc9-4551-afdc-325dc386a892", "126b33de-e5e4-4b56-90ab-0bc9d6c89eee", "3f8db561-d7ea-4695-91a6-ca7f480330fb", "6fceb9a9-ad87-43b0-8ada-40b305ee6491", "cd28234a-77e4-48df-8b97-881e8d017e55", "e1ca407e-cfe3-43a9-a59c-56bc7f4d9055", "7d42e33c-6b8b-4ce7-bc77-0f708d187deb", "6407f152-1529-45e5-9ff1-afff870e84de", "7f044e87-0a33-4e01-b131-c9a1eebf2531", "5b5411eb-369f-49d1-bb7c-7325f15cdf40", "a837624c-2d78-4be9-a019-1f86eaa7e0f3", "96bbc10f-6cec-4193-ad18-af7d692837b0"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"gaming":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["87f0f8f1-fa23-4417-8a94-ba6c0b371635", "ced7cbe7-f8e5-4db1-b1cd-cb13d1dd1d52", "f42255ff-a569-41a0-8f33-acc269a52921", "8a37f145-b22f-4054-9eb4-113d84129a08", "a37c9d01-8c15-422e-ab02-b7cea4556745", "b79db6e6-4230-4f90-abab-388de6800f83", "2738bb7d-95dd-49e6-b7fd-43e90f1d77b2", "4feaddcf-8623-4a68-bb6d-e70ab0081642", "98aff386-d5ea-470f-aa88-032b1257ed61", "478263bb-3913-4dce-b827-cc09ce4c0b5e", "5c650d06-328d-486e-8f4a-311eb5942001", "d80b45dd-c23d-4e76-af69-a24e59ad73bc", "594b82d8-fed4-43a3-8b39-b8359d1bdb18", "df4302f5-e7ff-4cba-a3ed-2559d6d4cf6a"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case"team":
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
b = ["r4o5wsey1", "d8f5f0x19", "vlqxqbknu", "df9c5iu0o", "g2cnx1qud", "8rewm9ker", "orlnd1jpd", "494bu708o", "83hscot72", "uz62srd8q", "u0jzc2s0m", "n44ofsn5a", "6jnveqwxq", "t79vujrpa", "rc3mgmhml", "0g71vg2s8", "4bltauy76", "rxplur13r", "dx729wun2"]
c = b[Math.floor(Math.random() * b.length)]
d = await a.ephoto4("https://en.ephoto360.com/make-team-logo-online-free-432.html", [args.join(" ")], c)
e = "https://s1.ephoto360.com" + d.image
await conn.sendMessage(from, { image: { url: e }, contextInfo: { isForwarded: true } })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'glitch2':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'matrix':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'thunder':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'broken':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'1917':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'break':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/break-wall-text-effect-871.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'bear':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'joker':
if (argx == "") return reply(config.msg.textU.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-logo-joker-online-934.html", [args.join(" ")])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

//TextoUnico

//TextoDuplo

case'phlogo':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'wolf':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'glitch':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'stone':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 25) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'lion':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

case'marvel':
if (argx == "" || !argx.includes('|')) return reply(config.msg.textD.replace('#p', prefix).replace('#c', command))
if (argx.length > 15) return reply(config.msg.maximo)
try {
reply(aguardar)
a = require("mintake")
await a.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [args.join(" ").split("|")[0], args.join(" ").split("|")[1]])
.then(async(data) => { await conn.sendMessage(from, { image: { url: data }, contextInfo: { isForwarded: true } }) })
} catch (err) {
return reply(config.msg.error.err)
}
break

//TextoDuplo

//BannerCommands

//StickersCommand
case'sticker':
try {
if (iImage || iQimage) {
reply("⏳")
cuba = await downloadMediaMessage("image", m)
venezuela = await writeExifImg512(cuba, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: venezuela } }, { quoted: m })
await fs.unlinkSync(venezuela)
}
if (iVideo || iQvideo) {
reply("⏳")
cuba = await downloadMediaMessage("video", m)
venezuela = await writeExifVid512(cuba, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: venezuela } }, { quoted: m })
await fs.unlinkSync(venezuela)
}
} catch (err) {
return reply(config.msg.err)
}
break

case'st':
try {
if (iImage || iQimage) {
reply("🔥")
cuba = await downloadMediaMessage("image", m)
venezuela = await writeExifImg200(cuba, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: venezuela } }, { quoted: m })
await fs.unlinkSync(venezuela)
}
if (iVideo || iQvideo) {
reply("⏳")
cuba = await downloadMediaMessage("video", m)
venezuela = await writeExifVid200(cuba, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: venezuela } }, { quoted: m })
await fs.unlinkSync(venezuela)
}
} catch (err) {
return reply(config.msg.err)
}
break

case'f':
try {
if (iImage || iQimage) {
repls("⏳")
russia = getRandom('.webp')
servia = await downloadAndSaveMediaMessage("image", getRandom('.jpeg'), m)
exec(`ffmpeg -i ${servia} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${russia}`, async (err) => {
paraguai = await writeExif(russia, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: paraguai } }, { quoted: m })
await fs.unlinkSync(servia)
await fs.unlinkSync(paraguai)
await fs.unlinkSync(russia)
})
}
if (iVideo || iQvideo) {
repls("⏳")
mexico = getRandom('.webp')
europeia = await downloadAndSaveMediaMessage("video", getRandom('.mp4'), m)
exec(`ffmpeg -i ${europeia} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${mexico}`, async (err) => {
inglaterra = await writeExif(mexico, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: inglaterra } }, { quoted: m })
await fs.unlinkSync(europeia)
await fs.unlinkSync(mexico)
await fs.unlinkSync(inglaterra)
})
}
} catch (err) {
return reply(config.msg.err)
}
break

case'take':
try {
if (!iQsticker) return reply('Apenas sticker.')
repls("⏳")
uruguai = await downloadAndSaveMediaMessage('sticker', getRandom('.webp'), m)
mediterraneo = await writeExif(uruguai, { packname: argx.split('|')[0] ? argx.split('|')[0] : groupName, author: argx.split('|')[1] ? argx.split('|')[1] : pushName })
await conn.sendMessage(from, { sticker: { url: mediterraneo } }, { quoted: m })
await fs.unlinkSync(uruguai)
await fs.unlinkSync(mediterraneo)
} catch (err) {
return reply(config.msg.error.err)
}
break

case"clf":
if (!iImage || !iQimage) return reply('Apenas imagem.')
repls("⏳")
y = await downloadAndSaveMediaMessage("image", getRandom('.png'), m)
g = await stickerCircle(y, "BOT", "@nause.dreams", "sexo")
conn.sendMessage(from, { sticker: g.result }, { quoted: m }).catch((err) => { return reply(config.msg.err) })
break

case'stickers':
if (argx.length < 1 || argx.length > 20) return reply("?")
repls("⏳")
try {
a = await axios.get("https://tenor.com/search/" + args.join(" ").replace(/ /g, "-") + "-gifs", {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" 
} })
$ = cheerio.load(a.data)
b = $('html').html().match(/GifFavButton/g).length
sections = [{title: "xyz", rows: []}]
for (let i = 0; i < b; i++) {
sections[0].rows.push({
title: $('div.Gif').eq(i).find('img').attr('src').split("/")[4].split(".gif")[0].replace(/-/g, " "),
rowId: "$twestr " + $('div.Gif').eq(i).find('img').attr('src'),
description: " "
})
}
conn.sendMessage(from, {
text: "Total: " + b,
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
})
} catch (err) {
return reply("Error, nenhuma figura encontrada.")
}
break

case'twestr':
repls("📥")
equador = getRandom('.gif')
colombia = getRandom('.webp')
exec(`wget ${argx} -O ${equador} && ffmpeg -i ${equador} -vcodec libwebp -filter:v fps=fps=${config.fps} -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${colombia}`, async (err) => {
if (err) return reply(config.msg.err)
congo = await writeExif(colombia, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: congo } }, { quoted: m })
await fs.unlinkSync(congo)
await fs.unlinkSync(equador)
await fs.unlinkSync(colombia)
})
break

case'ext':
addMetadata("BOT", "Multi-Device")
break

case'semoji':
if (argx.length < 1 || argx.length > 2) return reply("?")
repls("⌛")
try {
const { EmojiAPI } = require("emoji-api")
emoji = new EmojiAPI()
emoji.get(args[0]).then((emoji) => {
campo = getRandom('.png')
eggs = getRandom('.webp')
exec(`wget ${emoji.images[0].url} -O ${campo} && ffmpeg -i ${campo} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${eggs}`, async (err) => {
juice = await writeExif(eggs, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: juice } }, { quoted: m })
await fs.unlinkSync(eggs)
await fs.unlinkSync(juice)
await fs.unlinkSync(campo)
})
})
} catch (err) {
return reply("Error, emoji não encontrado.")
}
break

case'emojimix':
if (argx.length < 1) return reply("?")
repls("⌛")
try {
porta = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(argx.split('+')[0])}_${encodeURIComponent(argx.split('+')[1])}`)
urrar = getRandom('.png')
latir = getRandom('.webp')
exec(`wget ${porta.data.results[0].url} -O ${urrar} && ffmpeg -i ${urrar} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${latir}`, async (err) => {
mexer = await writeExif(latir, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: mexer } }, { quoted: m })
await fs.unlinkSync(urrar)
await fs.unlinkSync(latir)
await fs.unlinkSync(mexer)
})
} catch (err) {
return reply("Mix impossível ou à api caiu.")
}
break

case'attp':
if (argx.length < 1 || argx.length > 30) return reply("?")
repls("⌛")
try {
palestina = getRandom('.webp')
couro = await axios.get("https://api.xteam.xyz/attp?file&text=" + encodeURIComponent(args.join(" ")), {
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" 
},
responseType: 'arraybuffer'
})
fs.writeFileSync(palestina, couro.data)
israel = await writeExif(palestina, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: israel } }, { quoted: null })
await fs.unlinkSync(palestina)
await fs.unlinkSync(israel)
} catch (err) {
return reply("Error, à api deve ter caido.")
}
break

case"addf":
if (!iQsticker) return reply("Apenas figurinhas.")
camboja = argx ? argx : hex(5)
if (verify(camboja, database.sticker)) {
reply("Já existe uma figurinha com este mesmo nome. Tente outro...")
} else {
reply("Figurinha adicionada... você pode ver a lista de figurinhas usando: " + prefix + 'listf')
database.sticker.push(camboja)
await downloadAndSaveMediaMessage('sticker', './src/stickers/' + camboja + '.webp', m)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'listf':
laos = "Lista de figurinhas:\n\n"
for (let i of database.sticker) {
laos += i + '\n'
}
laos += '\nTotal: ' + database.sticker.length + '\nVocê pode pegar uma figurinha com o comando: ' + prefix + 'getf "figurinha"'
conn.sendMessage(from, { text: laos }, { quoted: verificado(config.quoted) })
break

case'getf':
if (verify(argx, database.sticker)) {
conn.sendMessage(from, { sticker: fs.readFileSync('./src/stickers/' + argx + '.webp') }, { quoted: m })
} else {
laos = "Figurinha não encontrada... disponíveis:\n\n"
for (let i of database.sticker) {
laos += i + '\n'
}
laos += '\nTotal: ' + database.sticker.length
conn.sendMessage(from, { text: laos }, { quoted: verificado(config.quoted) })
}
break

//StickersCommand

case'dono': case'owner': case'criador':
vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Carlos</xyz>\n' 
+ 'ORG:Bot developer WA;\n'
+ 'TEL;type=CELL;type=VOICE;waid=559984620740:+55 99 8462-0740\n'
+ 'X-WA-BIZ-NAME:Carlos</xyz>\n'
+ 'X-WA-BIZ-DESCRIPTION:Multi Device\n'
+ 'END:VCARD'
conn.sendMessage(from, { contacts: { displayName: 'Carlos</xyz>', contacts: [{ vcard }] } })
break

case'gp':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (metadata.announce) {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Abrir?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Fechar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
conn.groupSettingUpdate(from, 'not_announcement')
}
if (args[0] == 0) {
conn.groupSettingUpdate(from, 'announcement')
}
} else {
return reply(config.msg.negar)
}
break

case'ephemeral':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (metadata.ephemeralDuration == undefined || 0) {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
conn.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
}
if (args[0] == 0) {
conn.sendMessage(from, { disappearingMessagesInChat: false })
}
} else {
return reply(config.msg.negar)
}
break

//FunctionsAtivação

case'autofigura':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.autofigura)) {
conn.sendMessage(from, { text: "Desativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Ativar?", headerType: 1, buttons: [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.autofigura)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.autofigura.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: config.msg.ativar.replace('#r', command) }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.autofigura)) {
database.autofigura.splice(verify(from, database.autofigura), 1)
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

case'welcome':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.wellcome)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.wellcome)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.wellcome.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso WELCOME foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.wellcome)) {
database.wellcome.splice(verify(from, database.wellcome), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso WELCOME foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'welcometxt':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.wellcomeText)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.wellcomeText)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.wellcomeText.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso WELCOME TEXT foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.wellcomeText)) {
database.wellcomeText.splice(verify(from, database.wellcomeText), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso WELCOME TEXT foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'antifake':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antifake)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antifake)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antifake.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTIFAKE foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antifake)) {
database.antifake.splice(verify(from, database.antifake), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTIFAKE foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'leveis':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.leveling)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.leveling)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.leveling.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso LEVEIS foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.leveling)) {
database.leveling.splice(verify(from, database.leveling), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso LEVEIS foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'antilink':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antilinkN)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antilinkN)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antilinkN.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTILINK foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antilinkN)) {
database.antilinkN.splice(verify(from, database.antilinkN), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTILINK foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'antilinkhard':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.antilinkH)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.antilinkH)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.antilinkH.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTILINK HARD foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.antilinkH)) {
database.antilinkH.splice(verify(from, database.antilinkH), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso ANTILINK HARD foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'simi':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.simi)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.simi)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.simi.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso SIMI foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.simi)) {
database.simi.splice(verify(from, database.simi), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso SIMI foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'x9':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.x9)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.x9)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.x9.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso X9 foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.x9)) {
database.x9.splice(verify(from, database.x9), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso X9 foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'badword':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.badword)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.badword)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.badword.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso BADWORD foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.badword)) {
database.badword.splice(verify(from, database.badword), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso BADWORD foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'nsfw':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.nsfw)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.nsfw)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.nsfw.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso NSFW foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.nsfw)) {
database.nsfw.splice(verify(from, database.nsfw), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso NSFW foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'autologin':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.autologin)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.autologin)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.autologin.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso AUTOLOGIN foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.autologin)) {
database.autologin.splice(verify(from, database.autologin), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso AUTOLOGIN foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

case'usedcommand':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) {
if (verify(from, database.usedNewCommand)) {
buttons = [{ buttonId: prefix + command + ' 0', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Desativar?",
headerType: 1,
buttons
}, { quoted: m })
} else {
buttons = [{ buttonId: prefix + command + ' 1', buttonText: { displayText: 'SIM' }, type: 1}]
conn.sendMessage(from, {
text: "Ativar?",
headerType: 1,
buttons
}, { quoted: m })
}
}
if (args[0] == 1) {
if (verify(from, database.usedNewCommand)) {
conn.sendMessage(from, { text: "Este grupo já está incluso." }, { quoted: m })
} else {
database.usedNewCommand.push(from)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso USEDCOMMAND foi ativo neste grupo." }, { quoted: m })
}
}
if (args[0] == 0) {
if (verify(from, database.usedNewCommand)) {
database.usedNewCommand.splice(verify(from, database.usedNewCommand), 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "O recurso USEDCOMMAND foi desativado neste grupo." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este grupo não está incluso." }, { quoted: m })
}
}
} else {
return reply(config.msg.negar)
}
break

//FunctionsAtivação

//GetLevelAndCommands

case'atividade':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) return reply("Checar todos? -all. Determinado número? número de mensagens após o comando.")
if (args[0].match("-all")) {
v = check(from, database.level)
if (v) {
database.level[v].data.sort((a, b) => (a.message < b.message) ? 1 : -1)
x = ""
y = []
z = 0
n = database.level[v].data.length
for (let i = 0; i < n; i++) {
z++
x += `${z}
❑ Usuário: @${database.level[v].data[i].user.split('@')[0]}
❑ Mensagens: ${database.level[v].data[i].message}
❑ Comandos dados: ${database.level[v].data[i].command}\n\n`
y.push(database.level[v].data[i].user)
}
conn.sendMessage(from, { text: x, contextInfo: { mentionedJid: y } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
} else {
v = check(from, database.level)
u = args[0]
if (v) {
database.level[v].data.sort((a, b) => (a.message < b.message) ? 1 : -1)
x = "Membros com " + u + " Mensagens ou menos:\n\n"
y = []
z = 0
n = database.level[v].data.length
for (let i = 0; i < n; i++) {
if (database.level[v].data[i].message <= u) {
z++
x += `${z}
❑ Usuário: @${database.level[v].data[i].user.split('@')[0]}
❑ Mensagens: ${database.level[v].data[i].message}
❑ Comandos dados: ${database.level[v].data[i].command}\n\n`
y.push(database.level[v].data[i].user)
}
}
conn.sendMessage(from, { text: x, contextInfo: { mentionedJid: y } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
}
} else {
return reply(config.msg.negar)
}
break

case'banghost':
if (iMe || owner || iGroupAdmin) {
v = check(from, database.level)
u = args.join(" ").split("|")[0] ? args.join(" ").split("|")[0] : 0
h = args.join(" ").split("|")[1] ? args.join(" ").split("|")[1] : 9
g = args.join(" ").split("|")[2] ? args.join(" ").split("|")[2] : 5000
k = []
if (v) {
n = database.level[v].data.length
for (let i = 0; i < n; i++) {
if (database.level[v].data[i].message <= u) {
for (let l of groupMembers) {
if (database.level[v].data[i].user == l.id) {
if (l.admin == null) {
if (k.length <= h) {
k.push(l.id)
}
}
}
}
}
}
if (k.length == 0) return reply("Nenhum participante possui " + u +  " Mensagen(s) ou menos.")
for (let i = 0; i < k.length; i++) {
setTimeout(() => conn.groupParticipantsUpdate(from, [k[i]], 'remove'), g * 1)
}
} else {
reply("Não há dados sobre o grupo.")
}
} else {
return reply(config.msg.negar)
}
break

case'bcmd':
if (iMe || owner || iGroupAdmin) {
t = argx
j = verify(t, database.commandBlock)
if (j) {
reply("Este comando já está incluso.")
} else {
reply("Comando bloqueado.")
database.commandBlock.push(t)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
} else {
return reply(config.msg.negar)
}
break

case'dcmd':
if (iMe || owner || iGroupAdmin) {
t = argx
j = verify(t, database.commandBlock)
if (j) {
reply("Comando desbloqueado.")
database.commandBlock.splice(j, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
} else {
reply("Este comando não está incluso.")
}
} else {
return reply(config.msg.negar)
}
break

case'addautoban':
xau = args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
pau = verify(xau, database.autoban)
if (pau) {
conn.sendMessage(from, { text: "Este número já está incluso." }, { quoted: m })
} else {
database.autoban.push(xau)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "Numero adicionado." }, { quoted: m })
}
break

case'delautoban':
xau = args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
pau = verify(xau, database.autoban)
if (pau) {
database.autoban.splice(pau, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
conn.sendMessage(from, { text: "Numero removido." }, { quoted: m })
} else {
conn.sendMessage(from, { text: "Este número não está incluso." }, { quoted: m })
}
break

case'ghost':
if (iMe || owner || iGroupAdmin) {
if (args[0] == undefined) return reply("Checar todos? -all. Determinado tempo? número de dias após o comando.")
if (args[0].match("-all")) {
v = check(from, database.ghost)
if (v) {
x = ""
y = []
z = 0
n = database.ghost[v].data.length
for (let i = 0; i < n; i++) {
z++
e = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2)
if (e == 1) k = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2) + " Dia atrás"
if (e == 0) k = "Hoje"
if (e >= 2) k = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2) + " Dias atrás"
x += `${z}
❑ Usuário: @${database.ghost[v].data[i].id.split('@')[0]}
❑ Ultima mensagen: ${k} :${database.ghost[v].data[i].time.slice(5)}\n\n`
y.push(database.ghost[v].data[i].id)
}
conn.sendMessage(from, { text: x, contextInfo: { mentionedJid: y } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
} else {
v = check(from, database.ghost)
u = args[0]
if (v) {
x = ""
y = []
z = 0
n = database.ghost[v].data.length
for (let i = 0; i < n; i++) {
if (timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2) >= u) {
z++
e = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2)
if (e == 1) k = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2) + " Dia atrás"
if (e == 0) k = "Hoje"
if (e >= 2) k = timedat.slice(0, 2) - database.ghost[v].data[i].time.slice(0, 2) + " Dias atrás"
x += `${z}
❑ Usuário: @${database.ghost[v].data[i].id.split('@')[0]}
❑ Ultima mensagen: ${k} :${database.ghost[v].data[i].time.slice(5)}\n\n`
y.push(database.ghost[v].data[i].id)
}
}
if (z == 0) return reply("Não há nenhum participante offline por " + u + " Dia(s)")
conn.sendMessage(from, { text: x, contextInfo: { mentionedJid: y } }, { quoted: m })
} else {
reply("Não há dados sobre o grupo.")
}
}
} else {
return reply(config.msg.negar)
}
break

case'afk':
database.afk.push({ id: sender, message: args.join(" "), time: timedat, hr: Date.now() })
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
reply('Mensagem de ausência criada com sucesso.')
break

//GetLevelAndCommands

case'eveal':
try {
a = await axios.get("https://www.google.com/search?tbs=sbi:AMhZZiur-9lFdg9smD2tZ0QEaX8DZ9LzeznmrrCp7YckndkCLoTXp02cnE096tWaLS8Fp2Xmls0MsaJmjvhcG9sAfRO6con2XXR8S-G-iMTYmB8DXctIusbCgCk6QKtXO_1x2el66jVMjqx9g3rnNqEqpCP3_18s1mFgb_1yoKsYQFkXwQhA9FqjLH_1_17gOw-6TOeyt3EyPnlJz1_1cYWpA8i7Okw9_1tLbYVx_16qnqdRK9y_1NQNt5JoPPDoyIjCC0zbrsnBCMApafbjJI9n07A3pkfcCHGivmsemdnvDH2cPvqYFc7-HIgMyoQr4H6IR9a0Rll_13o1--2aehwtWHGcym6eE0Cf4P3Dk53w", {//args.join(" ").split("|")[0], {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
console.log(eval(args.join(" ")))
} catch (err) {
reply(err)
}
break

case'addanagrama':
t = await textF(args.join(" "))
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

case'anagrama':
if (args[0] == undefined) return reply("Caso queira iniciar um jogo digite -init apos o comando.\nCaso queira responder digite a resposta após o comando.")
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
if (database.anagrama[f].id == sender && database.anagrama[f].tentativas !== 0 && database.anagrama[f].palavra == await textF(args.join(" "))) {
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
reply("Você não tem nenhum jogo ativo. Para iniciar digite $anagrama -init")
}
}
break

//PromoteAndDemoteAndMore

case'online':
try {
ids = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
idg = [...Object.keys(store.presences[ids]), "18623623958@s.whatsapp.net"]
conn.sendMessage(from, { text: 'Lista de usuarios online\nTotal: ' + idg.length + '\n\n' + idg.map(v => '· @' + v.replace(/@.+/, '')).join`\n`, contextInfo: { mentionedJid: idg } }, { quoted: m })
} catch (err) {
return reply('Nenhum participante online.')
}
break

case'tbn':
if (args[0]  == undefined && isQuotedMsg) ban = quotedMsg.sender
if (args[0] !== undefined && args[0].match("@")) ban = args[0].split("@")[1] + "@s.whatsapp.net"
console.log(ban)
break

case"ban":
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'remove')
} else {
reply(config.msg.negar)
}
break

case"rebaixar":
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'demote')
} else {
reply(config.msg.negar)
}
break

case"promover":
if (iMe || owner || iGroupAdmin) {
conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (args[0].match('@') ? args[0].split("@")[1] + "@s.whatsapp.net" : "")], 'promote')
} else {
reply(config.msg.negar)
}
break

case'add':
if (iMe || owner || iGroupAdmin) {
await conn.groupParticipantsUpdate(from, [isQuotedMsg ? quotedMsg.sender : (argx.length >= 9 ? args.join(" ").replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : "")], 'add').catch((err) => console.log(err) )
} else {
reply(config.msg.negar)
}
break

//PromoteAndDemoteAndMore

case'gun':
n = await downloadAndSaveMediaMessage('image', getRandom('.png'), m)
s = await uploadFileUgu(n)
conn.sendMessage(from, { image: { url: "https://api.popcat.xyz/gun?image=" + s.url } }).then(() => fs.unlinkSync(n))
break

case"mek":
console.log(JSON.stringify(m, null, 2))
break

case'cn':
as = await makeGroupsSocket()
console.log(as)
break

case'ocr':
//if (!iQimage || !iImage) return reply('Apenas imagem.')
reply(aguardar)
qo = getRandom(".jpeg")
ho = await downloadAndSaveMediaMessage("image", qo, m)
await recognize(ho, {lang: "eng+pt", oem: 1, psm: 3})
.then(async(no) => { conn.sendMessage(from, { text: no.trim() }, { quoted: m }); await fs.unlinkSync(qo) }).catch((err) => { notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro. Tente novamente mais tarde...'); fs.unlinkSync(qo) })
break

case'volume':
if (iQaudio) {
//reply(config.msg.await)
h = getRandom('.mp3')
q = getRandom('.mp3')
k = args[0] ? args[0] : 12
g = await downloadAndSaveMediaMessage('audio', h, m)
exec(`ffmpeg -i ${g} -af volume=${k} ${q}`, async (err) => {
if (err) return reply(config.msg.err)
conn.sendMessage(from, { audio: fs.readFileSync(q), mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
await fs.unlinkSync(h)
await fs.unlinkSync(q)
})
}
break

case'ttsrobot':
if (argx == "") return reply(config.msg.error.reject)
a = require('./lib/gtts')(args[0])
b = args.join(" ").slice(3)
nx = getRandom('.mp3')
dx = getRandom('.mp3')
hx = nx
a.save(nx, b, function () {
exec(`ffmpeg -i ${hx} -filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75" ${dx}`, async (err) => {
if (err) { conn.sendMessage(from, { audio: fs.readFileSync('error.m4a'), mimetype: 'audio/mpeg', ptt: true }, { quoted: m }); fs.unlinkSync(hx); fs.unlinkSync(dx) }
conn.sendMessage(from, { audio: fs.readFileSync(dx), mimetype: 'audio/mpeg' }, { quoted: m })
await fs.unlinkSync(hx)
await fs.unlinkSync(dx)
})
})
break

case'tts':
if (argx == "") return reply(config.msg.error.reject)
try {
ax = require('./lib/gtts')(args[0])
bx = args.join(" ").slice(3)
cx = getRandom('.mp3')
hx = cx
ax.save(cx, bx, async (err) => {
if (err) return reply('Error')
conn.sendMessage(from, { audio: fs.readFileSync(hx), mimetype: 'audio/mpeg' }, { quoted: m }).then(() => fs.unlinkSync(hx) )
})
} catch (err) {
return reply(config.msg.error.err)
}
break

//SfW

case'waifu':
reply(aguardar)
hts = ['https://waifu.pics/api/sfw/neko', 'https://nekos.life/api/v2/img/neko', 'https://waifu.pics/api/sfw/waifu', 'https://waifu.pics/api/sfw/megumin']
gts = hts[Math.floor(Math.random() * hts.length)]
uts = await axios.get(gts)
conn.sendMessage(from, { image: { url: uts.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'neko':
hts = ['https://waifu.pics/api/sfw/neko', 'https://nekos.life/api/v2/img/neko']
gts = hts[Math.floor(Math.random() * hts.length)]
uts = await axios.get(gts)
conn.sendMessage(from, { image: { url: uts.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'megumin':
bap = await axios.get('https://waifu.pics/api/sfw/megumin')
conn.sendMessage(from, { image: { url: bap.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

//Sfw

//Nsfw

case'ero':
hks = ['https://nekos.life/api/v2/img/ero', 'https://nekos.life/api/v2/img/erofeet', 'https://nekos.life/api/v2/img/erok', 'https://nekos.life/api/v2/img/eron', 'https://nekos.life/api/v2/img/erokemo', 'https://nekos.life/api/v2/img/eroyuri']
gks = hks[Math.floor(Math.random() * hks.length)]
nks = await axios.get(gks)
conn.sendMessage(from, { image: { url: nks.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'hentai':
hks = ['https://waifu.pics/api/nsfw/waifu', 'https://waifu.pics/api/nsfw/neko', 'https://nekos.life/api/v2/img/solo', 'https://nekos.life/api/v2/img/tits', 'https://nekos.life/api/v2/img/blowjob']
gks = hks[Math.floor(Math.random() * hks.length)]
nks = await axios.get(gks)
conn.sendMessage(sender, { image: { url: nks.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'blowjob':
bap = await axios.get('https://nekos.life/api/v2/img/blowjob')
conn.sendMessage(sender, { image: { url: bap.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'solo':
bap = await axios.get('https://nekos.life/api/v2/img/solo')
conn.sendMessage(sender, { image: { url: bap.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'hwaifu':
bap = await axios.get('https://waifu.pics/api/nsfw/waifu')
conn.sendMessage(sender, { image: { url: bap.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'hneko':
bap = await axios.get('https://waifu.pics/api/nsfw/neko')
conn.sendMessage(sender, { image: { url: bap.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

case'trap':
hks = ['https://waifu.pics/api/nsfw/trap', 'https://nekos.life/api/v2/img/trap']
gks = hks[Math.floor(Math.random() * hks.length)]
nks = await axios.get(gks)
conn.sendMessage(sender, { image: { url: nks.data.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m })
break

//Nsfw

case'akinator':
if (args[0] == undefined) return conn.sendMessage(from, { text: 'Olá, sou o akinator?', headerType: 1, buttons: [{ buttonId: prefix + command + ' init', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + command + ' n', buttonText: { displayText: 'NÃO' }, type: 1 }] }, { quoted: m })
if (args[0] == 'n') return reply('Blz então...')
if (args[0] == 's') return conn.sendMessage(from, { text: 'Sabia! quer jogar mais uma?', headerType: 1, buttons: [{ buttonId: prefix + command + ' init', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + command + ' n', buttonText: { displayText: 'NÃO' }, type: 1 }] }, { quoted: m })
akinator (conn, from, args[0], prefix, sender, m, args[1])
break

case'thun':
any = fs.readFileSync('./404.jpeg')
const resul = Buffer.from(any).toString('base64')
const result = resul
conn.sendMessage(from, { text: 'sex' }, { quoted: { key : { participant : '0@s.whatsapp.net' }, 
message: {
extendedTextMessage: {
"text": " ",
"previewType": "NONE"
} } } })
/*quoted: {
key: {
"fromMe": false,
"participant": `0@s.whatsapp.net`},
message: { 
"liveLocationMessage": { 
"name": " ", 
"title": " ",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAABBQEAAAAAAAAAAAAAAAAAAQIDBAUGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAACXP6KIwV3RMu6t3bPhgu4Uycx01YlTWHqjC9G0Tl+u4zTroSAmqSgiujcNhmqmHbLNsRnjPUKpKj2vIh8hy5dwVmIRntgBzgElBZOYAxgE/8QAKRAAAgIBAwMDBAMBAAAAAAAAAQIAAxEEEiETMVEUQWEFIiMyEFJTgf/aAAgBAQABPwDUptVT8zYS44/7LFBA+O8UcAe5xiWLcWOMYSVoWRWM2qzbQ4lqqpwBmKyjhpcaUwtnvFfSngRvSAlSBC2lB7DKx9EbGDpYdr94KRVVjPAEoGdVnPE9PacgLLtFYApPvLtItzbixg0CA5DmNokLbtxjaOsg+TEXYqr4E1DhKnJ8QW7LlYdsytg6K3kRlDDBljXKzbTOpqfiE3gkrzM6rOcSi0sp3zUhXpfPiHd+uOMzTfUrEwjLlRKNVVf+h5lgG9vuxzAqhG/JBWfa6Cs5GLo4Uuc2Ymos6GmsZXzniLbuiDiUN6azqqZYa97bs94DT024OIDpvmA6bcO8fo7yCDNYK30lgQHiUUAhSVl9daVMROpwRLCwd/tB5gZ+mx6YgfzRN4yM0x2cMfxgxlNumuBTBxF171jZs7R9c1qFdsOCsfqb32sO8UW7Wy4gGp/sJjU+RLOqScMJQtm47jkT6toFqHWr/gEgy2gbiS+JXQrKwD956Rv9DPStkEWGNpCSTulNHSJOZdUt1bI3YiH6Q4ZznhZapSxlM//EAB0RAAIBBAMAAAAAAAAAAAAAAAECABAREiAhMDH/2gAIAQIBAT8Ao2OK2hBELhfdbDQ8dn//xAAcEQEAAgEFAAAAAAAAAAAAAAABAiARAAMQEjH/2gAIAQMBAT8A5EdR25SMlSSeNCORa9pX/9k="
}
}
} })*/
break

case'pcp':
x = JSON.parse(fs.readFileSync('./config.json'))
x.push(quotedMsg)
fs.writeFileSync('./config.json', JSON.stringify(x, null, 2))
break

case'pvc':
xp = JSON.parse(fs.readFileSync('./config.json'))
dd = generateWAMessageFromContent(from, xp[0], { quoted: null }) 
//console.log(dd)
//conn.relayMessage(from, dd.message, { messageId: dd.key.id, quoted: null })
aa = generateWAMessageFromContent(from, {
"productMessage": {
"product": {
"productImage": dd.message.productMessage.product.productImage,
"productId": "5499842816744328",
"title": "Bot",
"description": "Quero sexor com yor",
"currencyCode": 'USD',
"priceAmount1000": "100000",
"productImageCount": 1
},
"businessOwnerJid": "14133601474@s.whatsapp.net"
}
}, { quoted: null }) 
conn.relayMessage(from, aa.message, { messageId: aa.key.id, quoted: null })
break

case'live':
act = await conn.productCreate(1)
console.log(act)
break

case'tictac':
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

case'cd':
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

case'gif-boobs':
rgs = getRandom('.mp4')
rge = getRandom('.gif')
fxs = await superagent.get('http://api.nekos.fun:8080/api/boobs').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!fxs._body.image.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: fxs._body.image }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${fxs._body.image} -O ${rge} && ffmpeg -i ${rge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(rge) }
conn.sendMessage(from, { video: fs.readFileSync(rgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(rge)
await fs.unlinkSync(rgs)
})
break

case'gif-anal':
rgs = getRandom('.mp4')
rge = getRandom('.gif')
fxs = await superagent.get('http://api.nekos.fun:8080/api/anal').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!fxs._body.image.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: fxs._body.image }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${fxs._body.image} -O ${rge} && ffmpeg -i ${rge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(rge) }
conn.sendMessage(from, { video: fs.readFileSync(rgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(rge)
await fs.unlinkSync(rgs)
})
break

case'gif-cuddle':
rgs = getRandom('.mp4')
rge = getRandom('.gif')
psf = ['https://nekos.life/api/v2/img/cuddle', 'https://waifu.pics/api/sfw/cuddle']
usf = psf[Math.floor(Math.random() * psf.length)]
fxs = await superagent.get(usf).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!fxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: fxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${fxs._body.url} -O ${rge} && ffmpeg -i ${rge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(rge) }
conn.sendMessage(from, { video: fs.readFileSync(rgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(rge)
await fs.unlinkSync(rgs)
})
break

case'gif-tickle':
rgs = getRandom('.mp4')
rge = getRandom('.gif')
fxs = await superagent.get('https://nekos.life/api/v2/img/tickle').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!fxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: fxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${fxs._body.url} -O ${rge} && ffmpeg -i ${rge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(rge) }
conn.sendMessage(from, { video: fs.readFileSync(rgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(rge)
await fs.unlinkSync(rgs)
})
break

case'gif-blowjob':
igs = getRandom('.mp4')
ige = getRandom('.gif')
psi = ['https://waifu.pics/api/nsfw/blowjob', 'http://api.nekos.fun:8080/api/bj']
usi = psi[Math.floor(Math.random() * psi.length)]
ixs = await superagent.get(usi).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
iys = ixs._body.image ? ixs._body.image : ixs._body.url
if (!iys.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: iys }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${iys} -O ${ige} && ffmpeg -i ${ige} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${igs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(ige) }
conn.sendMessage(from, { video: fs.readFileSync(igs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(ige)
await fs.unlinkSync(igs)
})
break

case'nekof':
fxs = await superagent.get('http://api.nekos.fun:8080/api/hentai').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
conn.sendMessage(from, { image: { url: fxs._body.image }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) )
break

case'lewd-neko':
fxs = await superagent.get('http://api.nekos.fun:8080/api/lewd').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
conn.sendMessage(from, { image: { url: fxs._body.image }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) )
break

case'ero-feet':
fxs = await superagent.get('http://api.nekos.fun:8080/api/feet').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
conn.sendMessage(from, { image: { url: fxs._body.image }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) )
break

case'gif-dance':
lgs = getRandom('.mp4')
lge = getRandom('.gif')
lxs = await superagent.get('https://waifu.pics/api/sfw/dance').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!lxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: lxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${lxs._body.url} -O ${lge} && ffmpeg -i ${lge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${lgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(lge) }
conn.sendMessage(from, { video: fs.readFileSync(lgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(lge)
await fs.unlinkSync(lgs)
})
break

case'gif-cry':
lgs = getRandom('.mp4')
lge = getRandom('.gif')
lxs = await superagent.get('https://waifu.pics/api/sfw/cry').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!lxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: lxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${lxs._body.url} -O ${lge} && ffmpeg -i ${lge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${lgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(lge) }
conn.sendMessage(from, { video: fs.readFileSync(lgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(lge)
await fs.unlinkSync(lgs)
})
break

case'gif-slap':
lgs = getRandom('.mp4')
lge = getRandom('.gif')
lxs = await superagent.get('https://waifu.pics/api/sfw/slap').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!lxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: lxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${lxs._body.url} -O ${lge} && ffmpeg -i ${lge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${lgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(lge) }
conn.sendMessage(from, { video: fs.readFileSync(lgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(lge)
await fs.unlinkSync(lgs)
})
break

case'gif-kick':
lgs = getRandom('.mp4')
lge = getRandom('.gif')
lxs = await superagent.get('https://waifu.pics/api/sfw/kick').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!lxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: lxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${lxs._body.url} -O ${lge} && ffmpeg -i ${lge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${lgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(lge) }
conn.sendMessage(from, { video: fs.readFileSync(lgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(lge)
await fs.unlinkSync(lgs)
})
break

case'gif-nom':
lgs = getRandom('.mp4')
lge = getRandom('.gif')
lxs = await superagent.get('https://waifu.pics/api/sfw/nom').set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!lxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: lxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${lxs._body.url} -O ${lge} && ffmpeg -i ${lge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${lgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(lge) }
conn.sendMessage(from, { video: fs.readFileSync(lgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(lge)
await fs.unlinkSync(lgs)
})
break

case'gif-kiss':
jgs = getRandom('.mp4')
jge = getRandom('.gif')
psj = ['https://waifu.pics/api/sfw/kiss', 'https://nekos.life/api/v2/img/kiss']
usj = psf[Math.floor(Math.random() * psj.length)]
jxs = await superagent.get(usj).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!jxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: jxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${jxs._body.url} -O ${jge} && ffmpeg -i ${jge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${jgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(jge) }
conn.sendMessage(from, { video: fs.readFileSync(jgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(jge)
await fs.unlinkSync(jgs)
})
break

case'gif-hug':
jgs = getRandom('.mp4')
jge = getRandom('.gif')
psj = ['https://nekos.life/api/v2/img/hug', 'https://waifu.pics/api/sfw/hug']
usj = psf[Math.floor(Math.random() * psj.length)]
jxs = await superagent.get(usj).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!jxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: jxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${jxs._body.url} -O ${jge} && ffmpeg -i ${jge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${jgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(jge) }
conn.sendMessage(from, { video: fs.readFileSync(jgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(jge)
await fs.unlinkSync(jgs)
})
break

case'gif-smug':
jgs = getRandom('.mp4')
jge = getRandom('.gif')
psj = ['https://nekos.life/api/v2/img/smug', 'https://waifu.pics/api/sfw/smug']
usj = psf[Math.floor(Math.random() * psj.length)]
jxs = await superagent.get(usj).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
if (!jxs._body.url.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: jxs._body.url }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${jxs._body.url} -O ${jge} && ffmpeg -i ${jge} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${jgs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(jge) }
conn.sendMessage(from, { video: fs.readFileSync(jgs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(jge)
await fs.unlinkSync(jgs)
})
break

case'gif-poke':
igs = getRandom('.mp4')
ige = getRandom('.gif')
psi = ['https://waifu.pics/api/sfw/poke', 'http://api.nekos.fun:8080/api/poke']
usi = psi[Math.floor(Math.random() * psi.length)]
ixs = await superagent.get(usi).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
iys = ixs._body.image ? ixs._body.image : ixs._body.url
if (!iys.match(/.gif|.GIF/g)) { return conn.sendMessage(from, { image: { url: iys }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) ) }
exec(`wget ${iys} -O ${ige} && ffmpeg -i ${ige} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${igs}`, async(err) => {
if (err) { notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }); await fs.unlinkSync(ige) }
conn.sendMessage(from, { video: fs.readFileSync(igs), gifPlayback: true, gifAttribution: 2 })
await fs.unlinkSync(ige)
await fs.unlinkSync(igs)
})
break

case'wallpaper':
nsf = verify(from, database.nsfw) ? ddg.SafetyLevels.OFF : ddg.SafetyLevels.STRICT
nuf = await ddg.search(args.join(" ") + ' cut mobile wallpapers', nsf)
cof = nuf[Math.floor(Math.random() * nuf.length)]
conn.sendMessage(from, { image: { url: cof.image } }, { quoted: m }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro.') )
break

case'pesquisar':
nsf = verify(from, database.nsfw) ? ddg.SafetyLevels.OFF : ddg.SafetyLevels.STRICT
nuf = await ddg.search(args.join(" "), nsf)
cof = nuf[Math.floor(Math.random() * nuf.length)]
conn.sendMessage(from, { image: { url: cof.image } }, { quoted: m }).catch((err) => notFound(conn, from, m, { quoted: m }, 'Ocorreu um erro.') )
break

case'duck':
nsu = verify(from, database.nsfw) ? dds.SafetyLevels.OFF : dds.SafetyLevels.STRICT
duc = await dds.search(args.join(" "), { safeSearch: nsu })
dex = ''
for (let i of duc.results) {
aks = await avp(i.description, { to: "pt" })
dex += 'Title: ' +  i.title + '\n' + 'Url: ' +  i.url + '\n' + 'Descrição: ' + aks.text + '\n\n'
}
reply(dex)
break

case 'waifus':
reply(aguardar)
//hts = ['https://waifu.pics/api/sfw/neko', 'https://api.waifu.im/random/?selected_tags=waifu', 'https://nekos.life/api/v2/img/neko', 'https://waifu.pics/api/sfw/waifu', 'http://api.nekos.fun:8080/api/neko', 'https://waifu.pics/api/sfw/megumin', 'https://nekobot.xyz/api/image?type=neko']
//gts = hts[Math.floor(Math.random() * hts.length)]
gts = 'https://waifu.pics/sfw/neko'
//uts = await superagent.get(gts).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
uts = { _body: { url: 'https://cdn.waifu.im/aaeb8055ddf93.png' } }
conn.sendMessage(from, { image: { url: uts._body ? (uts._body.url ? uts._body.url : uts._body.image ? uts._body.image : uts._body.message ? uts._body.message : uts._body.images ? uts._body.images[0].url : './404.jpg') : './404.jpg' }, caption: ' ', headerType: 4, buttons: [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }] }, { quoted: m }).catch((err) => notFoundButton(conn, from, m, [{ buttonId: prefix + command, buttonText: { displayText: 'PROXIMA' }, type: 1 }], { quoted: m }) )
break


case'sdc':
//`\`\`\`Velocidade: ${c.toFixed(4)}ms\`\`\``
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
sduc = `\`\`\`⋆╭────❏
⋆│➻ BotName: undefinedBot
⋆│➻ Privado: não
⋆│➻ Prefixo: $
⋆│➻ Proprietário: carlos</>
⋆│➻ Tempo online: 14 horas 21 minutos 39 segundos
⋆╰────❏
⋆╭────❏
⋆│➻ Nome: http://xvideoeos.com/carlos
⋆│➻ Dinheiro: 17829
⋆│➻ XP: 39073
⋆│➻ Petente: diamante III
⋆│➻ Mensagens: 241
⋆│➻ Comandos dados: 241
⋆╰────❏
⋆ ⎙ download
⋆╭─❏
⋆│➻ ${prefix}mcpe [name][versão]
⋆│➻ ${prefix}playlist [name]
⋆│➻ ${prefix}ytmp3 [url]
⋆│➻ ${prefix}ytmp4 [url]
⋆│➻ ${prefix}aptoide [name]
⋆│➻ ${prefix}fbwhatch [url]
⋆│➻ ${prefix}nhentai [nome]
⋆│➻ ${prefix}instagram [url]
⋆│➻ ${prefix}play [name]
⋆│➻ ${prefix}xvideos [name]
⋆│➻ ${prefix}uptdown [name]
⋆╰─❏
${readmore}
⋆ ⎙ stickers
⋆╭─❏
⋆│➻ ${prefix}sticker [marcar][imagem][videoeo]
⋆│➻ ${prefix}st [marcar][imagem][videoeo]
⋆│➻ ${prefix}togif [marcar][figurinha]
⋆│➻ ${prefix}f [marcar][imagem][video]
⋆│➻ ${prefix}stickers [nome]
⋆│➻ ${prefix}clf [marcar][imagem]
⋆│➻ ${prefix}attp [nome]
⋆│➻ ${prefix}toimg [marcar][figurinha]
⋆│➻ ${prefix}semoji [emoji]
⋆│➻ ${prefix}take [marcar][figurinha]
⋆│➻ ${prefix}emojimix [emogi1][emoji2]
⋆╰─❏
${readmore}
⋆ ⎙ auteradores
⋆╭─❏
⋆│➻ ${prefix}esquilo [marcar][audio]
⋆│➻ ${prefix}robot [marcar][audio]
⋆│➻ ${prefix}slow [marcar][audio]
⋆│➻ ${prefix}volume [marcar][audio]
⋆│➻ ${prefix}bass [marcar][audio]
⋆│➻ ${prefix}fast [marcar][audio]
⋆│➻ ${prefix}reverse [marcar][video]
⋆│➻ ${prefix}lento [marcar][video]
⋆│➻ ${prefix}rapido [marcar][video]
⋆│➻ ${prefix}reverseaud [marcar][audio]
⋆╰─❏
${readmore}
⋆ ⎙ pesquisa
⋆╭─❏
⋆│➻ ${prefix}googleimage [marcar][imagem]
⋆│➻ ${prefix}filmes [nome]
⋆│➻ ${prefix}gimg [nome]
⋆│➻ ${prefix}celular [nome]
⋆│➻ ${prefix}googleimg [marcar][imagem]
⋆│➻ ${prefix}films [nome]
⋆│➻ ${prefix}gis [nome]
⋆│➻ ${prefix}wikipedia [nome]
⋆│➻ ${prefix}google [nome]
⋆│➻ ${prefix}googlesearch [nome]
⋆│➻ ${prefix}pesquisar [nome]
⋆│➻ ${prefix}googleimage [marcar][imagem]
⋆╰─❏
${readmore}
⋆ ⎙ editor - imagem
⋆╭─❏
⋆│➻ ${prefix}triggered [marcar][imagem]
⋆│➻ ${prefix}gun [marcar][imagem]
⋆│➻ ${prefix}wanted [nome]
⋆│➻ ${prefix}blur [nome]
⋆│➻ ${prefix}cinza [marcar][imagem]
⋆│➻ ${prefix}rip [nome]
⋆│➻ ${prefix}gayimg [nome]
⋆│➻ ${prefix}circle [nome]
⋆│➻ ${prefix}trash [marcar][imagem]
⋆╰─❏
⋆ ⎙ administrador
⋆╭─❏
⋆│➻ ${prefix}promover [@][mensagem]
⋆│➻ ${prefix}ban [@][mensagem]
⋆│➻ ${prefix}tag [texto]
⋆│➻ ${prefix}marcar [texto]
⋆│➻ ${prefix}rebaixar [@][mensagem]
⋆│➻ ${prefix}gp [1][0]
⋆│➻ ${prefix}ephemeral [1][0]
⋆│➻ ${prefix}add [numero][mensagem]
⋆╰─❏
⋆ ⎙ imagem - logos
⋆╭─❏
⋆│➻ ${prefix}phlogo [texto '|' texto]
⋆│➻ ${prefix}1917 [texto]
⋆│➻ ${prefix}hacker [texto]
⋆│➻ ${prefix}logo [texto]
⋆│➻ ${prefix}gaming [texto]
⋆│➻ ${prefix}thunder [texto]
⋆│➻ ${prefix}matrix [texto]
⋆│➻ ${prefix}break [texto]
⋆│➻ ${prefix}bear [texto]
⋆│➻ ${prefix}angel [texto]
⋆│➻ ${prefix}broken [texto]
⋆│➻ ${prefix}freefire [texto]
⋆│➻ ${prefix}glitch2 [texto]
⋆│➻ ${prefix}team [texto]
⋆│➻ ${prefix}soldado [texto]
⋆│➻ ${prefix}joker [texto]
⋆│➻ ${prefix}wolf [texto '|' texto]
⋆│➻ ${prefix}stone [texto '|' texto]
⋆│➻ ${prefix}lion [texto '|' texto]
⋆│➻ ${prefix}marvel [texto '|' texto]
⋆│➻ ${prefix}glitch [texto '|' texto]
⋆╰─❏
⋆ ⎙ imagem/gif - anime
⋆╭─❏
⋆│➻ ${prefix}megumin
⋆│➻ ${prefix}waifu
⋆│➻ ${prefix}neko
⋆│➻ ${prefix}marin
⋆│➻ ${prefix}oppai
⋆│➻ ${prefix}maid
⋆│➻ ${prefix}fox
⋆│➻ ${prefix}mori
⋆│➻ ${prefix}uniform
⋆│➻ ${prefix}selfie
⋆│➻ ${prefix}ecchi
⋆│➻ ${prefix}wallpaperanime
⋆│➻ ${prefix}gif-cuddle
⋆│➻ ${prefix}gif-hug
⋆│➻ ${prefix}gif-smug
⋆│➻ ${prefix}gif-kiss
⋆│➻ ${prefix}gif-slap
⋆│➻ ${prefix}gif-dance
⋆│➻ ${prefix}gif-cry
⋆│➻ ${prefix}gif-kick
⋆│➻ ${prefix}gif-mon
⋆│➻ ${prefix}gif-poke
⋆│➻ ${prefix}gif-tickle
⋆╰─❏
⋆ ⎙ imagem/gif - hentai
⋆╭─❏
⋆│➻ ${prefix}hentai
⋆│➻ ${prefix}h-waifu
⋆│➻ ${prefix}h-neko
⋆│➻ ${prefix}kitsune
⋆│➻ ${prefix}h-oppai
⋆│➻ ${prefix}tentaculos
⋆│➻ ${prefix}tigh
⋆│➻ ${prefix}anal
⋆│➻ ${prefix}boobs
⋆│➻ ${prefix}gif-boobs
⋆│➻ ${prefix}gif-blowjob
⋆│➻ ${prefix}gif-anal
⋆╰─❏
⋆ ⎙ ativadores
⋆╭─❏
⋆│➻ ${prefix}antiviewonce
⋆│➻ ${prefix}welcome
⋆│➻ ${prefix}antilinkhard
⋆│➻ ${prefix}antifake
⋆│➻ ${prefix}antilink
⋆│➻ ${prefix}antitexto
⋆│➻ ${prefix}anticontato
⋆│➻ ${prefix}antiloc
⋆│➻ ${prefix}x9
⋆│➻ ${prefix}anticatalogo
⋆│➻ ${prefix}nsfw
⋆│➻ ${prefix}leveis
⋆│➻ ${prefix}welxometexto
⋆╰─❏
⋆ ⎙ proprietário
⋆╭─❏
⋆│➻ ${prefix}banghost
⋆│➻ ${prefix}bcmd
⋆│➻ ${prefix}afk
⋆│➻ ${prefix}atividade
⋆│➻ ${prefix}ghost
⋆│➻ ${prefix}ping
⋆│➻ ${prefix}dcmd
⋆│➻ ${prefix}addanagrama
⋆╰─❏
⋆ ⎙ administrador
⋆╭─❏
⋆│➻ ${prefix}anagrama [init][esp]
⋆│➻ ${prefix}tictac [dificuldade]
⋆│➻ ${prefix}ttt [@]
⋆│➻ ${prefix}cassino 
⋆╰─❏\`\`\``
conn.sendMessage(from, { image: { url: './src/404.jpg' }, caption: sduc })
break

case'clone':
if (iMe || owner) {
anpz = []
for (let i of metadata.participants) anpz.push(i.id)
anzx = await conn.groupCreate(metadata.subject, anpz)
await conn.groupUpdateDescription(anzx.id, metadata.desc ? metadata.desc : '')
anxz = await conn.profilePictureUrl(from, 'image').catch((err) => anxz = false)
if (anxz !== false) {
console.log(anxz)
await conn.updateProfilePicture(anzx.id, { url: anxz })
}
} else {

}
break

case'bitch':
asxc = await downloadMediaMessage('sticker', m)
asxz = []
for (let i of groupMembers) {
asxz.push(i.id)
}
console.log(asxz)
conn.sendMessage(from, { sticker: asxc, contextInfo: { mentionedJid: asxz } })
break

case'heroku':
reply('Atualizando para o heroku, aguarde...')
exec('sh upload.sh', async(err, stdout) => {
if (err) return reply(err)
reply(stdout.trim())
})
break

default:
/*if (icmd) {
similar = ""
for (let i of config.comandos) {
  if (i.match(command.slice(0, 2))) {
similar += i + '\n'
}
}
conn.sendMessage(from, { text: similar == "" ? "Infelizmente este comando não existe, digite " + prefix + "menu para listar meus comandos." : "Infelizmente este comando não existe, digite " + prefix + "menu para listar meus comandos.\nComandos parecidos:\n" + similar }, { quoted: m })
}*/
}
virtex (conn, from, m, sender, isGroup, iBotGroupAdmin, iGroupAdmin, body, pushName, type)
velha (conn, from, m, sender, isGroup, body) 
Inteligence (conn, from, m, body, type, isQuotedMsg, quotedMsg, reply)
LevelingXp (conn, from, m, sender, isGroup, groupMembers, icmd, command, pushName, timedat)
IndexSecundaria (conn, from, m, sender, isGroup, groupMembers, command, pushName, icmd, timedat, body, type, iGroupAdmin, iBotGroupAdmin, iMe, isQuotedMsg, quotedMsg, args, argx, metadata, owner, reply, prefix, iImage, iVideo, iSticker, iQimage, iQaudio, iQvideo, iQsticker, groupMembersAdmins, aguardar)
} catch (err) {
return console.log('Error:'.yellow, err)
}
})
ConnectionUpdate (conn)
}
connectToWhatsApp().catch((err) => console.log(err)); module.exports = { connectToWhatsApp }