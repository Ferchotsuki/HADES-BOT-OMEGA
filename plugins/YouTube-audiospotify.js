import _0x1f6ce5 from'node-fetch';import _0x97b394 from'fs';import _0x2d0b4a from'axios';const handler=async(_0x4cd1e5,{conn:_0xd9328c,text:_0x5809d3,usedPrefix:_0x7f298e,command:_0x579aa5})=>{const _0x211937=global;if(!_0x5809d3)throw'[❗]\x20Ingresa\x20el\x20nombre\x20de\x20una\x20canción\x20de\x20Spotify.';try{const _0xbc747f=await _0x1f6ce5(global['MyApiRestBaseUrl']+'/api/spotifysearch?text='+_0x5809d3+'&apikey='+global['MyApiRestApikey']),_0x503d34=await _0xbc747f['json'](),_0x329ddd=_0x503d34?.['spty']?.['resultado'][0x0]?.['url'],_0x399de9=await _0x1f6ce5(global['MyApiRestBaseUrl']+'/api/spotifydl?text='+_0x329ddd+'&apikey='+global['MyApiRestApikey']),_0x106a02=await _0xd9328c['getFile'](_0x399de9?.['url']),_0x339726=await _0x1f6ce5(global['MyApiRestBaseUrl']+'/api/spotifyinfo?text='+_0x329ddd+'&apikey='+global['MyApiRestApikey']),_0x58161b=await _0x339726['json'](),_0x1a87fb=_0x58161b?.['spty']?.['resultado'],_0x4b4aed=await(await _0x1f6ce5(''+_0x1a87fb['thumbnail']))['buffer']();let _0x9feb8e='✨𝕊𝕡𝕠𝕥𝕚𝕗𝕪🧿\x0a⇄\x20\x20\x20\x20◁\x20\x20\x20ㅤ\x20\x20❚❚ㅤ\x20\x20\x20▷ㅤ\x20\x20\x20\x20↻\x0a';_0x9feb8e+='*Calificación\x20:\x20'+_0x1a87fb['title']+'*\x0a',_0x9feb8e+='*Artista\x20'+_0x1a87fb['artist']+'*\x0a',_0x9feb8e+='*Publicado\x20:\x20'+_0x1a87fb['year']+'*\x0a\x0a',await _0xd9328c['sendMessage'](_0x4cd1e5['chat'],{'text':_0x9feb8e['trim'](),'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global['titulowm2'],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':_0x4b4aed,'thumbnailUrl':_0x4b4aed,'mediaUrl':_0x329ddd,'sourceUrl':_0x329ddd}}},{'quoted':_0x4cd1e5}),await _0xd9328c['sendMessage'](_0x4cd1e5['chat'],{'audio':_0x106a02['data'],'fileName':_0x1a87fb['name']+'.mp3','mimetype':'audio/mpeg','fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x4cd1e5});}catch(_0x12fd52){console['error']('Error:\x20'+_0x12fd52['message']);throw tradutor['texto3'];}};handler['command']=/^(audiospotify)$/i,handler['register']=!![],handler['group']=!![];export default handler;