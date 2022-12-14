const fs = require('fs')
const crypto = require('crypto')
const toMs = require('ms')

const tictactoe = JSON.parse(fs.readFileSync('./lib/tictac/tictactoe.json'))
const reloadTTT = () => { global._ttt = JSON.parse(fs.readFileSync('./lib/tictac/tttset.json')) }

const addTTTset = (TTTdifficulty, userID, userName, groupID) => { reloadTTT()
let position = false
Object.keys(_ttt).forEach((i) => {
if (_ttt[i].info.player == userID) {
position = i
}
})
if (position !==  false) {
_ttt[position] = { info: { group: groupID, player: userID, playername: userName }, 
config: { status: "on", difficulty: TTTdifficulty, Activate1: "on", Activate2: "on", Activate3: "on", autoEnd: Date.now() },
esp: { a1:"π²", a2:"π²", a3:"π²", b1:"π²", b2:"π²", b3:"π²", c1:"π²", c2:"π²", c3:"π²" }
}
} else {
const obj = { info: { group: groupID, player: userID, playername: userName }, 
config: { status: "on", difficulty: TTTdifficulty, Activate1: "on", Activate2: "on", Activate3: "on", autoEnd: Date.now() },
esp: { a1:"π²", a2:"π²", a3:"π²", b1:"π²", b2:"π²", b3:"π²", c1:"π²", c2:"π²", c3:"π²" }
}
_ttt.push(obj)
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

const TTTposition = (ID) => { reloadTTT()
let position = false
Object.keys(_ttt).forEach((i) => {
if (_ttt[i].info.group = ID) {
position = i
}
})
if (position !== false) {
return Number(position)
} else {
return undefined
}
}

//TESTE PARA VITΓRIA DE β
const WinnerX = (p) => { reloadTTT()
if (
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="β") || (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="β") || (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="β") || 
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="β") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="β")
) {
return true
} else {
return false
}
}

//TESTE PARA VITΓRIA DE β­
const WinnerO = (p) => { reloadTTT()
if (
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="β­") || (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="β­") || (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="β­") || 
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="β­") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="β­")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = (p) => { reloadTTT()
if (_ttt[p].esp.a1!="π²"&&_ttt[p].esp.a2!="π²"&&_ttt[p].esp.a3!="π²"&&_ttt[p].esp.b1!="π²"&&_ttt[p].esp.b2!="π²"&&_ttt[p].esp.b3!="π²"&&_ttt[p].esp.c1!="π²"&&_ttt[p].esp.c2!="π²"&&_ttt[p].esp.c3!="π²") {
return true
} else {
return false
}
}

const IA = (p) => { reloadTTT()
if (WinnerX(p) || WinnerO(p) || Tie(p)) {
_ttt[p].config.Activate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITΓRIA
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="β­") ||
(_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β­") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="β­") ||
(_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="β­") ||
(_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β­") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="β­") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="β") ||
(_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="β") ||
(_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="β") ||
(_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="β")
)){
_ttt[p].config.Activate1 = "off"
IAmove1(p)
//JOGADAS PROGRAMADAS ABAIXO
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²"))) {
 	  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a1 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a2 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a3 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b1 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "??" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b2 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b3 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c1 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "β­"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c2 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "π²" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "β­" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "β" && _ttt[p].esp.a3 == "β­" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "β" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "β­" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "β" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "π²" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "β" && _ttt[p].esp.c2 == "π²" && _ttt[p].esp.c3 == "π²") ||
   (_ttt[p].esp.a1 == "π²" && _ttt[p].esp.a2 == "π²" && _ttt[p].esp.a3 == "π²" && _ttt[p].esp.b1 == "π²" && _ttt[p].esp.b2 == "β­" && _ttt[p].esp.b3 == "β" && _ttt[p].esp.c1 == "π²" && _ttt[p].esp.c2 == "β" && _ttt[p].esp.c3 == "π²"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c3 = "β­"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" && (_ttt[p].esp.a1 ==  "π²" || _ttt[p].esp.a3 ==  "π²" || _ttt[p].esp.b2 ==  "π²" || _ttt[p].esp.c1 ==  "π²" || _ttt[p].esp.c3 ==  "π²")) {
//PRIORIZAR CANTOS E CENTRO
_ttt[p].config.Activate1 = "off"
while (_ttt[p].config.Activate3 == "on") {
priorityC(p)
}
_ttt[p].config.Activate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (_ttt[p].config.difficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITΓRIA
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="β­") ||
(_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β­") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="β­") ||
(_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="β­") ||
(_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β­") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="β­") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="β") ||
(_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="β") ||
(_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="β") ||
(_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="β")
)){
//HARD
_ttt[p].config.Activate1 = "off"
IAmove1(p)
} else if (_ttt[p].config.difficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITΓRIA
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="β­") ||
(_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β­") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="β­") ||
(_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="β­") ||
(_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β­") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β­") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="β­") ||
(_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β­") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="β­") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="β") ||
(_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="π²") || (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β") || (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="β") ||
(_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="β") ||
(_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="π²") || (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β") || (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="π²") || (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β") || (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="β") ||
(_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="π²") || (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β") || (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="β")
)){
//NORMAL
_ttt[p].config.Activate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1(p)
} else {
while (_ttt[p].config.Activate2 == "on") {
IAalter(p)
}
}
_ttt[p].config.Activate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (_ttt[p].esp.a1 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a1 = "β­"
}
break
case 1:
if (_ttt[p].esp.a2 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a2 = "β­"
}
break
case 2:
if (_ttt[p].esp.a3 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a3 = "β­"
}
break
case 3:
if (_ttt[p].esp.b1 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b1 = "β­"
}
break
case 4:
if (_ttt[p].esp.b2 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b2 = "β­"
}
break
case 5:
if (_ttt[p].esp.b3 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b3 = "β­"
}
break
case 6:
if (_ttt[p].esp.c1 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c1 = "β­"
}
break
case 7:
if (_ttt[p].esp.c2 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c2 = "β­"
}
break
case 8:
if (_ttt[p].esp.c3 == "π²") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c3 = "β­"
}
break
}
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

const IAmove1 = (p) => {
//JOGADA PARA VITΓRIA
if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="π²") {
_ttt[p].esp.a3 = "β­"
} else if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β­") {
_ttt[p].esp.a2 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β­"&&_ttt[p].esp.a3=="β­") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="π²") {
_ttt[p].esp.b3 = "β­"
} else if (_ttt[p].esp.b1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β­") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.b3=="β­") {
_ttt[p].esp.b1 = "β­"
} else if (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.c1=="β­"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.c2 = "β­"
} else if (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β­"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="π²") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β­") {
_ttt[p].esp.b1 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β­"&&_ttt[p].esp.c1=="β­") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="π²") {
_ttt[p].esp.c2 = "β­"
} else if (_ttt[p].esp.a2=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β­") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c2=="β­") {
_ttt[p].esp.a2 = "β­"
} else if (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.b3 = "β­"
} else if (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β­"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.a3 = "β­"
} else if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.a1=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c3=="β­") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="π²") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a3=="β­"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β­") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β­"&&_ttt[p].esp.c1=="β­") {
_ttt[p].esp.a3 = "β­"
//JOGADA PARA BLOQUEIO
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="π²") {
_ttt[p].esp.a3 = "β­"
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.a2=="π²"&&_ttt[p].esp.a3=="β") {
_ttt[p].esp.a2 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.a2=="β"&&_ttt[p].esp.a3=="β") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="π²") {
_ttt[p].esp.b3 = "β­"
} else if (_ttt[p].esp.b1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.b3=="β") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.b1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.b3=="β") {
_ttt[p].esp.b1 = "β­"
} else if (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.c1=="β"&&_ttt[p].esp.c2=="π²"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.c2 = "β­"
} else if (_ttt[p].esp.c1=="π²"&&_ttt[p].esp.c2=="β"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="π²") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b1=="π²"&&_ttt[p].esp.c1=="β") {
_ttt[p].esp.b1 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b1=="β"&&_ttt[p].esp.c1=="β") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="π²") {
_ttt[p].esp.c2 = "β­"
} else if (_ttt[p].esp.a2=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c2=="β") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a2=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c2=="β") {
_ttt[p].esp.a2 = "β­"
} else if (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b3=="π²"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.b3 = "β­"
} else if (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b3=="β"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.a3 = "β­"
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="π²") {
_ttt[p].esp.c3 = "β­"
} else if (_ttt[p].esp.a1=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a1=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c3=="β") {
_ttt[p].esp.a1 = "β­"
} else if (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="π²") {
_ttt[p].esp.c1 = "β­"
} else if (_ttt[p].esp.a3=="β"&&_ttt[p].esp.b2=="π²"&&_ttt[p].esp.c1=="β") {
_ttt[p].esp.b2 = "β­"
} else if (_ttt[p].esp.a3=="π²"&&_ttt[p].esp.b2=="β"&&_ttt[p].esp.c1=="β") {
_ttt[p].esp.a3 = "β­"
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT() 
}

//MOVIMENTO ALTERNATIVO
const IAalter = (p) => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (_ttt[p].esp.a1 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a1 = "β­"
}
break
case 1:
if (_ttt[p].esp.a2 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a2 = "β­"
}
break
case 2:
if (_ttt[p].esp.a3 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a3 = "β­"
}
break
case 3:
if (_ttt[p].esp.b1 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b1 = "β­"
}
break
case 4:
if (_ttt[p].esp.b2 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b2 = "β­"
}
break
case 5:
if (_ttt[p].esp.b3 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b3 = "β­"
}
break
case 6:
if (_ttt[p].esp.c1 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c1 = "β­"
}
break
case 7:
if (_ttt[p].esp.c2 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c2 = "β­"
}
break
case 8:
if (_ttt[p].esp.c3 == "π²") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c3 = "β­"
}
break
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = (p) => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (_ttt[p].esp.a1 == "π²") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.a1 = "β­"
}
break
case 1 :
if (_ttt[p].esp.a3 == "π²") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.a3 = "β­"
}
break
case 2 :
if (_ttt[p].esp.b2 == "π²") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.b2 = "β­"
}
break
case 3 :
if (_ttt[p].esp.c1 == "π²") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.c1 = "β­"
}
break
case 4 :
if (_ttt[p].esp.c3 == "π²") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.c3 = "β­"
}
break
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

//---------------------------------------------------------------------------------------------------------------

const addTTTId = (userId) => {
const obj = { jid: userId, wins: 0, defeats: 0, ties: 0, points: 0 }
tictactoe.push(obj)
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}

const addTTTwin = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].wins += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTdefeat = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].defeats += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTtie = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].ties += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTpoints = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].points += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const getTTTId = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].jid
}
}

const getTTTwins = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].wins
}
}

const getTTTdefeats = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].defeats
}
}

const getTTTties = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].ties
}
}

const getTTTpoints = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].points
}
}

//-----------------------------------------------------------------------------------------------------------------

const ttthelp = (prefix) => {
return `
βββββββ°β°β°β°βΎβ±β±β±β±ββββ ββ

π£―πγδΈ¨ε γεε γγδΉππ£―

βββββββ°β°β°β°βΎβ±β±β±β±ββββ ββ

βΏ π₯ Somente para *Grupos*
βΏ π§© Somente com *Games ON*

β INICIAR
β»
β£ β Para iniciar digite:
β β β¬ *${prefix}ttt* [DIFICULDADE] β­
β β Apenas uma pessoa por vez

β DIFICULDADE
β»
β£ β easy : totalmente aleatΓ³rio
β     (SΓ³ azarado pra perder nessa)
β£ β normal : 66% de chance 
β     de bloqueio e vitΓ³ria
β£ β hard : 100% de chance 
β     de bloqueio e vitΓ³ria 
β β impossible : SΓ³ Kuuhaku
   pra vencer isso

β TEMPORIZADOR
β»
β£ β Uma nova partida sΓ³ poderΓ‘
β     ser iniciada apΓ³s um intervalo
β     de 4 minutos apartir do inΓ­cio
β     da partida anterior
β
β£ β O jogador deverΓ‘ esperar
β     5 minutos para jogar novamente
β
β β A partida terminarΓ‘ 
   automaticamente apΓ³s 4 minutos

β COMANDOS
β»
β£ β Para marcar digite:
β β β¬ *${prefix}coord* [ COORDENADA ] β­
β
β β Exemplo:
   β β¬ ${prefix}coord a1 
   ----------------------
   π1οΈβ£2οΈβ£3οΈβ£
   π°οΈβπ²π²
   π±οΈπ²π²π²
   Β©οΈπ²π²π²  β­

β SEU STATUS
β»
β β Para ver seu status digite:
 β β¬ *${prefix}tttme* β­

β RANK     
β»
β β Rank dos 3 melhores players  
 β β¬ *${prefix}tttrank* β­  

β RECOMPENSAS
β»
β£ β EASY
β β£ β¬ VitΓ³ria : +γ 15 / 30 γβ­
β β β¬ Derrota : -γ 100 / 200 γβ­
β
β£ β NORMAL
β β£ β¬ VitΓ³ria : +γ 35 / 70 γβ­
β β β¬ Derrota : -γ 35 / 70 γβ­
β
β£ β HARD
β β£ β¬ VitΓ³ria : +γ 100 / 200 γβ­
β β β¬ Derrota : -γ 15 / 30 γβ­
β
β£ β IMPOSSIBLE
β β£ β¬ VitΓ³ria : +γ 1000 / 2000 γβ­
β β β¬ Derrota : -γ 0 / 0 γβ­
β
β£ β EMPATE
β β β¬ γ 0 / 0 γ β­
β 
β β PARTIDA NΓO FINALIZADA
 β β¬ - γ 35 / 70 γ β­

βββββββ°β°β°β°βΎβ±β±β±β±ββββββ
`
}

const tttme = (userName1, userWins, userDefeats, userTies, userPoints) => {
  return `
βββββββ°β°β°β°βΎβ±β±β±β±ββββββ

 π£―πγδΈ¨ε γεε γγδΉππ£―

β NOME: ${userName1} 

βββββββ°β°β°β°βΎβ±β±β±β±ββββββ

β­βΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΈ
β β£ VITΓRIAS: ${userWins} π
β β£ DERROTAS: ${userDefeats} π₯
β β£ EMPATES: ${userTies} π
β β£ PONTOS: ${userPoints} β¨
β°βΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΎβΈ

βββββββ°β°β°β°βΎβ±β±β±β±ββββββ
`
}

module.exports = { addTTTset, TTTposition, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, ttthelp, tttme }