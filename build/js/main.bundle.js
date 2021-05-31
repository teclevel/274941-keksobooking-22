(()=>{"use strict";const e={palace:"Дворец",flat:"Квартира",house:"Дом",bungalow:"Бунгало"},t={palace:"10000",flat:"1000",house:"5000",bungalow:"0"},o={lat:"35.68170",lng:"139.75388"},r=document.querySelector(".ad-form"),c=r.querySelector(".ad-form-header"),n=r.querySelectorAll(".ad-form__element"),a=document.querySelector(".map__filters"),l=a.querySelectorAll(".map__filter"),s=a.querySelector(".map__features"),d=e=>{r.classList.toggle("ad-form--disabled",e),c.toggleAttribute("disabled",e),n.forEach((t=>{t.toggleAttribute("disabled",e)}))},u=e=>{a.classList.toggle("map__filters--disabled",e),s.toggleAttribute("disabled",e),l.forEach((t=>{t.toggleAttribute("disabled",e)}))},i=document.querySelector("#card").content.querySelector(".popup"),p=e=>"Escape"===e.key||"Esc"===e.key,m=e=>{const t=document.createElement("div");t.textContent=e,t.style.position="fixed",t.style.zIndex="1000",t.style.top="20px",t.style.left="0",t.style.right="0",t.style.fontSize="32px",t.style.color="yellow",t.style.textAlign="center",t.style.padding="10px 10px",t.style.backgroundColor="red",document.body.append(t),setTimeout((()=>{t.remove()}),3e3)},y="any",v=document.querySelector(".map__filters"),g=v.querySelector("#housing-type"),h=v.querySelector("#housing-price"),f=v.querySelector("#housing-rooms"),b=v.querySelector("#housing-guests"),S=v.querySelectorAll(".map__checkbox"),q=e=>(e=>{const{offer:t}=e;return g.value===t.type||g.value===y})(e)&&(e=>{const{offer:t}=e;return parseInt(f.value)===t.rooms||f.value===y})(e)&&(e=>{const{offer:t}=e;return parseInt(b.value)===t.guests||b.value===y})(e)&&(e=>{const{offer:t}=e;return h.value===h[0].value||h.value===h[1].value&&t.price>1e4&&t.price<=5e4||h.value===h[2].value&&t.price<=1e4||h.value===h[3].value&&t.price>=5e4})(e)&&(e=>{const{offer:t}=e;return(()=>{const e=[];for(let t of S)t.checked&&e.push(t.value);return e})().every((e=>t.features.includes(e)))})(e),k=[],E=t=>{t.filter(q).slice(0,10).forEach((t=>{const{lat:o,lng:r}=t.location,c=L.icon({iconUrl:"./img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),n=L.marker({lat:o,lng:r},{icon:c});n.addTo(A).bindPopup((t=>{const{author:o,offer:r}=t,c=i.cloneNode(!0);c.querySelector(".popup__avatar").src=o.avatar,c.querySelector(".popup__title").textContent=r.title,c.querySelector(".popup__text--address").textContent=r.address,c.querySelector(".popup__text--price").textContent=r.price+" ₽/ночь";const n=r.rooms;let a=" комнат для ";const l=r.guests;let s=" гостей";switch(n%10){case 1:a=" комната для ";break;case 2:case 3:case 4:a=" комнаты для ";break;default:a=" комнат для "}switch(l%10){case 1:s=" гостя";break;default:s=" гостей"}c.querySelector(".popup__text--capacity").textContent=n+a+l+s,c.querySelector(".popup__text--time").textContent="Заезд после "+r.checkin+", выезд до "+r.checkout,c.querySelector(".popup__description").textContent=r.description;const d=c.querySelector(".popup__photos"),u=c.querySelector(".popup__photo");d.removeChild(u),r.photos.forEach((e=>{u.src=e,d.appendChild(u.cloneNode(!0))}));const p=c.querySelector(".popup__features"),m=c.querySelectorAll(".popup__feature"),y=c.querySelector(".popup__feature");return m.forEach((e=>{p.removeChild(e)})),r.features.forEach((e=>{y.className="popup__feature popup__feature--"+e,p.appendChild(y.cloneNode(!0))})),c.querySelector(".popup__type").textContent=e[r.type],c})(t),{keepInView:!0}),k.push(n)}))};d(!0),u(!0);const A=L.map("map-canvas").on("load",(()=>{var e;d(!1),u(!1),e=e=>{var t;E(e),t=_.debounce((()=>E(e)),500),v.addEventListener("change",(()=>{k.forEach((e=>A.removeLayer(e))),t()}))},fetch("https://22.javascript.pages.academy/keksobooking/data").then((e=>e.json())).then(e).catch((()=>{m("Ошибка получения данных"),u(!0)}))})).setView(o,10);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(A);const x=document.querySelector("#address");let w;x.setAttribute("readonly","");const C=e=>{const t=L.icon({iconUrl:"./img/main-pin.svg",iconSize:[50,82],iconAnchor:[25,82]});w=L.marker(e,{draggable:!0,icon:t}),w.addTo(A),x.value=`${w._latlng.lat}, ${w._latlng.lng}`,w.on("moveend",(e=>{const t=e.target.getLatLng();x.value=`${t.lat.toFixed(5)}, ${t.lng.toFixed(5)}`}))};C(o);const j=()=>{w.remove()},I=["gif","jpg","jpeg","png"],N=document.querySelector("#avatar"),T=document.querySelector(".ad-form-header__preview > img"),z=document.createElement("img"),F=document.querySelector("#images"),D=document.querySelector(".ad-form__photo"),$=(e,t)=>{const o=e.files[0],r=o.name.toLowerCase();if(I.some((e=>r.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{t.src=e.result})),e.readAsDataURL(o)}},U=()=>{T.src="img/muffin-grey.svg"},M=()=>{D.innerHTML=""};N.addEventListener("change",(()=>{$(N,T)})),F.addEventListener("change",(()=>{$(F,(D.appendChild(z),z.setAttribute("src",""),z.setAttribute("width","100%"),z.setAttribute("height","100%"),z.style.objectFit="cover",z))}));const O=document.querySelector(".ad-form__submit"),P=document.querySelector(".ad-form__reset"),R=document.querySelector(".ad-form"),V=document.querySelector("#success").content.querySelector(".success").cloneNode(!0);V.classList.add("hidden"),document.body.append(V);const H=document.querySelector("#error").content.querySelector(".error").cloneNode(!0);H.classList.add("hidden"),document.body.append(H);const W=document.querySelector(".error__button"),B=()=>{V.classList.add("hidden"),O.toggleAttribute("disabled",!1),R.reset(),se(),j(),C(o),ae(),document.removeEventListener("click",G),document.removeEventListener("keydown",J),M(),U()},G=()=>{B()},J=e=>{p(e)&&B()},K=()=>{H.classList.add("hidden"),O.toggleAttribute("disabled",!1),document.removeEventListener("keydown",Q)},Q=e=>{p(e)&&K()};W.addEventListener("click",(()=>{K()})),P.addEventListener("click",(e=>{e.preventDefault(),R.reset(),se(),j(),C(o),ae(),M(),U()}));const X=document.querySelector("#type"),Y=document.querySelector("#price"),Z=document.querySelector("#timein"),ee=document.querySelector("#timeout"),te=document.querySelector(".ad-form"),oe=te.querySelector("#room_number"),re=oe.children,ce=te.querySelector("#capacity"),ne=ce.children,ae=()=>{Y.placeholder=t[X.value],Y.min=Y.placeholder};ae(),X.addEventListener("change",(()=>{ae()}));const le=(e,t)=>{e.addEventListener("change",(()=>{t[e.selectedIndex].selected=!0}))};le(Z,ee),le(ee,Z);const se=()=>{for(const e of ne)1!==parseInt(e.value)&&e.setAttribute("disabled","")};var de;se(),oe.addEventListener("change",(()=>{switch(se(),ne[2].setAttribute("disabled",""),oe.value){case re[2].value:ne[0].removeAttribute("disabled");case re[1].value:ne[1].removeAttribute("disabled");case re[0].value:ne[2].removeAttribute("disabled"),ce.value=ne[2].value;break;case re[3].value:ne[3].removeAttribute("disabled"),ce.value=ne[3].value}})),de=()=>{V.classList.remove("hidden"),O.toggleAttribute("disabled",!0),document.addEventListener("click",G),document.addEventListener("keydown",J)},te.addEventListener("submit",(e=>{e.preventDefault(),((e,t,o)=>{fetch("https://22.javascript.pages.academy/keksobooking",{method:"POST",body:o}).then((t=>{t.ok?e():(H.classList.remove("hidden"),O.toggleAttribute("disabled",!0),document.addEventListener("keydown",Q))})).catch((()=>{m("Ошибка отправления данных")}))})((()=>de()),0,new FormData(e.target))}))})();
//# sourceMappingURL=main.bundle.js.map