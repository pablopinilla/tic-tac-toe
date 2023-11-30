const Gameboard = {
    gameBoard : [0, 1, 2, 0, 1, 2, 0, 1, 2]
}

function render(){
    const gameboard = document.querySelector(".gameboard")
    let i = 0;
    Gameboard.gameBoard.forEach(element => {
        const cell = document.createElement("div")
        if (element === 0){
            cell.textContent = ""
        } else if (element === 1){
            cell.textContent = "X"
        } else {
            cell.textContent = "O"
        }

        if (i === 0 || i === 3 || i === 6){
            cell.classList.add("cell")
            cell.classList.add("left")
        } else if (i === 1 || i === 4 || i === 7){
            cell.classList.add("cell")
            cell.classList.add("center")
        } else {
            cell.classList.add("cell")
            cell.classList.add("left")
        }

        if (i === 6 || i === 7 || i === 8) {
            cell.classList.add("last")
        }
        const playCell = function (){
            cell.addEventListener("click", ()=> {
                console.log("OUCH!")
                
            })
            return true }
        gameboard.appendChild(cell)
        i++
        return {playCell}
        
    });
}

const renderThis = render()

renderThis.playCell

