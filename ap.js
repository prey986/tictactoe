let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgc = document.querySelector(".msgc");
let msg = document.querySelector("#msg");
let turn0 = true;
const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=() => {
    turn0=true;
    enablebox();
    msgc.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn0) {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    });
});
const disablebox = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
} 
const enablebox = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showwin = (Winner) => {
    msg.innerText='Winner is ' + Winner;
    msgc.classList.remove("hide");
    disablebox();
}
const checkwinner = () => {
    for(let pattern of winpat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3) {
                showwin(pos1);
            }
        }
    }
}
resetbtn.addEventListener("click",resetgame);