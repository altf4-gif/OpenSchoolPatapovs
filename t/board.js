/* t/physics.js — тема «Приборный стенд» для предмета Физика.
   Шрифт Holodilnik 1.1 (Денис Щербак, freeware): ищется в t/, затем в корне. */
(function(){
'use strict';
var REDUCED=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var C={panel:'#16262B',panel2:'#22343A',plate:'#E6E0CE',ink:'#12191C',phos:'#5BF08A',amber:'#FFB020',cyan:'#38E1FF',red:'#FF4438',cream:'#EFE9D8',dim:'#93A6A9'};

var css=[
'@font-face{font-family:"Holodilnik";src:url("t/Holodilnik_1.1.otf") format("opentype"),url("Holodilnik_1.1.otf") format("opentype");font-weight:400;font-style:normal;font-display:swap}',
'html[data-theme="physics"]{--accent:#5BF08A;--accent-ink:#07160E;--nav-bg:rgba(14,26,30,.95);--nav-ink:#EFE9D8;--nav-dim:#93A6A9;--disp:"Holodilnik","Trebuchet MS",system-ui,sans-serif}',
'html[data-theme="physics"] .btn-accent{background:linear-gradient(180deg,#7BF7A6,#3ED473);color:#07160E;box-shadow:0 6px 18px rgba(91,240,138,.28),inset 0 1px 0 rgba(255,255,255,.5)}',
'html[data-theme="physics"] .btn-accent:hover{box-shadow:0 10px 26px rgba(91,240,138,.42),inset 0 1px 0 rgba(255,255,255,.5)}',
'html[data-theme="physics"] .logo-mark{border-radius:5px;background:linear-gradient(180deg,#2B3F46,#1B2C32);color:#5BF08A;border-color:rgba(239,233,216,.28)}',
'html[data-theme="physics"] .nav-link.active{background:rgba(91,240,138,.12)}',
'html[data-theme="physics"] .pin-card :focus-visible{outline-color:#12191C}',
'#hero[data-theme="physics"]{background:radial-gradient(900px 520px at 82% -12%,rgba(56,225,255,.12),transparent 62%),radial-gradient(760px 460px at 6% 112%,rgba(91,240,138,.10),transparent 60%),linear-gradient(160deg,#22343A,#16262B 56%,#0E1A1E);color:#EFE9D8;padding-top:calc(var(--nav-h) + 30px)}',
'#hero[data-theme="physics"] .hero-bg{background-image:repeating-linear-gradient(0deg,rgba(91,240,138,.05) 0 1px,transparent 1px 26px),repeating-linear-gradient(90deg,rgba(91,240,138,.05) 0 1px,transparent 1px 26px)}',
'#hero[data-theme="physics"] .hero-bg::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.16) 0 1px,transparent 1px 3px);opacity:.5}',
'#hero[data-theme="physics"] .hero-bg::after{content:"";position:absolute;width:620px;height:620px;top:-200px;right:-140px;border-radius:50%;background:radial-gradient(closest-side,rgba(91,240,138,.16),transparent);animation:phDrift 22s ease-in-out infinite alternate}',
'@keyframes phDrift{from{transform:translate(0,0)}to{transform:translate(-90px,60px)}}',
'#hero[data-theme="physics"] .hero-masthead{display:block;margin-bottom:24px}',
'#hero[data-theme="physics"] .ph-mast{display:grid;grid-template-columns:190px 1fr 190px;gap:14px;align-items:center;border:1px solid rgba(239,233,216,.22);border-radius:8px;padding:12px 16px;background:linear-gradient(180deg,#2C4046,#1B2D33);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 12px 30px rgba(0,0,0,.35);position:relative}',
'#hero[data-theme="physics"] .ph-mast::before,#hero[data-theme="physics"] .ph-mast::after{content:"";position:absolute;top:8px;width:9px;height:9px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#C9D2D2,#5C6B6E 60%,#2A3A3E);box-shadow:0 1px 2px rgba(0,0,0,.6)}',
'#hero[data-theme="physics"] .ph-mast::before{left:8px}',
'#hero[data-theme="physics"] .ph-mast::after{right:8px}',
'#hero[data-theme="physics"] .ph-plate{border:1px solid rgba(239,233,216,.24);border-radius:4px;padding:7px 9px;font-size:10.5px;line-height:1.5;letter-spacing:.08em;text-transform:uppercase;color:#C6D2D2;background:rgba(0,0,0,.2)}',
'#hero[data-theme="physics"] .ph-plate b{display:block;font-family:"Holodilnik",sans-serif;font-size:14px;letter-spacing:.04em;color:#5BF08A;text-transform:none}',
'#hero[data-theme="physics"] .ph-mast-title{font-family:"Holodilnik","Trebuchet MS",sans-serif;font-size:clamp(34px,5.6vw,72px);line-height:1;text-align:center;letter-spacing:.06em;text-transform:uppercase;color:#EFE9D8;text-shadow:0 2px 0 rgba(0,0,0,.45),0 0 26px rgba(91,240,138,.18)}',
'#hero[data-theme="physics"] .ph-mast-sub{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:8px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#93A6A9}',
'#hero[data-theme="physics"] .ph-lamp{display:inline-flex;align-items:center;gap:7px;color:#FFB020;font-weight:700}',
'#hero[data-theme="physics"] .ph-lamp i{width:9px;height:9px;border-radius:50%;background:#FFB020;box-shadow:0 0 12px #FFB020;animation:phBlink 2.6s ease-in-out infinite}',
'@keyframes phBlink{0%,100%{opacity:1}50%{opacity:.35}}',
'#hero[data-theme="physics"] .hero-grid{align-items:start;gap:40px}',
'#hero[data-theme="physics"] .eyebrow{color:#5BF08A;border:1px solid rgba(91,240,138,.45);border-radius:4px;background:rgba(91,240,138,.08);font-family:"Holodilnik",sans-serif;letter-spacing:.16em}',
'#hero[data-theme="physics"] .eyebrow::before{content:"";width:8px;height:8px;border-radius:1px;background:#5BF08A;box-shadow:0 0 10px #5BF08A}',
'#hero[data-theme="physics"] .hero-h1{font-family:"Holodilnik","Trebuchet MS",sans-serif;color:#EFE9D8;font-size:clamp(32px,4.6vw,62px);line-height:1.06;margin:18px 0 14px;letter-spacing:.01em;text-shadow:0 2px 0 rgba(0,0,0,.4)}',
'#hero[data-theme="physics"] .hl-accent{position:relative;display:inline-block;color:#5BF08A;text-shadow:0 0 22px rgba(91,240,138,.45)}',
'#hero[data-theme="physics"] .ph-trace{position:absolute;left:0;bottom:-12px;width:100%;height:14px;overflow:visible}',
'#hero[data-theme="physics"] .ph-trace path{fill:none;stroke:#38E1FF;stroke-width:2.4;stroke-linecap:round;stroke-dasharray:420;stroke-dashoffset:420;animation:phDraw 1.4s .5s cubic-bezier(.4,0,.2,1) forwards;filter:drop-shadow(0 0 6px rgba(56,225,255,.7))}',
'@keyframes phDraw{to{stroke-dashoffset:0}}',
'#hero[data-theme="physics"] .hero-sub{color:#B9C7C7;font-size:16px;max-width:560px}',
'#hero[data-theme="physics"] .hero-sub b{color:#EFE9D8}',
'#hero[data-theme="physics"] .ph-rig{display:grid;grid-template-columns:minmax(0,1.32fr) minmax(0,1fr);gap:12px;margin-top:18px;max-width:640px}',
'#hero[data-theme="physics"] .ph-scope-wrap{grid-row:span 2;position:relative;border:2px solid #33474E;border-radius:8px;background:#06120E;box-shadow:inset 0 0 40px rgba(0,0,0,.8),0 10px 26px rgba(0,0,0,.4);overflow:hidden;display:flex;flex-direction:column}',
'#hero[data-theme="physics"] .ph-scope-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 10px;border-bottom:1px solid rgba(91,240,138,.22);background:linear-gradient(180deg,#1E3036,#15252A);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#93A6A9}',
'#hero[data-theme="physics"] .ph-tag{font-family:"Holodilnik",sans-serif;font-size:13px;letter-spacing:.06em;color:#EFE9D8;text-transform:none}',
'#hero[data-theme="physics"] .ph-read{font-family:"Holodilnik",sans-serif;font-size:12.5px;color:#5BF08A;letter-spacing:.04em;text-transform:none;margin-left:auto}',
'#hero[data-theme="physics"] .ph-scope{display:block;width:100%;height:236px;flex:1}',
'#hero[data-theme="physics"] .ph-scan{position:absolute;top:34px;left:0;right:0;bottom:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.22) 0 1px,transparent 1px 3px),radial-gradient(120% 100% at 50% 50%,transparent 55%,rgba(0,0,0,.55))}',
'#hero[data-theme="physics"] .ph-panel{border:1px solid rgba(239,233,216,.2);border-radius:8px;padding:12px;background:linear-gradient(180deg,#26393F,#1A2C32);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}',
'#hero[data-theme="physics"] .ph-ctl{display:grid;grid-template-columns:1fr auto;gap:2px 8px;align-items:center;margin-bottom:9px;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#93A6A9}',
'#hero[data-theme="physics"] .ph-ctl b{font-family:"Holodilnik",sans-serif;font-size:13px;color:#FFB020;letter-spacing:.02em;text-transform:none}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]{grid-column:1/-1;-webkit-appearance:none;appearance:none;width:100%;height:20px;background:transparent;cursor:pointer;margin:0}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#5BF08A,#38E1FF);box-shadow:inset 0 0 0 1px rgba(0,0,0,.5)}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:20px;margin-top:-7px;border-radius:3px;background:linear-gradient(180deg,#F2EEE3,#B9C2C2);border:1px solid #0C1417;box-shadow:0 2px 6px rgba(0,0,0,.6)}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#5BF08A,#38E1FF)}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]::-moz-range-thumb{width:14px;height:20px;border-radius:3px;background:linear-gradient(180deg,#F2EEE3,#B9C2C2);border:1px solid #0C1417}',
'#hero[data-theme="physics"] .ph-ctl input[type=range]:focus-visible{outline:2px solid #5BF08A;outline-offset:3px;border-radius:4px}',
'#hero[data-theme="physics"] .ph-sel select{grid-column:1/-1;appearance:none;-webkit-appearance:none;width:100%;padding:7px 10px;border-radius:5px;border:1px solid rgba(239,233,216,.28);background:#122126;color:#EFE9D8;font-family:"Holodilnik",sans-serif;font-size:13.5px;cursor:pointer}',
'#hero[data-theme="physics"] .ph-switches{display:flex;gap:14px;flex-wrap:wrap;margin:10px 0}',
'#hero[data-theme="physics"] .ph-sw{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#93A6A9;position:relative}',
'#hero[data-theme="physics"] .ph-sw input{position:absolute;opacity:0;width:1px;height:1px}',
'#hero[data-theme="physics"] .ph-sw i{width:36px;height:19px;border-radius:10px;background:#0F1D21;border:1px solid rgba(239,233,216,.26);position:relative;transition:.2s;flex:none}',
'#hero[data-theme="physics"] .ph-sw i::after{content:"";position:absolute;top:2px;left:2px;width:13px;height:13px;border-radius:50%;background:#7C8C8F;transition:.2s}',
'#hero[data-theme="physics"] .ph-sw input:checked+i{background:rgba(91,240,138,.22);border-color:#5BF08A}',
'#hero[data-theme="physics"] .ph-sw input:checked+i::after{left:19px;background:#5BF08A;box-shadow:0 0 10px #5BF08A}',
'#hero[data-theme="physics"] .ph-sw input:focus-visible+i{outline:2px solid #5BF08A;outline-offset:2px}',
'#hero[data-theme="physics"] .ph-keys{display:flex;gap:6px;flex-wrap:wrap}',
'#hero[data-theme="physics"] .ph-keys button{flex:1 1 auto;padding:8px 10px;border-radius:5px;border:1px solid rgba(239,233,216,.3);background:linear-gradient(180deg,#31464D,#20343A);color:#EFE9D8;font-family:"Holodilnik",sans-serif;font-size:12.5px;letter-spacing:.03em;transition:.16s;box-shadow:0 2px 0 rgba(0,0,0,.45)}',
'#hero[data-theme="physics"] .ph-keys button:hover{background:linear-gradient(180deg,#3C565E,#264047);color:#5BF08A;transform:translateY(-1px)}',
'#hero[data-theme="physics"] .ph-keys button:active{transform:translateY(1px);box-shadow:none}',
'#hero[data-theme="physics"] .ph-gauge{border:1px solid rgba(239,233,216,.2);border-radius:8px;padding:10px 12px 12px;background:linear-gradient(180deg,#26393F,#1A2C32);box-shadow:inset 0 1px 0 rgba(255,255,255,.12);text-align:center}',
'#hero[data-theme="physics"] .ph-gauge svg{width:100%;max-width:220px;height:auto;margin:0 auto}',
'#hero[data-theme="physics"] .ph-gauge-val{display:flex;align-items:baseline;justify-content:center;gap:7px;margin-top:2px}',
'#hero[data-theme="physics"] .ph-gauge-val b{font-family:"Holodilnik",sans-serif;font-size:26px;color:#FFB020;line-height:1}',
'#hero[data-theme="physics"] .ph-gauge-val span{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#93A6A9}',
'#hero[data-theme="physics"] .ph-gauge-cap{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#6F8386;margin-top:4px}',
'#hero[data-theme="physics"] .picker-note{color:#FFB020;font-family:"Holodilnik",sans-serif;font-size:19px;transform:none;letter-spacing:.02em}',
'#hero[data-theme="physics"] .ggroup-label{color:#93A6A9}',
'#hero[data-theme="physics"] .gpill{border-radius:6px;border:1px solid rgba(239,233,216,.3);background:linear-gradient(180deg,#2E434A,#1D3036);color:#EFE9D8;font-family:"Holodilnik",sans-serif;box-shadow:0 3px 0 rgba(0,0,0,.4)}',
'#hero[data-theme="physics"] .gpill:hover{border-color:#5BF08A;color:#5BF08A;transform:translateY(-2px)}',
'#hero[data-theme="physics"] .gpill.act{background:linear-gradient(180deg,#FFC658,#F5A524);border-color:#FFD98A;color:#20180A;transform:translateY(1px);box-shadow:0 0 20px rgba(245,165,36,.55),inset 0 1px 0 rgba(255,255,255,.6)}',
'#hero[data-theme="physics"] .hstat{border-radius:5px;border:1px solid rgba(239,233,216,.22);background:rgba(0,0,0,.22);color:#C6D2D2}',
'#hero[data-theme="physics"] .hstat b{color:#5BF08A;font-family:"Holodilnik",sans-serif}',
'#hero[data-theme="physics"] .theme-bar{color:#93A6A9}',
'#hero[data-theme="physics"] .tb-btn,#hero[data-theme="physics"] .tb-auto{border-radius:5px}',
'#hero[data-theme="physics"] .pin-card{border-radius:6px;background:#E6E0CE;color:#12191C;border:2px solid #33474E;transform:rotate(-.5deg);box-shadow:0 22px 50px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.5);background-image:radial-gradient(circle at 14px 14px,#9AA5A5 0 3px,transparent 3.5px),radial-gradient(circle at calc(100% - 14px) 14px,#9AA5A5 0 3px,transparent 3.5px),radial-gradient(circle at 14px calc(100% - 14px),#9AA5A5 0 3px,transparent 3.5px),radial-gradient(circle at calc(100% - 14px) calc(100% - 14px),#9AA5A5 0 3px,transparent 3.5px)}',
'#hero[data-theme="physics"] .pin-card:hover{transform:rotate(0) translateY(-3px)}',
'#hero[data-theme="physics"] .pin-card::after{content:"ПОВЕРЕНО";position:absolute;right:14px;bottom:96px;transform:rotate(-9deg);border:2.5px double #C0392B;color:#C0392B;padding:5px 10px;font-family:"Holodilnik",sans-serif;font-size:12px;letter-spacing:.16em;opacity:.8;mix-blend-mode:multiply}',
'#hero[data-theme="physics"] .pin-label{color:#5D6B6B;letter-spacing:.2em}',
'#hero[data-theme="physics"] #heroGradeNum{color:#12191C;font-family:"Holodilnik",sans-serif}',
'#hero[data-theme="physics"] .pin-grade span{font-family:"Holodilnik",sans-serif}',
'#hero[data-theme="physics"] #heroBand{color:#5D6B6B}',
'#hero[data-theme="physics"] .pin-rows{border-top:1.5px solid #33474E}',
'#hero[data-theme="physics"] .pin-row{border-bottom:1px dotted rgba(18,25,28,.35);padding-bottom:5px}',
'#hero[data-theme="physics"] .pin-row b{font-family:"Holodilnik",sans-serif;font-size:16px}',
'#hero[data-theme="physics"] .pr-done b{color:#1D7A46}',
'#hero[data-theme="physics"] .pin-bar{background:rgba(18,25,28,.14);border:1px solid #33474E;border-radius:2px;height:11px}',
'#hero[data-theme="physics"] .pin-bar i{border-radius:0;background:repeating-linear-gradient(90deg,#1D7A46 0 6px,rgba(29,122,70,.25) 6px 9px)}',
'#hero[data-theme="physics"] .pin-card .btn{border-radius:5px;font-family:"Holodilnik",sans-serif;letter-spacing:.03em}',
'#hero[data-theme="physics"] .pin-card .btn-accent{background:linear-gradient(180deg,#2E434A,#1A2C32);color:#5BF08A;border:1px solid #33474E;box-shadow:0 3px 0 rgba(0,0,0,.35)}',
'#hero[data-theme="physics"] .pin-card .btn-accent:hover{color:#FFB020}',
'#hero[data-theme="physics"] .pin-card .btn-ghost{background:transparent;border:1.5px solid #33474E;color:#12191C}',
'#hero[data-theme="physics"] .pin-card .btn-ghost:hover{background:rgba(18,25,28,.07)}',
'#hero[data-theme="physics"] .scroll-cue{color:#93A6A9;font-family:"Holodilnik",sans-serif;font-size:17px}',
'#hero[data-theme="physics"] .scroll-cue:hover{color:#5BF08A}',
'#hero[data-theme="physics"] .hero-foot{height:auto;background:transparent}',
'#hero[data-theme="physics"] .ph-foot-line{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:6px 24px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#7E9295;border-top:1px solid rgba(239,233,216,.16);background:rgba(0,0,0,.25)}',
'#hero[data-theme="physics"] .ph-danger{height:11px;background:repeating-linear-gradient(45deg,#F5A524 0 13px,#16262B 13px 26px)}',
'#hero[data-theme="physics"] .doodle{position:absolute;color:#EFE9D8;opacity:.34;pointer-events:none;font-family:"Holodilnik",sans-serif}',
'#hero[data-theme="physics"] .doodle .hand{font-family:"Holodilnik",sans-serif;font-size:26px;white-space:nowrap;letter-spacing:.02em}',
'#hero[data-theme="physics"] .doodle svg{width:100%;height:100%}',
'#hero[data-theme="physics"] .doodle-in{animation:phFloat 8s ease-in-out infinite alternate}',
'@keyframes phFloat{from{transform:translateY(-5px)}to{transform:translateY(5px)}}',
'#hero[data-theme="physics"] .ph-screw{position:absolute;width:13px;height:13px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#D3DBDB,#66757A 58%,#26343A);box-shadow:0 1px 3px rgba(0,0,0,.7)}',
'#hero[data-theme="physics"] .ph-screw::after{content:"";position:absolute;top:6px;left:2px;right:2px;height:1.5px;background:rgba(0,0,0,.55);transform:rotate(28deg)}',
'#hero[data-theme="physics"] .ph-vent{position:absolute;left:2%;bottom:15%;width:86px;height:56px;border-radius:4px;background:repeating-linear-gradient(0deg,rgba(0,0,0,.45) 0 3px,rgba(239,233,216,.07) 3px 7px);border:1px solid rgba(239,233,216,.14);opacity:.7}',
'@media (max-width:1100px){#hero[data-theme="physics"] .ph-rig{max-width:none}#hero[data-theme="physics"] .doodle.opt{display:none}#hero[data-theme="physics"] .ph-vent{display:none}}',
'@media (max-width:900px){#hero[data-theme="physics"] .doodle{display:none}#hero[data-theme="physics"] .ph-screw{display:none}}',
'@media (max-width:760px){#hero[data-theme="physics"] .ph-mast{grid-template-columns:1fr;gap:8px}#hero[data-theme="physics"] .ph-mast-title{font-size:clamp(30px,10vw,46px)}#hero[data-theme="physics"] .ph-rig{grid-template-columns:1fr}#hero[data-theme="physics"] .ph-scope-wrap{grid-row:auto}#hero[data-theme="physics"] .ph-scope{height:190px}#hero[data-theme="physics"] .pin-card::after{bottom:auto;top:12px;right:10px;font-size:10px}}',
'@media (prefers-reduced-motion:reduce){#hero[data-theme="physics"] .ph-trace path{stroke-dashoffset:0}}'
].join('');

function mast(ctx){
  return '<div class="ph-mast">'
    +'<div class="ph-plate">Кабинет № <span data-ph-grade>'+ctx.grade+'</span><b>OpenSchoolMesyankin</b></div>'
    +'<div><div class="ph-mast-title">Физика</div>'
    +'<div class="ph-mast-sub"><span>Стенд лабораторный · С1-<span data-ph-grade>'+ctx.grade+'</span></span><span class="ph-lamp"><i></i>Питание включено</span><span>7–11 класс</span></div></div>'
    +'<div class="ph-plate">ГОСТ 2.105-79<b>Паспорт стенда</b></div>'
    +'</div>';
}

function gaugeSvg(){
  var ticks='';
  for(var i=0;i<=10;i++){
    var a=(-90+i*18)*Math.PI/180,r1=i%5===0?62:68,r2=76;
    var x1=100+Math.sin(a)*r1,y1=100-Math.cos(a)*r1,x2=100+Math.sin(a)*r2,y2=100-Math.cos(a)*r2;
    ticks+='<line x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="#12191C" stroke-width="'+(i%5===0?2.2:1.2)+'"/>';
  }
  return '<svg viewBox="0 0 200 118" role="img" aria-label="Щитовой прибор успеваемости">'
    +'<path d="M8 100a92 92 0 0 1 184 0z" fill="#E6E0CE" stroke="#33474E" stroke-width="2"/>'
    +'<path d="M22 100a78 78 0 0 1 156 0" fill="none" stroke="#1D7A46" stroke-width="3" stroke-dasharray="4 6" opacity=".5"/>'
    +ticks
    +'<text x="24" y="94" font-size="10" fill="#5D6B6B" font-family="Holodilnik,sans-serif">0</text>'
    +'<text x="94" y="34" font-size="10" fill="#5D6B6B" font-family="Holodilnik,sans-serif">50</text>'
    +'<text x="164" y="94" font-size="10" fill="#5D6B6B" font-family="Holodilnik,sans-serif">100</text>'
    +'<g id="phNeedle" transform="rotate(-90 100 100)"><line x1="100" y1="100" x2="100" y2="30" stroke="#C0392B" stroke-width="2.6" stroke-linecap="round"/><circle cx="100" cy="30" r="2.6" fill="#C0392B"/></g>'
    +'<circle cx="100" cy="100" r="7" fill="#33474E"/><circle cx="100" cy="100" r="3" fill="#C9D2D2"/>'
    +'</svg>';
}

function extra(ctx){
  return '<div class="ph-rig">'
    +'<div class="ph-scope-wrap">'
      +'<div class="ph-scope-head"><span class="ph-tag">Осциллограф С1-<span data-ph-grade>'+ctx.grade+'</span></span><span class="ph-lamp"><i></i>Развёртка</span><span class="ph-read" id="phRead">CH I · 2.0 Гц · 0.80 В</span></div>'
      +'<canvas id="phScope" class="ph-scope" aria-label="Экран осциллографа"></canvas><div class="ph-scan"></div>'
    +'</div>'
    +'<div class="ph-panel">'
      +'<label class="ph-ctl"><span>Частота</span><b id="phFreqV">2.0 Гц</b><input type="range" id="phFreq" min="0.5" max="6" step="0.1" value="2" aria-label="Частота"></label>'
      +'<label class="ph-ctl"><span>Амплитуда</span><b id="phAmpV">0.80 В</b><input type="range" id="phAmp" min="0.1" max="1" step="0.02" value="0.8" aria-label="Амплитуда"></label>'
      +'<label class="ph-ctl"><span>Развёртка</span><b id="phSweepV">1.0×</b><input type="range" id="phSweep" min="0.2" max="3" step="0.1" value="1" aria-label="Развёртка"></label>'
      +'<label class="ph-ctl ph-sel"><span>Фигура</span><b></b><select id="phWave" aria-label="Форма сигнала"><option value="sine">Синусоида</option><option value="square">Меандр</option><option value="liss">Фигура Лиссажу</option></select></label>'
      +'<div class="ph-switches">'
        +'<label class="ph-sw"><input type="checkbox" id="phCh2" checked><i></i><span>Канал II</span></label>'
        +'<label class="ph-sw"><input type="checkbox" id="phGrid" checked><i></i><span>Сетка</span></label>'
      +'</div>'
      +'<div class="ph-keys"><button type="button" id="phReset">Сброс</button><button type="button" id="phRand">Случайно</button><button type="button" id="phShot">Снимок PNG</button></div>'
    +'</div>'
    +'<div class="ph-gauge">'+gaugeSvg()
      +'<div class="ph-gauge-val"><b id="phGaugeVal">'+ctx.stats.pct+'</b><span>% успеваемость</span></div>'
      +'<div class="ph-gauge-cap">Прибор щитовой · <span data-ph-grade>'+ctx.grade+'</span> класс · изучено <span data-ph-done>'+ctx.stats.d+'</span> из <span data-ph-total>'+ctx.stats.t+'</span></div>'
    +'</div>'
  +'</div>';
}

function decor(){
  var circuit='<svg viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 30h18"/><rect x="24" y="22" width="26" height="16"/><path d="M50 30h14"/><path d="M64 22v16M70 22v16"/><path d="M70 30h20"/><circle cx="100" cy="30" r="9"/><path d="M96 30h8M100 26v8"/><path d="M109 30h5V54H6V30"/></svg>';
  return '<span class="ph-screw" style="top:calc(var(--nav-h) + 16px);left:16px"></span>'
    +'<span class="ph-screw" style="top:calc(var(--nav-h) + 16px);right:16px"></span>'
    +'<span class="ph-screw" style="bottom:26px;left:16px"></span>'
    +'<span class="ph-screw" style="bottom:26px;right:16px"></span>'
    +'<div class="ph-vent"></div>'
    +'<div class="doodle" style="top:15%;left:2.5%" data-depth="0.9" data-r="-3"><div class="doodle-in"><span class="hand">F = ma</span></div></div>'
    +'<div class="doodle" style="top:46%;right:2%" data-depth="0.7" data-r="4"><div class="doodle-in"><span class="hand">U = I·R</span></div></div>'
    +'<div class="doodle opt" style="bottom:27%;left:1.5%" data-depth="0.5" data-r="2"><div class="doodle-in"><span class="hand">E = mc²</span></div></div>'
    +'<div class="doodle opt" style="bottom:7%;right:5%" data-depth="0.6" data-r="-4"><div class="doodle-in"><span class="hand">λν = c</span></div></div>'
    +'<div class="doodle opt" style="top:19%;left:47%" data-depth="1" data-r="3"><div class="doodle-in"><span class="hand">Δp·Δx ≥ ħ/2</span></div></div>'
    +'<div class="doodle opt" style="bottom:12%;left:34%;width:130px;height:65px;opacity:.22" data-depth="0.8" data-r="-2"><div class="doodle-in">'+circuit+'</div></div>';
}

function foot(){
  return '<div class="ph-foot-line"><span>Стенд собран по программе 7–11 классов</span><span>Осторожно: высокое напряжение знаний</span><span>Набор шрифтом Holodilnik 1.1</span></div><div class="ph-danger"></div>';
}

/* ---------- живая часть ---------- */
var raf=0,needleRaf=0,resizeH=null,curAngle=-90,P=null,draw=null,cv=null,g=null,W=0,H=0;

function setNeedle(pct,instant){
  var target=-90+clampNum(pct,0,100)*1.8;
  if(needleRaf)cancelAnimationFrame(needleRaf);
  function apply(){var n=document.getElementById('phNeedle');if(n)n.setAttribute('transform','rotate('+curAngle.toFixed(2)+' 100 100)')}
  if(REDUCED||instant){curAngle=target;apply();return}
  var from=curAngle,t0=performance.now(),dur=850;
  (function step(ts){
    var k=Math.min((ts-t0)/dur,1),e=1-Math.pow(1-k,3);
    curAngle=from+(target-from)*e;apply();
    if(k<1)needleRaf=requestAnimationFrame(step);else needleRaf=0;
  })(t0);
}
function clampNum(v,a,b){return Math.max(a,Math.min(b,v))}
function fx(n){if(window.OSFx)window.OSFx.play(n)}

function unmount(){
  if(raf)cancelAnimationFrame(raf);raf=0;
  if(needleRaf)cancelAnimationFrame(needleRaf);needleRaf=0;
  if(resizeH)window.removeEventListener('resize',resizeH);
  resizeH=null;cv=null;g=null;draw=null;P=null;curAngle=-90;
}

function mount(ctx){
  unmount();
  cv=document.getElementById('phScope');
  if(!cv||!cv.getContext)return;
  g=cv.getContext('2d');
  if(!g)return;
  P={freq:2,amp:.8,sweep:1,wave:'sine',ch2:true,grid:true};
  var el={freq:document.getElementById('phFreq'),amp:document.getElementById('phAmp'),sweep:document.getElementById('phSweep'),
    wave:document.getElementById('phWave'),ch2:document.getElementById('phCh2'),grid:document.getElementById('phGrid'),
    fv:document.getElementById('phFreqV'),av:document.getElementById('phAmpV'),sv:document.getElementById('phSweepV'),read:document.getElementById('phRead')};

  function size(){
    var r=cv.getBoundingClientRect();
    W=Math.max(1,r.width);H=Math.max(1,r.height||236);
    var dpr=Math.min(window.devicePixelRatio||1,2);
    cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);
    g.setTransform(dpr,0,0,dpr,0,0);
  }
  function labels(){
    if(el.fv)el.fv.textContent=P.freq.toFixed(1)+' Гц';
    if(el.av)el.av.textContent=P.amp.toFixed(2)+' В';
    if(el.sv)el.sv.textContent=P.sweep.toFixed(1)+'×';
    if(el.read)el.read.textContent='CH I · '+P.freq.toFixed(1)+' Гц · '+P.amp.toFixed(2)+' В'+(P.ch2?' · CH II':'');
  }
  function waveAt(ph){return P.wave==='square'?(Math.sin(ph)>=0?.86:-.86):Math.sin(ph)}

  draw=function(time){
    if(!g||!W||!H)return;
    var t=time/1000,w=W,h=H,mid=h/2;
    g.clearRect(0,0,w,h);
    g.fillStyle='#06120E';g.fillRect(0,0,w,h);
    if(P.grid){
      g.lineWidth=1;g.strokeStyle='rgba(91,240,138,.13)';
      for(var i=1;i<10;i++){var x=Math.round(w*i/10)+.5;g.beginPath();g.moveTo(x,0);g.lineTo(x,h);g.stroke()}
      for(var j=1;j<6;j++){var y=Math.round(h*j/6)+.5;g.beginPath();g.moveTo(0,y);g.lineTo(w,y);g.stroke()}
      g.strokeStyle='rgba(91,240,138,.3)';g.beginPath();g.moveTo(0,mid+.5);g.lineTo(w,mid+.5);g.moveTo(Math.round(w/2)+.5,0);g.lineTo(Math.round(w/2)+.5,h);g.stroke();
    }
    function trace(color,off,mul,alpha){
      g.save();g.globalAlpha=alpha;g.strokeStyle=color;g.shadowColor=color;g.shadowBlur=12;g.lineWidth=2;g.beginPath();
      if(P.wave==='liss'){
        var a=Math.max(1,Math.round(P.freq)),b=3,cx=w/2,cy=mid,rx=(w/2-16)*P.amp*mul,ry=(mid-14)*P.amp*mul;
        for(var k=0;k<=360;k++){
          var th=k*Math.PI/180,x=cx+rx*Math.sin(a*th+off+t*P.sweep),y=cy+ry*Math.sin(b*th);
          if(k===0)g.moveTo(x,y);else g.lineTo(x,y);
        }
      }else{
        for(var px=0;px<=w;px+=2){
          var ph=(px/w)*P.freq*Math.PI*2+t*P.sweep*2+off,py=mid-waveAt(ph)*(mid-14)*P.amp*mul;
          if(px===0)g.moveTo(px,py);else g.lineTo(px,py);
        }
      }
      g.stroke();g.restore();
    }
    trace('#5BF08A',0,1,1);
    if(P.ch2)trace('#FFB020',Math.PI/2,.6,.85);
    var bx,by;
    if(P.wave==='liss'){
      var th2=(t*P.sweep)% (Math.PI*2);
      bx=w/2+(w/2-16)*P.amp*Math.sin(Math.max(1,Math.round(P.freq))*th2);
      by=mid+(mid-14)*P.amp*Math.sin(3*th2);
    }else{
      bx=((t*P.sweep*.22)%1)*w;
      by=mid-waveAt((bx/w)*P.freq*Math.PI*2+t*P.sweep*2)*(mid-14)*P.amp;
    }
    g.save();g.shadowColor='#EAFFF2';g.shadowBlur=16;g.fillStyle='#EAFFF2';g.beginPath();g.arc(bx,by,3,0,Math.PI*2);g.fill();g.restore();
  };

  function loop(ts){
    raf=requestAnimationFrame(loop);
    var r=cv.getBoundingClientRect();
    if(r.bottom<-40||r.top>innerHeight+40)return;
    draw(ts);
  }
  function sync(){labels();if(REDUCED)draw(performance.now())}

  if(el.freq)el.freq.addEventListener('input',function(){P.freq=parseFloat(this.value);sync()});
  if(el.amp)el.amp.addEventListener('input',function(){P.amp=parseFloat(this.value);sync()});
  if(el.sweep)el.sweep.addEventListener('input',function(){P.sweep=parseFloat(this.value);sync()});
  if(el.wave)el.wave.addEventListener('change',function(){P.wave=this.value;sync();fx('tick')});
  if(el.ch2)el.ch2.addEventListener('change',function(){P.ch2=this.checked;sync();fx(this.checked?'tick':'untick')});
  if(el.grid)el.grid.addEventListener('change',function(){P.grid=this.checked;sync();fx(this.checked?'tick':'untick')});
  [el.freq,el.amp,el.sweep].forEach(function(s){if(s)s.addEventListener('change',function(){fx('tick')})});

  function push(){
    if(el.freq)el.freq.value=P.freq;
    if(el.amp)el.amp.value=P.amp;
    if(el.sweep)el.sweep.value=P.sweep;
    if(el.wave)el.wave.value=P.wave;
    if(el.ch2)el.ch2.checked=P.ch2;
    if(el.grid)el.grid.checked=P.grid;
    sync();
  }
  var reset=document.getElementById('phReset'),rand=document.getElementById('phRand'),shot=document.getElementById('phShot');
  if(reset)reset.addEventListener('click',function(){P={freq:2,amp:.8,sweep:1,wave:'sine',ch2:true,grid:true};push();fx('relay')});
  if(rand)rand.addEventListener('click',function(){
    P.freq=Math.round((.5+Math.random()*5.5)*10)/10;
    P.amp=Math.round((.2+Math.random()*.8)*50)/50;
    P.sweep=Math.round((.2+Math.random()*2.8)*10)/10;
    P.wave=['sine','square','liss'][Math.floor(Math.random()*3)];
    P.ch2=Math.random()>.35;P.grid=true;push();fx('relay');
  });
  if(shot)shot.addEventListener('click',function(){
    try{
      var a=document.createElement('a');
      a.href=cv.toDataURL('image/png');a.download='oscilloscope-mesyankin.png';
      document.body.appendChild(a);a.click();document.body.removeChild(a);fx('tick');
    }catch(e){}
  });

  resizeH=function(){size();draw(performance.now())};
  window.addEventListener('resize',resizeH);
  size();labels();
  setNeedle(ctx.stats.pct);
  if(REDUCED)draw(performance.now());
  else raf=requestAnimationFrame(loop);
}

function update(ctx){
  var gs=document.querySelectorAll('#hero [data-ph-grade]');
  for(var i=0;i<gs.length;i++)gs[i].textContent=ctx.grade;
  var dn=document.querySelector('#hero [data-ph-done]'),tt=document.querySelector('#hero [data-ph-total]'),gv=document.getElementById('phGaugeVal');
  if(dn)dn.textContent=ctx.stats.d;
  if(tt)tt.textContent=ctx.stats.t;
  if(gv)gv.textContent=ctx.stats.pct;
  setNeedle(ctx.stats.pct);
}

window.OSRegisterTheme({
  id:'physics',
  label:'Стенд «Физика»',
  meta:'#16262B',
  css:css,
  copy:{
    eyebrow:'Кабинет физики · стенд под напряжением',
    l1:'Вся школьная физика',
    l2:'с 7 по 11 класс —',
    l3:'<span class="hl-accent">от механики до квантов.<svg class="ph-trace" viewBox="0 0 320 14" preserveAspectRatio="none" aria-hidden="true"><path d="M0 7 Q 10 0 20 7 T 40 7 T 60 7 T 80 7 T 100 7 T 120 7 T 140 7 T 160 7 T 180 7 T 200 7 T 220 7 T 240 7 T 260 7 T 280 7 T 300 7 T 320 7" pathLength="420"/></svg></span>',
    sub:'Стенд собран по школьной программе: механика, тепловые явления, электричество, оптика и квантовая физика. <b>Крути ручки осциллографа</b> и отмечай темы — щитовой прибор покажет успеваемость класса.',
    note:'выберите класс — стенд перестроится ↓',
    pin:'Паспорт прибора',
    cue:'ниже — карточки предметов'
  },
  mast:mast,decor:decor,extra:extra,foot:foot,mount:mount,unmount:unmount,update:update
});
})();