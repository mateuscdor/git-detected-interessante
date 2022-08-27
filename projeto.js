"use strict";
const { default: makeWASocket, waUploadToServer, Browsers, generateWAMessageContent, fetchLatestWaWebVersion, updateProfileStatus, readMessages, useMultiFileAuthState, DisconnectReason, groupFetchAllParticipating, fetchPrivacySettings, WA_DEFAULT_EPHEMERAL, getDevice, downloadContentFromMessage, useSingleFileAuthState, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, makeInMemoryStore } = require('./lib/@adiwajshing/baileys');
const { socket, serialize, origin, getAndSaveMediaMessage, convert, position, resolve, banner, agent, assert, hex, aleatory, http, verificado, live, mentions, sleep, randomColors1, downloadMediaMessage, verify, check, getBuffer, getRandom, getGroupAdmins, runtime, parseMs, downloadAndSaveMediaMessage, textF } = require('./lib/myfunc');
const { MongoClient, ServerApiVersion } = require('mongodb');
const store = {};
const fs = require('fs-extra');
const pi = require('pino');
const msrv = new MongoClient("mongodb+srv://danielxn60:danielxn60@db.ahfcl2d.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
setInterval(() => Object.keys(store).map((i) => i.endsWith('@g.us') ? delete store[i] : ""), 1800000);
//msrv.connect().then(() => global.access = msrv.db('db')).catch(() => { global.access = undefined; console.log('MongoError! remote base actived') });
const sock = (() => (global.socket = {}))
console.log(require('moment-timezone').tz('America/Sao_Paulo').format('DD/MM HH:mm:ss'));

process.env.HOME == '/app' ? "" : console.log(banner.string);
const connectToWhatsApp = async () => {
sock();
const { state, saveCreds } = await useMultiFileAuthState('./src/session');
const { version } = await fetchLatestWaWebVersion();
const _conectar = { time: Date.now(), on: true };
const conn = makeWASocket({
version,
logger: pi({ level: 'fatal' }),
printQRInTerminal: true,
auth: state,
syncFullHistory: true,
browser: ['UndefinedBot Multi Device', 'Desktop', '3.0.0'],
getMessage: async (key) => { return store[key.id]?.message || { conversation: 'Hello!!' } }
});
conn.ev.on('creds.update', saveCreds);

const moment = require('moment-timezone');
const { exec } = require('child_process');
const chalk = require('chalk');
const ddg = require('ddgimages-node');
const mintake = require('mintake');
const toMs = require('ms');
const Scraper = require('@yimura/scraper').default;
const ymura = new Scraper();
//const youtubei = require('youtubei.js');
const ytdl = require('ytdl-core');
const { Twisters } = require('twisters');
//const googlethis = require('googlethis');
const { jsPDF } = require('jspdf');
//const yout =  await new youtubei();
const tradutor = require('@vitalets/google-translate-api');
const cheerio = require('cheerio');
const google_it = require('google-it');
const axios = require('axios');
const dds = require('duck-duck-scrape');
const twisters = new Twisters();
const colors = require('colors');
const yt_search = require('yt-search');
const g_i_s = require('g-i-s');
const ffmpeg = require('fluent-ffmpeg');
const crypto = require('crypto');
const speed = require('performance-now');
const cherry = require('social-downloader-cherry');

/*
1° Comando

cd /sdcard/pasta-do-bot

2° Comando

rm -rf .git

3° Comando

git init

4° Comando

git config --global --add safe.directory /storage/emulated/0/pasta-do-bot

5° Comando

git add .


6° Comando

git config --global user.email "you@example.com"

7° Comando

git config --global user.name "seunome"

8° Comando

git commit -m "First commit"

9° Comando

git remote add origin "url do seu projeto"

10° Comando

git remote -v

11° Comando

git push origin master

======================================
1° Comando

cd /sdcard/pasta-do-bot


2° Comando

git add .

3° Comando

git commit -m "First commit"

4° Comando

git push origin master
*/
//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
const { LevelingXp, virtex, Inteligence, velha, akinator, ativador } = require('./lib/functions.js');
const { recognize, webp2gifFile, tiktokdownloader } = require('./lib/convert');
const { telegraPh, uploadFileUgu, fileio } = require('./lib/uploader');
const { mediafire, wikipedia } = require('./lib/scraper');
const { writeExifImg200, writeExifVid200, writeExifImg512, writeExifVid512, writeExif } = require('./lib/exift');;
const { getMessage, saveCash, getCash, getTimeDat, reloadGhost, saveMessage, getUserId, saveData, saveGroupId, getGroupId, getLevel, getXp, saveLevel, saveXp, getRank, saveCommand, saveUsedCommand, getCommand } = require('./lib/level');

const read = (file) => (file.endsWith('.json') ? JSON.parse(fs.readFileSync(file)) : require(file));
const dailyTTT = read('./lib/tictac/diarioTTT.json');
const cfTTT = 120000;
const crTTT = '```Jogo da velha by: REZEN```';
const { addTTTset, TTTposition, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, tttme, ttthelp } = read('./lib/ttt.js');
const change = () => { const index = read('./lib/functions'); global.IndexSecundaria = index.IndexSecundaria; };
const ___recv = async (id, message, response, m) => {
return new Promise ((resolve, reject) => {
conn.sendPresenceUpdate('composing', id);
resolve(conn.sendMessage(id, message[0], (message[1] || {})).catch((err) => reject(conn.sendMessage(id, (response || { text: String(err) }), { quoted: m }))));
});
};

{
(async () => {
global.mongo = async (collection, type, action, end·) => { try
{
const data = access.collection(collection);
const doc· = type == 'find' ? await data.find(action).toArray() : (type == 'updateOne' ? await data.updateOne(action[0], { $set: action[1] }) : await data[type](action)); return doc·;
const json = process.env.HOME == '/app' ? "" : (async function () { if (type.match(/One/g)) fs.writeFileSync((collection == 'db:0' ? './src/database.json' : (collection == 'db:2' ? './src/basedata.json' : './src/config.json')), JSON.stringify(action[1]['data'], undefined, 2)) })();
}
catch {
const path = collection == 'db:0' ? './src/database.json' : (collection == 'db:2' ? './src/basedata.json' : './src/config.json');
const json = JSON.parse(fs.readFileSync(path)); if (type.match(/find/g)) return json;
json['data'] = action[1]['data'];
fs.writeFileSync(path, JSON.stringify(json, undefined, 2));
};
};
})();
};

{
(async () => {
conn.ws.on('CB:call', async function ({ content }) {
const config = read('./src/config.json');
if (content[0].tag == 'offer' && config.call) {
conn.sendMessage(content[0].attrs['call-creator'], { text: config.txtcall }).then(() => { conn.updateBlockStatus(content[0].attrs['call-creator'], 'block') });
};
});

conn.ev.on('chats.upsert', async function (chats) {
const config = read('./src/config.json');
chats[0].id.endsWith('@g.us') ? '' : conn.sendMessage(chats[0].id, { text: 'Olá 👍' });
});

conn.ev.on('presence.update', async ({ id, presences }) => {
var keys = Object.keys(presences)[0];
store[id] ? "" : store[id] = {};
store[id][keys] = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
});

conn.ev.on('message-receipt.update', async (info) => {
for (const { key, receipt } of info) {
if (store[key.id] && receipt.readTimestamp) {
store[key.id][receipt.userJid] = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
};
};
});
})();
};

conn.ev.process(async(events) => {
console.log(events)
//const ev = events['message-receipt.update']
//if (ev) console.log(ev[0])
});

//conn.ev.on('chats.set', async ({ chats }) => console.log(chats))
//conn.ev.on('message-receipt.update', async (c) => console.log(c[0]))

conn.ev.on('messages.upsert', async function ({ messages, type }) {
const msgType = type;
{
(async () => {
for (let response of messages) {
console.log(response)
const responsv = messages[0]; const config = read('./src/config.json');
const database = await mongo('db:0', 'find', { _id: '$0' });
const basedata = read('./src/basedata.json');
change();
const m = serialize(conn, response);
store[m.key.id] = m;
//socket = m;
//console.log(m)
config.read ? conn.readMessages([m.key]) : "";
if (response.key.remoteJid == 'status@broadcast') return;
if (response.key.id.startsWith('BAE5') || response.key.id.startsWith('SEX5')) return;
const sendMessageAnError = (id, message, response) => ___recv(id, message, (response || null), m);
const { fromMe,
			 from,
			 pushName,
			 type,
			 isGroup,
			 imentioned,
			 quotedMsg,
			 isQuotedMsg
			 } = m;
const aguard = config.await[Math.floor(Math.random() * config.await.length)];
const sender = isGroup ? m.key.participant : m.key.remoteJid;
const budy = (type == 'conversation') ? m.message.conversation : (type == 'imageMessage') ? m.message.imageMessage.caption : (type == 'videoMessage') ? m.message.videoMessage.caption : (type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (type == 'senderKeyDistributionMessage') ? (m.message.conversation ? m.message.conversation : (m.message.extendedTextMessage ? m.message.extendedTextMessage.text : '')) : '' || '';
const body = budy ? budy : '';
const timedat = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
const content = JSON.stringify(m);
const args = body.trim().split(/ +/).slice(1);
const argx = args.join(" ");
const metadata = isGroup ? await conn.groupMetadata(from).catch((err) => {}) : '';
const groupNm = isGroup ? metadata?.subject : '';
const prefix = config.multiprefix ? body.match(/^[!*.#-/?]/gi) : (body.startsWith(config.prefix) ? config.prefix : false);
const rowm = prefix ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : false;
const groupParticipants = isGroup ? metadata?.participants : '';
const __getGroupAdmin = isGroup ? getGroupAdmins((groupParticipants || [])) : "";
const iAdmin = __getGroupAdmin.includes(sender) ? true : false;
const iModer = __getGroupAdmin.includes(conn.user.id.split(':')[0] + "@s.whatsapp.net") ? true : false;
const _iMe = sender.match(conn.user.id.split(':')[0] + "@s.whatsapp.net") ? true : false;
const reply = (message) => sendMessageAnError(from, [{ text: message }, { quoted: m }]);
const reloadTT = () => read('./lib/tictac/tttset.json');
const tictactoe = read('./lib/tictac/tictactoe.json');
const owner = config.owner.includes(sender) ? true : false;
const _icmd = config.comandos.includes(rowm) ? true : false;
const defaultButtons = (cmd, atributo) => [{ buttonId: prefix + cmd, buttonText: { displayText: atributo ? atributo : 'PROXIMA' }, type: 1 }];
const _newThrowErrr = (atributo) => { reply(atributo); throw '@' };
const headers = (options, atributes) => ({ method: "get", headers: { "user-agent": agent(), "DNT": 1, "Upgrade-Insecure-Request": 1, ...atributes }, ...options });

//conn.groupParticipantsUpdate(from, [sender], 'remove')
//await conn.groupParticipating()
//await conn.updateProfileName('covox')
//?.extendedTextMessage)
{
(async () => {
if (isGroup && iModer && !iAdmin && body.match(/https:|http:|www/g)) {
if (database['data'][from]?.['act:3']) {
if (body.match(await conn.groupInviteCode(from))) return;
await sendMessageAnError(from, [{ text: 'Link detectado, Irei remover você. @' + sender.split("@")[0], contextInfo: { mentionedJid: [sender] } }, { quoted: m }]).then(() => conn.groupParticipantsUpdate(from, [sender], 'remove'));
};
};

if (isGroup && iModer && !iAdmin && body.match(/chat.whatsapp.c/g)) {
if (database['data'][from]?.['act:1']) {
if (body.match(await conn.groupInviteCode(from))) return;
await sendMessageAnError(from, [{ text: 'Link detectado, Irei remover você. @' + sender.split("@")[0], contextInfo: { mentionedJid: [sender] } }, { quoted: m }]).then(() => conn.groupParticipantsUpdate(from, [sender], 'remove'));
};
};

if (type == 'protocolMessage' && database['data'][from]?.['act:8']) {
if (store[m.message.protocolMessage.key.id]) {
const hana = store[m.message.protocolMessage.key.id];
const form = hana['type'];
const getMedia· = async () => {
const buffr = {};
buffr[form.replace('Message', '')] = await getAndSaveMediaMessage(hana);
(form == 'imageMessage' || form == 'videoMessage') ? buffr['caption'] = (hana['message'][form]?.['caption'] || "") : "";
sendMessageAnError(from, [buffr, { quoted: hana }]);
};
const aqua = ['productMessage', 'extendedTextMessage', 'locationMessage', 'viewOnceMessage', 'contactMessage', 'contactsArrayMessage'];
aqua.indexOf(form) >= 0 ? sendMessageAnError(from, [{ text: 'Menssagem deletada.' }, { quoted: hana }]) : (form == 'conversation' ? sendMessageAnError(from, [{ text: hana['message']['conversation'] }, { quoted: hana }]) : await getMedia·());
};
};

if (msgType == 'notify' && database[from]?.['act:9']) {
if (Date.now() >= store[sender]?.['time']) {
delete store[sender];
};
if ((store[sender])) {
if ((store[sender]["num"] += 1)     >=    5) {
await sendMessageAnError(from, [{ text: '@' + sender.split('@')[0] + ' você será banido por enviar SPAM no grupo... Até mais ver.', contextInfo: { mentionedJid: [sender] } }, { quoted: m }]).then(() => conn.groupParticipantsUpdate(from, [sender], 'remove'));
};
} else {
store[sender] = new Object({});
store[sender]['num'] = 1;
store[sender]['time'] = Date.now() + toMs('2s');
};
};

if (type == 'viewOnceMessage' && database['data'][from]?.['act:10']) {
const view = m.message.viewOnceMessage.message['videoMessage'] ? m.message.viewOnceMessage.message.videoMessage : m.message.viewOnceMessage.message.imageMessage;
view['caption'] = 'Recuperando a mensagem do ' + pushName + (view.caption == "" ? "" : ('\n\n' + view.caption));
view['viewOnce'] = false;
const quot = m.message.viewOnceMessage.message['videoMessage'] ? ({ key: { fromMe: false, participant: sender, id: m.key.id }, message: { 'viewOnceMessage': { 'message': { 'videoMessage': { 'viewOnce': true } } } } }) : ({ key: { fromMe: false, participant: sender, id: m.key.id }, message: { 'viewOnceMessage': { 'message': { 'imageMessage': { 'viewOnce': true } } } } });
const msg = await generateWAMessageFromContent(from, m.message.viewOnceMessage.message, { quoted: quot });
await conn.relayMessage(from, msg.message, { messageId: msg.key.id });
};

/*
if (_icmd && !_iMe && !owner) for (cmdblock of database.commandBlock) if (body.match(cmdblock)) return reply("Comando bloqueado.")

if (!isGroup && !_iMe && !owner && config.antipv) conn.sendMessage(from, { text: 'AntiPv ativado.' }, { quoted: m }).then(() => conn.updateBlockStatus(sender, 'block') )

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
*/
})().catch((err) => console.log('Zona C:'.green, err))
};

const iQ = (typ, _v) => {
return _v ? (typ == 'image' ? (type == 'imageMessage' ? true : false) : (typ == 'video' ? (type == 'videoMessage' ? true : false) : (typ == 'sticker' ? (type == 'stickerMessage' ? true : false) : (typ == 'text' ? (type == 'conversation' ? true : false) : false)))) : (isQuotedMsg ? content.includes((typ == 'image' ? 'imageMessage' : (typ == 'video' ? 'videoMessage' : (typ == 'audio' ? 'audioMessage' : (typ == 'sticker' ? 'stickerMessage' : (typ == 'text' ? 'conversation' : 'documentMessage')))))) ? true : false : false);
};
//config.online ? conn.sendPresenceUpdate('available', from) : "";
//_icmd ? reply(aguard) : "";
if (!isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', (rowm ? '[\x1b[1;32mEXEC\x1b[1;37m]' : '[\x1b[1;31mRECV\x1b[1;37m]'), timedat, (rowm ? rowm : body).green.underline, 'from'.red, pushName.green.underline);
if (isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', (rowm ? '[\x1b[1;32mEXEC\x1b[1;37m]' : '[\x1b[1;31mRECV\x1b[1;37m]'), timedat, (rowm ? rowm : body).green.underline, 'from'.red, pushName.green.underline, 'in'.red, groupNm.green.underline);

{
(async () => {
switch ((msgType == 'notify' ? rowm : String(response?.messageStubType || 0))) {
case'recv':
const reSize = async (image, width, height) => {
let jimp = require('jimp')
var oyy = await jimp.read(image);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
return kiyomasa
};
let rise = await reSize(fs.readFileSync('./src/img.jpg'), 150, 150);
console.log(rise)
fs.writeFileSync('resize.jpeg', rise)
//conn.sendMessage(from, { text: "***" }, { quoted: { key : { participant : '0@s.whatsapp.net' },  message: { extendedTextMessage: { "text": " ", "previewType": "NONE", "jpegThumbnail": rise } } } });
break

case'qr':
{
(async () => {
const { default: makeWASocket } = require('./lib/@adiwajshing/baileys');
const { state, saveCreds } = await useMultiFileAuthState('./src/undefined');
const { version } = await fetchLatestWaWebVersion();
const client = makeWASocket({
version,
logger: pi({ level: 'fatal' }),
qrTimeout: 120000,
auth: state,
printQRInTerminal: true,
browser: ['UndefinedBot Multi Device', 'Desktop', '3.0.0']
});
client.ev.on('connection.update', async ({ qr }) => {
var transport = require('qrcode');
if (qr) {
var cred = await transport.toDataURL(qr, { scale: 8 });
var data = await Buffer.from(cred.split('data:image/png;base64,')[1], 'base64');
await sendMessageAnError(from, [{ image: data, caption: "Please, scan the QRCODE. Wait the archive..." }]);
//await fs.writeFileSync('./code.jpg', data);
};
});
})();
};
break

case'lit':
var product = conn.sendMessage(from, { product: { productImage: fs.readFileSync('./src/img.jpg'), description: "xxx", title: "yyy", productImageCount: 1, productId: "4939046979532721", currencyCode: "USD", priceAmount1000: "100" }, "businessOwnerJid": "15098613420@s.whatsapp.net" });
/*
var product = generateWAMessageContent(from, {
"product": {
"productImage": mm,
"productId": "5499842816744328",
"title": "Bot",
"description": "property",
"currencyCode": 'USD',
"priceAmount1000": "100000",
"productImageCount": 1
}
}, { quoted: null })
*/
var product = await prepareWAMessageMedia({ image: fs.readFileSync('./src/img.jpg') }, { upload: waUploadToServer })
console.log(product)
//conn.relayMessage(from, product.message, { messageId: product.key.id, quoted: null })
break

case'receipt':
if (!quotedMsg || !quotedMsg.id.startsWith('SEX5')) return reply('Apenas mensagens enviadas por min.');
var p = Object.keys(store[quotedMsg.id] || {});
var b = p.filter((i) => i.match(/@s.whatsapp.net/g));
var q = "";
var n = b.map((i) => q += 'Usuário: @' + i.split('@')[0] + '\nLida às: ' + store[quotedMsg.id][i] + '\n\n');
console.log(q);
break

case'delete':
if (!isGroup) return reply('Apenas mensagens enviadas em grupos.');
await sendMessageAnError(from, [{ delete: { remoteJid: from, fromMe: quotedMsg.fromMe, id: quotedMsg.id, participant: quotedMsg.sender } }]);
break

case'29':
if (database['data'][from]?.['act:4']) {
sendMessageAnError(response.key.remoteJid, [{ text: '@' + response.key.participant.split("@")[0] + ' Promoveu @' + response.messageStubParameters[0].split("@")[0], contextInfo: { mentionedJid: [response.messageStubParameters[0], response.key.participant] } }]);
};
break

case'30':
if (database['data'][from]?.['act:4']) {
sendMessageAnError(response.key.remoteJid, [{ text: '@' + response.key.participant.split("@")[0] + ' Rebaixou @' + response.messageStubParameters[0].split("@")[0], contextInfo: { mentionedJid: [response.messageStubParameters[0], response.key.participant] } }]);
};
break

case'24':
if (database['data'][from]?.['act:4']) {
sendMessageAnError(response.key.remoteJid, [{ text: '@' + response.key.participant.split("@")[0] + ' Alterou a descrição do grupo. Nova descrição: ' + response.messageStubParameters[0], contextInfo: { mentionedJid: [response.key.participant] } }]);
};
break

case'21':
if (database['data'][from]?.['act:4']) {
sendMessageAnError(response.key.remoteJid, [{ text: '@' + response.key.participant.split("@")[0] + ' Alterou o nome no grupo. Novo nome: ' + response.messageStubParameters[0], contextInfo: { mentionedJid: [response.key.participant] } }]);
};
break

case'20':
sendMessageAnError(response.key.remoteJid, [{ text: '@' + response.key.participant.split("@")[0] + ' Obrigado por me adicionar no grupo: ' + response.messageStubParameters[0], contextInfo: { mentionedJid: [response.key.participant] } }]);
break
/*//Grupo fechado/aberto.
WebMessageInfo {
  messageStubParameters: [ 'on' ],
  labels: [],
  userReceipt: [],
  reactions: [],
  pollUpdates: [],
  key: MessageKey {                                                                         remoteJid: '120363021666642593@g.us',
    fromMe: false,
    id: '3880335077',
    participant: '559984620740@s.whatsapp.net'
  },
  messageTimestamp: Long { low: 1658672228, high: 0, unsigned: true },
  participant: '559984620740@s.whatsapp.net',
  messageStubType: 26,
  isGroup: true,
  type: null,                                                                             quotedMsg: null,
  isQuotedMsg: false,
  mentioned: [],                                                                          sender: '559984620740@s.whatsapp.net',
  from: '120363021666642593@g.us',
  now: Long { low: 1658672228, high: 0, unsigned: true },
  fromMe: false
}
*/
case 'online':
if (!store[from]) return reply('Não há dados sobre este grupo.');
var participants = [...Object.keys(store[from])];
var mention = 'Lista de usuarios online\nTotal: ' + participants.length + '\n\n';
await sendMessageAnError(from, [{ text: Object.keys(store[from]).map((i) => mention += '@' + i.split('@')[0] + ': ' + store[from][i] + '\n').pop() + '\nCom base na atividade do grupo de até 30 minutos atrás...', contextInfo: { mentionedJid: participants } }, { quoted: m }]);
break

case 'mark':
var mess = ''
for (let i of groupParticipants) {
mess += '· @' + i.id.split('@')[0] + '\n'
}
await sendMessageAnError(from, [{ text: argx ? argx + '\n\n' + mess : mess, contextInfo: { mentionedJid: mentions(groupParticipants) } }])
break

case'ping':
var a = read('performance-now');
var b = a();
var c = a() -b;
await sendMessageAnError(from, [{ text: `\`\`\`Velocidade: ${c.toFixed(4)}ms\`\`\`` }, { quoted: m }])
break
/*
download youtube
*/
case config.comandos[0]:
var a = await yout.search(args.join(" "));
var b = [
{ buttonId: prefix + 'play_sub ' + a.videos[0].id + '|1', buttonText: { displayText: 'VÍDEO' }, type: 1},
{ buttonId: prefix + 'play_sub ' + a.videos[0].id + '|0', buttonText: { displayText: 'ÁUDIO' }, type: 1}
];
await sendMessageAnError(from, [{
image: { url: "https://" + a.videos[0].metadata.thumbnails[0].url.split("https://")[1].split("?")[0] },
caption: a.videos[0].title.concat('\n', a.videos[0].id, '\n', a.videos[0].channel.name, '\n', a.videos[0].metadata.view_count, ' views\n', a.videos[0].metadata.duration.simple_text, '\n', a.videos[0].metadata.published, '\n\n', a.videos[0].description),
buttons: b
}]);
break

case'play_sub':
reply(config.msg.baixar);
var a = argx.split('|')[1] == '1' ? '.mp4' : '.mp3'
var b = getRandom(a);
var c = argx.split('|')[1] == '1' ? '360p' : '64k'
var k = argx.split('|')[1] == '1' ? 'videoandaudio' : 'audio'
var x = await yout.download(argx.split('|')[0], { format: 'mp4', quality: c, type: k }).pipe(fs.createWriteStream(b));
x.on('end', async () => {
argx.split('|')[1] == '1' ? await sendMessageAnError(from, [{ video: fs.readFileSync(b) }]) : await sendMessageAnError(from, [{ audio: fs.readFileSync(b), mimetype: 'audio/mpeg' }]);
await fs.unlinkSync(b);
});
break

case config.comandos[1]:
var x = await yt_search(args.join(" "));
var p = 0;
var g = x.videos.length;
var sections = [];
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i = 0; i < n; i++) {
p++;
sections.push({
title: p,
rows: [
{ title: x.videos[i].author.name + ": " + x.videos[i].title, rowId: prefix + "playlist_sub " + x.videos[i].url + '|0', description: "ÁUDIO: " + x.videos[i].timestamp },
{ title: x.videos[i].author.name + ": " + x.videos[i].title, rowId: prefix + "playlist_sub " + x.videos[i].url + '|1', description: "VÍDEO: " + x.videos[i].timestamp }
]
});
};
await sendMessageAnError(from, [{
text: "Total: " + n,
title: "Resultados para: " + args.join(" "),
buttonText: "SELECIONAR",
sections
}]);
break

case'playlist_sub':
reply(config.msg.baixar);
var a = argx.split('|')[1] == '1' ? '.mp4' : '.mp3'
var b = getRandom(a);
var k = argx.split('|')[1] == '1' ? '18' : '249'
var c = await ytdl(argx.split('|')[0], { quality: k }).pipe(fs.createWriteStream(b));
c.on("finish", async () => {
argx.split('|')[1] == '1' ? await sendMessageAnError(from, [{ video: fs.readFileSync(b) }]) : await sendMessageAnError(from, [{ audio: fs.readFileSync(b), mimetype: 'audio/mpeg' }]);
await fs.unlinkSync(b);
});
break

case'play2':
var a = await ymura.search(argx);
var b = [
{ buttonId: prefix + 'play2_sub ' + a.videos[0].shareLink + '|1', buttonText: { displayText: 'VÍDEO' }, type: 1},
{ buttonId: prefix + 'play2_sub ' + a.videos[0].shareLink + '|0', buttonText: { displayText: 'ÁUDIO' }, type: 1}
];
await sendMessageAnError(from, [{
image: { url: a.videos[0].thumbnail },
caption: a.videos[0].title.concat('\n', a.videos[0].id, '\n', a.videos[0].channel.name, '\n', a.videos[0].views, ' views\n', a.videos[0].duration_raw, '\n', a.videos[0].uploaded),
buttons: b
}]);
break

case'play2_sub':
var a = await cherry.YouTube.getVideo(argx.split('|')[0]);
var b = a.data.body.url.filter((i) => i.type == 'm4a audio');
var c = a.data.body.url.filter((i) => i.type == 'mp4');
var u = argx.split('|')[1] == '1' ? c : b;
var e = u[1] ? u[1] : u[0];
argx.split('|')[1] == '1' ? await sendMessageAnError(from, [{ video: { url: e.url } }]) : await sendMessageAnError(from, [{ audio: { url: e.url }, mimetype: 'audio/mpeg' }]);
break

/*
pesquisa
*/
case config.comandos[9]:
if (!iQ('image')) return reply('Apenas imagem.');
var a = await downloadAndSaveMediaMessage('image', getRandom('.png'), m);
var b = await uploadFileUgu(a);
var { data } = await http('https://www.google.com/searchbyimage?image_url=' + b.url, { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var u = $('div.r5a77d').text().replace('Resultados para ', 'Resultados para: ').concat('\n\n');
var g = $('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i = 0; i < n; i++) {
var x = $('div[class="q8U8x MBeuO ynAwRc oewGkc LeUQr"]').eq(i).text() || 'Indisponível';
var z = $('div[class="VwiC3b MUxGbd yDYNvb"]').eq(i).text().split(" — ")[1] || 'Indisponível';
var g = $('a[class="cz3goc BmP5tf"]').eq(i).attr('href') || 'Indisponível';
u += '❑ Titulo: ' + x + '\n❑ Descrição: ' + z + '\n❑ Link: ' + g + '\n\n';
};
reply(u);
await fs.unlinkSync(a);
break

case config.comandos[10]:
if (!iQ('image')) return reply('Apenas imagem.');
var b = await downloadAndSaveMediaMessage('image', getRandom('.png'), m);
var c = await fileio(b);
var p = await googlethis.search(c, { ris: true });
var u = "";
var g = p.results.length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i of p.results) {
var x = i.title || 'Indisponível';
var z = i.description || 'Indisponível';
var y = i.url || 'Indisponível';
u += '❑ Titulo: ' + x + '\n❑ Descrição: ' + z + '\n❑ Url: ' + y + '\n\n';
};
reply(u);
await fs.unlinkSync(b);
break

case config.comandos[18]:
var { data } = await http('https://brasilapi.com.br/api/ddd/v1/' + args[0], { method: "get", headers: { "user-agent": agent() } });
if (data.type == 'ddd_error') return reply('DDD inexistente');
var a = 'Estado: '.concat(data.state, '\nDDD: ', args.join(" "), '\n\n');
var n = data.cities.length;
for (let i = 0; i < n; i++) {
a += data.cities[i] + '\n';
};
a.concat('\nTotal: ', data.cities.length);
reply(a);
break

case config.comandos[11]:
var b = await googlethis.search(args.join(" "), { page: 0, safe: true });
var c = "";
var g = b.results.length
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i of b.results) {
c += '❑ Titulo: ' + i.title + '\n❑ Descrição: ' + i.description.replace("N/A", "Indisponível") + '\n❑ Url: ' + i.url + '\n\n';
};
reply(c);
break

case config.comandos[14]:
var { data } = await http("https://pt.m.wikipedia.org/w/index.php?search=" + encodeURIComponent(args.join(" ")) + "&title=Especial%3APesquisar&profile=default&fulltext=1&ns0=1", { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var k = "";
var g = $('div.mw-search-result-heading').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i = 0; i < g; i++) {
var h = $('div.mw-search-result-heading').eq(i).find('a').attr('title') || "Indisponível";
var z = 'https://pt.m.wikipedia.org/wiki' + $('div.mw-search-result-heading').eq(i).find('a').attr('href') || "HTTP_404";
var c = $('div.searchresult').eq(i).text() || "Indisponível";
var s = $('div.mw-search-result-data').eq(i).text() || "Indisponível";
k += '❑ Título: ' + h + '\n❑ Descrição: ' + c + '\n❑ Link: ' + z + '\n❑ Data de postagem: ' + s + '\n\n';
};
reply(k);
break

case config.comandos[12]:
var b = await google_it({ 'query': args.join(" ") });
var c = "";
var g = b.length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i of b) {
c += '❑ Titulo: ' + i.title + '\n❑ Descrição: ' + i.snippet + '\n❑ Link: ' + i.link + '\n\n';
};
reply(c);
break

case config.comandos[15]:
var b = await google_it.image(args.join(" "), { page: 0, safe: true });
var g = b.length;
var sections = [{ title: config.bot, rows: [] }];
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: b[i].origin.title,
rowId: prefix + "mash_2 " + b[i].url
})
};
await conn.sendMessage(from, [{ text: b.length + " Resultados", title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case config.comandos[16]:
g_i_s(args.join(" "), async (error, results) => {
if (error) return reply(config.msg.error.err);
var u = results[Math.floor(Math.random() * results.length)];
await sendMessageAnError(from, [{ image: { url: (u.url.match(/webp/) ? './src/404.jpg' : u.url) } }, { quoted: m }]);
});
break
/*
calculadora
*/
case'rd3':
var a = argx.split('=')[0]
var b = argx.split('=')[1]
var c = argx.split('>')[1]
var x = ((c * b) / a).toFixed(2)
reply(String(x))
break

case'porcentagem':
var a = argx.split('%')[0]
var b = argx.split('%')[1]
var x = ((a / 100) * b).toFixed(2)
reply(String(x))
break
/*
anime
*/
case config.comandos[26]:
var request = await http('https://animesonehd.xyz/?s=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var g = $('div.AnimesDesc').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.AnimesDesc').eq(i).text().split('–')[0].replace(/\n/g, ""),
rowId: prefix + "anime_1 " + $('article.AnimesItem').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: n + (n >= 2 ? ' resultados para está busca.' : ' resultado para está busca.'), title: args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'anime_1':
reply(aguard);
var request = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var a = $('div#capaAnime').find('img').attr('src');
var b = $('b:contains("Episódios:")').parent().text().match(/Lançamento/g) ? $('b:contains("Dia de Lançamento:")').parent().text() : $('b:contains("Episódios:")').parent().text();
var p = $('div.epTitulo').text().split('–')[0].replace(/\n/g, "");
var c = p + '\n' + $('b:contains("Formato:")').parent().text().slice(9) + '\n' + $('b:contains("Gênero:")').parent().text().slice(8) + '\n' + $('b:contains("Estúdio:")').parent().text().slice(9) + '\n' + $('b:contains("Ano:")').parent().text().slice(5) + '\n' + $('b:contains("Autor:")').parent().text().slice(7) + '\n' + b + '\n\n' + $('div#sinopse2').text().slice(9);
await sendMessageAnError(from, [{ image: { url: a }, caption: c, templateButtons: [ { urlButton: { displayText: p, url : args.join(" ") } } ] }]);
break

case config.comandos[167]:
var request = await http('https://animesfalse.com/?s=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var g = $('div.title').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.title').eq(i).find('a').text(),
rowId: prefix + "animes_1 " + $('div.title').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: n + (n >= 2 ? ' resultados para está busca.' : ' resultado para está busca.'), title: args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'animes_1':
reply(aguard);
var request = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
console.log(request)
var $ = cheerio.load(request);
var n = $('div.bnt_gen').length;
var u = assert($('div.bnt_gen').find('a'), "text", n, "", data, ", ");
var p = $('div.capa_poster').find('img').attr('src');
var a = 'Titulo: ' + $('h1').text() + '\nGênero: ' + u.slice(2) + '\n' + $(`div.info-nome:contains('Temporadas')`).parent().text().replace(" ", "").replace('as', 'as:') + '\n' + $(`div.info-nome:contains('Episódios')`).parent().text().replace(" ", "").replace(' Episódios', '').replace('os', 'os:') + '\n' + $(`div.info-nome:contains('Ano')`).parent().text().replace(" ", "").replace('no', 'no:') + '\n' + $(`div.info-nome:contains('Duração média')`).parent().text().replace(" ", "").replace('ia', 'ia:') + '\n\n' + $('div.sinopse').text();
await sendMessageAnError(from, [{ image: { url: p }, caption: a, templateButtons: [ { urlButton: { displayText: $('h1').text(), url : args.join(" ") } } ] }, { quoted: verificado(fs.readFileSync('./resize.jpeg')) }]);
break

case config.comandos[30]:
var { data } = await http('https://nhentai.net.br/?s=' + encodeURIComponent(args.join(" ")), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('span.thumb-titulo').length;
var sections = [{ title: config.bot, rows: [] }];
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('span.thumb-titulo').eq(i).text().split(']')[1],
rowId: prefix + "mash " + $('div.thumb-conteudo').eq(i).find('a').eq(1).attr('href')
});
};
await sendMessageAnError(from, [{ text: " ", title: n + " RESULTADOS", buttonText: "SELECIONAR", sections }]);
break

case'mash':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('ul.post-fotos').find('img').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var s = $('ul.post-fotos').find('img').eq(0).attr('src');
var u = $('h1.post-titulo').find('span').text() + '\n' + n + ' Páginas\n' + $('strong:contains("Cor:")').parent().text().replace('Cor: ', '') + '\n' + assert($('strong:contains("Tags:")').parent().find('a'), 'text', $('strong:contains("Tags:")').parent().find('a').length, '', data, ', ').slice(2);
await sendMessageAnError(from, [{ image: { url: s }, caption: u, templateButtons: [{ index: 1, urlButton: { displayText: $('h1.post-titulo').find('span').text(), url: argx } }, { index: 2, quickReplyButton: { displayText: 'PDF', id: prefix + 'pdf ' + argx } }, { index: 3, quickReplyButton: { displayText: 'IMAGEM', id: prefix + 'mash_1 ' + argx } }]}]);
break

case'pdf':
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('ul.post-fotos').find('img').length;
var n = g > 0 ? g : _newThrowErrr('Este hentai não pode ser baixado em pdf.');
var p = new jsPDF();
var b = $('h1.post-titulo').find('span').text() + '.pdf';
reply('Fazendo download... Aguarde, pôde demorar um pouco, ' + parseMs(5000 * n).minutes + ' minuto(s) e ' + parseMs(5000 * n).seconds + ' segundo(s)');
var { data } = await http($('ul.post-fotos').find('img').eq(0).attr('src'), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' });
var u = Buffer.from(data).toString('base64');
p.addImage(u, 'JPEG', 2.4, 7, 205, 285);
for (let i = 0; i < n; i++) {
await sleep(5000);
p.addPage();
var { data } = await http($('ul.post-fotos').find('img').eq(i).attr('src'), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' });
var u = Buffer.from(data).toString('base64');
p.addImage(u, 'JPEG', 2.4, 7, 205, 285);
};
p.save(b);
await sendMessageAnError(from, [{ document: fs.readFileSync(b), mimetype: "application/pdf", fileName: b }]);
await fs.unlinkSync(b);
break

case'mash_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('ul.post-fotos').find('img').length;
var u = assert($('ul.post-fotos').find('img'), 'alt', n, '#', data);
var s = assert($('ul.post-fotos').find('img'), 'src', n, '*', data);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: u.split('#')[i].split('#')[0],
rowId: prefix + 'mash_2 ' + s.split('*')[i].split('*')[0]
});
};
await sendMessageAnError(from, [{ text: n + ' Páginas\n' + $('strong:contains("Cor:")').parent().text().replace('Cor: ', '') + '\n' + assert($('strong:contains("Tags:")').parent().find('a'), 'text', $('strong:contains("Tags:")').parent().find('a').length, '', data, ', ').slice(2), title: $('h1.post-titulo').find('span').text(), buttonText: "SELECIONAR", sections }]);
break

case'mash_2':
reply(aguard);
await sendMessageAnError(from, [{ image: { url: args.join(" ") } }, { quoted: m }]);
break
/*
filmes
*/
case config.comandos[28]:
var { data } = await http("https://gofilmes.me/search.php?s=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('span.t-tit').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('span.t-tit').eq(i).text(),
rowId: prefix + "gofilmes_1 " + $('div.poster').eq(i).find('a').attr('href')
});
};
var u = sections[0].rows = sections[0].rows.filter((array) => !array.rowId.match(/series/g));
var p = sections[0].rows.length;
var h = p > 0 ? p : _newThrowErrr(config.msg.error.result);
await sendMessageAnError(from, [{ text: " ", title: h + (p >= 2 ? " filmes" : " filme"), buttonText: "SELECIONAR", sections }]);
break

case'gofilmes_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.link').find('a').length >= 4 ? 3 : $('div.link').find('a').length;
var templateButtons = [];
for (let i = 0; i < n; i++) {
templateButtons.push({
urlButton: { displayText: $('div.link').find('a').eq(i).text(), url : $('div.link').find('a').eq(i).attr('href') }
});
};
var s = $('h2').text() + '\n' + $('div.col-2').find('a').eq(0).attr('title').split("Filmes de ")[1] + '\n' + $('strong:contains("Duração:")').parent().text().slice(9) + '\n' + $('strong:contains("Áudio:")').parent().text().slice(7) + '\n' + $('strong:contains("Direção:")').parent().text().slice(9) + '\n' + $('strong:contains("IMDb:")').eq(0).parent().text().slice(6) + '\n\n' + $('strong:contains("Sinopse:")').parent().text().slice(9);
var u = $('div.bg').find('img').attr('src');
await sendMessageAnError(from, [{ image: { url: u }, caption: s, templateButtons }]);
break

case config.comandos[29]:
var { data } = await http("https://filmeseries.top/search.php?s=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.poster').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.poster-nome').eq(i).text(),
rowId: prefix + "filmeseries_1 " + $('div.poster').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: " ", title: n + (n >= 2 ? " filmes" : " filme"), buttonText: "SELECIONAR", sections }]);
break

case'filmeseries_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.player').find('a').length >= 4 ? 3 : $('div.player').find('a').length;
var templateButtons = [];
for (let i = 0; i < n; i++) {
templateButtons.push({
urlButton: { displayText: $('div.player').find('a').eq(i).text(), url : $('div.player').find('a').eq(i).attr('href') }
});
};
var s = $('div.tt').text() + '\n' + $('div.info').eq(2).text() + '\n' + $('div.info').eq(1).text() + '\n' + $('div.info').eq(0).text() + '\n' + $('div.rate').text() + '\n\n' + $('span.sinopse').text().replace(/\n/g, '');
var u = $('div.capa').find('img').attr('src');
await sendMessageAnError(from, [{ image: { url: u }, caption: s, templateButtons }]);
break
/*
download
*/
case config.comandos[19]:
var { data } = await http('https://br.uptodown.com/android/search/' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.name').find('a').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.name').eq(i).find('a').text(),
rowId: prefix + "uptodown_1 " + $('div.name').eq(i).find('a').attr('href')
})
};
await sendMessageAnError(from, [{ text: n + (n >= 2 ? " aplicativos" : " aplicativo"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'uptodown_1':
reply(config.msg.baixar);
var { data } = await http(args.join(" ") + "/download", { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
await sendMessageAnError(from, [{ document: { url: $('a#detail-download-button').attr('href') }, mimetype: "application/apk", fileName: $('h1#detail-app-name').text().replace(/\n/i, "") + '.apk' }]);
break

case config.comandos[20]:
var { data } = await http("https://mcpedl.org/?s=" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('h2.entry-title').find('a').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('h2.entry-title').find('a').eq(i).text(),
rowId: prefix + "minecraft_1 " + $('h2.entry-title').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n + (n >= 2 ? " Versões" : " versão"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'minecraft_1':
reply(config.msg.baixar);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('h1.entry-title').attr('content') + '.apk';
var { data } = await http("https://mcpedl.org/dw_file.php?id=" + $('div.entry-buttons-wrap').find('a').attr('href').replace('/getfile/', ""), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var b = $('a.btn').attr('href');
await sendMessageAnError(from, [{ document: { url: b }, mimetype: "application/apk", fileName: a }]);
break

case config.comandos[21]:
var { data } = await http('https://ws75.aptoide.com/api/7/apps/search?query=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } });
var a = data.datalist.list;
var g = a.length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: a[i].name,
rowId: prefix +  "aptoide_1 " + a[i].file.path_alt + '|' + a[i].name
});
};
await sendMessageAnError(from, [{ text: n + (n >= 2 ? " aplicativos" : " aplicativo"), title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'aptoide_1': 
reply(config.msg.baixar);
await sendMessageAnError(from, [{ document: { url: args.join(" ").split("|")[0] }, mimetype: "application/apk", fileName: args.join(" ").split("|")[1] + '.apk' }]);
break

case config.comandos[22]:
var { data } = await http("https://fvid.party/?url=" + encodeURIComponent(argx), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('section#results').find('a').attr('href') || undefined;
var b = $('section#results').find('a').attr('download') || '';
var c = a ? a : _newThrowErrr(config.msg.error.result);
await sendMessageAnError(from, [{ video: { url: c }, caption: b }, { quoted: m }]);
break

case config.comandos[23]:
var { data } = await http("https://downloadgram.org/", { method: "post", data:  new URLSearchParams(Object.entries({ url: args.join(" "), submit: "" })), headers: { "accept": "*/*", "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('html').html().split('rel="noopener noreferrer" href="')[1].split('"')[0].replace(/;/g, "&");
var b = a ? a : _newThrowErrr(config.msg.error.result);
b.includes('.mp4?') ? await sendMessageAnError(from, [{ video: { url: b } }, { quoted: m }]) : await sendMessageAnError(from, [{ image: { url: b } }, { quoted: m }]);
break
/*
Imagens aleatórias...
*/
case config.comandos[117]:
var request = await http(aleatory(['https://waifu.pics/api/sfw/neko', 'https://api.waifu.im/random/?selected_tags=marin-kitagawa', 'https://api.waifu.im/random/?selected_tags=waifu', 'https://nekos.life/api/v2/img/neko', 'https://waifu.pics/api/sfw/waifu', 'http://api.nekos.fun:8080/api/neko', 'https://waifu.pics/api/sfw/megumin', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[118]:
var request = await http(aleatory(['https://waifu.pics/api/sfw/neko', 'http://api.nekos.fun:8080/api/neko', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/neko', 'https://nekobot.xyz/api/image?type=neko']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[119]:
var request = await http('https://waifu.pics/api/sfw/megumin', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[133]:
var request = await http('https://api.waifu.im/random/?selected_tags=selfies', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[134]:
var request = await http('https://api.waifu.im/random/?selected_tags=marin-kitagawa', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[135]:
var request = await http('https://api.waifu.im/random/?selected_tags=maid', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[136]:
var request = await http('https://api.waifu.im/random/?selected_tags=uniform', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[137]:
var request = await http('https://api.waifu.im/random/?selected_tags=oppai', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[138]:
var request = await http('https://api.waifu.im/random/?selected_tags=mori-calliope', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[120]:
var request = await http(aleatory(['https://akaneko-api.herokuapp.com/api/sfwfoxes', 'https://nekobot.xyz/api/image?type=kemonomimi', 'https://nekos.life/api/v2/img/fox_girl']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[132]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http(aleatory(['https://api.waifu.im/random/?selected_tags=ass', 'https://api.waifu.im/random/?selected_tags=milf', 'https://api.waifu.im/random/?selected_tags=ecchi', 'https://api.waifu.im/random/?selected_tags=ero']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[121]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http(aleatory(['https://nekobot.xyz/api/image?type=hentai', 'https://api.waifu.im/random/?selected_tags=oral', 'http://api.nekos.fun:8080/api/feet', 'https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=hentai', 'http://api.nekos.fun:8080/api/hentai', 'https://nekobot.xyz/api/image?type=tentacle', 'https://waifu.pics/api/nsfw/waifu', 'https://nekobot.xyz/api/image?type=hboobs', 'https://nekobot.xyz/api/image?type=hkitsune', 'https://waifu.pics/api/nsfw/neko', 'https://nekobot.xyz/api/image?type=hanal', 'https://nekobot.xyz/api/image?type=hthigh', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[122]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://waifu.pics/api/nsfw/waifu', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[123]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http(aleatory(['https://waifu.pics/api/nsfw/neko', 'http://api.nekos.fun:8080/api/lewd', 'https://api.waifu.im/random/?selected_tags=paizuri', 'https://nekobot.xyz/api/image?type=paizuri', 'https://nekobot.xyz/api/image?type=hneko']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[124]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://nekobot.xyz/api/image?type=hkitsune', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[125]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://nekobot.xyz/api/image?type=hanal', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[126]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://nekobot.xyz/api/image?type=hboobs', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[127]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://nekobot.xyz/api/image?type=hthigh', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[128]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http(aleatory(['https://api.waifu.im/random/?selected_tags=paizuri', 'http://api.nekos.fun:8080/api/feet', 'https://nekobot.xyz/api/image?type=paizuri']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[129]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var request = await http('https://nekobot.xyz/api/image?type=tentacle', { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[130]:
var request = await http(aleatory(['https://akaneko-api.herokuapp.com/api/mobilewallpapers', 'https://akaneko-api.herokuapp.com/api/nsfwmobilewallpapers']), { method: "get", headers: { "user-agent": agent() } });
await sendMessageAnError(from, [{ image: { url: resolve(request, 'img') }, caption: ' ', buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break

case config.comandos[153]:
var request = await http('https://randomwaifu.altervista.org/', { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(request);
await sendMessageAnError(from, [{ image: { url: ('https://randomwaifu.altervista.org/'.concat($('div.imgbox').find('img').attr('src'))) }, caption: $('center').find('p').text(), buttons: defaultButtons(rowm) }, { quoted: m }], { image: { url: './src/404.jpg' }, caption: ' ', buttons: defaultButtons(rowm) });
break
/*
gifs aleatórios...
*/
case config.comandos[139]:
var a = await http('https://waifu.pics/api/sfw/dance', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[140]:
var a = await http('https://waifu.pics/api/sfw/cry', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[142]:
var a = await http('https://waifu.pics/api/sfw/kick', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[143]:
var a = await http('https://waifu.pics/api/sfw/nom', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[148]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var a = await http('http://api.nekos.fun:8080/api/boobs', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[149]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var a = await http('http://api.nekos.fun:8080/api/anal', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[151]:
var a = await http('https://nekos.life/api/v2/img/tickle', { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[152]:
if (!database['data'][from]?.['act:2']) return reply(config.msg.nsfw);
var a = await http(aleatory(['https://waifu.pics/api/nsfw/blowjob', 'http://api.nekos.fun:8080/api/bj']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[147]:
var a = await http(aleatory(['https://waifu.pics/api/sfw/poke', 'http://api.nekos.fun:8080/api/poke']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[150]:
var a = await http(aleatory(['https://nekos.life/api/v2/img/cuddle', 'https://waifu.pics/api/sfw/cuddle']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[146]:
var a = await http(aleatory(['https://nekos.life/api/v2/img/smug', 'https://waifu.pics/api/sfw/smug']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[145]:
var a = await http(aleatory(['https://nekos.life/api/v2/img/hug', 'https://waifu.pics/api/sfw/hug']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[144]:
var a = await http(aleatory(['https://waifu.pics/api/sfw/kiss', 'https://nekos.life/api/v2/img/kiss']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break

case config.comandos[141]:
var a = await http(aleatory(['https://waifu.pics/api/sfw/slap', 'https://api.waifu.pics/sfw/bonk']), { method: "get", headers: { "user-agent": agent() } });
var b = getRandom(['.gif', '.mp4']);
var c = resolve(a, 'gif');
await sendMessageAnError(from, [{ video: (c.match(/.gif|.GIF/g) ? await convert(c, b[0], b[1]) : fs.readFileSync('./src/404.mp4')), gifPlayback: true, gifAttribution: 2 }]);
await fs.unlinkSync(b[0]);
await fs.unlinkSync(b[1]);
break
/*
anime download.
*/
case'search':
reply(aguard);
var { data } = await http("https://veranimesbr.com/?s=" + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.aniItem').find('a').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.aniItem').find('a').eq(i).find('h2.aniTitulo').text(),
rowId: prefix + "sear_1 " + $('div.aniItem').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " animes", title: "Resultados para: " + args.join(" ") || "Home", buttonText: "SELECIONAR", sections }]);
break

case'sear_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.epiRes').length;
var sections = [{ title: config.bot, rows: [] }];
var s = $('h1').text().replace("Online - Ver Animes BR", "");
var u = $('b:contains("Estúdio:")').parent().text().slice(9).concat('\n', $('b:contains("Status:")').parent().text().slice(8), '\n', $('b:contains("Ano:")').parent().text().replace("Ano: ", ""), '\n\n', $('div.animeSinopseContainer').find('p').text());
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.epiTipo').eq(i).text(),
rowId: prefix + "sear_2 " + $('div.epiItem').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: u, title: s, buttonText: s, sections }]);
break

case'sear_2':
reply(config.msg.baixar);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('title').text().split('Assistir ')[1].split(' - Ver Animes BR')[0] + '.mp4';
var b = $('html').html().split('window.open("')[1].split('"')[0];
await sendMessageAnError(from, [{ document: { url: b }, mimetype: "video/mp4", fileName: a }]);
break

case config.comandos[27]:
var { data } = await http('https://animefire.net/pesquisar/' + args.join(" ").replace(/ /g, "-"), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.card-group').find('a').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('h3.animeTitle').eq(i).text(),
rowId: prefix + "animefire_1 " + $('div.card-group').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'animefire_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.div_video_list').find('a').length;
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.div_video_list').find('a').eq(i).text(),
rowId: prefix + "animefire_2 " + $('div.div_video_list').find('a').eq(i).attr('href').replace("animes", "download")
});
};
var u = $('b:contains("Status do Anime:")').parent().text().slice(19).concat('\n', $('b:contains("Estúdios:")').parent().text().slice(12), '\n', $('b:contains("Ano:")').parent().text().slice(7), '\n\n', $('b:contains("Sinopse:")').parent().text().slice(11));
await sendMessageAnError(from, [{ text: u, title: $('h1').text(), buttonText: $('h1').text(), sections }]);
break

case'animefire_2':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('html').html().match(/<a download=/g).length;
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.d-flex').find('a').eq(i).text(),
rowId: prefix + "animefire_3 " + $('div.d-flex').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " Disponíveis", title: "Escolha a qualidade de video.", buttonText: "SELECIONAR", sections }]);
break

case'animefire_3':
reply(config.msg.baixar);
await sendMessageAnError(from, [{ document: { url: args.join(" ") }, mimetype: "video/mp4", fileName: args.join(" ").split("[AnimeFire.net] ")[1] + '.mp4' }]);
break

case'manga':
var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=https://mangaschan.com/?s=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var b = $('div.bsx').length > 0 ? $('div.bsx').length : _newThrowErrr(config.msg.error.result);
var n = [{ title: config.bot, rows: [] }];
for (let i = 0; i < b; i++) {
n[0].rows.push({
title: $('div.bsx').eq(i).find('a').attr('title'),
rowId: prefix + 'chan ' + $('div.bsx').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: b + (b > 1 ? ' mangás' : ' mangá'), title: 'Resultados para: ' + args.join(" "), buttonText: 'SELECIONAR', sections: n }]);
break

case'chan':
var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var b = $('div.eplister').find('ul > li').length;
var n = [{ title: config.bot, rows: [] }];
var p = assert($('div.seriestugenre').find('a'), 'text', $('div.seriestugenre').find('a').length, '', request, ', ').slice(2);
var g = p.concat('\n', $('table.infotable').find('tbody > tr > td').eq(3).text(), '\n', $('table.infotable').find('tbody > tr > td').eq(1).text(), '\n', $('table.infotable').find('tbody > tr > td').eq(5).text(), '\n', $('table.infotable').find('tbody > tr > td').eq(7).text(), '\n\n', $('div[itemprop="description"]').text());
for (let i = 0; i < b; i++) {
n[0].rows.push({
rowId: prefix + 'holo ' + $('div.eplister').find('ul > li').eq(i).find('div.eph-num > a').attr('href'),
title: $('div.eplister').find('ul > li').eq(i).find('div.eph-num > a').find('span.chapternum').text()
});
};
await sendMessageAnError(from, [{ text: g, title: $('h1[itemprop="name"]').text(), buttonText: $('h1[itemprop="name"]').text(), sections: n }]);
break

case'holo':
var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var s = $('meta[property="og:image"]').attr('content');
var n = $('meta[property="og:image:alt"]').attr('content');
await sendMessageAnError(from, [{ image: { url: s }, caption: n, templateButtons: [{ index: 1, urlButton: { displayText: n, url: argx } }, { index: 2, quickReplyButton: { displayText: 'PDF', id: prefix + 'pdf_1 ' + argx } }, { index: 3, quickReplyButton: { displayText: 'IMAGEM', id: prefix + 'img_1 ' + argx } }] }]);
break

case'pdf_1':
var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var p = new jsPDF();
var x = JSON.parse($('html').html().split('ts_reader.run(')[1].split(');')[0]);
var v = 1;
var e = x.sources[0].images.length;
var s = $('meta[property="og:image:alt"]').attr('content') + '.pdf';
reply('Fazendo download... Aguarde, pôde demorar um pouco, ' + parseMs(5000 * e).minutes + ' minuto(s) e ' + parseMs(5000 * e).seconds + ' segundo(s)');
for (let i of x.sources[0].images) {
await sleep(5000);
var z = await http(i, { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' }, 0);
p.addImage(Buffer.from(z).toString('base64'), 'JPEG', 2.4, 7, 205, 285);
v >= e ? "" : p.addPage();
v++;
};
p.save(s);
await sendMessageAnError(from, [{ document: fs.readFileSync(s), mimetype: "application/pdf", fileName: s }]);
await fs.unlinkSync(s);
break

case'img_1':
var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var n = [{ title: config.bot, rows: [] }];
var v = 1;
var a = $('meta[property="og:image:alt"]').attr('content');
var s = JSON.parse($('html').html().split('ts_reader.run(')[1].split(');')[0]);
for (let i of s.sources[0].images) {
n[0].rows.push({
rowId: prefix + 'mash_2 ' + i,
title: 'Página ' + v
});
v++;
};
await sendMessageAnError(from, [{ text: s.sources[0].images.length + ' Páginas', title: a, buttonText: a, sections: n }]);
break

case'mangas':
var request = await http('https://goldenmangas.top/mangabr?busca=' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var b = $('section.row > div.mangas').length > 0 ? $('section.row > div.mangas').length : _newThrowErrr(config.msg.error.result);
var n = [{ title: config.bot, rows: [] }];
for (let i = 0; i < b; i++) {
n[0].rows.push({
title: $('section.row > div.mangas').eq(i).find('a > h3').text(),
rowId: prefix + 'golden ' + $('section.row > div.mangas').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: b + (b > 1 ? ' mangás' : ' mangá'), title: 'Resultados para: ' + args.join(" "), buttonText: 'SELECIONAR', sections: n }]);
break

case'golden':
var request = await http('https://goldenmangas.top' + args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var b = $('li.row').length;
var n = [{ title: config.bot, rows: [] }];
var p = assert($('h5.cg_color').eq(0).find('a'), 'text', $('h5.cg_color').eq(0).find('a').length, '', request, ', ').slice(4);
var g = p.concat('\n', $('h5.cg_color').eq(3).find('a').text(), '\n', $('h2.cg_color').eq(1).text(), '\n', $('h5.cg_color').eq(1).find('a').text(), '\n\n', $('div#manga_capitulo_descricao').text());
for (let i = 0; i < b; i++) {
n[0].rows.push({
title: $('li.row').eq(i).find('a > div').eq(0).text().replace(/\n/g, ''),
rowId: prefix + 'sakura ' + 'https://goldenmangas.top' + $('li.row').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: g, title: $('h2.cg_color').eq(0).text(), buttonText: $('h2.cg_color').eq(0).text(), sections: n }]);
break

case'sakura':
var request = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } }, 0);
var $ = cheerio.load(request);
var g = 'https://goldenmangas.top' + $('div#capitulos_images').find('center > img').eq(0).attr('src');
await sendMessageAnError(from, [{ image: { url: g }, caption: 'xxx', templateButtons: [{ index: 1, urlButton: { displayText: 'xyz', url: argx } }, { index: 2, quickReplyButton: { displayText: 'PDF', id: prefix + 'pdf_2 ' + argx } }, { index: 3, quickReplyButton: { displayText: 'IMAGEM', id: prefix + 'img_2 ' + argx } }] }]);
break

case'anbient':
var request = await http('https://www.anbient.com/search?search_api_views_fulltext=' + args.join(" ").replace(/ /g, "+"), headers(), 0);
var $ = cheerio.load(request);
var g = $('div#search').find('div > article').find('header').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div#search').find('div > article').find('header').eq(i).find('h2 > a').text(),
rowId: prefix + 'anb_1 https://www.anbient.com' + $('div#search').find('div > article').find('header').eq(i).find('h2 > a').attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'anb_1':
var request = await http('https://api.scrapingant.com/v1/general?url=' + args.join(" ") + '&proxy_country=BR', headers(0, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true }), 0);
var $ = cheerio.load(request.content);
var d = assert($('span.generos').find('b').find('a'), 'text', $('span.generos').find('b').length, '', request.content, ', ').slice(2);
var n = d.concat('\n', $('span[itemprop="numberOfEpisodes"]').text(), '\n', $('div[class="field field-nota"]').find('div').text().replace('\n', '').trim(), '\n', $('div[class="field field-estreia inline"]').find('div').text().replace('\n', '').trim(), '\n\n', $('div[class="field field-body"]').find('div').text().trim());
var g = $('div[class~="zippyshare"]').find('li').length;
console.log(n, '\n', g);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < g; i++) {
sections[0].rows.push({
title: $('div[class~="zippyshare"]').find('li').eq(i).find('a').text() || 'indisponível',
rowId: prefix + 'anb_2 ' + $('div[class~="zippyshare"]').find('li').eq(i).find('a').attr('href')
});
};
console.log(sections[0].rows)
await sendMessageAnError(from, [{ text: n, title: $('h1').text(), buttonText: $('h1').text(), sections }]);
break

case'anivibe':
var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: 'https://animevibe.top/animes?s=' + args.join(" "), proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
var $ = cheerio.load(request.content);
var n = origin($('div.MuiGrid-item').find('a').length || _newThrowErrr(config.msg.error.result), "$('div.MuiGrid-item').find('a').eq(¡).text()", "$('div.MuiGrid-item').find('a').eq(¡).attr('href')", request.content, '$vibe_1 https://animevibe.top');
await sendMessageAnError(from, [{ text: pushName + ': ' + timedat, title: args.join(" "), buttonText: "SELECIONAR", sections: [{ title: config.bot, rows: n }] }]);
break

case'vibe_1':
var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: args.join(" "), proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
var $ = cheerio.load(request.content);
var n = origin($('span:contains("Episódios:")').parent().text().split(':')[1].trim(), "'Episódio ' + Number(¡ + 1)", ("'" + argx.replace('/anime/', '/episode/') + "/' + Number(¡ + 1)"), request.content, "$vibe_2 ");
var u = $('span:contains("Publicação:")').parent().text().split(':')[1].trim().concat('\n', $('span:contains("Episódios:")').parent().text().split(':')[1].trim(), '\n', $('span:contains("Status:")').parent().text().split(':')[1].trim(), '\n\n', $('span:contains("Sinopse:")').parent().text().split(':')[1].trim());
await sendMessageAnError(from, [{ text: u, title: $('meta[property="og:title"]').attr('content'), buttonText: $('meta[property="og:title"]').attr('content'), sections: [{ title: config.bot, rows: n }] }]);
break

case'vibe_2':
var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: args.join(" "), proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
var $ = cheerio.load(request.content);
var n = $('div#video').find('video#video_html5_api').attr('src') + '?type=video/mp4&title=' + encodeURIComponent($('span#video-header').text());
var u = $('div#video-qualities').text().match(/720p/g) ? $('div#video').find('video#video_html5_api').attr('src').replace('/sd/', '/hd/').replace('480p', '720p') + '?type=video/mp4&title=' + encodeURIComponent($('span#video-header').text()) : null;
console.log($('div#video-qualities').text(), '\n', n, '\n', u);
var s = u ? [{ buttonId: prefix + 'dlxnxx ' + n + '|' + $('span#video-header').text(), buttonText: { displayText: '360p' }, type: 1 }, { buttonId: prefix + 'dlxnxx ' + u + '|' + $('span#video-header').text(), buttonText: { displayText: '720p' }, type: 1 }] : [{ buttonId: prefix + 'dlxnxx ' + n + '|' + $('span#video-header').text(), buttonText: { displayText: '360p' }, type: 1 }];
console.log(s);
await sendMessageAnError(from, [{ text: $('span#video-header').text(), buttons: s }]);
break

case'anivision':
reply(aguard);
var { data } = await http('https://animes.vision/search?nome=' + args.join(" ").replace(/ /g, "+"), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.flw-item').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
$('h3.film-name').eq(i).find('a').attr('href').match('/animes/') ? sections[0].rows.push({ title: $('h3.film-name').eq(i).find('a').attr('title'), rowId: prefix + 'vision_1 ' + $('h3.film-name').eq(i).find('a').attr('href') }) : "";
};
await sendMessageAnError(from, [{ text: n + " animes", title: "Resultados para: " + args.join(" ") || "Home", buttonText: "SELECIONAR", sections }]);
break

case'vision_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.screen-items').find('div.item').length;
var g = $('div.anisc-info').find('div.item').eq(8).find('a').length;
var sections = [{ title: config.bot, rows: [] }];
var s = $('div.anisc-info').find('div.item').eq(1).find('span.name').text();
var h = assert($('div.anisc-info').find('div.item').eq(8).find('a'), 'text', g, '', data, ", ").slice(2);
var u = h.concat('\n', $('div.anisc-info').find('div.item').eq(9).find('a').text(), '\n', ($('div.anisc-info').find('div.item').eq(3).find('span.name').text() || 'desconhecido.'), '\n', $('div.anisc-info').find('div.item').eq(6).find('span.name').text(), '\n\n', $('div.anisc-info').find('div.item').eq(0).find('div.text').text().replace(/\n/g, '').trim());
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.screen-items').find('div.item').eq(i).attr('data-title'),
rowId: prefix + 'vision_2 ' + $('div.screen-items').find('div.item').eq(i).find('a').attr('href') + '/download'
});
};
await sendMessageAnError(from, [{ text: u, title: s, buttonText: s, sections }]);
break

case'vision_2':
reply(config.msg.baixar);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('html').html().split('wire:initial-data="')[1].split('">')[0];
var b = a.replace(/&quot;/g, "").replace(/&amp;/g, '&').replace(/\\/g, "");
var c = b.match(/mp4?/g).length;
var buttons = []
for (let i = 0; i < c; i++) {
buttons.push({
buttonId: prefix + 'dlxnxx ' + b.split('?s=')[i + 1].split(',')[0].replace(/}/g, "") + '|' + $('h1.cat-heading').text(), buttonText: { displayText: b.split('?s=')[i + 1].split(',')[0].split('/')[6].split('p/')[0] }, type: 1
});
};
await sendMessageAnError(from, [{
image: { url: $('img.mt-5').attr('src') },
caption: $('h1.cat-heading').text(),
buttons: buttons
}]);
break

case'tiktok':
var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: 'https://ttsave.app/#' + argx, js_snippet: 'YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgNTAwMCkpOw==', proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
var $ = cheerio.load(request.content);
var n = origin($('div#button-download-ready').find('a').length, "$('div#button-download-ready').find('a').eq(¡).text().trim()", "$('div#button-download-ready').find('a').eq(¡).attr('href')", request.content, prefix + 'ttk ');
await sendMessageAnError(from, [{ text: args[0], title: $('h2').eq(1).text() + '\n' + $('p').eq(1).text(), buttonText: "SELECIONAR", sections: [{ title: config.bot, rows: n }] }]);
break

case'ttk':
await sendMessageAnError(from, [{ video: { url: argx } }, { quoted: m }]);
break

case'facebook':
var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: 'https://fdownloader.net/pt?q=' + encodeURIComponent(argx), js_snippet: 'YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgNTAwMCkpOw==', proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
var $ = cheerio.load(request.content);
var n = $('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr').length ?? _newThrowErrr(config.msg.error.result);
var q = $('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr');
var e = [];
for (let i = 0; i < n; i++) {
var p = q.eq(i).find('td').eq(1).text() == 'sim' ? q.eq(i).find('td').eq(2).find('button').attr('data-videourl') : q.eq(i).find('td').eq(2).find('a').attr('href');
e.push({ rowId: prefix + 'ttk ' + p, title: q.eq(i).find('td').eq(0).text() });
};
await sendMessageAnError(from, [{ text: $('div.detail').find('div.thumbnail > div.content > div.clearfix').find('p').text(), title: $('div.detail').find('div.thumbnail > div.content > div.clearfix').find('h3').text(), buttonText: "SELECIONAR", sections: [{ title: config.bot, rows: e }] }]);
break

case'face':
var { data } = await cherry.Facebook.getVideo(args.join(" "));
var u = (data.body?.videoHD ?? data.body?.video) ?? _newThrowErrr(config.msg.error.result); await sendMessageAnError(from, [{ video: { url: u } }]);
break

case'goyabu':
var $ = await https('https://goyabu.com/?s=' + args.join(" ").replace(/ /g, '+'), 0);
var n = $('div.episodes-container').find('div.anime-episode').length;
var sections = [{ title: " ", rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.episodes-container').find('div.anime-episode').eq(i).find('h3').text(),
rowId: prefix + 'yabu_1 ' + $('div.episodes-container').find('div.anime-episode').eq(i).find('a').attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'yabu_1':
var $ = await https(args.join(" "), 0);
var n = $('div.anime-info-right').find('div').eq(5).text().split(':')[1].trim().concat('\n', $('div.anime-info-right').find('div').eq(1).text().split(':')[1].trim(), '\n', $('div.anime-info-right').find('div').eq(4).text().split(':')[1].trim(), '\n\n', $('div.anime-description').text().trim());
var g = $('div.row').find('a').length;
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < g; i++) {
sections[0].rows.push({
title: $('div.row').find('a').eq(i).find('div').eq(1).text(),
rowId: prefix + 'yabu_2 ' + $('div.row').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n, title: $('h1').text(), buttonText: $('h1').text(), sections }]);
break

case'yabu_2':
var $ = await https(args.join(" "), 0);
var g = 'https://kanra.dev' + $('html').html().split('https://kanra.dev')[1].split("'")[0];
var p = await https('https://tinyurl.com/api-create.php?url=' + g, 0);
var n = $('h1').text() + ': ' + p;
reply(n);
break

case config.comandos[31]:
var { data } = await http('https://www.muitohentai.com/buscar/' + args.join(" ").replace(/ /g, "+") + '/', { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('div.data').find('h3').find('a').length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.data').find('h3').find('a').eq(i).text(),
rowId: prefix + "muito_1 " + "https://www.muitohentai.com" + $('div.data').find('h3').find('a').eq(i).attr('href')
});
};
await sendMessageAnError(from, [{ text: n + " Resultados", title: "Pesquisado por: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'muito_1':
reply(aguard);
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var n = $('div.items').find('div.data').length;
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.items').find('div.poster').find('span.c').eq(i).text(),
rowId: prefix + "muito_2 " + "https://www.muitohentai.com" + $('div.items').find('div.poster').find('a').eq(i).attr('href').replace("episodios", "baixar-hentai")
});
};
var u = $('div.extra').find('span.date').text().concat('\n\n', $('div.wp-content').find('p').text());
await sendMessageAnError(from, [{ text: u, title: $('div.data').find('h1').text(), buttonText: $('div.data').find('h1').text(), sections }]);
break

case'muito_2':
reply("Fazendo download... Aguarde. Pôde demorar bastante! 15 minutos.");
var { data } = await http(args.join(" "), { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var a = $('div.module').find('a').eq(0).attr('href');
var b = $('div.module').find('a').eq(1).attr('href');
var c = $('h1.epih1').text() + '.mp4';
var u = a.match('https://www.muitohentai') ? a : b;
await sendMessageAnError(from, [{ document: { url: u }, mimetype: "video/mp4", fileName: c }]);
break
/*
ephoto 360
*/
case config.comandos[32]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["984dd03e-220d-4335-a6ba-7ac56b092240", "71074346-5cb3-4b7d-9b8b-a84e4f142ba4", "88bacc38-e755-450a-bbc1-f5671d77c8a7"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case'cak':
await sendMessageAnError(from, [{ image: { url: 'https://s1.ephoto360.com/images/user_image/2022/06/62bad7e19842f.jpg' } }]);
break

case config.comandos[34]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["df2d7c1e-7319-4157-a02c-0c7f71f41cc3", "868cf218-c4c9-432a-b737-8d43ecdc580c", "c542dab0-ea54-44a5-9976-c6af66f71d9c", "7cdb6c7b-1c37-41c6-b50d-500c6111833d", "a60760ea-f266-4064-bde0-8d02f174254d", "a5cbd215-ac33-46e2-97e5-5bd6e1c800b3", "6ac134d1-f593-499d-8641-e7ce45af680e", "c82cbc01-e167-47bb-8714-02b073c3738d"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[35]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["9424ca60-11e4-4904-86b9-10ecf2442f5c", "eafc98ed-6ba6-4a30-88e1-e73b059eeca1", "a2983d77-ca9d-4d95-b5fe-06c65f59f8cd", "a381c3b1-7505-4299-9d8a-a6c92f6ef228"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[33]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["1508810c-a33b-4261-ad04-48dea8932865", "a04d53f2-1449-4491-9f96-041e7ea7c47d", "42d73af1-9c38-43b5-abdb-de0bb435dfbe", "3a75b5da-ec04-4216-8c4e-c900359cfd0d", "200c1bb0-cb27-4838-80c8-d140867c1739", "26fd6ea7-92b5-4747-9de5-c537289e2318", "cd5465d9-9c5e-4d08-9f1b-3b9f3a45a858"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[36]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["4a479eb7-49a4-4246-a940-21e04deaa034", "09bc04ad-8ffb-4ba0-8785-fef9e8b3e9f7", "2206787c-e5df-4dd1-a764-2a92efa5d874", "fcfd610d-9d82-43cb-81e6-edce7ff9f748", "0ab2892e-876f-472c-9527-84c92775d5dd", "ce67e7f4-f686-470a-bd82-4f6b5d00e3b0", "a755d11c-24d3-4d96-850e-1fd7422e7ca4", "1acee5af-85c5-4d95-b094-d3de3c015e58", "1cde3da2-d4c5-4e62-977d-4fcfe11227f9", "8bea6f94-2410-4041-91f7-510a2406cee3", "5d3ab9be-f632-478e-97f1-06909af65f89", "d2e568d6-fbc9-4551-afdc-325dc386a892", "126b33de-e5e4-4b56-90ab-0bc9d6c89eee", "3f8db561-d7ea-4695-91a6-ca7f480330fb", "6fceb9a9-ad87-43b0-8ada-40b305ee6491", "cd28234a-77e4-48df-8b97-881e8d017e55", "e1ca407e-cfe3-43a9-a59c-56bc7f4d9055", "7d42e33c-6b8b-4ce7-bc77-0f708d187deb", "6407f152-1529-45e5-9ff1-afff870e84de", "7f044e87-0a33-4e01-b131-c9a1eebf2531", "5b5411eb-369f-49d1-bb7c-7325f15cdf40", "a837624c-2d78-4be9-a019-1f86eaa7e0f3", "96bbc10f-6cec-4193-ad18-af7d692837b0"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[37]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["87f0f8f1-fa23-4417-8a94-ba6c0b371635", "ced7cbe7-f8e5-4db1-b1cd-cb13d1dd1d52", "f42255ff-a569-41a0-8f33-acc269a52921", "8a37f145-b22f-4054-9eb4-113d84129a08", "a37c9d01-8c15-422e-ab02-b7cea4556745", "b79db6e6-4230-4f90-abab-388de6800f83", "2738bb7d-95dd-49e6-b7fd-43e90f1d77b2", "4feaddcf-8623-4a68-bb6d-e70ab0081642", "98aff386-d5ea-470f-aa88-032b1257ed61", "478263bb-3913-4dce-b827-cc09ce4c0b5e", "5c650d06-328d-486e-8f4a-311eb5942001", "d80b45dd-c23d-4e76-af69-a24e59ad73bc", "594b82d8-fed4-43a3-8b39-b8359d1bdb18", "df4302f5-e7ff-4cba-a3ed-2559d6d4cf6a"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[38]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = aleatory(["r4o5wsey1", "d8f5f0x19", "vlqxqbknu", "df9c5iu0o", "g2cnx1qud", "8rewm9ker", "orlnd1jpd", "494bu708o", "83hscot72", "uz62srd8q", "u0jzc2s0m", "n44ofsn5a", "6jnveqwxq", "t79vujrpa", "rc3mgmhml", "0g71vg2s8", "4bltauy76", "rxplur13r", "dx729wun2"]);
var b = await mintake.ephoto4("https://en.ephoto360.com/make-team-logo-online-free-432.html", [args.join(" ")], a);
var c = "https://s1.ephoto360.com".concat(b.image);
await sendMessageAnError(from, [{ image: { url: c }, contextInfo: { isForwarded: true } }]);
break
/*
text pro
*/
case config.comandos[39]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[41]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[42]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[43]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[44]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[45]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/break-wall-text-effect-871.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[46]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[47]:
if (argx == "") return reply(config.msg.text_1.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-logo-joker-online-934.html", [args.join(" ")]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[48]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 15) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[49]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 25) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[40]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 25) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[50]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 25) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[51]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 25) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break

case config.comandos[52]:
if (argx == "" || !argx.includes('|')) return reply(config.msg.text_2.replace('#p', prefix).replace('#c', rowm));
if (argx.length > 25) return reply(config.msg.maximo);
var a = await mintake.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [argx.split("|")[0], argx.split("|")[1]]);
await sendMessageAnError(from, [{ image: { url: a }, contextInfo: { isForwarded: true } }]);
break
/*
stickers...
*/
case config.comandos[53]:
if (iQ('image') || iQ('image', true)) {
var a = await downloadMediaMessage('image', m);
var e = await writeExifImg512(a, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: e } }, { quoted: m }]);
await fs.unlinkSync(e);
};
if (iQ('video') || iQ('video', true)) {
var s = await downloadMediaMessage('video', m);
var u = await writeExifVid512(s, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: u } }, { quoted: m }]);
await fs.unlinkSync(u);
};
break

case config.comandos[54]:
if (iQ('image') || iQ('image', true)) {
var a = await downloadMediaMessage('image', m);
var e = await writeExifImg200(a, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: e } }, { quoted: m }]);
await fs.unlinkSync(e);
};
if (iQ('video') || iQ('video', true)) {
var s = await downloadMediaMessage('video', m);
var u = await writeExifVid200(s, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: u } }, { quoted: m }]);
await fs.unlinkSync(u);
};
break

case config.comandos[55]:
if (iQ('image') || iQ('image', true)) {
var a = getRandom('.webp');
var b = await downloadAndSaveMediaMessage("image", getRandom('.png'), m);
exec(`ffmpeg -i ${b} -vcodec libwebp -filter:v fps=fps=${config.fps} -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${a}`, async (err) => {
var c = await writeExif(a, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: c } }, { quoted: m }]);
await fs.unlinkSync(b);
await fs.unlinkSync(a);
await fs.unlinkSync(c);
});
};
if (iQ('video') || iQ('video', true)) {
var p = getRandom('.webp');
var g = await downloadAndSaveMediaMessage("video", getRandom('.mp4'), m);
exec(`ffmpeg -i ${g} -vcodec libwebp -filter:v fps=fps=${config.fps} -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${p}`, async (err) => {
var k = await writeExif(p, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: k } }, { quoted: m }]);
await fs.unlinkSync(g);
await fs.unlinkSync(p);
await fs.unlinkSync(k);
});
};
break

case config.comandos[56]:
if (!iQ('sricker')) return reply('Apenas sticker.');
var b = await downloadAndSaveMediaMessage('sticker', getRandom('.webp'), m);
var p = await writeExif(b, { packname: args.join(" ").split('|')[0] ? args.join(" ").split('|')[0] : groupNm, author: args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : pushName });
await sendMessageAnError(from, [{ sticker: { url: p } }, { quoted: m }]);
await fs.unlinkSync(b);
await fs.unlinkSync(p);
break

case config.comandos[57]:
var { data } = await http("https://tenor.com/search/" + args.join(" ").replace(/ /g, "-") + "-gifs", { method: "get", headers: { "user-agent": agent() } });
var $ = cheerio.load(data);
var g = $('html').html().match(/GifFavButton/g).length;
var n = g > 0 ? g : _newThrowErrr(config.msg.error.result);
var sections = [{ title: config.bot, rows: [] }];
for (let i = 0; i < n; i++) {
sections[0].rows.push({
title: $('div.Gif').eq(i).find('img').attr('src').split("/")[4].split(".gif")[0].replace(/-/g, " "),
rowId: prefix + "stickers_1 " + $('div.Gif').eq(i).find('img').attr('src')
});
};
await sendMessageAnError(from, [{ text: "Total: " + n, title: "Resultados para: " + args.join(" "), buttonText: "SELECIONAR", sections }]);
break

case'stickers_1':
reply(aguard);
var e = getRandom('.webp');
var u = getRandom('.gif');
exec(`wget ${args.join(" ")} -O ${u} && ffmpeg -i ${u} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${e}`, async (err) => {
if (err) return reply(config.msg.error.err);
var k = await writeExif(e, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: k } }, { quoted: m }]);
await fs.unlinkSync(u);
await fs.unlinkSync(e);
await fs.unlinkSync(k);
});
break

case config.comandos[58]:
if (argx == "" || argx.length > 2) return reply(config.msg.error.reject);
const { EmojiAPI } = read("emoji-api");
const emoji = new EmojiAPI();
emoji.get(args.join(" ")).then((b) => {
var k = getRandom('.webp');
var p = getRandom('.png');
exec(`wget ${b.images[0].url} -O ${p} && ffmpeg -i ${p} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${k}`, async (err) => {
if (err) return reply(config.msg.error.err);
var e = await writeExif(k, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: e } }, { quoted: m }]);
await fs.unlinkSync(p);
await fs.unlinkSync(k);
await fs.unlinkSync(e);
});
});
break

case config.comandos[59]:
if (argx == "") return reply(config.msg.error.reject);
var { data } = await http('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' + encodeURIComponent(argx.split("+")[0]) + '_' + encodeURIComponent(argx.split("+")[1]), { method: "get", headers: { "user-agent": agent() } });
var e = getRandom('.webp');
var a = getRandom('.png');
exec(`wget ${data.results[0].url} -O ${a} && ffmpeg -i ${a} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${e}`, async (err) => {
var k = await writeExif(e, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: k } }, { quoted: m }]);
await fs.unlinkSync(a);
await fs.unlinkSync(e);
await fs.unlinkSync(k);
});
break

case config.comandos[60]:
if (argx == "" || argx.length > 30) return reply(config.msg.error.reject);
var s = getRandom('.webp');
var { data } = await http("https://api.xteam.xyz/attp?file&text=" + encodeURIComponent(args.join(" ")), { method: "get", headers: { "user-agent": agent() }, responseType: 'arraybuffer' });
fs.writeFileSync(s, data);
var y = await writeExif(data, { packname: groupNm, author: pushName });
await sendMessageAnError(from, [{ sticker: { url: y } }]);
await fs.unlinkSync(s);
await fs.unlinkSync(y);
break

case"addf":
if (!iQ('sticker')) return reply("Apenas figurinhas.");
var q = argx ? argx : hex(5);
if (verify(q, database.sticker)) {
reply("Já existe uma figurinha com este mesmo nome. Tente outro...");
} else {
reply("Figurinha adicionada... você pode ver a lista de figurinhas usando: " + prefix + 'listf');
database.sticker.push(q);
await downloadAndSaveMediaMessage('sticker', './src/stickers/' + q + '.webp', m);
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2));
};
break

case'listf':
var p = "Lista de figurinhas:\n\n";
for (let i of database.sticker) {
p += i + '\n';
};
p += '\nTotal: ' + database.sticker.length + '\nVocê pode pegar uma figurinha com o comando: ' + prefix + 'getf "figurinha"';
await sendMessageAnError(from, [{ text: p }, { quoted: verificado(config.quoted) }]);
break

case'getf':
if (verify(argx, database.sticker)) {
await sendMessageAnError(from, [{ sticker: fs.readFileSync('./src/stickers/' + argx + '.webp') }, { quoted: m }]);
} else {
var q = "Figurinha não encontrada... disponíveis:\n\n";
for (let i of database.sticker) {
q += i + '\n';
}
q += '\nTotal: ' + database.sticker.length;
await sendMessageAnError(from, [{ text: q }, { quoted: verificado(config.quoted) }]);
};
break

case config.comandos[62]: case config.comandos[64]:
if (isQuotedMsg && quotedMsg.stickerMessage.isAnimated == false) {
var q = getRandom(".jpeg");
var g = await downloadAndSaveMediaMessage("sticker", getRandom('.webp'), m);
exec(`ffmpeg -i ${g} ${q}`, async (err) => {
if (err) return reply(config.msg.error.err);
await sendMessageAnError(from, [{ image: fs.readFileSync(q) }, { quoted: m }]);
await fs.unlinkSync(g);
await fs.unlinkSync(q);
});
} else if (quotedMsg.stickerMessage.isAnimated == true) {
var h = await downloadAndSaveMediaMessage("sticker", getRandom('.webp'), m);
var u = await webp2gifFile(h);
await sendMessageAnError(from, [{ video: { url: u }, gifPlayback: true, gifAttribution: 2 }, { quoted: m }]);
await fs.unlinkSync(h);
};
break
/*
outros... utilitários
*/
case'r':;
return console.log(JSON.stringify(eval(args.join(" "))));
break

case'resetar':;
exec('cd src/session && rm -rf sender-key-memory-' + from + '.json', async (err, stdout) => {
console.log('resetar: ' + from)
});
break

case'test':
await sendMessageAnError(from, [{ text: 'sex', jpegThumbnail: fs.readFileSync('./src/404.jpg', 'base64') }]);
break

case'antifake':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:0'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:0'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:00', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'antilink':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:1'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:1'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:01', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'nsfw':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:2'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:2'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:02', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'antilinkhard':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:3'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:3'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:03', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'x9':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:4'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:4'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:04', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'welcome':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:5'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:5'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:05', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'simi':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:6'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:6'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:06', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'leveis':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:7'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:7'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:07', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'antidelete':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:8'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:8'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:08', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'antispam':
console.log(args, args[0])
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:9'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:9'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:09', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case'antiviewonce':
if (!_iMe && !owner && !iAdmin) return reply(config.msg.negar);
if (args[0] == undefined) {
await sendMessageAnError(from, [{ text: (database['data'][from]?.['act:10'] ? 'Desativar?' : 'Ativar?'), buttons: [{ buttonId: prefix + rowm + ' ' + (database['data'][from]?.['act:10'] ? 0 : 1), buttonText: { displayText: 'SIM' }, type: 1}] }, { quoted: m }]);
};
args[0] ? await ativador(mongo, from, 'act:10', Number(args[0]), rowm, sendMessageAnError, m) : "";
break

case 'gho':
//if (iMe || owner || iGroupAdmin) {
//if (args[0] == undefined) return reply("Checar todos? -all. Determinado tempo? número de dias após o comando.")
//if (args[0].match("-all")) {
vbs = check(from, database.ghost)
await mongo(from, 'find', {}).then(async(result) => {
if (result[0]) {
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
});
/*
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
}*/
//} else {
//reply(config.msg.negar)
//}
break

};
})().catch(async (err, log = console.log(rowm, err)) => {
reply(rowm.concat(': ', config.evocar ? err : config.msg.error.err));
var path = await fs.readdir('./');
var arch = path.filter((i) => i.match(/.png|.jpg|.webp|.mp3|.mp4|.gif/g) && fs.unlinkSync(i));
});
};

virtex (conn, from, m, sender, isGroup, iModer, iAdmin, body, pushName, type);
velha (conn, from, m, sender, isGroup, body);
Inteligence (conn, from, m, body, type, isQuotedMsg, quotedMsg, reply, mongo);
LevelingXp (conn, from, m, sender, isGroup, (groupParticipants || []), _icmd, rowm, pushName, timedat, mongo, {})//access);
IndexSecundaria (conn, from, m, sender, isGroup, (groupParticipants || []), rowm, pushName, _icmd, timedat, body, type, iAdmin, iModer, _iMe, isQuotedMsg, quotedMsg, args, argx, metadata, owner, reply, prefix, iQ, __getGroupAdmin, aguard, sendMessageAnError);
{
(async () => {
setTimeout(async () => {
var data = await conn.groupFetchAllParticipating().catch(() => undefined);
var path = await fs.readdir('./src/session/');
var k = path.filter((t) => t.match('sender-k') && !t.match('memory'));
var a = data && k.map((f) => { if (Object.keys(data).includes(f.split('r-key-')[1].split('--')[0])) {
var u = [];
var en = Object.values(data).forEach((i) => i.id == f.split('r-key-')[1].split('--')[0] && i.participants.map((i) => u.push(i.id)));
var up = u.includes(f.split('g.us--')[1].split('-')[0] + '@s.whatsapp.net') ? "" : (fs.unlinkSync('./src/session/' + f), console.log('deleted:', f));
var ns = u.includes(f.split('g.us--')[1].split('-')[0] + '@s.whatsapp.net') ? "" : (() => { if (fs.existsSync('./src/session/session-' + f.split('g.us--')[1].split('-')[0] + '.0.json')) fs.unlinkSync('./src/session/session-' + f.split('g.us--')[1].split('-')[0] + '.0.json'), console.log('deleted:', 'session-' + f.split('g.us--')[1].split('-')[0]) })();
}
else {
console.log('deleted:', f);
fs.unlinkSync('./src/session/' + f);
};
});
var arch = path.map((i) => i.match('pre-k') && i.split('-')[2].split('.')[0]).filter((i) => i !== null);
var files = arch.filter((i) => i != Math.max(...arch)).map((i) => { fs.unlinkSync('./src/session/pre-key-' + i + '.json'); console.log('deleted:', 'pre-key-' + i + '.json') }); }, 10000);
})();
};
};
})().catch((err) => console.log('Zona A:'.green, err))
};
});

conn.ev.on('connection.update', async ({ receivedPendingNotifications, qr, connection, lastDisconnect }) => {
if (connection == 'close') {
if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
connectToWhatsApp();
} else {
console.log(chalk.red('desconectado.'));
};
} else {
connection == 'open' ? twisters.put('frames', { active: false, text: chalk.rgb(0, 255, 0)('conectado: ' + parseMs(Date.now() - _conectar.time).seconds + ' segundos.') }) : (connection == 'connecting' ? (_conectar.on ? (twisters.put('frames', { text: chalk.keyword(randomColors1)('conectando') }), _conectar.on = false) : "") : (qr ? console.log(chalk.green('É necessário um segundo aparelho para escanear o QRCODE')) : ""));
};
});
};
connectToWhatsApp()['catch']((err) => console.log(err)); module.exports = { connectToWhatsApp };