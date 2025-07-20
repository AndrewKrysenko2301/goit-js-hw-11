import{a as m,S as f,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="51333362-4829905c1402d27e64b07a684",h="https://pixabay.com/api/";async function L(i){return(await m.get(h,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})).data}const c=document.getElementById("gallery"),p=document.getElementById("loader"),_=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:g})=>`
        <li class="gallery__item">
          <a href="${s}" class="gallery__link">
            <img src="${o}" alt="${e}" loading="lazy" class="gallery__image" />
          </a>
          <ul class="info">
            <li>
              <p>Likes</p>
              <span>${t}</span>
            </li>
            <li>
              <p>Views</p>
              <span>${n}</span>
            </li>
            <li>
              <p>Comments</p>
              <span>${d}</span>
            </li>
            <li>
              <p>Downloads</p>
              <span>${g}</span>
            </li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),_.refresh()}function w(){c.innerHTML=""}function E(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}a.settings({position:"topRight"});const u=document.getElementById("search-form"),v=u.querySelector('input[name="searchQuery"]');u.addEventListener("submit",async i=>{i.preventDefault();const r=v.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query.",position:"topRight",iconUrl:"./img/error-icon.svg"});return}w(),E();try{const o=await L(r);if(o.hits.length===0){a.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"./img/error-icon.svg"}),l();return}b(o.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{l()}});
//# sourceMappingURL=index.js.map
