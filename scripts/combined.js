// sidenotes.js
document.addEventListener("DOMContentLoaded", function () {
    const sidenotesContainer = document.getElementById("sidenotes");

    if (!sidenotesContainer) {
        console.error("No <div> with ID 'sidenotes' found.");
        return;
    }

    const footnoteSpans = document.querySelectorAll("span[id^='fn-']");
    footnoteSpans.forEach((span, index) => {
        const sidenoteDiv = document.createElement("div");
        sidenoteDiv.classList.add("sidenote");
        sidenoteDiv.id = `sidenote-${index + 1}`;
        sidenoteDiv.innerHTML = span.innerHTML;
        sidenotesContainer.appendChild(sidenoteDiv);
    });
});




$("#select-all").click(function(c){this.checked?$(":checkbox").each(function(){this.checked=!0}):$(":checkbox").each(function(){this.checked=!1})});
function positionSidenotes(){if(window.innerWidth<=768)return;let e=document.querySelectorAll(".footnote-label"),t=document.querySelectorAll(".sidenote");e.forEach((e,n)=>{let o=t[n],i=e.getBoundingClientRect(),l=document.querySelector(".content-wrapper").getBoundingClientRect();o.style.top=`${i.top-l.top}px`})}window.addEventListener("load",positionSidenotes),window.addEventListener("resize",positionSidenotes); 
