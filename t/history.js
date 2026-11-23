/* t/history.js — тема «Советская газета» для предмета История.
   Шрифт: t/OldNewspaperTypes-Regular.ttf (лежит рядом с этим файлом). */
(function(){
'use strict';
var css='';
css+='@font-face{font-family:"OldNewspaperTypes";src:url("t/OldNewspaperTypes-Regular.ttf") format("truetype");font-weight:400;font-style:normal;font-display:swap}';
css+='html[data-theme="history"]{--accent:#B3272D;--accent-ink:#F4EDDA;--nav-bg:rgba(23,21,18,.96);--nav-ink:#EFE6D0;--nav-dim:#B7AC97;--disp:"OldNewspaperTypes","Times New Roman",Georgia,serif}';
css+='html[data-theme="history"] .btn-accent{background:#171512;color:#EFE6D0;box-shadow:0 6px 18px rgba(23,21,18,.3)}';
css+='html[data-theme="history"] .btn-accent:hover{background:#B3272D}';
css+='html[data-theme="history"] .logo-mark{border-radius:2px;background:#EFE6D0;color:#171512;border-color:#171512}';
css+='html[data-theme="history"] .nav-link.active{background:rgba(179,39,45,.16)}';
css+='#hero[data-theme="history"]{background:#E9DFC6;color:#171512;padding-top:calc(var(--nav-h) + 34px);font-family:"Times New Roman",Georgia,serif}';
css+='#hero[data-theme="history"] .hero-bg{background-image:radial-gradient(rgba(23,21,18,.055) 1px,transparent 1.3px),radial-gradient(900px 420px at 82% 8%,rgba(120,90,40,.14),transparent 62%),radial-gradient(700px 380px at 8% 92%,rgba(120,90,40,.12),transparent 60%),linear-gradient(90deg,transparent 61.6%,rgba(23,21,18,.07) 61.9%,rgba(255,255,255,.28) 62.1%,transparent 62.5%),linear-gradient(180deg,#EFE6D0,#E9DFC6 30%,#E4D8BC)}';
css+='#hero[data-theme="history"] .hero-bg{background-size:4px 4px,auto,auto,auto,auto}';
css+='#hero[data-theme="history"] .hero-bg::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'p\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix values=\'0 0 0 0 0.2 0 0 0 0 0.16 0 0 0 0 0.1 0 0 0 0.09 0\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23p)\'/%3E%3C/svg%3E");mix-blend-mode:multiply}';
css+='#hero[data-theme="history"] .hero-masthead{display:block;margin-bottom:26px}';
css+='#hero[data-theme="history"] .np-slogan{text-align:center;font-size:12px;letter-spacing:.28em;text-transform:uppercase;font-weight:700;padding-bottom:7px;border-bottom:1.5px solid #171512}';
css+='#hero[data-theme="history"] .np-title-row{display:grid;grid-template-columns:150px 1fr 150px;gap:14px;align-items:center;padding:10px 0 8px;border-bottom:4px double #171512}';
css+='#hero[data-theme="history"] .np-box{border:1.5px solid #171512;padding:7px 8px;text-align:center;font-size:11.5px;line-height:1.45;font-weight:700}';
css+='#hero[data-theme="history"] .np-title{font-family:"OldNewspaperTypes","Times New Roman",serif;font-size:clamp(38px,6.4vw,84px);line-height:.95;text-align:center;letter-spacing:.02em;text-transform:uppercase}';
css+='#hero[data-theme="history"] .np-dateline{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:12px;font-weight:700;padding:6px 2px;border-bottom:1.5px solid #171512;text-transform:uppercase;letter-spacing:.06em}';
css+='#hero[data-theme="history"] .hero-grid{align-items:start;gap:44px}';
css+='#hero[data-theme="history"] .eyebrow{color:#171512;border:1.5px solid #171512;border-radius:0;background:transparent;font-family:"Times New Roman",serif;letter-spacing:.2em}';
css+='#hero[data-theme="history"] .eyebrow::before{content:"★";color:#B3272D;font-size:13px}';
css+='#hero[data-theme="history"] .hero-h1{font-family:"OldNewspaperTypes","Times New Roman",serif;text-transform:uppercase;color:#171512;font-size:clamp(34px,4.6vw,62px);line-height:1.02;margin:18px 0 14px;letter-spacing:.01em}';
css+='#hero[data-theme="history"] .hero-h1 span{animation:none}';
css+='#hero[data-theme="history"] .hl-accent{color:#B3272D;display:inline-block;border-bottom:4px double #B3272D;padding-bottom:2px}';
css+='#hero[data-theme="history"] .hero-sub{color:#2A2620;font-size:16px;text-align:justify;max-width:560px}';
css+='#hero[data-theme="history"] .hero-sub::first-letter{font-family:"OldNewspaperTypes",serif;font-size:44px;line-height:.8;float:left;padding:4px 7px 0 0;color:#B3272D}';
css+='#hero[data-theme="history"] .hero-sub b{font-weight:700}';
css+='#hero[data-theme="history"] .np-columns{column-count:2;column-gap:22px;column-rule:1px solid rgba(23,21,18,.35);font-size:13px;line-height:1.5;text-align:justify;color:#2A2620;max-width:560px;margin-top:14px}';
css+='#hero[data-theme="history"] .np-columns p{margin-bottom:8px;break-inside:avoid}';
css+='#hero[data-theme="history"] .np-columns .np-kicker{font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:11.5px}';
css+='#hero[data-theme="history"] .np-telegram{border:2px solid #171512;padding:10px 12px;margin-top:12px;max-width:560px;background:rgba(255,255,255,.25)}';
css+='#hero[data-theme="history"] .np-telegram b{display:block;font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;border-bottom:1px solid #171512;padding-bottom:4px;margin-bottom:6px}';
css+='#hero[data-theme="history"] .np-telegram span{font-size:13px;font-style:italic}';
css+='#hero[data-theme="history"] .picker-note{color:#B3272D;font-family:"Times New Roman",serif;font-style:italic;font-size:17px;transform:none}';
css+='#hero[data-theme="history"] .ggroup-label{color:#5C5344}';
css+='#hero[data-theme="history"] .gpill{border-radius:0;border:1.5px solid #171512;background:rgba(255,255,255,.3);color:#171512;font-family:"OldNewspaperTypes",serif}';
css+='#hero[data-theme="history"] .gpill:hover{border-color:#B3272D;color:#B3272D;transform:translateY(-2px)}';
css+='#hero[data-theme="history"] .gpill.act{background:#171512;color:#EFE6D0;border-color:#171512;transform:none;box-shadow:3px 3px 0 rgba(23,21,18,.25)}';
css+='#hero[data-theme="history"] .hstat{border-radius:0;border:1.5px solid #171512;background:rgba(255,255,255,.3);color:#171512}';
css+='#hero[data-theme="history"] .hstat b{color:#B3272D}';
css+='#hero[data-theme="history"] .theme-bar{color:#5C5344}';
css+='#hero[data-theme="history"] .tb-btn{border-radius:0}';
css+='#hero[data-theme="history"] .tb-auto{border-radius:0}';
css+='#hero[data-theme="history"] .pin-card{border-radius:0;background:#F4EDDA;color:#171512;border:3px double #171512;transform:rotate(-.6deg);box-shadow:6px 8px 0 rgba(23,21,18,.18);background-image:none}';
css+='#hero[data-theme="history"] .pin-card:hover{transform:rotate(0) translateY(-3px)}';
css+='#hero[data-theme="history"] .pin-card::before{content:"СВОДКА УСПЕВАЕМОСТИ";display:block;position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:#F4EDDA;border:1.5px solid #171512;padding:3px 12px;font-size:11px;font-weight:700;letter-spacing:.18em;white-space:nowrap}';
css+='#hero[data-theme="history"] .pin-card::after{content:"К ПЕЧАТИ\\A РАЗРЕШЕНО";white-space:pre;position:absolute;right:-14px;bottom:64px;transform:rotate(-12deg);border:3px double #B3272D;color:#B3272D;padding:7px 10px;font-size:11px;font-weight:700;letter-spacing:.14em;text-align:center;line-height:1.4;opacity:.85;mix-blend-mode:multiply;background:rgba(244,237,218,.6)}';
css+='#hero[data-theme="history"] .pin-label{color:#5C5344}';
css+='#hero[data-theme="history"] #heroGradeNum{color:#171512;font-family:"OldNewspaperTypes",serif}';
css+='#hero[data-theme="history"] #heroBand{color:#5C5344}';
css+='#hero[data-theme="history"] .pin-rows{border-top:1.5px solid #171512}';
css+='#hero[data-theme="history"] .pin-row{border-bottom:1px dotted rgba(23,21,18,.4);padding-bottom:5px}';
css+='#hero[data-theme="history"] .pr-done b{color:#B3272D}';
css+='#hero[data-theme="history"] .pin-bar{background:rgba(23,21,18,.12);border-radius:0;height:10px;border:1px solid #171512}';
css+='#hero[data-theme="history"] .pin-bar i{border-radius:0;background:repeating-linear-gradient(-45deg,#171512 0 4px,#3A352C 4px 8px)}';
css+='#hero[data-theme="history"] .pin-card .btn{border-radius:0}';
css+='#hero[data-theme="history"] .pin-card .btn-ghost{background:transparent;border:1.5px solid #171512;color:#171512}';
css+='#hero[data-theme="history"] .pin-card .btn-ghost:hover{background:rgba(23,21,18,.08)}';
css+='#hero[data-theme="history"] .scroll-cue{color:#5C5344;font-family:"Times New Roman",serif;font-style:italic}';
css+='#hero[data-theme="history"] .scroll-cue:hover{color:#B3272D}';
css+='#hero[data-theme="history"] .hero-foot{height:auto;background:transparent;border-top:4px double #171512;padding:7px 24px 9px;text-align:center;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#5C5344;font-weight:700}';
css+='#hero[data-theme="history"] .np-emblem{position:absolute;color:#171512;opacity:.5}';
css+='#hero[data-theme="history"] .np-emblem svg{width:100%;height:100%}';
css+='#hero[data-theme="history"] .np-photo{position:absolute;right:4%;bottom:12%;width:180px;border:1.5px solid #171512;padding:6px;background:rgba(255,255,255,.35);transform:rotate(2deg)}';
css+='#hero[data-theme="history"] .np-photo .ph{height:110px;background-image:radial-gradient(rgba(23,21,18,.5) 1.1px,transparent 1.4px);background-size:4px 4px;position:relative;overflow:hidden}';
css+='#hero[data-theme="history"] .np-photo .ph svg{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:120px;height:80px;color:#171512;opacity:.8}';
css+='#hero[data-theme="history"] .np-photo figcaption{font-size:10.5px;font-style:italic;padding-top:5px;text-align:center;color:#2A2620}';
css+='#hero[data-theme="history"] .np-rule{position:absolute;left:0;right:0;height:0;border-top:1.5px solid rgba(23,21,18,.5)}';
css+='@media (max-width:1100px){#hero[data-theme="history"] .np-photo{display:none}#hero[data-theme="history"] .np-columns{column-count:1}}';
css+='@media (max-width:760px){#hero[data-theme="history"] .np-title-row{grid-template-columns:1fr;gap:8px}#hero[data-theme="history"] .np-box{display:flex;justify-content:space-between}#hero[data-theme="history"] .np-title{font-size:clamp(34px,10vw,52px)}#hero[data-theme="history"] .pin-card::after{right:6px;bottom:70px}}';

function mast(ctx){
  return '<div class="np-slogan">Ученики всех классов, соединяйтесь!</div>'
    +'<div class="np-title-row"><div class="np-box">№ '+ctx.grade+' ('+ctx.year+')<br>Орган школьного комитета</div>'
    +'<div class="np-title">Школьная Правда</div>'
    +'<div class="np-box">Цена 3 коп.<br>Выходит по мере изучения</div></div>'
    +'<div class="np-dateline"><span>'+ctx.date+'</span><span>Отдел истории · OpenSchoolMesyankin</span><span>Тираж 1 экз.</span></div>';
}
function extra(ctx){
  return '<div class="np-columns">'
    +'<p><span class="np-kicker">От редакции.</span> Настоящий номер посвящён предмету «История»: от первобытности и Древнего Египта до глобализации XXI века. Программа разложена по ступеням, и каждая тема отмечается, как выполненное задание в стенгазете.</p>'
    +'<p><span class="np-kicker">Сводка по классу.</span> В '+ctx.grade+' классе открыто '+ctx.subjects+' предметов и '+ctx.stats.t+' тем. Изучено '+ctx.stats.d+' — товарищи ученики, не сбавляйте темпа! Серия дней и тепловая карта ниже фиксируют успехи без приписок.</p>'
    +'</div>'
    +'<div class="np-telegram"><b>Молния · телеграмма</b><span>«Открыл историю — витрина стала газетой. Шрифт OldNewspaperTypes набран прямо из папки t. Прошу продолжить набор остальных предметов» — ученик '+ctx.grade+' класса.</span></div>';
}
function decor(){
  var star='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.6 6.6L21 9.4l-5 4.6 1.6 7-5.6-3.8L6.4 21 8 14 3 9.4l6.4-.8z"/></svg>';
  var school='<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 70h100M20 70V38l40-22 40 22v32"/><path d="M32 70V46h16v24M72 70V46h16v24"/><path d="M52 70V52h16v18"/><path d="M60 16V6h14v6h-14"/><circle cx="60" cy="34" r="6"/></svg>';
  return '<div class="np-emblem" style="top:120px;left:2.5%;width:54px;height:54px;color:#B3272D;opacity:.75">'+star+'</div>'
    +'<div class="np-emblem" style="top:150px;right:3%;width:44px;height:44px">'+star+'</div>'
    +'<div class="np-rule" style="top:112px"></div>'
    +'<figure class="np-photo"><div class="ph">'+school+'</div><figcaption>Школа № 7. Корреспондентский снимок к открытию номера.</figcaption></figure>';
}
function foot(){
  return 'Отпечатано в школьной типографии OpenSchoolMesyankin · Набор шрифтом OldNewspaperTypes · Ответственный редактор — ученик';
}
window.OSRegisterTheme({
  id:'history',
  label:'Газета «История»',
  meta:'#E9DFC6',
  css:css,
  copy:{
    eyebrow:'Экстренный выпуск · отдел истории',
    l1:'Вся школьная программа',
    l2:'с 1 по 11 класс —',
    l3:'<span class="hl-accent">в одном номере.</span>',
    sub:'Товарищи ученики! Редакция ставит перед собой задачу: разложить историю по классам, отметить каждую изученную тему и не допустить пробелов в знаниях. Номер выходит ежедневно, пока держится серия дней.',
    note:'выберите номер выпуска (класс) ↓',
    pin:'Сводка по классу',
    cue:'продолжение номера — ниже'
  },
  mast:mast,
  decor:decor,
  extra:extra,
  foot:foot
});
})();