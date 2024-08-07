const adPart = document.getElementById("ad-part")
window.addEventListener("DOMContentLoaded",()=>{
    adPart.style.height = `${window.innerWidth*.23}px`
})
window.addEventListener('resize', ()=>{
    console.log(window.innerWidth)
    adPart.style.height = `${window.innerWidth*.23}px`
    if (window.innerWidth < 1000) {
        const adDesc = adPart.querySelector("#ad-description");
        adDesc.innerHTML ='Shape your topic into an outline gather refere';
    }
    else{
        const adDesc = adPart.querySelector("#ad-description");
        adDesc.innerHTML ='Shape your topic into an outline,automatically gather references and auto create article';
    }
});

const moreOptionsButton = document.getElementById("header-other-options-button")
const moreOptions = document.querySelector(".header-other-options")
const fadedSettings = document.querySelector(".top-header-bottom-right")
const ttilePart = document.querySelector('.title-part')

function changeOptions() {
    if (moreOptionsButton.src.includes('down.png')) {
        ttilePart.style.marginTop = "152px";
        // ttilePart.style.height = "160px";
        fadedSettings.style.top = "100%";
        moreOptions.style.bottom = "-40%";
        moreOptionsButton.src = "headerpics/2up.png";
    } else {
        ttilePart.style.marginTop = "120px";
        fadedSettings.style.top = "0%";
        moreOptions.style.bottom = "-16%";
        moreOptionsButton.src = "headerpics/2down.png";
    }
}

function checkWindowSize() {
    if (window.innerWidth < 750) {
        moreOptionsButton.addEventListener("click", changeOptions);;
    } else {
        ttilePart.style.marginTop = "";
        fadedSettings.style.top = "";
        moreOptions.style.bottom = "";
        moreOptionsButton.src = "headerpics/2down.png";
    }
}

checkWindowSize();
window.addEventListener('resize', checkWindowSize);


