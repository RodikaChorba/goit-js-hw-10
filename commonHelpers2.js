import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const a="/goit-js-hw-10/assets/alert-icon-29cedda2.svg";const c="/goit-js-hw-10/assets/resolve-icon-ce58e14e.svg",n=document.querySelector(".form");n.addEventListener("submit",m);function m(o){o.preventDefault();const s=o.target.delay.value,i=o.target.state.value,r=new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(s):l(s)},s)});r.then(e=>{t.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:c})}).catch(e=>{t.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:a,iconColor:"#fff"})}),console.log(r)}
//# sourceMappingURL=commonHelpers2.js.map