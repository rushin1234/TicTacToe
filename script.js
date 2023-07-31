
function checkWin(){
    if((box[0].innerHTML=='X' && box[1].innerHTML=='X' && box[2].innerHTML=='X') ||
    (box[3].innerHTML=='X' && box[4].innerHTML=='X' && box[5].innerHTML=='X') ||
    (box[6].innerHTML=='X' && box[7].innerHTML=='X' && box[8].innerHTML=='X') ||
    (box[0].innerHTML=='X' && box[3].innerHTML=='X' && box[6].innerHTML=='X') ||
    (box[1].innerHTML=='X' && box[4].innerHTML=='X' && box[7].innerHTML=='X') ||
    (box[2].innerHTML=='X' && box[5].innerHTML=='X' && box[8].innerHTML=='X') ||
    (box[0].innerHTML=='X' && box[4].innerHTML=='X' && box[8].innerHTML=='X') ||
    (box[2].innerHTML=='X' && box[4].innerHTML=='X' && box[6].innerHTML=='X') ||
    (box[0].innerHTML=='X' && box[1].innerHTML=='X' && box[2].innerHTML=='X')){
        wins.innerHTML='X WIns'
    }else if((box[0].innerHTML=='O' && box[1].innerHTML=='X' && box[2].innerHTML=='X') ||
    (box[3].innerHTML=='O' && box[4].innerHTML=='O' && box[5].innerHTML=='O') ||
    (box[6].innerHTML=='O' && box[7].innerHTML=='O' && box[8].innerHTML=='O') ||
    (box[0].innerHTML=='O' && box[3].innerHTML=='O' && box[6].innerHTML=='O') ||
    (box[1].innerHTML=='O' && box[4].innerHTML=='O' && box[7].innerHTML=='O') ||
    (box[2].innerHTML=='O' && box[5].innerHTML=='O' && box[8].innerHTML=='O') ||
    (box[0].innerHTML=='O' && box[4].innerHTML=='O' && box[8].innerHTML=='O') ||
    (box[2].innerHTML=='O' && box[4].innerHTML=='O' && box[6].innerHTML=='O') ||
    (box[0].innerHTML=='O' && box[1].innerHTML=='O' && box[2].innerHTML=='O')){
        wins.innerHTML='O WIns'
    }
}
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    location.reload()
})
    let turnX="X"
    let cnt=1;
    let box=document.getElementsByClassName('box')
    Array.from(box).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            if(e.target.innerHTML==''){
                if(cnt%2==0){
                    e.target.innerHTML='O'
                    turnforx.innerHTML='X'
                }else{
                    e.target.innerHTML=turnX
                    turnforx.innerHTML='O'
                }
                cnt++
                checkWin()
            }
        })
    })






let turnforx=document.getElementById('turnforx')
let wins=document.getElementById('wins')

