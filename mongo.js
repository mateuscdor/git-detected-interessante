const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielxn60:danielxn60@db.ahfcl2d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const moment = require('moment-timezone');

const position = (find, array, attr) => {
let position = undefined;
Object.keys(array).forEach((i) => {
if ((attr ? array[i]['py'] : array[i]) == find) {
position = i;
}
});
return position;
};

{
(async () => {
await client.connect();
const db = client.db('db');
//const collection = db.collection('activators');
{
(async () => {
global.mongo = async (collection, type, action, atributo) => {
const _cluster = db.collection(collection);
const _results = type == 'find' ? await _cluster.find(action).toArray() : (type == 'updateOne' ? await _cluster.updateOne(action[0], { $set: action[1] }) : await _cluster[type](action));
return atributo ? (_results[0] ? (atributo == 'all' ? _results[0] : _results[0][atributo]) : false) : _results;
};
})().catch((err) => { return false });
};
const from = "120363021666642593@g.us";
const sender = "559984620740@s.whatsapp.net";
const icmd = false
const cmd = 'waifu'
const timedat = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
const quotedMsg = { conversation: 'outrem' };
const budy = 'js';
/*
await mongo('db', 'find', { v···: 'data' }, 'all').then(async({ x···, y···, z··· }) => {
//x···[from] = {}
//x···[from]['5@s.wpp'] = {}
//console.log(x···)
console.log(x···)
await mongo('db', 'updateOne', [{ v···: 'data' }, { x···: x··· }]);
});
0·[from] = {}
*/
//.then(async(result) => {
//await mongo('db', 'insertOne', { _id: 'cannot', data: {} })
const groupMembers = [{ id: '559984620745@s.whatsapp.net' }, { id: '559984620740@s.whatsapp.net' }, { id: '559984620747@s.whatsapp.net' }]
//await insertParticipants('0', {})
//await mongo('db:0', 'find', { _id: '$0' }, 'all').then(async(res) => {
const fs = require('fs-extra')
//const read = (file) => (file.endsWith('.json') ? JSON.parse(fs.readFileSync(file)) : require(file))

await mongo('db:0', 'find', { _id: '$0' }, 'all').then(async({ data }) => {
const insertParticipants = async (mode, insert, id, abyss = (mode == '0' ? (insert[from] = {}, base = insert[from]) : base = insert[from])) => {
groupMembers.map((x) => base[id ? sender : x.id] = { xp: 0, nivel: 1, message: 0, command: 0, now: "", used: {} });
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: insert }]);
};
/*
if (data[from]) {
if (data[from][sender] !== (undefined) && (icmd == false)) {
data[from][sender]['message'] += 1;
data[from][sender]['now'] = timedat;
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
if (data[from][sender]) {
data[from][sender]['command'] += 1;
if (data[from][sender]['used'][cmd]) {
data[from][sender]['used'][cmd]['value'] += 1;
} else {
data[from][sender]['used'][cmd] = Object({ value: 1 });
};
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
await insertParticipants('1', data, 1);
};
};
if (data[from][sender] !== undefined && data[from]['level']) {
x = Math.floor(Math.random() * 80);
y = data[from][sender]['nivel']   * 500 * 1.5;
if ((Number(data[from][sender]['xp'] += x)) >= y) {
//conn.sendMessage(from, { text: 'Nome: '.concat(pushName, '\nXP do usuario: ', data[from][sender]['xp'], '\nNivel: ', data[from][sender]['nivel'], ' --> ', (data[from][sender]['nivel'] += 1), '\nMensagens: ', data[from][sender]['message']) }, { quoted: m });
};
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
};
} else {
await insertParticipants('0', data, 0);
};
*/
});
/*
console.log(data[from][sender].xp);
data[from][sender].xp += 72819
data[from][sender].nv += 92
data[from][sender].mes += 728
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
*/
//})

await client.close();
})()
};