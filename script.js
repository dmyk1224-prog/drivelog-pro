/* ==================================
   DriveLog Pro
   script.js
================================== */

// ----------------------
// スクロールアニメーション
// ----------------------

const targets = document.querySelectorAll(
".card,.feature,.hero img,.numbers div"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

targets.forEach(item=>observer.observe(item));


// ----------------------
// ヘッダー背景変更
// ----------------------

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(255,255,255,.96)";
header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.85)";
header.style.boxShadow="0 5px 15px rgba(0,0,0,.05)";

}

});


// ----------------------
// CTAボタン
// ----------------------

const cta=document.querySelector(".bigButton");

if(cta){

cta.addEventListener("click",()=>{

document
.querySelector("#contact")
.scrollIntoView({

behavior:"smooth"

});

});

}


// ----------------------
// 画像クリック拡大
// ----------------------

const hero=document.querySelector(".hero img");

if(hero){

hero.style.cursor="zoom-in";

hero.addEventListener("click",()=>{

window.open(hero.src,"_blank");

});

}


// ----------------------
// 年号自動更新
// ----------------------

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML=
`© ${new Date().getFullYear()} DriveLog Pro`;

}


// ----------------------
// Service Worker
// ----------------------

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker
.register("service-worker.js")
.then(()=>{

console.log("Service Worker 登録完了");

})
.catch(err=>{

console.log(err);

});

});

}


// ----------------------
// ダークモード（準備）
// ----------------------

const darkButton=document.createElement("button");

darkButton.innerHTML="🌙";

darkButton.style.position="fixed";
darkButton.style.right="20px";
darkButton.style.bottom="20px";
darkButton.style.width="55px";
darkButton.style.height="55px";
darkButton.style.borderRadius="50%";
darkButton.style.border="none";
darkButton.style.cursor="pointer";
darkButton.style.fontSize="22px";
darkButton.style.background="#2563eb";
darkButton.style.color="#fff";
darkButton.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";
darkButton.style.zIndex="9999";

document.body.appendChild(darkButton);

let dark=false;

darkButton.onclick=()=>{

dark=!dark;

if(dark){

document.body.style.background="#0f172a";
document.body.style.color="#ffffff";

document.querySelectorAll(".card,.feature,.numbers div,#contact")
.forEach(el=>{

el.style.background="#1e293b";
el.style.color="#fff";

});

}else{

location.reload();

}

};


// ----------------------
// スクロールTOPボタン
// ----------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.left="20px";
topBtn.style.bottom="20px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#06b6d4";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=
window.scrollY>500
?"block"
:"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==========================
 Loading
===========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},800);

});

/*==========================
 Counter Animation
===========================*/

const numbers=document.querySelectorAll(".effect-card h1");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transform="scale(1.1)";

setTimeout(()=>{

entry.target.style.transform="scale(1)";

},300);

}

});

});

numbers.forEach(item=>{

counterObserver.observe(item);

});
const toggle=document.querySelector(".menu-toggle");

const menu=document.querySelector("#menu");

toggle.onclick=()=>{

menu.classList.toggle("active");

};