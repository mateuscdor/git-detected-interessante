//"use strict";
//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
//https://github.com/OWNER/REPO
//gh repo create hosting --push --public --source ./
const axios = require('axios').default;
const fs = require('fs-extra')
const read = (file) => (file.endsWith('.json') ? JSON.parse(fs.readFileSync(file)): require(file))
const cheerio = require('cheerio')
const users = ["Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/14.0b12646 Mobile/15E148 Safari/605.1.15 Yahoo", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/223.0.463913120 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/225.0.466661455 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/103.0  Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.99 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/103.1  Mobile/15E148 Safari/605.1.15"];
exports.agent = agent = () => {
	return users[Math.floor(Math.random() * users.length)]
};

/*
const axios = require('axios').create({
	"headers": {
		"User-Agent": agent()
		},
		timeout: 0,
		httpsAgent: new require('https').Agent({ keepAlive: true, keepAliveMsecs: 30000 })
		});
*/
const headers = (options, atributes) => ({
	method: "get", headers: {
		"User-Agent": agent(), "DNT": 1, "Upgrade-Insecure-Request": 1, ...atributes
	}, ...options
});
//const needle = require('needle');
//const HttpsProxyAgent = require('https-proxy-agent');
//const { proxy } = new HttpsProxyAgent('http://170.238.79.2:7497');
//const { HttpsProxyAgent } = require('hpagent');
//console.log(headers({ agent: proxy }))
//sdcard/bot/node_modules
/*
var proxy = new HttpsProxyAgent({
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 256,
    maxFreeSockets: 256,
    scheduling: 'lifo',
    proxy: 'https://186.249.5.10:9090'
  });
  console.log(proxy)
  */
//const https = require("https")
//console.log(new https.Agent({ keepAlive: true, keepAliveMsecs: 1000 }))

//var load = (atributes) => ({ headers: { method: "get", ...atributes["headers"] }, ...atributes["options"] }, console.log(atributes["options"]))
//console.log(load({ headers: { "User-Agent": "*", method: "post" } }))//{ headers: { user: "*" } }))
//var pos = (attrs) => ({ headers: { method: "get" }, ...attrs })
//console.log(pos({ headers: { method: "post", "x-api-key": "ah19k10laj1" }, responseType: "arraybuffer" }))
const {
	fork
} = require('child_process');
const child = fork('heroku login -i')// [], {shell: true});
child.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
});
//return
{
	(async () => {
		exports.socket = socket = async (query, type, auths, params) => {
			const create = require('axios').create({
				headers: {
					'user-agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
					...auths
				},
				httpsAgent: new require("https").Agent({
					keepAlive: true
				})
			});
			const parser = await create(query, params ? params: {}).catch((error) => (error)), {
				headers, data, status
			} = parser;
			return new Promise((resolve, reject) => {
				if (status == 200) {
					if (type) {
						resolve(parser);
					} else {
						if (headers["content-type"].match("text/html;")) {
							resolve(cheerio.load(data));
						} else {
							resolve(data);
						};
					};
				} else {
					reject(parser);
				};
			});
		};
		var request = await socket('https://i.waifu.pics/XcpL3nR.jpg',
			0,
			{},
			{
				responseType: "text"
			}).catch(() => "Request Fail!");
		//request.pipe(fs.createWriteStream('miku.jpg'));
		console.log(request)

	})//().catch((err) => console.log("request:", err))
};
//return
////.catch((data) => (query.match(/.jpg|.png|.jpeg/g) ? { data: fs.readFileSync("./src/404.jpg") } : { data }));

exports.http = http = async function (query, headers, voltar) {
	const made = await axios(query, headers)['catch']((data) => {
		return /*query.match(/.jpg|png|jpeg/g) ? { data: fs.readFileSync('./src/404.jpg') } : */ {
			data
		}
	});
	return voltar ? made: made['data'];
};

const buffer = async (url) => url.match(/http/g) ? await http(url, headers({
	responseType: 'arraybuffer'
})): fs.readFileSync(url);

const origin = (length, atribute, params, html, cmd, object = '{ "title": "*", "rowId": "#"  }', $ = cheerio.load(html)) => {
	var arrai = [];
	for (let i = 0; i < length; i++) {
		let r = i;
		arrai.push(JSON.parse(object.replace('*', eval(atribute.replace('¡', r))).replace('#', cmd+eval(params.replace('¡', r)))));
	};
	return arrai;
};

/*
var text = `
                        </a>



<script type="text/javascript">
    var a = 46;
    document.getElementById('dlbutton').omg = "asdasd".substr(0, 3);
    var b = document.getElementById('dlbutton').omg.length;
    document.getElementById('dlbutton').href = "/d/GghvTKfm/"+(Math.pow(a, 3)+b)+"/Akame_ga_Kill_01_Levantine_Anbient.mkv";
    if (document.getElementById('fimage')) {
        document.getElementById('fimage').href = "/i/GghvTKfm/"+(Math.pow(a, 3)+b)+"/Akame_ga_Kill_01_Levantine_Anbient.mkv";
    }`
console.log("https://www91.zippyshare.com" + eval(text.split('href = ')[1].split(';')[0].replace('(a,', '(' + text.split('= ')[1].split(';')[0] + ',').replace('b', eval(text.split('omg = ')[1].split(';')[0] + '.length'))));
*/
//var ev = '"asdasd".substr(0, 3).length'
//var ex = eval(ev);
//console.log(ex)
//console.log(headers({ responseType: 'arraybuffer' }))

//case'http':

//break
/*
const assert = function (data, type, max, end, html, finish) {
var $ = cheerio.load(html)
var h = ""
for (let i = 0; i < max; i++) {
h += (finish ? finish : '') + (type == 'text' ? $(data).eq(i).text() : $(data).eq(i).attr(type)) + end
}
return h
};
*/
//const ytdl = require('ytdl-core');
{
	(async () => {
		const assert = function (data, type, max, end, html, finish) {
			var $ = cheerio.load(html)
			var h = ""
			for (let i = 0; i < max; i++) {
				h += (finish ? finish: '') + (type == 'text' ? $(data).eq(i).text(): $(data).eq(i).attr(type)) + end
			}
			return h
		}

		var url = 'https://m.facebook.com/groups/822921251678052/permalink/1086781918625316/?sfnsn=wiwspwa&ref=share'// "https://m.facebook.com/story.php?story_fbid=pfbid02GD69ZMcNyc5hF1XKVsAxvrEYBX4BhL53rHL19Txyqucpk63ASqiTFk8ZGzqCAyo7l&id=115767583660542"
		//var exp = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
		var exp = (0, /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.exec(url));
		//console.log(exp)//url.match(exp))
		/*
var HttpsProxyAgent = require('https-proxy-agent');
		//const link = require('url');
var proxy = 'http://170.238.79.2:7497'
var options = link.parse(url);
var agent = new HttpsProxyAgent(proxy);
options.agent = agent;
*/
		//console.log(options);

		//var req = await axios['get'](options, headers());
		//console.log(req)
		//console.log(req.data)

		//var p = true
		//if (!!p) console.log(true)
		//var bas = new Buffer('sexo');
		//var sn = bas.toString('base64');
		//console.log(sn)
		//https://m.facebook.com/groups/995401787655347/permalink/1358088681386654/

		//https://api.scrapingant.com/v1/general?url=https://animesonline.cc/tv/&proxy_country=BR
		//https://fdownloader.net/pt?q=https%3A%2F%2Fm.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid0Stxx5ypvUaPrZ9bMYorU89mzYTGXpnnrCbTYBs2yd2cGQYLh6VgqSatPptFQ2yFnl%26id%3D100009371918123
		//var uri = 'https://fdownloader.net/pt?q=https%3A%2F%2Fm.facebook.com%2Fstory.php%3Fstory_fbid%3Dpfbid0Stxx5ypvUaPrZ9bMYorU89mzYTGXpnnrCbTYBs2yd2cGQYLh6VgqSatPptFQ2yFnl%26id%3D100009371918123'
		//var iru = 'https%3A%2F%2Ffdownloader.net%2Fpt%3Fq%3Dhttps%253A%252F%252Fm.facebook.com%252Fstory.php%253Fstory_fbid%253Dpfbid0Stxx5ypvUaPrZ9bMYorU89mzYTGXpnnrCbTYBs2yd2cGQYLh6VgqSatPptFQ2yFnl%2526id%253D100009371918123'

		//var request = await http('https://api.scrapingant.com/v1/general?url=' + encodeURIComponent('https://ttsave.app/#https://vm.tiktok.com/ZMNnFsE5U/') + 'js_snippet=YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgNTAwMCkpOw==&proxy_country=BR', headers(0, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true }), 0);
		//https://animevibe.top/animes?s=higurashi
		//var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: 'https://animevibe.top/episode/28575/isekai-meikyuu-de-harem-wo/7', js_snippet: 'YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgNTAwMCkpOw==', proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);

		//var request = await http('https://api.scrapingant.com/v1/general', headers({ method: 'post', data: JSON.stringify({ url: 'https://animevibe.top/anime/27740/higurashi-no-naku-koro-ni-2020', proxy_country: 'BR' }) }, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true, "content-type": "application/json" }), 0);
		//var html = `</style><script charset="utf-8" src="/static/js/0.baa6fd66.chunk.js"></script><script charset="utf-8" src="/static/js/1.cecb81a8.chunk.js"></script><link rel="stylesheet" type="text/css" href="/static/css/2.d5164203.chunk.css"><script charset="utf-8" src="/static/js/2.11a96035.chunk.js"></script><script charset="utf-8" src="/static/js/7.1e4371c9.chunk.js"></script><script charset="utf-8" src="/static/js/10.6e86aa8c.chunk.js"></script></head><body class="grey darken-4"><div id="app" style="height:89.3%"><div class="headroom-wrapper" style="height: 64px;"><div class="headroom headroom--unfixed" style="position: relative; top: 0px; left: 0px; right: 0px; z-index: 2; transform: translate3d(0px, 0px, 0px);"><header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorDefault MuiPaper-elevation4" style="box-shadow: none;"><div class="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters"><div class="MuiGrid-root jss5 MuiGrid-container MuiGrid-spacing-xs-1 MuiGrid-justify-xs-space-between"><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><div class="jss8 jss9" style="width: 20px;"></div><div class="MuiGrid-root jss6 MuiGrid-container"><a href="/" style="display: flex;"><img src="/img/logo.png" alt="" style="height: 22px; margin: auto;"></a></div><div id="search-input" class="d-none position-absolute" style="left: 0px; right: 0px; background: rgb(64, 64, 64); height: 100%;"><div class="MuiAutocomplete-root MuiAutocomplete-hasClearIcon MuiAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false"><div class="d-flex"><input aria-autocomplete="both" autocomplete="off" autocapitalize="none" spellcheck="false" type="text" value="" id="mui-25804" style="width: 100%; border: none; padding: 15px 15px 15px 35px; outline: none; box-shadow: none; color: rgb(204, 204, 204); background-color: rgb(64, 64, 64);"><button class="MuiButtonBase-root MuiIconButton-root jss7" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div></div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" id="search-icon"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div></header></div></div><div style="max-width: 1350px; margin: auto;"><div class="mb-0 mt-7"><div class="mx-7 mb-7 px-7 d-flex justify-content-between"><button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label"><span class="MuiButton-startIcon MuiButton-iconSizeMedium"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></svg></span>Filtros</span><span class="MuiTouchRipple-root"></span></button><div class="d-none"><a class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" aria-disabled="false" href="/animes"><span class="MuiButton-label">Remover<span class="MuiButton-endIcon MuiButton-iconSizeMedium"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span></span><span class="MuiTouchRipple-root"></span></a></div></div><div class="d-none m-7 pb-2"><div class="d-flex"><div class="MuiFormControl-root MuiTextField-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined MuiFormLabel-filled" data-shrink="true">Nome</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value="Higurashi"><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16 jss17"><span>Nome</span></legend></fieldset></div></div><div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Formato</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Formato</span></legend></fieldset></div></div></div><div class="d-flex"><div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Gênero</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Gênero</span></legend></fieldset></div></div> <div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Letra inicial</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Letra inicial</span></legend></fieldset></div></div></div><div class="d-flex"><div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Ordem</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Ordem</span></legend></fieldset></div></div> <div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Áudio</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Áudio</span></legend></fieldset></div></div></div><div class="d-flex"><div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Status</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Status</span></legend></fieldset></div></div> <div class="MuiFormControl-root jss13"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false">Ano</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><div class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" tabindex="0" role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value=""><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined" focusable="false" viewBox="0 0 24 24" color="#ccc" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg><fieldset aria-hidden="true" class="jss14 MuiOutlinedInput-notchedOutline"><legend class="jss16"><span>Ano</span></legend></fieldset></div></div></div></div><div class="px-md-7"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/28298/higurashi-no-naku-koro-ni-gou"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="d-flex position-absolute m-7" style="font-size: 12px; height: 56px; width: 56px; background-color: rgb(33, 33, 33); border-radius: 50%;"><div class="d-flex flex-direction-column text-center" style="margin: auto;"><span>Dub.</span></div></div><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-gou.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Gou"><span>Higurashi no Naku Koro ni Gou</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/28111/higurashi-no-naku-koro-ni-sotsu"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-sotsu.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Sotsu"><span>Higurashi no Naku Koro ni Sotsu</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/27740/higurashi-no-naku-koro-ni-2020"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-2020.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni (2020)"><span>Higurashi no Naku Koro ni (2020)</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/27395/higurashi-no-naku-koro-ni-kira"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-kira.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Kira"><span>Higurashi no Naku Koro ni Kira</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/27394/higurashi-no-naku-koro-ni-kaku-outbreak"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-kaku-outbreak.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Kaku: Outbreak"><span>Higurashi no Naku Koro ni Kaku: Outbreak</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/25696/higurashi-no-naku-koro-ni"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni"><span>Higurashi no Naku Koro ni</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/25469/higurashi-no-naku-koro-ni-kai"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-kai.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Kai"><span>Higurashi no Naku Koro ni Kai</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-md-3 MuiGrid-grid-lg-2"><a draggable="false" href="/anime/24428/higurashi-no-naku-koro-ni-rei"><div class="MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded" style="margin: 0px 6px 14px;"><button class="MuiButtonBase-root MuiCardActionArea-root" tabindex="0" type="button"><div class="MuiCardMedia-root jss18" style="background-image: url(&quot;https://animefire.net/img/animes/higurashi-no-naku-koro-ni-rei.webp&quot;);"></div><div class="MuiCardContent-root" title="Higurashi no Naku Koro ni Rei"><span>Higurashi no Naku Koro ni Rei</span></div><span class="MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root"></span></button></div></a></div></div></div></div></div></div>`
		//var $ = cheerio.load(html)//request.content);
		//console.log(request.content, '\n');
		//console.log(origin(/*$('div.MuiGrid-item').find('a').length*/0 ? "" : (() => { throw "No results for query." })(), "$('div.MuiGrid-item').find('a').eq(¡).text()", "$('div.MuiGrid-item').find('a').eq(¡).attr('href')", html, "https://animevibe.top"))
		var url = 'https://animevibe.top/anime/28575/made-in-abyss/'
		//console.log(origin(5, "'Episódio ' + Number(¡ + 1)", "'" + url.replace('/anime/', '/episode/') + "' + Number(¡ + 1)", "<html><h1>w</h1></html>", "$ "))

		//console.log($('div.MuiGrid-item').find('a').length)
		//console.log('https://animevibe.top' + $('div.MuiGrid-item').find('a').eq(1).attr('href'))
		//console.log($('div.MuiGrid-item').find('a').eq(1).text())

		//console.log($('span:contains("Sinopse:")').parent().text().split(':')[1].trim())
		//console.log($('span:contains("Publicação:")').parent().text().split(':')[1].trim())
		//console.log($('span:contains("Status:")').parent().text().split(':')[1].trim())
		//console.log($('span:contains("Episódios:")').parent().text().split(':')[1].trim())
		//console.log($('meta[property="og:title"]').attr('content'))

		//console.log(origin(3, 'undefined || "false"', 'true ? "amor" : "not"', '<html><title>si</title></html>', '$ga '))

		//https://animevibe.top/animes?s=higurashi
		//console.log($('div.MuiGrid-root').find('a').length)
		//console.log('https://animevibe.top' + $('div.MuiGrid-root').find('a').eq(1).attr('href'))
		//console.log($('div.MuiGrid-root').find('a').eq(1).text())

		//https://animevibe.top/episode/28575/isekai-meikyuu-de-harem-wo/7
		//console.log($('span#video-header').text());
		//console.log($('div#video-qualities').text());
		//console.log($('div#video').find('video#video_html5_api').attr('src') + '?type=video/mp4&title=' + encodeURIComponent(""));
		/*
console.log($('p').eq(0).text())
console.log($('h2').text())
console.log(origin($('div#button-download-ready').find('a').length, "$('div#button-download-ready').find('a').eq(¡).text().trim()", "$('div#button-download-ready').find('a').eq(¡).attr('href')", request.content, '$download '));
*/
		//'{ "buttonId": "*", "buttonText": { "displayText": "#" }, "type": 1 }'
		//$('h2').text()
		//$('p').eq(0).text()
		//$('div#button-download-ready').find('a').eq(i).text().trim(),
		//$('div#button-download-ready').find('a').eq(i).attr('href')

		/*
		//$('h2').text()
		/*
var $ = cheerio.load(request.content);

console.log($('div.box-imgvideo').find('img').attr('data-src'))
console.log($('div.clearfix').find('span').eq(0).text())
console.log($('div.clearfix').find('p').text())
console.log($('div.clearfix').find('ul.list').find('li').length)
console.log($('div.clearfix').find('ul.list').find('li').eq(0).find('span').eq(0).text().trim())
console.log($('div.clearfix').find('ul.list').find('li').eq(0).find('span').eq(1).text().trim())
console.log($('div.clearfix').find('ul.list').find('li').eq(0).find('div > a').attr('href'))
*/
		//var request = await http('https://lovetik.com/pt/?k=', headers(), 0)
		//console.log(request)

		/*sucess...
var request = await http('https://api.scrapingant.com/v1/general?url=' + encodeURIComponent('https://fdownloader.net/pt?q=' + encodeURIComponent('https://m.facebook.com/story.php?story_fbid=pfbid0Stxx5ypvUaPrZ9bMYorU89mzYTGXpnnrCbTYBs2yd2cGQYLh6VgqSatPptFQ2yFnl&id=100009371918123')) + '&proxy_country=BR', headers(0, { "x-api-key": "57c0bccb949148dba7077557e439adca", "useQueryString": true }), 0);
console.log(request)
var $ = cheerio.load(request.content);

console.log($('div.detail').find('div.thumbnail > div.content > div.clearfix').find('p').text());
console.log($('div.detail').find('div.thumbnail > div.image-fb').find('img').attr('src'));
console.log($('div.detail').find('div.thumbnail > div.content > div.clearfix').find('h3').text());

var n = $('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr').length;
var q = $('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr');
var h = $('div.detail').find('div.thumbnail > div.content > div.clearfix').find('h3').text();
var buttons = [];
for (let i = 0; i < n; i++) {
var p = q.eq(i).find('td').eq(1).text() == 'sim' ? q.eq(i).find('td').eq(2).find('button').attr('data-videourl') : q.eq(i).find('td').eq(2).find('a').attr('href');
buttons.push({
buttonId: '$' + 'dlxnxx ' + p + '|' + h, buttonText: { displayText: q.eq(i).find('td').eq(0).text() }, type: 1
});
};
console.log(buttons)
*/
		/*
console.log($('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr').eq(0).find('td').eq(0).text())
console.log($('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr').eq(0).find('td').eq(1).text())
console.log($('div.detail').find('div#fbdownloader > div.tab-wrap').find('tbody').eq(0).find('tr').eq(0).find('td').eq(2).find('a').attr('href'))
*/
		/*
console.log($('div[class~="zippyshare"]').find('li').length)
console.log($('div[class~="zippyshare"]').find('li').eq(1).find('a').text())
console.log($('div[class~="zippyshare"]').find('li').eq(1).find('a').attr('href'))
*/
		//console.log($('div#search').find('div > article').find('header').length)
		//console.log($('div#search').find('div > article').find('header').eq(0).find('h2 > a').text())
		//console.log($('div#search').find('div > article').find('header').eq(0).find('h2 > a').attr('href'))

		//https://www.anbient.com/anime/made-in-abyss
		//console.log($('div[class="servidor  zippyshare active"]').find('li').length)
		//var cs = $('div[class="servidor  zippyshare"]').find('li').length == '0' ? $('div[class="servidor  zippyshare active"]').find('li') : $('div[class="servidor  zippyshare"]').find('li');
		//var cv = $('div[class="servidor  zippyshare"]').find('li').length == '0' ? 'server active' : 'active one';

		//console.log(cv)
		//console.log(cs.eq(0).find('a').text())
		//console.log(cs.eq(0).find('a').attr('href'))

		//class="servidor  zippyshare active"
		//servidor  zippyshare
		//console.log($('div[class="servidor  zippyshare active"]').find('li').eq(1).find('a').text())
		//console.log($('div[class="servidor  zippyshare active"]').find('li').eq(1).find('a').attr('href'))

		//console.log($('div[class="field field-body"]').find('div').text().trim())
		//console.log($('span[itemprop="numberOfEpisodes"]').text())
		//console.log($('div[class="field field-nota"]').find('div').text().replace('\n', '').trim())
		//console.log($('div[class="field field-estreia inline"]').find('div').text().replace('\n', '').trim())
		//var n = $('span.generos').find('b').length;
		//console.log(assert($('span.generos').find('b').find('a'), 'text', $('span.generos').find('b').length, '', request, ', ').slice(2))
		//console.log($('h1').text())

		//var py = "asdasd".substr(0, 3).length
		//console.log(py, "https://www91.zippyshare.com" +  "/d/GghvTKfm/" + (Math.pow(76, 3) + py) + "/Akame_ga_Kill_01_Levantine_Anbient.mkv");
		/*
var options = {
   "method": "GET",
   "hostname": "api.scrapingant.com",
   "port": null,
   "path": "/v1/general?url=https%3A%2F%2Fanimesonline.cc%2Ftv%2F&proxy_country=BR",
   "headers": {
       "x-api-key": "57c0bccb949148dba7077557e439adca",
       "useQueryString": true
   }
};
*/

		//var request = await http("https://goyabu.com/assistir/elfen-lied/", headers(), 0);
		//var $ = cheerio.load(request);

		//https://goyabu.com/?s=Higurashi
		//console.log($('div.episodes-container').find('div.anime-episode').length)
		//console.log($('div.episodes-container').find('div.anime-episode').eq(0).find('a').attr('href'))
		//console.log($('div.episodes-container').find('div.anime-episode').eq(0).find('h3').text())

		//https://goyabu.com/videos/10165/
		//console.log('https://kanra.dev' + $('html').html().split('https://kanra.dev')[1].split("'")[0])
		//console.log($('h1').text())

		//https://goyabu.com/assistir/elfen-lied/
		//eps console.log($('div.anime-info-right').find('div').eq(1).text().split(':')[1].trim())
		//status console.log($('div.anime-info-right').find('div').eq(4).text().split(':')[1].trim())
		//categoria console.log($('div.anime-info-right').find('div').eq(5).text().split(':')[1].trim())
		//desc console.log($('div.anime-description').text().trim())
		//title console.log($('h1').text())
		//image console.log($('meta[property="og:image"]').attr('content'))
		//eps num console.log($('div.row').find('a').length)
		//ep name console.log($('div.row').find('a').eq(0).find('div').eq(1).text())
		//ep link console.log($('div.row').find('a').eq(0).attr('href'))

		/*
var { formats } = await ytdl.getInfo("https://youtu.be/HabvmFwu_3Q")
var a = []
for (let i of formats) {
i.hasVideo ? a.push(i.itag) : ""
}
var b = a.indexOf(37) >= 0 ? '37' : (a.indexOf(22) >= 0 ? '22' : (a.indexOf(18) >= 0 ? '18' : String(a[0])))
*/
		/*
const { exec } = require('child_process');
		//exec('cd /sdcard/code && mv main.py /sdcard/bot')
const explore = (string, atributo, type) => {
return type == 'length' ? string.match(new RegExp(atributo, "gi"))?.length : (type == 'includes' ? string.includes(atributo) : string.match(new RegExp(atributo, "gi")));
};
*/
		//var exe = (cmd) => exec(cmd, async (err, stdout) => { return global.stdout })
		//console.log(explore(b, 's', 'length'))
		//const func = (data) => data;
		//console.log(exe('ls'))
		//for (let i = 0; i < b; i++) {
		//console.log(i)
		//};

		//var js = await http('https://www.proboxfilmesonlinehd.com/search?q=aranha&m=1', { method: "get", headers: { "user-agent": agent() } }, true);
		var data = {
			'120363021666642593@g.us': {
				'559984620745@s.whatsapp.net': {
					xp: 0,
					nivel: 1,
					message: 0,
					command: 0,
					now: '',
					used: {}
				},
				'559984620740@s.whatsapp.net': {
					xp: 26,
					nivel: 1,
					message: 2,
					command: 0,
					now: '20/07 14:16:13',
					used: {}
				},
				'559984620747@s.whatsapp.net': {
					xp: 0,
					nivel: 1,
					message: 0,
					command: 0,
					now: '',
					used: {}
				},
				level: 1,
				'559984620749@s.whatsapp.net': {
					xp: 42,
					nivel: 1,
					message: 0,
					command: 0,
					now: '',
					used: {}
				},
				fake: 0
			}
		}
		const from = "120363021666642593@g.us";
		const resolve = (data, type, x = (type == 'sort' ? null: (Object.values(data || {})[0] || ('./src/404.' + (type == 'img' ? 'jpg': 'gif'))))) => {
			return (type == 'sort' ? data[Math.floor(Math.random() * data.length)]: (typeof x == 'object' ? x[0]['url']: x));
		};

		//var request = await http('https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=https://animeshouse.net/filme/made-in-abyss-movie-3-fukaki-tamashii-no-reimei/', { method: "get", headers: { "user-agent": agent() } }, 1);
		//https://api.webscraping.ai/html?api_key=e6a23c68-fb00-43b7-ad23-7ae00a6c3bff&js=false&url=https://mangaschan.com/
		//var $ = cheerio.load(request.data);
		//console.log(request)

		/*
console.log($('div.title').find('a').eq(0).text())
console.log($('div.title').find('a').length)

console.log($('div.wp-content').find('p').text())
console.log($('h1').text())
console.log($('div.extra').find('span.date').text())
console.log($('span.dt_rating_vgs').text())
console.log($('span.rating-count').text())
console.log(assert($('div.sgeneros').find('a'), 'text', $('div.sgeneros').find('a').length, '', request, ', ').slice(2))
console.log($('div.custom_fields').eq(3).find('span').text())
console.log($('div.custom_fields').eq(4).find('span').text())
console.log($('div.g-item').find('a').attr('href').replace(/\n/g, ''))
console.log($('div.poster').find('img').attr('src'))
*/

		//console.log($('div.sgeneros').find('a').eq(0).text())

		//https://goldenmangas.top/mangabr?busca=Maid+dragon
		//console.log('https://goldenmangas.top' + $('section.row > div.mangas').eq(2).find('a').attr('href'))
		//console.log('https://goldenmangas.top' + $('section.row > div.mangas').eq(2).find('a > h3').text())
		//console.log($('section.row > div.mangas').length)

		//https://goldenmangas.top/mangabr/kobayashi-san-chi-no-maid-dragon-br-gm
		//console.log($('div#manga_capitulo_descricao').text())
		//titulo console.log($('h2.cg_color').eq(0).text())
		//nota  console.log($('h2.cg_color').eq(1).text())
		//console.log(assert($('h5.cg_color').eq(0).find('a'), 'text', $('h5.cg_color').eq(0).find('a').length, '', request, ', ')).slice(4)
		//autor console.log($('h5.cg_color').eq(1).find('a').text())
		//status console.log($('h5.cg_color').eq(3).find('a').text())

		//console.log($('li.row').length)
		//console.log($('li.row').eq(0).find('a').attr('href'))
		//console.log($('li.row').eq(0).find('a > div').eq(0).text().replace(/\n/g, ''))

		//view-source:https://goldenmangas.top/mangabr/kobayashi-san-chi-no-maid-dragon-br-gm/120
		//console.log($('div#capitulos_images').find('center > img').length)
		//console.log('https://goldenmangas.top' + $('div#capitulos_images').find('center > img').eq(0).attr('src'));
		//console.log($('h1').text())

		var ps = {
			'shi': 'time',
			'miru': 'tanoshii',
			'ka@g.us': 'か',
			'ふ': 'ばか'
		}
		var ka = ['shi',
			'miru']
		var wo = ''

		//var wa = Object.keys(ps).map((i) => i.endsWith('@g.us') ? delete ps[i] : "");

		//fs.watch('./src/', async function (type, arch) {
		//var か = await fs.readdir('./src/session');
		//var ni = か.map((i) => i.match('pre-k') && i.split('-')[2].split('.')[0]).filter((i) => i !== null);
		//var fu = ni.filter((i) => i != Math.max(...ni)).map((i) => fs.unlinkSync('./src/session/pre-key-' + i + '.json'));
		//console.log(ni, fu);
		//})

		var y = null
		var k = await fs.readdir('./src/session');
		var z = y && k.filter((f) => {
			if (f) {
				console.log(true)
			} else {
				console.log(false)
			}
		})
		//console.log(z)
		/*
var x = {
  '559292009758-1633039642@g.us': {
    id: '559292009758-1633039642@g.us',
    subject: 'Animes. Com',
participants: [
    { id: '15098613420@s.whatsapp.net', admin: null },
    { id: '5511911217456@s.whatsapp.net', admin: null },
    { id: '5511934019091@s.whatsapp.net', admin: null },
    { id: '554588006040@s.whatsapp.net', admin: 'admin' },
    { id: '554699705548@s.whatsapp.net', admin: 'admin' },
    { id: '555384247402@s.whatsapp.net', admin: null },
    { id: '557388673115@s.whatsapp.net', admin: null },
    { id: '557399039304@s.whatsapp.net', admin: null },
    { id: '558181474754@s.whatsapp.net', admin: null },
    { id: '558494412618@s.whatsapp.net', admin: null },
    { id: '558899686733@s.whatsapp.net', admin: null },
    { id: '559291860466@s.whatsapp.net', admin: null },
    { id: '559292009758@s.whatsapp.net', admin: 'admin' },
    { id: '559984620740@s.whatsapp.net', admin: 'admin' }
  ],
    ephemeralDuration: undefined
  },
  '120363042859719928@g.us': {
    id: '120363042859719928@g.us',
    subject: 'Curso de japonês #ALZ',
participants: [
    { id: '557399039300@s.whatsapp.net', admin: null },
    { id: '558181474750@s.whatsapp.net', admin: null },
    { id: '558494412610@s.whatsapp.net', admin: null },
    { id: '558899686730@s.whatsapp.net', admin: null },
    { id: '559291860460@s.whatsapp.net', admin: null },
    { id: '559292009750@s.whatsapp.net', admin: 'admin' },
    { id: '559984620740@s.whatsapp.net', admin: 'admin' }
  ],
    ephemeralDuration: undefined
  }
};
var y = [];
var k = Object.keys(x)
k.includes('120363042859719920@g.us') && console.log(true)
console.log(y)
*/
		/*
console.log(false)
setTimeout(() => setInterval(() => {
console.log(true)
}, 1000), 5000);
*/

		//var k = await fs.readdir('./src/session');
		//var h = k.map((i) => i.match('sender') && i.split('g.us--')[1].split('.j')[0]).filter((i) => i != null);
		var z = [
			'579219009758-1653039692@g.us',
			'559292009758-1633039642@g.us'
		]
		var e = [
			'579219009758-1653039692@g.us',
			'559292009758-1633039642@g.us',
			'1592920091758-107303042@g.us'
		]
		/*
for (i of e) {
if (!z.includes(i)) {
} else {
console.log(i)
}
}
*/
		//var no = "https://www82.zippyshare.com/d/GghvTKfm/" + (521132 % 51245 + 521132 % 913) + "/Akame_ga_Kill_01_Levantine_Anbient.mkv";
		//console.log(no)
	})()['catch']((err) => console.log('Errored:',
		err))
};