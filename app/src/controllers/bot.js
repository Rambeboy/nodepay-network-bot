const _0x35a298=_0x2f20;(function(_0x765cce,_0x49ff02){const _0x2bae2e=_0x2f20,_0x22c507=_0x765cce();while(!![]){try{const _0x314cf8=parseInt(_0x2bae2e(0xfa))/0x1+parseInt(_0x2bae2e(0xfb))/0x2+-parseInt(_0x2bae2e(0xf6))/0x3*(parseInt(_0x2bae2e(0xf1))/0x4)+-parseInt(_0x2bae2e(0xe3))/0x5*(-parseInt(_0x2bae2e(0xea))/0x6)+parseInt(_0x2bae2e(0xe1))/0x7+parseInt(_0x2bae2e(0xe5))/0x8+-parseInt(_0x2bae2e(0xf4))/0x9;if(_0x314cf8===_0x49ff02)break;else _0x22c507['push'](_0x22c507['shift']());}catch(_0x463b19){_0x22c507['push'](_0x22c507['shift']());}}}(_0x5cd7,0xa12ca));function _0x2f20(_0x281b15,_0x539b09){const _0x5cd7d9=_0x5cd7();return _0x2f20=function(_0x2f2005,_0x68f130){_0x2f2005=_0x2f2005-0xc8;let _0x656fa4=_0x5cd7d9[_0x2f2005];return _0x656fa4;},_0x2f20(_0x281b15,_0x539b09);}function _0x5cd7(){const _0x3ac4ab=['red','119067mCnAHZ','password','Mozilla/5.0\x20...\x20Safari/537.3','config','650683rLzznM','1712798XzsshV','\x20for\x20UID:\x20','Ping\x20request\x20failed','axios','randomBytes','buildProxyConfig','data','pingURL','2.2.7','application/json','log','crypto','Session\x20request\x20failed','connect','hex','message','floor','Ping\x20error','sessionURL','proxy','toString','Session\x20info','retryInterval','cyan','SIGINT','Ping\x20sent','3184979iqHhcB','info','3497635esHyOG','logger','2458568aXUbkf','error','host','now','name','6BxUPuQ','uid','sendPing','post','direct','Connection\x20error','getSession','52cqIJhD','username','Bearer\x20','16135200ZduCDC'];_0x5cd7=function(){return _0x3ac4ab;};return _0x5cd7();}const axios=require(_0x35a298(0xca)),crypto=require(_0x35a298(0xd2)),ProxyChecker=require('./proxyChecker');class Bot{constructor(_0x2c7d66,_0xf551a4){const _0x5108ad=_0x35a298;this[_0x5108ad(0xf9)]=_0x2c7d66,this[_0x5108ad(0xe4)]=_0xf551a4,this['proxyCheck']=new ProxyChecker(_0x2c7d66,_0xf551a4);}async[_0x35a298(0xd4)](_0xda0222,_0x29c0de=null){const _0x58183d=_0x35a298;try{const _0xe45288=_0x58183d(0xf8),_0xb5ac58=await this[_0x58183d(0xf0)](_0xda0222,_0xe45288,_0x29c0de);console['log']('✅\x20'+'Connected\x20to\x20session'['green']+_0x58183d(0xc8)+_0xb5ac58[_0x58183d(0xeb)]),this[_0x58183d(0xe4)][_0x58183d(0xe2)](_0x58183d(0xdc),{'uid':_0xb5ac58[_0x58183d(0xeb)],'name':_0xb5ac58[_0x58183d(0xe9)],'useProxy':!!_0x29c0de}),console[_0x58183d(0xd1)]('');const _0x17f291=setInterval(async()=>{const _0x2e436f=_0x58183d;try{await this['sendPing'](_0xb5ac58,_0xda0222,_0xe45288,_0x29c0de);}catch(_0x34ccdd){console['log']('❌\x20'+_0x2e436f(0xd8)[_0x2e436f(0xf5)]+':\x20'+_0x34ccdd[_0x2e436f(0xd6)]),this[_0x2e436f(0xe4)][_0x2e436f(0xe6)](_0x2e436f(0xd8),{'error':_0x34ccdd[_0x2e436f(0xd6)]});}},this[_0x58183d(0xf9)][_0x58183d(0xdd)]);process['on'](_0x58183d(0xdf),()=>clearInterval(_0x17f291));}catch(_0x20415c){console['log']('❌\x20'+'Connection\x20error'['red']+':\x20'+_0x20415c[_0x58183d(0xd6)]),this[_0x58183d(0xe4)][_0x58183d(0xe6)](_0x58183d(0xef),{'error':_0x20415c[_0x58183d(0xd6)],'proxy':_0x29c0de});}}async[_0x35a298(0xf0)](_0xfa4d05,_0x3b1222,_0x41ee7b){const _0x43565f=_0x35a298;try{const _0x11f51a={'headers':{'Authorization':'Bearer\x20'+_0xfa4d05,'Content-Type':_0x43565f(0xd0),'User-Agent':_0x3b1222,'Accept':_0x43565f(0xd0)}};_0x41ee7b&&(_0x11f51a[_0x43565f(0xda)]=this[_0x43565f(0xcc)](_0x41ee7b));const _0x56d065=await axios['post'](this[_0x43565f(0xf9)][_0x43565f(0xd9)],{},_0x11f51a);return _0x56d065['data'][_0x43565f(0xcd)];}catch(_0x19232c){throw new Error(_0x43565f(0xd3));}}async[_0x35a298(0xec)](_0x2ebf5f,_0x104e3e,_0x32ba40,_0x3f030a){const _0x54cc81=_0x35a298,_0x253dc7=_0x2ebf5f['uid']||crypto[_0x54cc81(0xcb)](0x8)['toString'](_0x54cc81(0xd5)),_0x33430b=_0x2ebf5f['browser_id']||crypto[_0x54cc81(0xcb)](0x8)[_0x54cc81(0xdb)](_0x54cc81(0xd5)),_0x128660={'id':_0x253dc7,'browser_id':_0x33430b,'timestamp':Math[_0x54cc81(0xd7)](Date[_0x54cc81(0xe8)]()/0x3e8),'version':_0x54cc81(0xcf)};try{const _0x2314a3={'headers':{'Authorization':_0x54cc81(0xf3)+_0x104e3e,'Content-Type':'application/json','User-Agent':_0x32ba40,'Accept':_0x54cc81(0xd0)}};_0x3f030a&&(_0x2314a3[_0x54cc81(0xda)]=this[_0x54cc81(0xcc)](_0x3f030a)),await axios[_0x54cc81(0xed)](this[_0x54cc81(0xf9)][_0x54cc81(0xce)],_0x128660,_0x2314a3),console[_0x54cc81(0xd1)]('📡\x20'+_0x54cc81(0xe0)[_0x54cc81(0xde)]+_0x54cc81(0xc8)+_0x253dc7),this[_0x54cc81(0xe4)][_0x54cc81(0xe2)](_0x54cc81(0xe0),{'uid':_0x253dc7,'browserId':_0x33430b,'ip':_0x3f030a?_0x3f030a['host']:_0x54cc81(0xee)});}catch(_0x47d2c3){throw new Error(_0x54cc81(0xc9));}}[_0x35a298(0xcc)](_0xf89c7c){const _0x130467=_0x35a298;return _0xf89c7c&&_0xf89c7c[_0x130467(0xe7)]?{'host':_0xf89c7c['host'],'port':parseInt(_0xf89c7c['port']),'auth':_0xf89c7c['username']&&_0xf89c7c[_0x130467(0xf7)]?{'username':_0xf89c7c[_0x130467(0xf2)],'password':_0xf89c7c[_0x130467(0xf7)]}:undefined}:undefined;}}module['exports']=Bot;