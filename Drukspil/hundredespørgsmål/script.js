const cont = document.getElementById('qst_cont')
const text = document.getElementById('cont')
var count = 0;
var used=[]

text.innerHTML = "FÆLLESSKÅL!"     
cont.addEventListener("click", (e)=>{
    let num = Math.floor(Math.random() * spg.length)

    count++;
    if (count % 10 === 0) {
        text.innerHTML = "FÆLLESSKÅL!"        
    } else {
        text.innerHTML = spg[num]
    }
    used.push(...spg.splice(spg.indexOf(spg[num]), 1))
    console.log(used)
    if (spg.length === 0) {
        
        text.innerHTML = "ikke flere spørgsmål, reload for at starte forfra"
    }
})