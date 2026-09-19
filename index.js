import{a as w,S as E,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="30502065-ccf9dfd8afed44df162e05d97",P="https://pixabay.com/api/";async function d(r,t=1,o=20){const{data:i}=await w(`${P}`,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}});return i}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),u=document.querySelector(".js-load-more"),R=new E(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(r){m.insertAdjacentHTML("beforeend",r.map(({tags:t,webformatURL:o,largeImageURL:i,likes:e,comments:s,views:l,downloads:b})=>`
  <li class="gallery-item">
    <a href=" ${i}" class="gallery-link">
      <img
        src="${o}"
        alt="${t}"
        class="gallery-image"
      />
      <div class="gallery-item-content">
        <ul class="properties-list">
          <li class="properties-item">
            <p class="properties-title">Likes</p>
            <p class="properties-value">${e}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Views</p>
            <p class="properties-value">${l}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Comments</p>
            <p class="properties-value">${s}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Downloads</p>
            <p class="properties-value">${b}</p>
          </li>
        </ul>
      </div>
    </a>
  </li>  
  `).join("")),R.refresh()}function $(){m.innerHTML=""}function g(){f.classList.add("visible")}function h(){f.classList.remove("visible")}function v(){u.classList.add("visible")}function L(){u.classList.remove("visible")}const q=document.querySelector(".form");let a=1;const p=15;let c="";q.addEventListener("submit",B);u.addEventListener("click",M);async function B(r){if(r.preventDefault(),L(),$(),a=1,c=r.target.elements["search-text"].value.trim(),!c){n.error({message:"Enter search text",position:"topRight"});return}g();const t=await d(c,a,p);try{y(t.hits),a*p<t.totalHits?v():n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(o){n.info({message:o.message,position:"topRight"})}finally{r.target.reset(),h()}}async function M(){a++,L(),g();const r=await d(c,a,p);try{y(r.hits),a*p<r.totalHits?v():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"})}catch(t){n.info({message:t.message,position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
