function showbar(){
    const bar = document.querySelector('.sidenav')
    bar.style.display = 'block'
}

function hidebar(){
    const hide = document.querySelector('.sidenav')
    hide.style.display = 'none'

}




function showsign(){
    const bar = document.querySelector('.hidden-sign')
    bar.style.display = 'block'
}

function hidesign(){
    const hide = document.querySelector('.hidden-sign')
    hide.style.display = 'none'

}



//here our slider auto start

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto" ;


4
});
nextbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth" ;
    scrollContainer.scrollLeft += 900;
});
backbtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth" ;
    scrollContainer.scrollLeft -= 900;
});