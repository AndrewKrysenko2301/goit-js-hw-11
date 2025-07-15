import{a as f,S as y,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51333362-4829905c1402d27e64b07a684",h="https://pixabay.com/api/";async function L(a){return(await f.get(h,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})).data}const c=document.getElementById("gallery"),p=document.getElementById("loader"),_=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:m})=>`
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
              <span>${m}</span>
            </li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),_.refresh()}function w(){c.innerHTML=""}function E(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const u=document.getElementById("search-form"),P=u.querySelector('input[name="searchQuery"]');u.addEventListener("submit",async a=>{a.preventDefault();const r=P.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}w(),E();try{const o=await L(r);if(o.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l();return}b(o.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{l()}});
//# sourceMappingURL=index.js.map
