const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/phone-CGN3H_Zz.js","assets/vendor-DLjITfSg.js","assets/style-DpsRipQV.css"])))=>i.map(i=>d[i]);
import{_ as j,u as L}from"./i18n-DX3dXyKw.js";import{j as n}from"./radix-DdRagl9e.js";import{a as c,d as E}from"./vendor-DLjITfSg.js";import{A as D}from"./phone-CGN3H_Zz.js";import{S as A}from"./section-title-DLGt7rRs.js";import{u as g}from"./index-BQWD-ZGU.js";import"./motion-D18HeNrN.js";import"./charts-GIMeMiE9.js";import"./query-Chx-X1ur.js";const N="/MyPortfolio/assets/formBg-BLlsN2aV.webp";function S({label:e,name:t,type:r="text",placeholder:o}){const a=c.useId(),s=`${t}-${a}`,l=`${s}-label`,p=`${s}-hint`;return n.jsxs("div",{className:"relative w-full group my-10",children:[n.jsx("input",{id:s,name:t,type:r,required:!0,"aria-required":"true","aria-labelledby":l,"aria-describedby":p,autoComplete:t==="name"?"name":t==="email"?"email":t==="username"?"username":t==="company"?"organization":void 0,inputMode:r==="email"?"email":"text",enterKeyHint:r==="email"?"send":"next",spellCheck:r==="email"?"false":"true",placeholder:o,className:`\r
        peer w-full h-[50px] px-5 pr-14\r
        rounded-md\r
        bg-[#000c24b3]\r
        text-cyan-300\r
        text-lg tracking-wider\r
        outline-none\r
        border border-cyan-400/30\r
        backdrop-blur-md\r
        shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
        transition-all duration-300\r
        focus:bg-[#00162ed0]\r
        focus:border-cyan-300\r
        focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
        placeholder:text-cyan-500/40\r
        `}),n.jsx("label",{id:l,htmlFor:s,className:`\r
        absolute -top-6 left-0\r
        text-xs tracking-[2px] uppercase\r
        text-cyan-400/70\r
        transition-all duration-300\r
        peer-focus:text-cyan-300\r
        peer-focus:-translate-y-1\r
        cursor-text\r
        `,children:e}),n.jsxs("span",{id:p,className:"sr-only",children:[e," field"]}),n.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),n.jsx("span",{className:`\r
\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white        to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:18}).map((d,i)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${i*.12}s`}},i))})]})}const k=E.forwardRef((e,t)=>n.jsx("input",{...e,ref:t,id:e.id??"phone",name:e.name??"phone",type:"tel",autoComplete:"tel",inputMode:"tel",className:e.className}));k.displayName="PhoneField";const O=c.lazy(()=>j(()=>import("./phone-CGN3H_Zz.js").then(e=>e.i),__vite__mapDeps([0,1]))),C=e=>{if(!e)return;const t=new D;return t.input(e),t.getCountry()??void 0};function $({value:e,onChange:t,label:r,placeholder:o}){const a=c.useId(),[s,l]=c.useState(!1),[p,d]=c.useState(C(e));return c.useEffect(()=>{j(()=>Promise.resolve({}),__vite__mapDeps([2])),l(!0)},[]),c.useEffect(()=>{d(C(e))},[e]),n.jsxs("div",{className:`\r
  relative w-full group my-10\r
\r
  rounded-md\r
  bg-[#000c24b3]\r
  backdrop-blur-md\r
  border border-cyan-400/30\r
  shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
  transition-all duration-300\r
\r
  focus-within:bg-[#00162ed0]\r
  focus-within:border-cyan-300\r
  focus-within:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
\r
  flex items-center gap-3 pl-2 overflow-visible\r
\r
  /* COUNTRY BLOCK */\r
  [&_.PhoneInputCountry]:relative\r
  [&_.PhoneInputCountry]:h-[50px]\r
  [&_.PhoneInputCountry]:flex\r
  [&_.PhoneInputCountry]:items-center\r
  [&_.PhoneInputCountry]:border-r\r
  [&_.PhoneInputCountry]:border-cyan-400/20\r
  [&_.PhoneInputCountry]:bg-[#020617]\r
  [&_.PhoneInputCountry]:rounded-l-md\r
\r
  /* FLAG */\r
  [&_.PhoneInputCountryIcon]:w-6\r
  [&_.PhoneInputCountryIcon]:h-4\r
  [&_.PhoneInputCountryIcon]:rounded-sm\r
  [&_.PhoneInputCountryIcon]:shadow-[0_0_6px_rgba(0,255,255,0.6)]\r
\r
  /* ARROW */\r
  [&_.PhoneInputCountrySelectArrow]:text-cyan-300\r
  [&_.PhoneInputCountrySelectArrow]:ml-1\r
  [&_.PhoneInputCountrySelectArrow]:opacity-0\r
\r
  /* === SELECT DROPDOWN FIX === */\r
  [&_.PhoneInputCountrySelect]:absolute\r
  [&_.PhoneInputCountrySelect]:left-0\r
  [&_.PhoneInputCountrySelect]:top-[52px]\r
  [&_.PhoneInputCountrySelect]:z-[9999]\r
  [&_.PhoneInputCountrySelect]:w-[280px]\r
  [&_.PhoneInputCountrySelect]:max-h-[260px]\r
  [&_.PhoneInputCountrySelect]:overflow-y-auto\r
  [&_.PhoneInputCountrySelect]:rounded-md\r
  [&_.PhoneInputCountrySelect]:border\r
  [&_.PhoneInputCountrySelect]:border-cyan-400/40\r
  [&_.PhoneInputCountrySelect]:bg-[#020617f0]\r
  [&_.PhoneInputCountrySelect]:backdrop-blur-md\r
  [&_.PhoneInputCountrySelect]:shadow-[0_0_20px_rgba(0,255,255,0.35)]\r
  [&_.PhoneInputCountrySelect]:text-cyan-200\r
  [&_.PhoneInputCountrySelect]:outline-none\r
\r
  /* OPTIONS */\r
  [&_.PhoneInputCountrySelect_option]:bg-[#020617]\r
  [&_.PhoneInputCountrySelect_option]:text-cyan-200\r
\r
  /* INPUT */\r
  [&_.PhoneInputInput]:peer\r
  [&_.PhoneInputInput]:w-full\r
  [&_.PhoneInputInput]:h-[50px]\r
  [&_.PhoneInputInput]:pr-0 lg:[&_.PhoneInputInput]:pr-[160px]\r
\r
  [&_.PhoneInputInput]:rounded-r-md\r
  [&_.PhoneInputInput]:bg-transparent\r
  [&_.PhoneInputInput]:text-cyan-300\r
  [&_.PhoneInputInput]:text-lg\r
  [&_.PhoneInputInput]:tracking-wider\r
  [&_.PhoneInputInput]:outline-none\r
  [&_.PhoneInputInput]:transition-all\r
  [&_.PhoneInputInput]:focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]
  [&_.PhoneInputInput::placeholder]:text-cyan-500/40
`,children:[n.jsxs(c.Suspense,{fallback:n.jsx("div",{className:"h-[50px] w-full rounded-md bg-[#00162ed0] animate-pulse border border-cyan-400/20"}),children:[!s&&n.jsx("input",{id:a,type:"tel",disabled:!0,"aria-hidden":"true",tabIndex:-1,className:"sr-only"}),s&&n.jsx(O,{id:a,international:!0,autoComplete:"tel",placeholder:o||r,value:e,smartCaret:!1,country:p,onCountryChange:i=>{d(i??void 0)},onChange:i=>{d(C(i)),t(i)},inputComponent:k})]}),n.jsx("label",{htmlFor:a,className:`
        absolute -top-6 left-0
        text-xs tracking-[2px] uppercase
        text-cyan-400/70
        transition-all duration-300
        group-focus-within:text-cyan-300
        group-focus-within:-translate-y-1
      `,children:r}),n.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full
        bg-cyan-400/40
        shadow-[0_0_10px_rgba(0,180,255,0.6)]
        transition-all duration-300
        group-focus-within:bg-cyan-300
        group-focus-within:scale-125
      `}),n.jsx("span",{className:`\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md
        bg-cyan-400/10
        opacity-0
        transition-opacity duration-300
        group-focus-within:opacity-100
        pointer-events-none
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 group-focus-within:opacity-100",children:Array.from({length:18}).map((i,m)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${m*.12}s`}},m))})]})}function M({label:e,name:t,id:r,placeholder:o}){const a=r||t;return n.jsxs("div",{className:"relative w-full group my-5",children:[n.jsx("textarea",{id:a,name:t,required:!0,autoComplete:"off",placeholder:o||e,rows:5,className:`\r
        peer w-full max-h-[100px]\r
        px-5 pt-2 pb-10 pr-14\r
        rounded-md\r
        resize-none\r
        bg-[#000c24b3]\r
        text-cyan-300\r
        text-lg tracking-wider\r
        outline-none\r
        border border-cyan-400/30\r
        backdrop-blur-md\r
        shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
        transition-all duration-300\r
        focus:bg-[#00162ed0]\r
        focus:border-cyan-300\r
        focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
        placeholder:text-cyan-500/40\r
      `}),n.jsx("label",{htmlFor:a,className:`\r
  absolute -top-6 left-0\r
  text-xs tracking-[2px] uppercase\r
  text-cyan-400/70\r
  transition-all duration-300\r
  peer-focus:text-cyan-300\r
  peer-focus:-translate-y-1\r
`,children:e}),n.jsx("span",{className:`\r
        absolute right-4 top-6\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),n.jsx("span",{className:`\r
        pointer-events-none\r
        absolute left-0 top-0\r
        w-full h-[2px]\r
        opacity-0\r
        bg-gradient-to-r from-transparent via-white to-transparent\r
        blur-[1px]\r
        peer-focus:opacity-100\r
        peer-focus:animate-scan-vertical\r
      `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        peer-focus:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-3 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:20}).map((s,l)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${l*.1}s`}},l))})]})}function I(e,t=0){return Array.from(e).map((r,o)=>n.jsx("span",{style:{"--i":t+o},children:r===" "?" ":r},`${r}-${o}`))}function R(e){return e.toLowerCase().endsWith(".github.io")}function q(){const e="/api/contact".trim(),t="".trim();if(e&&e!=="/api/contact")return e;if(typeof window>"u")return e||"/api/contact";const r=["127.0.0.1","localhost"].includes(window.location.hostname),o=window.location.port==="5500";return t&&r&&o?t:e==="/api/contact"&&R(window.location.hostname)?"":e||"/api/contact"}function F(){const e="8600269676:AAFYtx75DiHJfvpgOplTqiPPObTmVOeRFO4".trim(),t="560000221".trim();return!e||!t?null:{botToken:e,chatId:t}}function b(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function V(e){const t=String(e||"").trim(),r=t?new Date(t):new Date;if(Number.isNaN(r.getTime()))return t||new Date().toISOString();const o=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tashkent",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).formatToParts(r),a=m=>o.find(y=>y.type===m)?.value||"",s=a("day"),l=a("month"),p=a("year"),d=a("hour"),i=a("minute");return`${s}.${l}.${p} ${d}:${i} (Toshkent, UTC+5)`}function z(e){const t=b(e.name||"Kiritilmagan"),r=b(e.phone||"Kiritilmagan"),o=b(e.email||"Kiritilmagan"),a=b(e.message||"Xabar yozilmagan"),s=b(V(e.submittedAt));return`
🌟 <b>NEW PORTFOLIO LEAD</b>
<i>A new message arrived from the website</i>

━━━━━━━━━━━━━━━━━━━━
👤 <b>Client</b>
• <b>Name:</b> <code>${t}</code>
• <b>Phone:</b> <a href="tel:${r}">${r}</a>
• <b>Email:</b> <a href="mailto:${o}">${o}</a>

💬 <b>Message</b>
<blockquote>${a}</blockquote>

🕒 <b>Submitted:</b> <code>${s}</code>
━━━━━━━━━━━━━━━━━━━━
🚀 <b>Portfolio Contact System</b>
`.trim()}async function B(e,t){const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),o=await r.json().catch(()=>null);if(!r.ok||!o?.ok)throw new Error(o?.error?.message||"Xabar yuborilmadi. Iltimos keyinroq qayta urinib ko'ring")}async function H(e,t){const r=z(t);try{const o=await fetch(`https://api.telegram.org/bot${e.botToken}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e.chatId,text:r,parse_mode:"HTML",disable_web_page_preview:!0})}),a=await o.json().catch(()=>null);if(!o.ok||!a?.ok)throw new Error(a?.description||"Telegram API xatosi");return}catch{const o=new URLSearchParams({chat_id:e.chatId,text:r,parse_mode:"HTML",disable_web_page_preview:"true"});await fetch(`https://api.telegram.org/bot${e.botToken}/sendMessage?${o.toString()}`,{method:"GET",mode:"no-cors",cache:"no-store"})}}function te(){const{t:e}=L(),[t,r]=c.useState(!1),[o,a]=c.useState(!1),[s,l]=c.useState(void 0),[p,d]=c.useState(!1),i=q(),m=F();c.useEffect(()=>{const f=new Image;f.src=N,f.onload=()=>d(!0)},[]);const y=async f=>{if(f.preventDefault(),t)return;const x=f.currentTarget;if(!x.checkValidity()){g.error(e("form.errorValidation"),{description:e("form.errorValidationDesc")}),x.reportValidity();return}const{isValidPhoneNumber:T}=await j(async()=>{const{isValidPhoneNumber:u}=await import("./phone-CGN3H_Zz.js").then(h=>h.i);return{isValidPhoneNumber:u}},__vite__mapDeps([0,1]));if(!s||!T(s)){g.error(e("form.errorPhone"),{description:e("form.errorPhoneDesc")});return}const v=x.querySelector('input[name="email"]')?.value.trim()||"";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){g.error(e("form.errorEmail"),{description:e("form.errorEmailDesc")});return}const _=new FormData(x),P={name:String(_.get("name")||"").trim(),email:v,phone:String(s),message:String(_.get("message")||"").trim(),website:String(_.get("website")||""),submittedAt:new Date().toISOString()};r(!0);try{let u=!1,h=null;if(i)try{await B(i,P),u=!0}catch(w){h=w}if(!u&&m&&(await H(m,P),u=!0),!u)throw!i&&!m?new Error("Contact form sozlanmagan. `VITE_CONTACT_ENDPOINT` yoki `VITE_CLIENT_TELEGRAM_*` qiymatlarini to'g'ri kiriting"):h instanceof Error?h:new Error(e("form.errorSendDesc"));g.success(e("form.success"),{description:e("form.successDesc")}),a(!0),x.reset(),l(""),setTimeout(()=>a(!1),3e3)}catch(u){console.error(u);const h=u instanceof Error?u.message.trim():"",w=/\/start|telegram[_\s-]?chat[_\s-]?id|chat\s+not\s+found/i.test(h);g.error(e("form.errorSend"),{description:w?e("form.errorSendDescTelegramStart"):h||e("form.errorSendDesc")})}finally{r(!1)}};return n.jsxs("section",{id:"contact",className:"relative min-h-screen w-full flex items-center justify-center overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50",style:p?{backgroundImage:`url(${N})`}:void 0}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/30 via-background/5 to-background"}),n.jsx("div",{className:"container mx-auto px-4 relative z-10",children:n.jsxs("div",{className:"flex flex-col md:flex-row gap-10 md:gap-16",children:[n.jsx(A,{number:e("contact.number"),title:e("contact.title")}),n.jsxs("div",{className:"w-full max-w-[530px] relative z-10 md:ml-auto",children:[n.jsx("h1",{className:"text-[40px] xs:text-[50px] sm:text-[65px] md:text-[65px] lg:text-[70px] leading-tight tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-center font-brush break-words pb-2  bg-gradient-to-r from-transparent via-cyber-3 to-transparent bg-[length:90%] bg-no-repeat text-transparent bg-clip-text animate-textGlow",children:e("contact.heading")}),n.jsxs("form",{autoComplete:"on",onSubmit:y,className:`
              bg-[hsl(var(--card)/0.1)]
              backdrop-blur-sm
              p-3 sm:p-4 md:p-4 mb-4
              border-l-[4px] md:border-l-[5px]
              border-[hsl(var(--primary))]
              rounded-xl
              relative
              shadow-[0_0_18px_hsl(var(--primary)/0.25),0_10px_30px_rgba(0,0,0,0.5),inset_0_0_40px_hsl(var(--primary)/0.08)]
              `,children:[n.jsx("input",{type:"text",name:"website",tabIndex:-1,autoComplete:"off","aria-hidden":"true",className:"absolute left-[-10000px] top-auto h-0 w-0 overflow-hidden opacity-0 pointer-events-none"}),n.jsx(S,{label:e("form.name"),name:"name",type:"text",placeholder:e("form.namePlaceholder")}),n.jsx($,{label:e("form.phone"),value:s,onChange:l,placeholder:e("form.phonePlaceholder")}),n.jsx(S,{label:e("form.email"),name:"email",type:"email",placeholder:e("form.emailPlaceholder")}),n.jsx(M,{label:e("form.message"),name:"message",placeholder:e("form.messagePlaceholder")}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6",children:[n.jsxs("button",{type:"submit",disabled:t,className:`cf-action-button cf-action-button--submit ${o?"is-sent":""}`,"aria-live":"polite",children:[n.jsx("div",{className:"cf-action-outline"}),n.jsxs("div",{className:"cf-action-state cf-action-state--default",children:[n.jsx("div",{className:"cf-action-icon",children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",height:"1em",width:"1em",children:[n.jsxs("g",{style:{filter:"url(#contact-form-send-shadow)"},children:[n.jsx("path",{fill:"currentColor",d:"M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"}),n.jsx("path",{fill:"currentColor",d:"M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"})]}),n.jsx("defs",{children:n.jsx("filter",{id:"contact-form-send-shadow",children:n.jsx("feDropShadow",{floodOpacity:"0.5",stdDeviation:"0.6",dy:"1",dx:"0"})})})]})}),n.jsx("p",{children:I(e(t?"form.sending":"form.submit"))})]}),n.jsxs("div",{className:"cf-action-state cf-action-state--sent",children:[n.jsx("div",{className:"cf-action-icon",children:n.jsxs("svg",{stroke:"black",strokeWidth:"0.5px",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("g",{style:{filter:"url(#contact-form-check-shadow)"},children:[n.jsx("path",{d:"M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z",fill:"currentColor"}),n.jsx("path",{d:"M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z",fill:"currentColor"})]}),n.jsx("defs",{children:n.jsx("filter",{id:"contact-form-check-shadow",children:n.jsx("feDropShadow",{floodOpacity:"0.5",stdDeviation:"0.6",dy:"1",dx:"0"})})})]})}),n.jsx("p",{children:I(e("form.sent"),5)})]})]}),n.jsxs("button",{type:"reset",onClick:()=>l(""),className:"cf-action-button cf-action-button--reset",children:[n.jsx("div",{className:"cf-action-outline"}),n.jsxs("div",{className:"cf-action-state cf-action-state--default",children:[n.jsx("div",{className:"cf-action-icon",children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",width:"1em",height:"1em",children:[n.jsx("path",{d:"M20 12a8 8 0 1 1-2.34-5.66",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M20 4v5h-5",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}),n.jsx("p",{children:I(e("form.reset"))})]})]})]})]})]})]})})]})}export{te as default};
