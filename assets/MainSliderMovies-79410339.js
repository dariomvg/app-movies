import{R as h,r as i,_ as m,I as v,j as A,L as j,C as x}from"./index-4e912104.js";import{M as C}from"./MoviesApi-00a42bbc.js";const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAACnRSTlMA/FRcW1dQ4evl1MY0EwAAAFdJREFUOMtjoAVg6kzAIcOxShSnzMIA7DJsUjg1Ka5aaIDDCVKrhEc1DRZNgasW4kgRrFKrCkiVQZiG6QIRnK52GNVCby2EczA7zlzPiTPTs5UnMNAUAABBjjadzt3zAgAAAABJRU5ErkJggg==",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlMA/lRbV0/i5+vtk6nsAAAAWElEQVQ4y2OgLWCtUMAh4yjYgF2CRVCwAJcWQeymMQkKCmPXoigoaDCqZaC0sAoKimDXwiYo6ECCDMI0wi7AdPWopsGiCZiDA3Dm+gScmgpwlS5pAQw0AAAZPRElzYDAnQAAAABJRU5ErkJggg==",M=i.lazy(()=>m(()=>import("./Seccion-98c6a853.js"),["assets/Seccion-98c6a853.js","assets/index-4e912104.js","assets/index-92121b84.css","assets/MoviesApi-00a42bbc.js","assets/seccion-c4bae802.css"]));function R(){const[s,n]=i.useState(0),{movies:l}=C(),{image_url:c}=x(),{handleData:o}=i.useContext(v),a=l.slice(0,5),t=()=>{n(s===a.length-1?0:s+1)},r=()=>{n(s===0?a.length-1:s-1)};i.useEffect(()=>{const e=setInterval(()=>{t()},5e3);return()=>clearInterval(e)},[s]);const d=e=>{o(e)};return A.jsxs("div",{children:[A.jsx("div",{children:a.map((e,g)=>s===g&&A.jsxs("div",{className:"container-movie",children:[A.jsxs("div",{className:"buttons-movies",children:[A.jsx("button",{onClick:r,className:"funciones-btn",children:A.jsx("img",{src:E,width:50,height:50,alt:"imagen flecha adelante"})}),A.jsx("button",{onClick:t,className:"funciones-btn",children:A.jsx("img",{src:p,width:50,height:50,alt:"imagen de flecha atras"})})]}),A.jsx("img",{className:"img-slider",width:"100%",height:"100%",src:c+e.backdrop_path,alt:e.original_title,loading:"lazy"}),A.jsxs("div",{className:"info-movies",children:[A.jsxs("div",{className:"title-votes",children:[A.jsx("h1",{children:e.original_title}),A.jsxs("div",{className:"vote",children:[A.jsx("p",{children:e.vote_average}),A.jsx("p",{className:"icon-estrella",children:"★"})]})]}),A.jsxs("div",{className:"date-button-info",children:[A.jsxs("p",{children:["Release: ",e.release_date]}),A.jsx(j,{onClick:()=>d(e),className:"btn-movie",to:"/movie",children:"Info"}),A.jsx("p",{className:"overview",children:e.overview})]})]})]},e.id))}),A.jsx(i.Suspense,{children:A.jsx(M,{})})]})}const D=h.memo(R);export{D as default};