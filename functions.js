require('./projeto.js');

{
(async () => {
const ativador = async (from, type, action, cmd) => {
await mongo('db:0', 'find', { _id: '$0' }, 'red').then(async({ data }) => {
const writefile = async function (on) {
data[from] ? "" : data[from] = {};
data[from][type] = on;
};
const rejected = () => console.log('Este grupo ' + (action ? 'já' : 'não') + ' está incluso.');
const concluir = () => console.log('```O recurso: ' + cmd + '; foi ' + (action ? 'ativo' : 'desativado') + ' neste grupo.```');
if (data[from]) {
if (data[from][type]) {
action ? rejected() : (writefile(action), concluir());
action ? "" : await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
action ? (writefile(action), concluir()) : rejected();
action ? await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]) : "";
};
} else {
action ? (writefile(action), concluir()) : rejected();
action ? await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]) : "";
};
});
};
global.ativador = ativador;
})();
}