const cells = document.querySelectorAll(".cell");
const btn = document.querySelector("#btn");
const stat = document.querySelector("#status");


cells.forEach(cell => cell.addEventListener("click", fill));
btn.addEventListener("click", Reset);


let result = ["", "", "", "", "", "", "", "", "",];
let turn = true;//Always the game is starrted by X player.


//function for fill the cells....
function fill(e) {
    const index = this.getAttribute("index");
    if (turn && result[index] === "") {
        e.target.innerHTML = "X";
        result[index] = "X";
        turn = false;
    }
    else if (!turn && result[index] === "") {
        e.target.innerHTML = "O";
        result[index] = "O";
        turn = true;
    }
    else if (result[index] !== "") {
        alert("Position Not Empty!!!");
    }
    checkWinner();//after filling each cell check call the winner condition.
}


//winner checking function..
function checkWinner() {
    if (result[0] === result[1] && result[1] === result[2]) {
        if (result[0] !== "" && result[1] !== "" && result[2] !== "") {
            stat.innerHTML = `${result[0]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[0] == result[3] && result[3] == result[6]) {
        if (result[0] !== "" && result[3] !== "" && result[6] !== "") {
            stat.innerHTML = `${result[0]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[0] == result[4] && result[4] == result[8]) {
        if (result[0] !== "" && result[4] !== "" && result[8] !== "") {
            stat.innerHTML = `${result[0]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[3] == result[4] && result[4] == result[5]) {
        if (result[3] !== "" && result[4] !== "" && result[5] !== "") {
            stat.innerHTML = `${result[3]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[6] == result[7] && result[7] == result[8]) {
        if (result[6] !== "" && result[7] !== "" && result[8] !== "") {
            stat.innerHTML = `${result[6]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[1] == result[4] && result[4] == result[7]) {
        if (result[1] !== "" && result[4] !== "" && result[7] !== "") {
            stat.innerHTML = `${result[1]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[2] == result[5] && result[5] == result[8]) {
        if (result[2] !== "" && result[5] !== "" && result[8] !== "") {
            stat.innerHTML = `${result[2]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (result[2] == result[4] && result[4] == result[6]) {
        if (result[2] !== "" && result[4] !== "" && result[6] !== "") {
            stat.innerHTML = `${result[2]} is the Winner !`;
            setTimeout(1000, Reset);
        }
    }
    else if (!result.includes("")) {
        stat.innerHTML = `Draw!!`;
        setTimeout(1000, Reset);
    }
}


//Reset function.
function Reset(e) {
    for (let i = 0; i < 9; i++) {
        result[i] = "";
    }
    cells.forEach(cell => cell.innerHTML = "");
    stat.innerHTML = `STATUS`;
    turn = true;
}
