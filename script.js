let headContainer = document.querySelector('.head-container');

document.querySelector('#bar').onclick = () => {
    headContainer.classList.toggle('active');
    searchArea.classList.remove('active');
}

let searchArea = document.querySelector('.search-area');

document.querySelector('#search-icon').onclick = () => {
    searchArea.classList.toggle('active');
    headContainer.classList.remove('active');
            
}

window.onscroll = () => {
    searchArea.classList.remove('active');
    headContainer.classList.remove('active');

}

let colorList=document.querySelector(".color-list");
document.querySelector("#bg-btn").onclick = () => {
    colorList.classList.toggle("active");
}
let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach(color =>{
    color.addEventListener("click", ()=>{
        let dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color",dataColor);
    })
})


