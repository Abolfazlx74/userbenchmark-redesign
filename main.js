

const rightTable = document.querySelector(".tested_PCs_table")
const votesTable = document.querySelector(".votes-table")
const votesTable2 = document.querySelector(".votes-table2")
let m = 2
for(let i = 0;i<20;i++){
    m++
    if(m%2==0){
        rightTable.innerHTML += '<tr style="background-color: #ddddddb3"><td class = "first-column" ><a href ="" class = "table-row"><div> 1 min ago</div><div style="white-space: nowrap;">PRO B650-P WIFI (MS-7D78)</div></a><div style="white-space: nowrap;display: flex;align-items: center;margin-left: 23%;color: rgb(68, 67, 67);">Aircraft carrier</div><div style="display: flex;align-items: center;margin-left:15% ;color: rgb(68, 67, 67);">29%</div> </td></tr>'
        votesTable.innerHTML += '<tr style="background-color:#ddddddb3" class="votes-table-row"><td class="votes-table-column"><a href=""><div>↑  Nvidia RTX 4080</div></a><div style="margin-left: 40%;font-size: .9vw;align-self: center;">AUS-User, 22 mins ago.</div></td> </tr>'
        votesTable2.innerHTML += '<tr style="background-color:#ddddddb3" class="votes-table-row"><td class="votes-table-column"><a href=""><div>›  Nvidia RTX 4070S (Super)</div></a><div style="margin-left: 34%;font-size: .9vw;align-self: center;">GPUPro, 1 day ago.</div></td> </tr>'
    }
    else{
        rightTable.innerHTML += '<tr><td class = "first-column" ><a href =""  class = "table-row" ><div> 1 min ago</div><div style="white-space: nowrap;">PRO B650-P WIFI (MS-7D78)</div></a><div style="white-space: nowrap;display: flex;align-items: center;margin-left: 23%;color: rgb(68, 67, 67);">Aircraft carrier</div><div style="display: flex;align-items: center;margin-left:15% ;color: rgb(68, 67, 67);">29%</div> </td></tr>'
        votesTable.innerHTML+= '<tr class="votes-table-row"><td class="votes-table-column"><a href=""><div>↑  Nvidia RTX 4080</div></a><div style="margin-left: 40%;font-size: .9vw;align-self: center;">AUS-User, 22 mins ago.</div></td> </tr>'
        votesTable2.innerHTML+= '<tr class="votes-table-row"><td class="votes-table-column"><a href=""><div>›  Nvidia RTX 4070S (Super)</div></a><div style="margin-left: 34%;font-size: .9vw;align-self: center;">GPUPro, 1 day ago.</div></td> </tr>'
    }
}   

const tableRowFirstPart = document.querySelectorAll(".table-row")
tableRowFirstPart.forEach(element=>{
    element.querySelector('div').style.color = '#337ab7'
    element.addEventListener("mouseover",()=>{
        element.querySelector('div').style.color = 'orange'
    })
        element.addEventListener("mouseout",()=>{
            element.querySelector('div').style.color = '#337ab7'
        })
})

const votesTableRowFirstPart = document.querySelectorAll(".votes-table-column")
votesTableRowFirstPart.forEach(element=>{
    element.querySelector('a').style.color = '#337ab7'
    element.addEventListener("mouseover",()=>{
        element.querySelector('a').style.color = 'orange'
    })
        element.addEventListener("mouseout",()=>{
            element.querySelector('a').style.color = '#337ab7'
        })
})


textElements = document.querySelectorAll(".dynamic-text");
moreTextButtons = document.querySelectorAll(".more-text-button")
moreTexts = document.querySelectorAll(".more-text")
moreTextButtons.forEach((text,index) => {
    text.addEventListener("click",()=>{
        console.log(text.innerHTML)
        if (text.innerHTML == ' read more') {
            moreTexts[index].style.height = `${parseInt(moreTexts[index].scrollHeight)}px`;
            text.innerHTML = "read less"
        }
        else{
            moreTexts[index].style.height = '0px'
            text.innerHTML = " read more"
        }
    })
});







// window.addEventListener('resize', ()=>{
//     if(window.innerWidth > 750 && window.innerWidth < 1100){
//         textElements.forEach(element => {
//             hiddenLetters = 100
//             textElementWidth = element.textContent.length
//             elementText = element.innerHTML
//             const shownLetters =textElementWidth-hiddenLetters 
//             element.innerHTML = elementText.slice(0,shownLetters) + "<a class='more-text'> more ...</a>"
//         });   
//     }
//     if(window.innerWidth > 500 && window.innerWidth < 750){
//         textElements.forEach(element => {
//             hiddenLetters = 200
//             textElementWidth = element.textContent.length
//             elementText = element.innerHTML
//             element.innerHTML = elementText.slice(textElementWidth-hiddenLetters)
//         });   
//     }
// });