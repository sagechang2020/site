const places=[
{id:'mad-t1a',n:'①/⑪',day:'1005',lat:40.4637,lng:-3.5709,name:'马德里巴拉哈斯机场',local:'Adolfo Suárez Madrid–Barajas Airport',time:'10/5周一22:30抵达；10/7周三目标19:00–19:15返回',task:'FR5483抵达 / U22050申根离境',icon:'✈️'},
{id:'vertice',n:'②',day:'1005',lat:40.33234,lng:-3.70278,name:'Vértice Roomspace Madrid',local:'Vértice Roomspace Madrid · Calle Laguna Dalga 4',time:'10/5入住；10/7上午休息 + 12:30 Madrid导师会议',task:'两晚住宿 · 两人早餐已含 · 10/7申请延迟退房',icon:'🏨'},
{id:'sancristobal',n:'③',day:'1006',lat:40.33163,lng:-3.69938,name:'圣克里斯托瓦尔工业站',local:'San Cristóbal Industrial',time:'10/6约08:00前后',task:'Cercanías C3 进城',icon:'🚆'},
{id:'nuevos',n:'④',day:'1006',lat:40.4466,lng:-3.6923,name:'新部委站',local:'Nuevos Ministerios',time:'10/6约08:30–08:40',task:'C3下车 → S10替代公交去伯纳乌',icon:'🚌'},
{id:'bernabeu',n:'⑤',day:'1006',lat:40.4531,lng:-3.6883,name:'伯纳乌球场 + 官方商店',local:'Santiago Bernabéu · Tour Bernabéu · Official Store',time:'10/6约09:00–10:55',task:'核心：球场参观 + 官方商店',icon:'⚽'},
{id:'lasrozas',n:'⑥',day:'1006',lat:40.51831,lng:-3.90118,name:'拉斯罗萨斯购物村 / Burberry',local:'Las Rozas Village · Calle Juan Ramón Jiménez 3',time:'10/6约11:30–18:00/19:00',task:'核心：先逛 Burberry；之后按兴趣购物',icon:'🛍️'},
{id:'locker',n:'⑦',day:'1007',lat:40.42075,lng:-3.71188,name:'Golden Locker 行李柜（西班牙广场）',local:'Golden Locker · Calle Fomento 37, Local 2',time:'10/7会后约14:00–14:15存；17:45–18:10取',task:'会后再进城寄存；全天不返回酒店',icon:'🧳'},
{id:'palace',n:'⑧',day:'1007',lat:40.41796,lng:-3.71431,name:'马德里王宫',local:'Palacio Real de Madrid',time:'10/7约15:00–16:15/16:30',task:'下午第一优先 · 入内参观',icon:'👑'},
{id:'mayor',n:'⑨',day:'1007',lat:40.4155,lng:-3.7074,name:'马约尔广场',local:'Plaza Mayor',time:'10/7约16:30–17:00',task:'王宫后顺路老城步行',icon:'🏛️'},
{id:'sanmiguel',n:'⑩',day:'1007',lat:40.4154,lng:-3.7090,name:'圣米格尔市场',local:'Mercado de San Miguel',time:'10/7约17:00–17:35',task:'小食 / 早晚饭；时间紧则缩短',icon:'🍴'}
];

const schedules={
'1005':{label:'10/5 周一',subtitle:'波尔图 → 马德里 · 深夜直接去酒店',items:[
{iso:'2026-10-05T20:15:00+01:00',time:'20:15',title:'波尔图 OPO 起飞',sub:'Ryanair FR5483 → MAD 22:30',icon:'✈️',core:true},
{iso:'2026-10-05T22:30:00+02:00',time:'22:30',title:'马德里巴拉哈斯机场 Madrid-Barajas Airport',sub:'取托运行李后直接离开机场',place:'mad-t1a',icon:'🧳',core:true},
{iso:'2026-10-05T23:10:00+02:00',time:'~23:05–23:20',title:'MAD → Vértice Roomspace',sub:'Uber / 正规出租车直达酒店',place:'vertice',icon:'🚕',core:true},
{iso:'2026-10-05T23:45:00+02:00',time:'~23:35–00:00',title:'Vértice 办理入住',sub:'24h reception；入住、洗漱、休息',place:'vertice',icon:'🏨'},
{time:'入住后',title:'直接休息',sub:'如果饿，用酒店 FoodSpace 24h；不夜游',place:'vertice',icon:'🌙'}]},
'1006':{label:'10/6 周二',subtitle:'只做两项核心：伯纳乌 + Las Rozas Village / Burberry',items:[
{iso:'2026-10-06T07:15:00+02:00',time:'07:15–07:45',title:'Vértice 自助早餐',sub:'已包含；吃完直接准备出发',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-06T07:50:00+02:00',time:'~07:50',title:'离开酒店 → San Cristóbal Industrial',sub:'酒店约200–300m；早上不要拖延',place:'sancristobal',icon:'🚶'},
{iso:'2026-10-06T08:05:00+02:00',time:'~08:00–08:15',title:'San Cristóbal Industrial → Nuevos Ministerios',sub:'Cercanías C3；看当天实时班次',place:'nuevos',icon:'🚆',core:true},
{iso:'2026-10-06T08:35:00+02:00',time:'~08:30–08:45',title:'Nuevos Ministerios → Bernabéu',sub:'L10施工时按现场指示换 S10 替代公交；异常就直接 Uber',place:'bernabeu',icon:'🚌',core:true},
{iso:'2026-10-06T08:50:00+02:00',time:'~08:45–08:55',title:'抵达伯纳乌 / 找入口',sub:'争取接近09:00开门进入',place:'bernabeu',icon:'📍'},
{iso:'2026-10-06T09:00:00+02:00',time:'~09:00–10:30/10:40',title:'伯纳乌球场参观 Tour Bernabéu',sub:'今天第一核心；不要再插其他市区景点',place:'bernabeu',icon:'⚽',core:true},
{iso:'2026-10-06T10:35:00+02:00',time:'~10:30–10:55',title:'伯纳乌官方商店 Official Store',sub:'约20–25分钟；若前面拖晚就缩短商店',place:'bernabeu',icon:'🛍️'},
{iso:'2026-10-06T11:00:00+02:00',time:'~11:00',title:'伯纳乌 → Las Rozas Village',sub:'直接 Uber/Bolt；今天不去王宫、不绕 Moncloa 公交',place:'lasrozas',icon:'🚕',core:true},
{iso:'2026-10-06T11:30:00+02:00',time:'~11:30',title:'抵达 Las Rozas Village',sub:'到场后先去 Burberry',place:'lasrozas',icon:'📍',core:true},
{iso:'2026-10-06T11:35:00+02:00',time:'~11:30–18:00/19:00',title:'Las Rozas Village 购物 · Burberry优先',sub:'之后按兴趣逛其他店；购买时索取 Tax Free / DIVA / DER 退税文件',place:'lasrozas',icon:'🛍️',core:true},
{iso:'2026-10-06T18:00:00+02:00',time:'18:00以后',title:'根据体力决定结束时间',sub:'购物完成就走；想继续可逛到19:00左右，不再追加正式景点',place:'lasrozas',icon:'🫧',buffer:true},
{iso:'2026-10-06T18:30:00+02:00',time:'结束后',title:'Las Rozas Village → Vértice',sub:'两人直接 Uber/Bolt 回酒店；太累就不要倒公交',place:'vertice',icon:'🚕',core:true},
{time:'晚上',title:'休息 + 向前台申请10/7 late check-out',sub:'目标申请到13:30–14:00；说明次日中午有online meeting',place:'vertice',icon:'🏨',core:true}]},
'1007':{label:'10/7 周三',subtitle:'上午酒店休息 + 导师会议 → 王宫/老城 → 机场',items:[
{iso:'2026-10-07T08:00:00+02:00',time:'08:00–09:00',title:'Vértice 早餐',sub:'已包含；今天上午不安排任何景点',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-07T09:00:00+02:00',time:'09:00–11:30',title:'房间休息 / 洗澡 / 打包 / 准备会议',sub:'退税文件、护照、电脑和充电器整理好；不出门',place:'vertice',icon:'🧳'},
{iso:'2026-10-07T11:30:00+02:00',time:'11:30起',title:'进入会议保护时间',sub:'测试网络、充电、打开会议软件和材料；之后不再离开酒店',place:'vertice',icon:'💻',core:true},
{iso:'2026-10-07T12:30:00+02:00',time:'12:30 Madrid / 11:30 London',title:'导师在线会议',sub:'暂按45–60分钟预留；这是今天上午最高优先级',place:'vertice',icon:'💻',core:true},
{iso:'2026-10-07T13:30:00+02:00',time:'~13:15–13:40',title:'会议结束 → 退房',sub:'若late check-out已批准就直接退；若未批准则提前退房并在酒店公共/工作区域开会',place:'vertice',icon:'🏨',core:true},
{iso:'2026-10-07T13:40:00+02:00',time:'~13:40',title:'Vértice → Golden Locker',sub:'Uber带全部行李直接进城；不再返回酒店',place:'locker',icon:'🚕',core:true},
{iso:'2026-10-07T14:10:00+02:00',time:'~14:00–14:15',title:'Golden Locker 行李寄存',sub:'Calle Fomento 37, Local 2；贵重物品、护照、退税文件随身',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T14:20:00+02:00',time:'14:20–14:45',title:'步行前往马德里王宫',sub:'慢慢走，不再绕 Gran Vía / Sol',place:'palace',icon:'🚶'},
{iso:'2026-10-07T15:00:00+02:00',time:'~15:00–16:15/16:30',title:'马德里王宫 Palacio Real de Madrid',sub:'今天下午第一优先 · 入内参观',place:'palace',icon:'👑',core:true},
{iso:'2026-10-07T16:30:00+02:00',time:'~16:30–17:00',title:'马约尔广场 Plaza Mayor',sub:'王宫后顺路慢走；会议拖长时可缩短',place:'mayor',icon:'🏛️'},
{iso:'2026-10-07T17:00:00+02:00',time:'~17:00–17:35',title:'圣米格尔市场 Mercado de San Miguel',sub:'小食 / 早晚饭；不要排长队',place:'sanmiguel',icon:'🍴'},
{iso:'2026-10-07T17:35:00+02:00',time:'~17:35–17:55',title:'返回 Golden Locker',sub:'步行；不再增加景点',place:'locker',icon:'🚶'},
{iso:'2026-10-07T18:00:00+02:00',time:'~17:55–18:10',title:'取行李',sub:'检查护照、登机牌、退税文件；Porto买的两瓶波特酒放进托运行李并做好防碎',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T18:10:00+02:00',time:'~18:10–18:20',title:'叫 Uber / 正规出租车',sub:'直接去 MAD，不返回酒店',place:'mad-t1a',icon:'📱',core:true},
{iso:'2026-10-07T18:20:00+02:00',time:'~18:20',title:'市中心 → MAD机场',sub:'考虑晚高峰，宁可早到',place:'mad-t1a',icon:'🚕',core:true},
{iso:'2026-10-07T19:05:00+02:00',time:'目标19:00–19:15',title:'抵达 Madrid-Barajas Airport',sub:'如有退税，先按航站楼指示做 DIVA / 海关验证，再托运行李、安检和出境',place:'mad-t1a',icon:'🛂',core:true},
{iso:'2026-10-07T23:15:00+02:00',time:'23:15',title:'马德里 → 曼彻斯特',sub:'预计00:45次日到 MAN',place:'mad-t1a',icon:'✈️',core:true}]}}
;

const photos=[
{title:'伯纳乌球场外观',src:'https://arquitecturaviva.com/assets/uploads/obras/57072/av_imagen.webp',credit:'Arquitectura Viva · real exterior'},
{title:'伯纳乌参观 · 奖杯展厅',src:'https://www.realmadrid.com/sites/en/tour-bernabeu/media_1fb3952da10ab4b8f8c5f3dfffec91a45d10c99d9.jpeg?format=jpeg&optimize=medium&width=750',credit:'Real Madrid official'},
{title:'伯纳乌官方商店 Official Store',src:'https://assets.realmadrid.com/is/image/realmadrid/noticia%20tienda?hei=675&wid=1200',credit:'Real Madrid official'},
{title:'马德里王宫 Palacio Real · 外观',src:'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/06/23/fotografia-palacio-real-de-madrid.jpeg',credit:'Real web photo'},
{title:'马德里王宫 · 主楼梯',src:'https://pbs.twimg.com/media/DzcTRYvWoAAWeB4.jpg',credit:'Patrimonio Nacional · official social image'},
{title:'拉斯罗萨斯购物村 Las Rozas Village',src:'https://visitmadrid-files.s3.eu-west-1.amazonaws.com/files/styles/scale_webp_600x400/public/2025-02/Las%20Rozas%20Village_HFV2931%C2%A9Hugo%20Fern%C3%A1ndez_Comunidad%20de%20Madrid_0.jpg?itok=m693U-1U',credit:'Comunidad de Madrid · real photo'},
{title:'Las Rozas Village · 入口',src:'https://vrdigitalprodcmsmedia.blob.core.windows.net/prod01-lzv/3505/img_0189.jpg',credit:'Las Rozas Village · real photo'},
{title:'Burberry · Las Rozas Village 店面',src:'https://www.nogarlicnoonions.com/images/article_images/2018-09/las-rozas-outlet-village-shopping-madrid-spain-nogarlicnoonions-262018-09-19-10-46-48.jpg',credit:'Real storefront photo'},
{title:'太阳门广场 Puerta del Sol',src:'https://mediaportal.stage-entertainment.com/images/media/C4EEAA9E-47A8-4B66-9DFE509AA78F42FF?w=850',credit:'Real web photo'},
{title:'马约尔广场 Plaza Mayor',src:'https://builder.livingtours.com/public/images/produtos/MADHIGRP0.jpg',credit:'Real web photo'},
{title:'圣米格尔市场 Mercado de San Miguel',src:'https://media.timeout.com/images/105887825/image.webp',credit:'Time Out Madrid · real photo'}
];

const map=L.map('map',{zoomControl:true}).setView([40.405,-3.69],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='1005'?'marker-1005':day==='1006'?'marker-1006':'marker-1007'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}

const rideCopyNames={"mad-t1a":"Aeropuerto Adolfo Suárez Madrid-Barajas","vertice":"Vértice Roomspace Madrid, Calle Laguna Dalga 4","bernabeu":"Estadio Santiago Bernabéu","lasrozas":"Las Rozas Village, Calle Juan Ramón Jiménez 3","palace":"Palacio Real de Madrid","locker":"Golden Locker, Calle Fomento 37, Local 2"};
function copyRidePlace(id){const text=rideCopyNames[id];if(!text)return;const done=()=>{const el=document.querySelector(`[data-copy-place="${id}"]`);if(el){const old=el.textContent;el.textContent='已复制';setTimeout(()=>{el.textContent=old},1400)}};if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done))}else fallbackCopy(text,done)}
function fallbackCopy(text,done){const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}finally{document.body.removeChild(ta)}}
places.forEach(p=>{const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});const showUber=['mad-t1a','vertice','bernabeu','lasrozas','palace','locker'].includes(p.id);const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank">Apple Maps</a><a href="${googleMap(p)}" target="_blank">Google Maps</a>${showUber?`<a href="${uber(p)}" target="_blank">叫 Uber</a><a href="https://bolt.eu/en/rides/" target="_blank" rel="noopener">叫 Bolt</a><a href="#" data-copy-place="${p.id}" onclick="copyRidePlace('${p.id}');return false">复制地点</a>`:''}</div>`;markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:290})});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));map.fitBounds(allBounds.pad(.08));document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.08)));
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p||!markers[id])return;map.setView([p.lat,p.lng],15,{animate:true});markers[id].openPopup();document.getElementById('map').scrollIntoView({behavior:'smooth',block:'center'})}
function renderTimeline(day='all'){const root=document.getElementById('timeline');root.innerHTML='';const keys=day==='all'?['1005','1006','1007']:[day];keys.forEach(k=>{const s=schedules[k];if(!s)return;const block=document.createElement('div');block.className='day-block';block.innerHTML=`<div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list"></div>`;const list=block.querySelector('.timeline-list');s.items.forEach(it=>{const el=document.createElement('div');el.className=`timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}`;el.innerHTML=`<div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub||''}</small></div><div class="timeline-icon">${it.icon||'•'}</div>`;if(it.place)el.addEventListener('click',()=>focusPlace(it.place));list.appendChild(el)});root.appendChild(block)})}
function renderPhotos(){const root=document.getElementById('photoGrid');photos.forEach(ph=>{const fig=document.createElement('figure');fig.className='photo-card';fig.innerHTML=`<img loading="lazy" referrerpolicy="no-referrer" src="${ph.src}" alt="${ph.title}" onerror="this.closest('figure').classList.add('photo-error');this.style.display='none'"><figcaption>${ph.title}<small>${ph.credit}</small></figcaption>`;root.appendChild(fig)})}renderPhotos();
function currentMadridNow(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Madrid'}))}
function isoLocalParts(d){return {m:d.getMonth()+1,day:d.getDate(),h:d.getHours(),min:d.getMinutes()}}
function pickCurrentDay(d){const p=isoLocalParts(d);if(p.m===10&&p.day===5)return'1005';if(p.m===10&&p.day===6)return'1006';if(p.m===10&&p.day===7)return'1007';return null}
function nextItemFor(day,d){const items=schedules[day].items.filter(x=>x.iso);const now=d.getTime();for(const it of items){const t=new Date(it.iso).getTime();if(t>=now-10*60*1000)return it}return null}
function renderNow(){const box=document.getElementById('nowCard');const now=currentMadridNow();const day=pickCurrentDay(now);if(!day){box.innerHTML=`<div class="now-card__label">行程准备</div><h2>马德里 Madrid · 10/5–10/7</h2><p>旅行当天这里会自动显示下一步要做什么。</p><div class="now-card__actions"><button class="action-btn action-btn--primary" data-jump="1006">查看核心日 10/6</button><button class="action-btn" data-jump="1007">查看离境日 10/7</button></div>`}else{const it=nextItemFor(day,now);if(it){box.innerHTML=`<div class="now-card__label">下一步 · ${schedules[day].label}</div><h2>${it.icon||'➡️'} ${it.time} · ${it.title}</h2><p>${it.sub||''}</p><div class="now-card__actions">${it.place?`<button class="action-btn action-btn--primary" id="nextMapBtn">地图定位</button>`:''}<button class="action-btn" data-jump="${day}">打开今天完整时间轴</button></div>`;if(it.place)box.querySelector('#nextMapBtn').onclick=()=>focusPlace(it.place)}else{box.innerHTML=`<div class="now-card__label">${schedules[day].label}</div><h2>今天的计划已接近完成</h2><p>查看明天安排或直接休息，不临时增加活动。</p>`}}box.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>activateDay(b.dataset.jump))}
function activateDay(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){renderTimeline('all');renderNow();map.fitBounds(allBounds.pad(.08));return}renderTimeline(day);const pts=places.filter(p=>p.day===day||(day==='1007'&&['vertice','locker','palace','mayor','sanmiguel','mad-t1a'].includes(p.id)));if(pts.length)map.fitBounds(L.latLngBounds(pts.map(p=>[p.lat,p.lng])).pad(.12));document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>activateDay(b.dataset.day)));renderTimeline('all');renderNow();window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});