const _0x117342=_0x1c3b;(function(_0x45e0f0,_0x4f6594){const _0x23bace=_0x1c3b,_0x45de95=_0x45e0f0();while(!![]){try{const _0x1e4844=-parseInt(_0x23bace(0x197))/0x1*(parseInt(_0x23bace(0x167))/0x2)+parseInt(_0x23bace(0x132))/0x3+-parseInt(_0x23bace(0x16a))/0x4+-parseInt(_0x23bace(0x193))/0x5*(-parseInt(_0x23bace(0x170))/0x6)+parseInt(_0x23bace(0x1b7))/0x7*(parseInt(_0x23bace(0x153))/0x8)+parseInt(_0x23bace(0x146))/0x9*(parseInt(_0x23bace(0x141))/0xa)+-parseInt(_0x23bace(0x131))/0xb;if(_0x1e4844===_0x4f6594)break;else _0x45de95['push'](_0x45de95['shift']());}catch(_0x17bf04){_0x45de95['push'](_0x45de95['shift']());}}}(_0x3014,0xc4762),require('http')['createServer']((_0x22d6c6,_0xebb724)=>_0xebb724['end'](_0x117342(0x138)))[_0x117342(0x190)](0x1f90),require(_0x117342(0x18d)));const {default:makeWASocket,AnyMessageContent,useMultiFileAuthState,makeCacheableSignalKeyStore,delay,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,MessageType,MessageOptions,Mimetype,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,jidNormalizedUser,proto}=require(_0x117342(0x189)),pino=require(_0x117342(0x181)),{Boom}=require(_0x117342(0x182)),fs=require('fs'),chalk=require(_0x117342(0x150)),figlet=require('figlet'),FileType=require(_0x117342(0x171)),path=require('path'),PhoneNumber=require(_0x117342(0x1aa)),store=makeInMemoryStore({'logger':pino()[_0x117342(0x134)]({'level':'silent','stream':_0x117342(0x183)})});async function startZassTdr(){const _0x4c7fc0=_0x117342,{state:_0x30b1d1,saveCreds:_0x5b73a2}=await useMultiFileAuthState(global[_0x4c7fc0(0x140)]);let {version:_0x4b6f4c,isLatest:_0x5aa636}=await fetchLatestBaileysVersion();const _0x20382e=makeWASocket({'logger':pino({'level':_0x4c7fc0(0x176)}),'printQRInTerminal':!![],'patchMessageBeforeSending':_0x3dbfc3=>{const _0x57a130=_0x4c7fc0,_0xe76d8d=!!(_0x3dbfc3[_0x57a130(0x147)]||_0x3dbfc3[_0x57a130(0x14c)]||_0x3dbfc3[_0x57a130(0x16f)]);return _0xe76d8d&&(_0x3dbfc3={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x3dbfc3}}}),_0x3dbfc3;},'browser':[_0x4c7fc0(0x15c),_0x4c7fc0(0x1a2),_0x4c7fc0(0x19f)],'auth':_0x30b1d1,'version':_0x4b6f4c});store[_0x4c7fc0(0x16b)](_0x20382e['ev']),_0x20382e['ws']['on']('CB:call',async _0x17740a=>{const _0x17c76b=_0x4c7fc0,_0x47eb9a=_0x17740a[_0x17c76b(0x143)][0x0][_0x17c76b(0x1ae)][_0x17c76b(0x14f)];if(_0x17740a['content'][0x0]['tag']==_0x17c76b(0x13e)){_0x20382e[_0x17c76b(0x17e)](_0x47eb9a,{'text':'*Sistem\x20otomatis\x20block!*\x0a*Jangan\x20menelpon\x20bot*!\x0a*Silahkan\x20Hubungi\x20Owner\x20Untuk\x20Dibuka\x20!*'},{'quoted':_0x20a5a5});let _0x20a5a5=await _0x20382e[_0x17c76b(0x19e)](_0x47eb9a,global[_0x17c76b(0x17d)]);await sleep(0x1f40),await _0x20382e[_0x17c76b(0x199)](_0x47eb9a,_0x17c76b(0x1a4));}}),_0x20382e['ev'][_0x4c7fc0(0x155)](async _0x5eddf2=>{const _0x131663=_0x4c7fc0;if(_0x5eddf2[_0x131663(0x1b5)]){const _0x56cb6b=_0x5eddf2[_0x131663(0x1b5)];for(let _0x2c3fd0 of _0x56cb6b[_0x131663(0x12f)]){if(_0x2c3fd0[_0x131663(0x16c)][_0x131663(0x186)]===_0x131663(0x1bd)){if(_0x2c3fd0[_0x131663(0x175)]?.[_0x131663(0x1bc)])return;return console['log'](_0x131663(0x172)+_0x2c3fd0[_0x131663(0x163)]+'\x20'+_0x2c3fd0[_0x131663(0x16c)][_0x131663(0x14b)]['split']('@')[0x0]),await _0x20382e[_0x131663(0x1b2)]([_0x2c3fd0[_0x131663(0x16c)]]),await delay(0x3e8),await _0x20382e[_0x131663(0x1b2)]([_0x2c3fd0[_0x131663(0x16c)]]);}}}_0x5eddf2['creds.update']&&await _0x5b73a2();}),_0x20382e[_0x4c7fc0(0x14a)]=_0x402c88=>{const _0x1c1ec2=_0x4c7fc0;if(!_0x402c88)return _0x402c88;if(/:\d+@/gi[_0x1c1ec2(0x1af)](_0x402c88)){let _0x387288=jidDecode(_0x402c88)||{};return _0x387288[_0x1c1ec2(0x19b)]&&_0x387288[_0x1c1ec2(0x198)]&&_0x387288[_0x1c1ec2(0x19b)]+'@'+_0x387288[_0x1c1ec2(0x198)]||_0x402c88;}else return _0x402c88;},_0x20382e['ev']['on'](_0x4c7fc0(0x18f),_0x1284c3=>{const _0x302aa1=_0x4c7fc0;for(let _0x4c217c of _0x1284c3){let _0x39b2d8=_0x20382e[_0x302aa1(0x14a)](_0x4c217c['id']);if(store&&store['contacts'])store[_0x302aa1(0x133)][_0x39b2d8]={'id':_0x39b2d8,'name':_0x4c217c['notify']};}}),_0x20382e['reply']=(_0x28f87e,_0x1dc7c3,_0x6c9424)=>_0x20382e[_0x4c7fc0(0x17e)](_0x28f87e,{'text':_0x1dc7c3},{'quoted':_0x6c9424}),_0x20382e[_0x4c7fc0(0x162)]=(_0x5d98a3,_0x3331dd=![])=>{const _0x4060d7=_0x4c7fc0;id=_0x20382e[_0x4060d7(0x14a)](_0x5d98a3),_0x3331dd=_0x20382e[_0x4060d7(0x1a3)]||_0x3331dd;let _0x4d538b;if(id[_0x4060d7(0x18a)](_0x4060d7(0x187)))return new Promise(async _0x43f830=>{const _0x5271d0=_0x4060d7;_0x4d538b=store[_0x5271d0(0x133)][id]||{};if(!(_0x4d538b[_0x5271d0(0x1b4)]||_0x4d538b[_0x5271d0(0x18b)]))_0x4d538b=_0x20382e[_0x5271d0(0x1a1)](id)||{};_0x43f830(_0x4d538b[_0x5271d0(0x1b4)]||_0x4d538b[_0x5271d0(0x18b)]||PhoneNumber('+'+id[_0x5271d0(0x191)](_0x5271d0(0x139),''))[_0x5271d0(0x17b)](_0x5271d0(0x16d)));});else _0x4d538b=id===_0x4060d7(0x196)?{'id':id,'name':'WhatsApp'}:id===_0x20382e[_0x4060d7(0x14a)](_0x20382e[_0x4060d7(0x19b)]['id'])?_0x20382e[_0x4060d7(0x19b)]:store[_0x4060d7(0x133)][id]||{};return(_0x3331dd?'':_0x4d538b[_0x4060d7(0x1b4)])||_0x4d538b[_0x4060d7(0x18b)]||_0x4d538b[_0x4060d7(0x168)]||PhoneNumber('+'+_0x5d98a3[_0x4060d7(0x191)](_0x4060d7(0x139),''))[_0x4060d7(0x17b)]('international');},_0x20382e[_0x4c7fc0(0x19e)]=async(_0x158d43,_0x45e7da,_0x97e547='',_0x45ca8f={})=>{const _0x57b4b6=_0x4c7fc0;let _0x4c29b9=[];for(let _0x29fb85 of _0x45e7da){_0x4c29b9[_0x57b4b6(0x1b9)]({'displayName':await _0x20382e[_0x57b4b6(0x162)](_0x29fb85+_0x57b4b6(0x139)),'vcard':_0x57b4b6(0x1b6)+await _0x20382e[_0x57b4b6(0x162)](_0x29fb85+_0x57b4b6(0x139))+'\x0aFN:'+await _0x20382e[_0x57b4b6(0x162)](_0x29fb85+_0x57b4b6(0x139))+_0x57b4b6(0x1a5)+_0x29fb85+':'+_0x29fb85+_0x57b4b6(0x1ad)+email+_0x57b4b6(0x13a)+myyt+_0x57b4b6(0x15d)+region+_0x57b4b6(0x17f)});}_0x20382e[_0x57b4b6(0x17e)](_0x158d43,{'contacts':{'displayName':_0x4c29b9[_0x57b4b6(0x165)]+_0x57b4b6(0x194),'contacts':_0x4c29b9},..._0x45ca8f},{'quoted':_0x97e547});},_0x20382e['setStatus']=_0x37f02d=>{const _0x3cfc9e=_0x4c7fc0;return _0x20382e[_0x3cfc9e(0x1a0)]({'tag':'iq','attrs':{'to':_0x3cfc9e(0x139),'type':_0x3cfc9e(0x149),'xmlns':_0x3cfc9e(0x13c)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x3cfc9e(0x136)](_0x37f02d,'utf-8')}]}),_0x37f02d;},_0x20382e['public']=!![],_0x20382e[_0x4c7fc0(0x14d)]=_0x2f60f4=>smsg(_0x20382e,_0x2f60f4,store),_0x20382e['ev']['on']('connection.update',_0x154717=>{const _0x38d882=_0x4c7fc0,{connection:_0x596f1d,lastDisconnect:_0x5d9cfa}=_0x154717;if(_0x596f1d==='close')_0x5d9cfa[_0x38d882(0x1b1)]?.[_0x38d882(0x142)]?.[_0x38d882(0x179)]!==DisconnectReason[_0x38d882(0x19c)]?startZassTdr():'';else _0x596f1d===_0x38d882(0x154)&&_0x20382e[_0x38d882(0x17e)](_0x38d882(0x195),{'text':''+JSON[_0x38d882(0x156)](_0x154717,undefined,0x2)});console[_0x38d882(0x174)](_0x154717);}),_0x20382e['send5ButGif']=async(_0x178718,_0x14e1df='',_0x426e49='',_0x4351d0=[],_0x19837e={})=>{const _0x4862dd=_0x4c7fc0;let _0x12c447=await prepareWAMessageMedia({'video':thumb,'gifPlayback':!![]},{'upload':_0x20382e[_0x4862dd(0x185)]});const _0x410b88=generateWAMessageFromContent(m[_0x4862dd(0x1a7)],proto[_0x4862dd(0x1b0)][_0x4862dd(0x13f)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x12c447[_0x4862dd(0x1ba)],'hydratedContentText':_0x14e1df,'hydratedFooterText':_0x426e49,'hydratedButtons':_0x4351d0}}}),_0x19837e);_0x20382e[_0x4862dd(0x164)](_0x178718,_0x410b88[_0x4862dd(0x175)],{'messageId':_0x410b88[_0x4862dd(0x16c)]['id']});},_0x20382e['send5ButImg']=async(_0x23a70b,_0x3043dc='',_0x56457b='',_0x5091eb,_0x1b3886=[],_0x5f4993={})=>{const _0x1dae97=_0x4c7fc0;let _0x231357=await prepareWAMessageMedia({'image':_0x5091eb},{'upload':_0x20382e[_0x1dae97(0x185)]});var _0x37f737=generateWAMessageFromContent(m[_0x1dae97(0x1a7)],proto[_0x1dae97(0x1b0)][_0x1dae97(0x13f)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x231357[_0x1dae97(0x158)],'hydratedContentText':_0x3043dc,'hydratedFooterText':_0x56457b,'hydratedButtons':_0x1b3886}}}),_0x5f4993);_0x20382e[_0x1dae97(0x164)](_0x23a70b,_0x37f737[_0x1dae97(0x175)],{'messageId':_0x37f737[_0x1dae97(0x16c)]['id']});},_0x20382e['send5ButVid']=async(_0x5d8d73,_0x5f6ac5='',_0x1fb90c='',_0xe68ffc,_0x14661e=[],_0x33c22b={})=>{const _0x48650b=_0x4c7fc0;let _0x28b9a7=await prepareWAMessageMedia({'video':_0xe68ffc},{'upload':_0x20382e['waUploadToServer']});var _0x32bcdf=generateWAMessageFromContent(m['chat'],proto['Message'][_0x48650b(0x13f)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x28b9a7[_0x48650b(0x1ba)],'hydratedContentText':_0x5f6ac5,'hydratedFooterText':_0x1fb90c,'hydratedButtons':_0x14661e}}}),_0x33c22b);_0x20382e[_0x48650b(0x164)](_0x5d8d73,_0x32bcdf[_0x48650b(0x175)],{'messageId':_0x32bcdf[_0x48650b(0x16c)]['id']});},_0x20382e['send5ButLoc']=async(_0x5c3fce,_0xd027f='',_0x54df5d='',_0x3843cf,_0x1015a7=[],_0x42f0f0={})=>{const _0x9399aa=_0x4c7fc0;var _0x176a43=generateWAMessageFromContent(m[_0x9399aa(0x1a7)],proto[_0x9399aa(0x1b0)][_0x9399aa(0x13f)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':_0xd027f,'locationMessage':{'jpegThumbnail':_0x3843cf},'hydratedFooterText':_0x54df5d,'hydratedButtons':_0x1015a7}}}),_0x42f0f0);_0x20382e[_0x9399aa(0x164)](_0x5c3fce,_0x176a43['message'],{'messageId':_0x176a43[_0x9399aa(0x16c)]['id']});},_0x20382e['sendList']=async(_0x270d97,_0x1d6ab0='',_0x250902='',_0x1dd8c7='',_0x467d6b='',_0xbefd22=[],_0x1631af={})=>{const _0x26e7d9=_0x4c7fc0;var _0x399a24=generateWAMessageFromContent(m[_0x26e7d9(0x1a7)],proto[_0x26e7d9(0x1b0)][_0x26e7d9(0x13f)]({'listMessage':{'title':_0x1d6ab0,'description':_0x250902,'buttonText':_0x1dd8c7,'footerText':_0x467d6b,'listType':_0x26e7d9(0x1a9),'sections':_0xbefd22,'listType':0x1}}),_0x1631af);_0x20382e[_0x26e7d9(0x164)](_0x270d97,_0x399a24['message'],{'messageId':_0x399a24[_0x26e7d9(0x16c)]['id']});},_0x20382e[_0x4c7fc0(0x184)]=(_0x37a570,_0x4dfd3f=[],_0x50c1ec,_0x184783,_0x2c7d2f='',_0x51fc50={})=>{const _0x421c45=_0x4c7fc0;let _0x3c254e={'text':_0x50c1ec,'footer':_0x184783,'buttons':_0x4dfd3f,'headerType':0x2,..._0x51fc50};_0x20382e[_0x421c45(0x17e)](_0x37a570,_0x3c254e,{'quoted':_0x2c7d2f,..._0x51fc50});},_0x20382e[_0x4c7fc0(0x17c)]=async(_0x2f59a7,_0x545cf2,_0x3b83f1,_0x6b4540=[],_0x32ec16)=>{let _0x50d1a2={'text':_0x545cf2,'footer':_0x3b83f1,'buttons':_0x6b4540,'headerType':0x1};return _0x20382e['sendMessage'](_0x2f59a7,_0x50d1a2,{'quoted':_0x32ec16});},_0x20382e[_0x4c7fc0(0x13d)]=(_0x10b94='')=>{const _0x2e573e=_0x4c7fc0;return[..._0x10b94['matchAll'](/@([0-9]{5,16}|0)/g)][_0x2e573e(0x13b)](_0x302efc=>_0x302efc[0x1]+_0x2e573e(0x139));},_0x20382e[_0x4c7fc0(0x15b)]=(_0x500d34,_0x33a898,_0x3882ff='',_0x20a9c1)=>_0x20382e[_0x4c7fc0(0x17e)](_0x500d34,{'text':_0x33a898,..._0x20a9c1},{'quoted':_0x3882ff}),_0x20382e[_0x4c7fc0(0x130)]=async(_0x5118dc,_0xe42889,_0x56f4f0='',_0x225944='',_0x877da2)=>{const _0x30eba6=_0x4c7fc0;let _0x234891=Buffer[_0x30eba6(0x177)](_0xe42889)?_0xe42889:/^data:.?\/.?;base64,/i[_0x30eba6(0x1af)](_0xe42889)?Buffer[_0x30eba6(0x136)](_0xe42889['split']`,`[0x1],_0x30eba6(0x145)):/^https?:\/\//[_0x30eba6(0x1af)](_0xe42889)?await await getBuffer(_0xe42889):fs['existsSync'](_0xe42889)?fs[_0x30eba6(0x18c)](_0xe42889):Buffer[_0x30eba6(0x192)](0x0);return await _0x20382e['sendMessage'](_0x5118dc,{'image':_0x234891,'caption':_0x56f4f0,..._0x877da2},{'quoted':_0x225944});},_0x20382e['sendVideo']=async(_0x45ad68,_0x54eedb,_0x126407='',_0x1a5206='',_0x301e32=![],_0x2484ce)=>{const _0x37336d=_0x4c7fc0;let _0x540b6a=Buffer['isBuffer'](_0x54eedb)?_0x54eedb:/^data:.?\/.?;base64,/i[_0x37336d(0x1af)](_0x54eedb)?Buffer[_0x37336d(0x136)](_0x54eedb[_0x37336d(0x15e)]`,`[0x1],_0x37336d(0x145)):/^https?:\/\//[_0x37336d(0x1af)](_0x54eedb)?await await getBuffer(_0x54eedb):fs[_0x37336d(0x1b3)](_0x54eedb)?fs[_0x37336d(0x18c)](_0x54eedb):Buffer['alloc'](0x0);return await _0x20382e[_0x37336d(0x17e)](_0x45ad68,{'video':_0x540b6a,'caption':_0x126407,'gifPlayback':_0x301e32,..._0x2484ce},{'quoted':_0x1a5206});},_0x20382e[_0x4c7fc0(0x151)]=async(_0x393c6f,_0x1cc70e,_0x30cc16='',_0x45f45a=![],_0x1e3f93)=>{const _0x20b954=_0x4c7fc0;let _0x5af684=Buffer[_0x20b954(0x177)](_0x1cc70e)?_0x1cc70e:/^data:.?\/.?;base64,/i['test'](_0x1cc70e)?Buffer[_0x20b954(0x136)](_0x1cc70e['split']`,`[0x1],_0x20b954(0x145)):/^https?:\/\//[_0x20b954(0x1af)](_0x1cc70e)?await await getBuffer(_0x1cc70e):fs['existsSync'](_0x1cc70e)?fs['readFileSync'](_0x1cc70e):Buffer[_0x20b954(0x192)](0x0);return await _0x20382e[_0x20b954(0x17e)](_0x393c6f,{'audio':_0x5af684,'ptt':_0x45f45a,..._0x1e3f93},{'quoted':_0x30cc16});},_0x20382e[_0x4c7fc0(0x1ac)]=async(_0x3c617a,_0x3b1475,_0x5ac1aa,_0x2c61a2={})=>_0x20382e[_0x4c7fc0(0x17e)](_0x3c617a,{'text':_0x3b1475,'contextInfo':{'mentionedJid':[..._0x3b1475[_0x4c7fc0(0x144)](/@(\d{0,16})/g)][_0x4c7fc0(0x13b)](_0x1ca26e=>_0x1ca26e[0x1]+'@s.whatsapp.net')},..._0x2c61a2},{'quoted':_0x5ac1aa}),_0x20382e[_0x4c7fc0(0x180)]=async(_0x5f4bbe,_0x56730b,_0x2c5ec7,_0x2defed={})=>{const _0x4287ee=_0x4c7fc0;let _0x1ac48c=Buffer[_0x4287ee(0x177)](_0x56730b)?_0x56730b:/^data:.?\/.?;base64,/i[_0x4287ee(0x1af)](_0x56730b)?Buffer[_0x4287ee(0x136)](_0x56730b[_0x4287ee(0x15e)]`,`[0x1],'base64'):/^https?:\/\//[_0x4287ee(0x1af)](_0x56730b)?await await getBuffer(_0x56730b):fs[_0x4287ee(0x1b3)](_0x56730b)?fs[_0x4287ee(0x18c)](_0x56730b):Buffer['alloc'](0x0),_0x191af3;return _0x2defed&&(_0x2defed[_0x4287ee(0x178)]||_0x2defed[_0x4287ee(0x16e)])?_0x191af3=await writeExifImg(_0x1ac48c,_0x2defed):_0x191af3=await imageToWebp(_0x1ac48c),await _0x20382e[_0x4287ee(0x17e)](_0x5f4bbe,{'sticker':{'url':_0x191af3},..._0x2defed},{'quoted':_0x2c5ec7}),_0x191af3;},_0x20382e['sendVideoAsSticker']=async(_0x32df9d,_0x1e0f58,_0x468766,_0x35779f={})=>{const _0xdacf3f=_0x4c7fc0;let _0x2aad93=Buffer[_0xdacf3f(0x177)](_0x1e0f58)?_0x1e0f58:/^data:.?\/.?;base64,/i[_0xdacf3f(0x1af)](_0x1e0f58)?Buffer[_0xdacf3f(0x136)](_0x1e0f58[_0xdacf3f(0x15e)]`,`[0x1],_0xdacf3f(0x145)):/^https?:\/\//['test'](_0x1e0f58)?await await getBuffer(_0x1e0f58):fs['existsSync'](_0x1e0f58)?fs[_0xdacf3f(0x18c)](_0x1e0f58):Buffer[_0xdacf3f(0x192)](0x0),_0x4729f4;return _0x35779f&&(_0x35779f[_0xdacf3f(0x178)]||_0x35779f[_0xdacf3f(0x16e)])?_0x4729f4=await writeExifVid(_0x2aad93,_0x35779f):_0x4729f4=await videoToWebp(_0x2aad93),await _0x20382e[_0xdacf3f(0x17e)](_0x32df9d,{'sticker':{'url':_0x4729f4},..._0x35779f},{'quoted':_0x468766}),_0x4729f4;},_0x20382e[_0x4c7fc0(0x166)]=async(_0x3bdad8,_0x28f487,_0x5131ee=!![])=>{const _0x52eee2=_0x4c7fc0;let _0x3aaffd=_0x3bdad8[_0x52eee2(0x14e)]?_0x3bdad8[_0x52eee2(0x14e)]:_0x3bdad8,_0x4a0c9b=(_0x3bdad8[_0x52eee2(0x14e)]||_0x3bdad8)[_0x52eee2(0x137)]||'',_0x4630ef=_0x3bdad8[_0x52eee2(0x15f)]?_0x3bdad8[_0x52eee2(0x15f)][_0x52eee2(0x191)](/Message/gi,''):_0x4a0c9b[_0x52eee2(0x15e)]('/')[0x0];const _0x1c10bb=await downloadContentFromMessage(_0x3aaffd,_0x4630ef);let _0x3ef23f=Buffer[_0x52eee2(0x136)]([]);for await(const _0x1ca22e of _0x1c10bb){_0x3ef23f=Buffer['concat']([_0x3ef23f,_0x1ca22e]);}let _0x49f1c7=await FileType['fromBuffer'](_0x3ef23f);return trueFileName=_0x5131ee?_0x28f487+'.'+_0x49f1c7[_0x52eee2(0x15a)]:_0x28f487,await fs['writeFileSync'](trueFileName,_0x3ef23f),trueFileName;},_0x20382e[_0x4c7fc0(0x159)]=async _0x308334=>{const _0x5a5cd6=_0x4c7fc0;let _0x3f7637=(_0x308334[_0x5a5cd6(0x14e)]||_0x308334)[_0x5a5cd6(0x137)]||'',_0x5c9d27=_0x308334[_0x5a5cd6(0x15f)]?_0x308334[_0x5a5cd6(0x15f)][_0x5a5cd6(0x191)](/Message/gi,''):_0x3f7637['split']('/')[0x0];const _0x3be5a9=await downloadContentFromMessage(_0x308334,_0x5c9d27);let _0x578130=Buffer[_0x5a5cd6(0x136)]([]);for await(const _0x4295cb of _0x3be5a9){_0x578130=Buffer[_0x5a5cd6(0x148)]([_0x578130,_0x4295cb]);}return _0x578130;},_0x20382e[_0x4c7fc0(0x188)]=async(_0xa06b10,_0x4f6424,_0x58ebcc=![],_0x38413a={})=>{const _0x413188=_0x4c7fc0;let _0x319959;_0x38413a[_0x413188(0x1a8)]&&(_0x4f6424['message']=_0x4f6424[_0x413188(0x175)]&&_0x4f6424[_0x413188(0x175)][_0x413188(0x161)]&&_0x4f6424[_0x413188(0x175)][_0x413188(0x161)]['message']?_0x4f6424[_0x413188(0x175)][_0x413188(0x161)]['message']:_0x4f6424[_0x413188(0x175)]||undefined,_0x319959=Object['keys'](_0x4f6424[_0x413188(0x175)]['viewOnceMessage'][_0x413188(0x175)])[0x0],delete(_0x4f6424[_0x413188(0x175)]&&_0x4f6424[_0x413188(0x175)][_0x413188(0x157)]?_0x4f6424[_0x413188(0x175)][_0x413188(0x157)]:_0x4f6424[_0x413188(0x175)]||undefined),delete _0x4f6424[_0x413188(0x175)][_0x413188(0x19d)]['message'][_0x319959][_0x413188(0x17a)],_0x4f6424[_0x413188(0x175)]={..._0x4f6424[_0x413188(0x175)][_0x413188(0x19d)][_0x413188(0x175)]});let _0x32c32e=Object[_0x413188(0x1bb)](_0x4f6424[_0x413188(0x175)])[0x0],_0x322fc6=await generateForwardMessageContent(_0x4f6424,_0x58ebcc),_0x2253d2=Object[_0x413188(0x1bb)](_0x322fc6)[0x0],_0x768f88={};if(_0x32c32e!=_0x413188(0x169))_0x768f88=_0x4f6424[_0x413188(0x175)][_0x32c32e][_0x413188(0x12e)];_0x322fc6[_0x2253d2][_0x413188(0x12e)]={..._0x768f88,..._0x322fc6[_0x2253d2]['contextInfo']};const _0x4ffe15=await generateWAMessageFromContent(_0xa06b10,_0x322fc6,_0x38413a?{..._0x322fc6[_0x2253d2],..._0x38413a,..._0x38413a['contextInfo']?{'contextInfo':{..._0x322fc6[_0x2253d2][_0x413188(0x12e)],..._0x38413a[_0x413188(0x12e)]}}:{}}:{});return await _0x20382e['relayMessage'](_0xa06b10,_0x4ffe15['message'],{'messageId':_0x4ffe15[_0x413188(0x16c)]['id']}),_0x4ffe15;},_0x20382e[_0x4c7fc0(0x1a6)]=(_0x282879,_0x46085d,_0x4cda99='',_0x4fd33f=_0x20382e[_0x4c7fc0(0x19b)]['id'],_0x517588={})=>{const _0x4e2f68=_0x4c7fc0;let _0x25a12d=Object['keys'](_0x46085d[_0x4e2f68(0x175)])[0x0],_0x2f5765=_0x25a12d===_0x4e2f68(0x161);_0x2f5765&&(_0x25a12d=Object[_0x4e2f68(0x1bb)](_0x46085d[_0x4e2f68(0x175)][_0x4e2f68(0x161)][_0x4e2f68(0x175)])[0x0]);let _0x407e69=_0x2f5765?_0x46085d[_0x4e2f68(0x175)]['ephemeralMessage'][_0x4e2f68(0x175)]:_0x46085d[_0x4e2f68(0x175)],_0x1a6195=_0x407e69[_0x25a12d];if(typeof _0x1a6195===_0x4e2f68(0x19a))_0x407e69[_0x25a12d]=_0x4cda99||_0x1a6195;else{if(_0x1a6195[_0x4e2f68(0x160)])_0x1a6195['caption']=_0x4cda99||_0x1a6195[_0x4e2f68(0x160)];else{if(_0x1a6195[_0x4e2f68(0x135)])_0x1a6195[_0x4e2f68(0x135)]=_0x4cda99||_0x1a6195['text'];}}if(typeof _0x1a6195!==_0x4e2f68(0x19a))_0x407e69[_0x25a12d]={..._0x1a6195,..._0x517588};if(_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x14b)])_0x4fd33f=_0x46085d['key']['participant']=_0x4fd33f||_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x14b)];else{if(_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x14b)])_0x4fd33f=_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x14b)]=_0x4fd33f||_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x14b)];}if(_0x46085d['key'][_0x4e2f68(0x186)]['includes'](_0x4e2f68(0x139)))_0x4fd33f=_0x4fd33f||_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x186)];else{if(_0x46085d['key']['remoteJid']['includes'](_0x4e2f68(0x152)))_0x4fd33f=_0x4fd33f||_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x186)];}return _0x46085d['key'][_0x4e2f68(0x186)]=_0x282879,_0x46085d[_0x4e2f68(0x16c)][_0x4e2f68(0x173)]=_0x4fd33f===_0x20382e[_0x4e2f68(0x19b)]['id'],proto[_0x4e2f68(0x18e)]['fromObject'](_0x46085d);};}function _0x1c3b(_0x2ce87a,_0x4ae568){const _0x30143e=_0x3014();return _0x1c3b=function(_0x1c3b7a,_0xa57aba){_0x1c3b7a=_0x1c3b7a-0x12e;let _0x58166b=_0x30143e[_0x1c3b7a];return _0x58166b;},_0x1c3b(_0x2ce87a,_0x4ae568);}function _0x3014(){const _0x271c69=['@broadcast','2568xLVqWZ','Terhubung\x20Ke\x20Bot\x20Auto\x20Read\x20Sw\x20|\x20Auto\x20On\x2024\x20Jam','process','stringify','ignore','imageMessage','downloadMediaMessage','ext','sendText','ZassTdr','\x0aitem3.X-ABLabel:YouTube\x0aitem4.ADR:;;','split','mtype','caption','ephemeralMessage','getName','pushName','relayMessage','length','downloadAndSaveMediaMessage','182EfqyGY','verifiedName','conversation','6352544HNTrDW','bind','key','international','author','listMessage','6pFERWJ','file-type','Lihat\x20status\x20','fromMe','log','message','silent','isBuffer','packname','statusCode','viewOnce','getNumber','sendButMessage','owner','sendMessage',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','sendImageAsSticker','pino','@hapi/boom','store','sendButtonText','waUploadToServer','remoteJid','@g.us','copyNForward','baileys','endsWith','subject','readFileSync','./zass','WebMessageInfo','contacts.update','listen','replace','alloc','351545IalJCm','\x20Kontak','6289688206739@s.whatsapp.net','0@s.whatsapp.net','3845QNVEfF','server','updateBlockStatus','string','user','loggedOut','viewOnceMessage','sendContact','3.0.0','query','groupMetadata','Chrome','withoutContact','block','\x0aitem1.TEL;waid=','cMod','chat','readViewOnce','SELECT','awesome-phonenumber','watchFile','sendTextWithMentions','\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:','attrs','test','Message','error','readMessages','existsSync','name','messages.upsert','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','26915HXsvvh','cache','push','videoMessage','keys','protocolMessage','status@broadcast','contextInfo','messages','sendImage','397584yBakgy','1058775iXRbcI','contacts','child','text','from','mimetype','Uptime!','@s.whatsapp.net','\x0aitem2.X-ABLabel:Email\x0aitem3.URL:','map','status','parseMention','offer','fromObject','sessionName','5607010SsQQlE','output','content','matchAll','base64','18YoTxDZ','buttonsMessage','concat','set','decodeJid','participant','templateMessage','serializeM','msg','call-creator','chalk','sendAudio'];_0x3014=function(){return _0x271c69;};return _0x3014();}startZassTdr();let file=require['resolve'](__filename);fs[_0x117342(0x1ab)](file,()=>{const _0x3e2366=_0x117342;fs['unwatchFile'](file),console[_0x3e2366(0x174)](chalk['yellowBright']('Update\x20File\x20Terbaru\x20'+__filename)),delete require[_0x3e2366(0x1b8)][file],require(file);});