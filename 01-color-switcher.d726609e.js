function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let n=null;e.addEventListener("click",(()=>{const o=t();document.body.style.backgroundColor=o,n=setInterval((()=>{const e=t();document.body.style.backgroundColor=e}),1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.d726609e.js.map
