const _0x3462b2=_0x20a7;function _0x308f(){const _0x197744=['15848pRJwkD','6QosBvG','message','3171qBOqGj','⚠️\x20\x20','./src/controllers/bot.js','1225GeCBrN','⏳\x20Please\x20wait...\x0a','\x20proxy.txt','Invalid\x20proxy\x20format\x20in','catch','connect','Shutting\x20down...','log','green','then','red','690hJrrqY','3487585SVikLg','proxy.txt','894cNxESx','yellow','filter','30440740vrUwfe','./src/utils/logger.js','split','exit','length','1218900NiCpNT','Not\x20enough\x20proxies\x20for\x20the\x20number\x20of\x20tokens','colors','./src/config/config.js','754856AwCNqR','map','\x0a👋\x20','127791yMvlUH'];_0x308f=function(){return _0x197744;};return _0x308f();}(function(_0x12afb5,_0x36022e){const _0x452af2=_0x20a7,_0x8f9daf=_0x12afb5();while(!![]){try{const _0x2fe7e3=-parseInt(_0x452af2(0xd5))/0x1*(-parseInt(_0x452af2(0xe3))/0x2)+parseInt(_0x452af2(0xeb))/0x3+-parseInt(_0x452af2(0xef))/0x4+-parseInt(_0x452af2(0xe1))/0x5*(-parseInt(_0x452af2(0xf4))/0x6)+-parseInt(_0x452af2(0xd2))/0x7*(-parseInt(_0x452af2(0xf3))/0x8)+parseInt(_0x452af2(0xf2))/0x9*(parseInt(_0x452af2(0xe0))/0xa)+-parseInt(_0x452af2(0xe6))/0xb;if(_0x2fe7e3===_0x36022e)break;else _0x8f9daf['push'](_0x8f9daf['shift']());}catch(_0x4e48c2){_0x8f9daf['push'](_0x8f9daf['shift']());}}}(_0x308f,0x8bc2e),require(_0x3462b2(0xed)));function _0x20a7(_0x3eb1c0,_0x3324b1){const _0x308f22=_0x308f();return _0x20a7=function(_0x20a758,_0x121335){_0x20a758=_0x20a758-0xd1;let _0x184dd5=_0x308f22[_0x20a758];return _0x184dd5;},_0x20a7(_0x3eb1c0,_0x3324b1);}const Config=require(_0x3462b2(0xee)),Bot=require(_0x3462b2(0xd4)),initLogger=require(_0x3462b2(0xe7)),{readLines,displayHeader,askAccountType,askProxyMode}=require('./src/utils/utils.js');async function main(){const _0x332bea=_0x3462b2;displayHeader(),console[_0x332bea(0xdc)](_0x332bea(0xd6)[_0x332bea(0xe4)]);const _0x2622a5=new Config(),_0x184ab3=initLogger(),_0x254b33=await readLines('token.txt'),_0x442b75=await askProxyMode();let _0x437c81=[];if(_0x442b75){_0x437c81=await readLines(_0x332bea(0xe2))[_0x332bea(0xde)](_0xaecddb=>_0xaecddb[_0x332bea(0xf0)](_0x54dd63=>{const _0x1e3e0e=_0x332bea,[_0x5644fa,_0x5873be,_0x4b491c,_0x2e39f3]=_0x54dd63[_0x1e3e0e(0xe8)](':');if(!_0x5644fa||!_0x5873be)return console['log']((_0x1e3e0e(0xd3)+_0x1e3e0e(0xd8)[_0x1e3e0e(0xdf)]+_0x1e3e0e(0xd7))[_0x1e3e0e(0xe4)]),null;return{'host':_0x5644fa,'port':_0x5873be,'username':_0x4b491c,'password':_0x2e39f3};})[_0x332bea(0xe5)](Boolean));if(_0x254b33[_0x332bea(0xea)]>_0x437c81[_0x332bea(0xea)]){console[_0x332bea(0xdc)](_0x332bea(0xd3)+_0x332bea(0xec)['yellow']);return;}}const _0x5b1605=await askAccountType(),_0x4efea8=new Bot(_0x2622a5,_0x184ab3);if(_0x5b1605==='Single\x20Account'){const _0x294a7c=_0x254b33[0x0];if(_0x442b75)for(const _0x2e5c19 of _0x437c81){_0x4efea8[_0x332bea(0xda)](_0x294a7c,_0x2e5c19)[_0x332bea(0xd9)](_0x24fef3=>console[_0x332bea(0xdc)](('❌\x20'+_0x24fef3[_0x332bea(0xd1)])[_0x332bea(0xdf)]));}else _0x4efea8[_0x332bea(0xda)](_0x294a7c)[_0x332bea(0xd9)](_0x2b2553=>console[_0x332bea(0xdc)](('❌\x20'+_0x2b2553['message'])[_0x332bea(0xdf)]));}else for(let _0x22aca3=0x0;_0x22aca3<_0x254b33[_0x332bea(0xea)];_0x22aca3++){const _0x2762c2=_0x254b33[_0x22aca3],_0x5945e5=_0x442b75?_0x437c81[_0x22aca3]:null;_0x4efea8['connect'](_0x2762c2,_0x5945e5)[_0x332bea(0xd9)](_0x42ccaa=>console[_0x332bea(0xdc)](('❌\x20'+_0x42ccaa['message'])[_0x332bea(0xdf)]));}process['on']('SIGINT',()=>{const _0x5e8825=_0x332bea;console['log'](_0x5e8825(0xf1)+_0x5e8825(0xdb)[_0x5e8825(0xdd)]),process[_0x5e8825(0xe9)](0x0);});}main()[_0x3462b2(0xd9)](_0x5b73f6=>console[_0x3462b2(0xdc)](('❌\x20'+_0x5b73f6[_0x3462b2(0xd1)])[_0x3462b2(0xdf)]));