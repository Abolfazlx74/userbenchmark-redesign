const tablePics = document.querySelectorAll('#table-pic');
const footerGamePics = document.querySelector(".footer-games-pics")



tablePics.forEach(element => {
    let elemntPic = element.querySelector('img') 

    element.addEventListener('mouseenter', () => {
        elemntPic.style.filter = 'grayscale(0)';
    });

    element.addEventListener('mouseleave', () => {
        elemntPic.style.filter = 'grayscale(100)';
    });
});

pictures = Array('YT','bf1','csgo','dota2','fortnite','gtav2','league_of_legends','minecraft','overwatch3','PUBGT','the_witcher_3_wild_hunt','world_of_tanks','world_of_warcraft')

pictures.forEach(element =>{
    footerGamePics.innerHTML += `<div><img src="footer_pics/${element}.png" id="footer-game-pic" draggable ="false"></div>`
})

const footerRightButton = document.getElementById("footer-right-button")
const footerLeftButton = document.getElementById("footer-left-button")
const footerGamesPics = document.querySelector(".footer-games-pics")
footerRightButton.addEventListener("click",()=>{
    console.log(parseInt(window.getComputedStyle(footerGamePics).width))
    outWidth = parseInt(window.getComputedStyle(footerGamePics).width) - window.innerWidth
    console.log(parseInt(window.innerWidth))
    footerGamePics.style.transition = `${outWidth*2}ms`
    if(outWidth>0){
        footerGamesPics.style.left = `-${outWidth}px`
    }
})

footerLeftButton.addEventListener("click",()=>{
    footerGamesPics.style.left = '0px'
})
