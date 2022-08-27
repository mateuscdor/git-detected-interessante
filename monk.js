const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielxn60:danielxn60@db.ahfcl2d.mongodb.net/?retryWrites=true&w=majority";
const msrv = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const moment = require('moment-timezone');
const fs = require('fs-extra');
const read = (file) => (file.endsWith('.json') ? JSON.parse(fs.readFileSync(file)) : require(file));

{
(async () => {
//try 
//{
await msrv.connect();
global.access = msrv.db('db');
//} 
//catch {}

const from = "120363021666642593@g.us";
const sender = "559984620740@s.whatsapp.net";
const icmd = false
const cmd = 'hentai'
const timedat = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
{
(async () => {
global.mongo = async (collection, type, action, end·) => { try
{
const data = access.collection(collection);
const doc· = type == 'find' ? await data.find(action).toArray() : (type == 'updateOne' ? await data.updateOne(action[0], { $set: action[1] }) : await data[type](action));
return end· ? (doc·[0] ? (end· == 'red' ? doc·[0] : doc·[0][end·]) : false) : doc·;
}
catch (err) {
console.log('Remote:', err);
const path = collection == 'db:0' ? './src/database.json' : (collection == 'db:2' ? './src/basedata.json' : './src/config.json');
const json = JSON.parse(fs.readFileSync(path));
if (type.match(/find/g)) return json;
json['data'] = action[1]['data'];
fs.writeFileSync(path, JSON.stringify(json, undefined, 2));
};
};
})();
};
/*
await mongo('db:0', 'find', { _id: '$0' }, 'red').then(async({ data }) => {
delete data[from][sender]
console.log(data)
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
})
*/
const groupMembers = [{ id: '559984620745@s.whatsapp.net' }, { id: '559984620740@s.whatsapp.net' }, { id: '559984620747@s.whatsapp.net' }]

await mongo('db:0', 'find', { _id: '$0' }, 'red').then(async function ({ data }) {
const insertParticipants = async (mode, final, jid, abyss = (mode == '0' ? (final[from] = {}, base = final[from]) : base = final[from])) => {
groupMembers.map((call) => base[jid ? sender : call.id] = Object({ 'id:0': 0, 'id:1': 1, 'id:2': 0, 'id:3': 0, 'id:4': "", 'id:5': {} }));
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: final }]);
};
console.log(data);
if (data[from]) {
if (data[from][sender] !== (undefined) && (icmd == false)) {
i = data[from][sender]['id:2'] += 1;
j = data[from][sender]['id:4'] = timedat;
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
if (data[from][sender]) {
if (data[from][sender]['id:5'][cmd]) {
i = data[from][sender]['id:5'][cmd]['value'] += 1;
} else {
i = data[from][sender]['id:5'][cmd] = new Object({ value: 1 });
};
j = data[from][sender]['id:3'] += 1;
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
await insertParticipants('1', data, 1);
};
};
if (data[from][sender] && data[from]['act:7'])  {
_ = Math.floor(Math.random() * 80);
n = data[from][sender]['id:1'] * 500 * 1.5;
if ((data[from][sender]['id:0'] += _)>= n) {
//conn.sendMessage(from, { text: 'Nome: '.concat(pushName, '\nXP do usuario: ', data[from][sender]['id:0'], '\nNivel: ', data[from][sender]['id:1'], ' --> ', (data[from][sender]['id:1'] += 1), '\nMensagens: ', data[from][sender]['id:2']) }, { quoted: m });
};
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
};
} else {
await insertParticipants('0', data, 0);
};
console.log(data[from][sender])
});
/*
await mongo('db:0', 'find', { _id: '$0' }, 'red').then(async({ data }) => {
const insertParticipants = async (mode, insert, id, abyss = (mode == '0' ? (insert[from] = {}, base = insert[from]) : base = insert[from])) => {
groupMembers.map((x) => base[id ? sender : x.id] = { 'id:0': 0, 'id:1': 1, 'id:2': 0, 'id:3': 0, 'id:4': "", 'id:5': {} });
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: insert }]);
};
if (data[from]) {
if (data[from][sender] !== (undefined) && (icmd == false)) {
data[from][sender]['id:2'] += 1;
data[from][sender]['id:4'] = timedat;
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
if (data[from][sender]) {
data[from][sender]['id:3'] += 1;
if (data[from][sender]['id:5'][cmd]) {
data[from][sender]['id:5'][cmd]['value'] += 1;
} else {
data[from][sender]['id:5'][cmd] = Object({ value: 1 });
};
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
await insertParticipants('1', data, 1);
};
};
if (data[from][sender] !== undefined && data[from]['act:7']) {
x = Math.floor(Math.random() * 80);
y = data[from][sender]['id:1']   * 500 * 1.5;
if ((Number(data[from][sender]['id:0'] += x)) >= y) {
//conn.sendMessage(from, { text: 'Nome: '.concat(pushName, '\nXP do usuario: ', data[from][sender]['id:0'], '\nNivel: ', data[from][sender]['id:1'], ' --> ', (data[from][sender]['id:1'] += 1), '\nMensagens: ', data[from][sender]['id:2']) }, { quoted: m });
};
await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
};
} else {
await insertParticipants('0', data, 0);
};
console.log(data[from][sender])
});
*/
await msrv.close();
})().catch((err) => console.log('MongoError:', err))
};