(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(c){if(c.ep)return;c.ep=!0;const n=s(c);fetch(c.href,n)}})();const g=document.querySelector(".DarkThemeToggle"),u=document.querySelector(".App"),p=document.querySelector(".TaskSearchBar__input"),f=document.querySelector(".TaskSearchBar__button"),l=document.querySelector(".TaskList__list"),k=document.querySelector(".TaskList__link"),_=()=>document.querySelectorAll(".TaskList__deleteIcon"),T=()=>document.querySelectorAll(".TaskList__checkbox"),L=()=>{u.classList.toggle("App--isDark"),a("darkModeFlag",u.classList.contains("App--isDark"))},i=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):!1},h=t=>{let e="";t.forEach(s=>{e+=`<li class="TaskList__taskContent${s.isCompleted?" TaskList__taskContent--isActive":""}">
        <div class='TaskList__checkbox' tabindex="0" role="button">
          <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
        </div>
        <div class='TaskList__valueContent'>
          <p class='TaskList__value'>
            ${s.value}
          </p>
          <img src="./assets/icon-basket.svg"
               class='TaskList__deleteIcon'
               alt="basket-icon"
          />
        </div>
      </li>`}),l.innerHTML=e,p.value=""},v=(t,e)=>{if(confirm("هل أنت متأكد من حذف المهمة؟")===!1)return;const o=i("tasks");o.splice(e,1),a("tasks",o),d(o)},y=t=>{t.preventDefault();const e=p.value;if(!e)return;const s={value:e,isCompleted:!1},o=i("tasks")||[];o.push(s),a("tasks",o),d(o)},a=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},E=()=>{i("darkModeFlag")&&L(),d(i("tasks"))},S=()=>{l.innerHTML=`<li class='EmptyList'>
        <img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
        <p>قائمة المهام فارغة</p>
      </li>`},d=t=>{t!=null&&t.length?(h(t),C()):S()},m=(t,e)=>{const s=i("tasks");t.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive"),s[e].isCompleted=!s[e].isCompleted,a("tasks",s)},C=()=>{_().forEach((t,e)=>{t.addEventListener("click",s=>v(s,e))}),T().forEach((t,e)=>{t.addEventListener("click",s=>m(s,e)),t.addEventListener("keydown",s=>{s.key==="Enter"&&m(s,e)})})},b=()=>{f.addEventListener("click",y),g.addEventListener("click",L),k.addEventListener("click",()=>{l.classList.toggle("TaskList__list--hideCompleted"),k.classList.toggle("TaskList__link--isActive")})};E();b();
