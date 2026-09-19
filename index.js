import{a as w,S as E,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="30502065-ccf9dfd8afed44df162e05d97",P="https://pixabay.com/api/";async function d(r,t=1,o){const{data:i}=await w(`${P}`,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}});return i}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),u=document.querySelector(".js-load-more"),R=new E(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(r){m.insertAdjacentHTML("beforeend",r.map(({tags:t,webformatURL:o,largeImageURL:i,likes:e,comments:s,views:n,downloads:b})=>`
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
            <p class="properties-value">${n}</p>
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
  `).join("")),R.refresh()}function q(){m.innerHTML=""}function y(){f.classList.add("visible")}function h(){f.classList.remove("visible")}function v(){u.classList.add("visible")}function L(){u.classList.remove("visible")}const $=document.querySelector(".form");let l=1;const p=15;let c="";$.addEventListener("submit",B);u.addEventListener("click",M);async function B(r){if(r.preventDefault(),L(),q(),l=1,c=r.target.elements["search-text"].value.trim(),!c){a.error({message:"Enter search text",position:"topRight"});return}y();try{const t=await d(c,l,p);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),l*p<t.totalHits?v():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){a.error({message:t.message,position:"topRight"})}finally{r.target.reset(),h()}}async function M(){l++,L(),y();try{const r=await d(c,l,p);g(r.hits),l*p<r.totalHits?v():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(r){a.info({message:r.message,position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
