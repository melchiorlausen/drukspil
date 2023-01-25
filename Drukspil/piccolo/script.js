const cont = document.getElementById('qst_cont')
const numPlayer = document.getElementById('num_player')
const numPlayerBtn = document.getElementById('num_playerBtn')

// const start = function (num) {
//     return `
//     <div>

//     </div>
//     `
// }
function newCard() {
    cont.innerHTML = spg[0]
}
var num;
numPlayerBtn.addEventListener("click", (e)=>{
    num = numPlayer.value
    cont.innerHTML = `<div id="cont" class="container"></div>`
    for (let i = 0; i < num; i++) {
        cont.innerHTML  += `<input type="text" value="${i}" placeholder="tilføj spiller" id="player${i}"></input><br>`
    }
    cont.innerHTML  += "<button id='playBtn'>Spil</button>"
    
    const playBtn = document.getElementById('playBtn')
    playBtn.addEventListener("click", (e)=> {
        newCard()
    })
})
 

function num_player(params) {
    console.log(params)
}
// text.innerHTML = start()


const text = document.getElementById('cont')