import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{f as x,i as a}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),l=document.querySelector("span[data-days]"),m=document.querySelector("span[data-hours]"),f=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]");let y,p=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),S.defaultDate>=t[0]?(n.disabled=!0,a.error({title:"Error",message:"Please choose a date in the future"})):(n.disabled=!1,y=t[0],a.success({title:"OK",message:'You can press "Start"'}))}};x(c,S);function o(t){const r=Math.floor(t/864e5),g=Math.floor(t%864e5/36e5),C=Math.floor(t%864e5%36e5/6e4),b=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:g,minutes:C,seconds:b}}const e=t=>t.toString().padStart(2,"0");n.addEventListener("click",q);function q(){n.disabled=!0,c.disabled=!0,p=setInterval(()=>{const s=y-new Date,{days:u,hours:d,minutes:i,seconds:r}=o(s);if(l.textContent=e(u),m.textContent=e(d),f.textContent=e(i),h.textContent=e(r),s<=0){clearInterval(p),c.disabled=!1,l.textContent="00",m.textContent="00",f.textContent="00",h.textContent="00",a.info({title:"Finished",message:"The countdown is over!"});return}},1e3)}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));
//# sourceMappingURL=commonHelpers.js.map
