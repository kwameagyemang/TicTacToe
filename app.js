const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText')

const spaces = [null,null,null,null,null,null,null,null,null]
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;
console.log(boxes);

const gameBody = () => {
    boxes.forEach((box,index) => {
        let ticTacBox = '';
        if (index < 3){
            ticTacBox += `border-bottom: 3px solid var(--grey);`;
        }
        if(index % 3 === 0){
            ticTacBox += `border-right: 3px solid var(--grey);`;

        }
        if(index % 3 === 2){
            ticTacBox += `border-left: 3px solid var(--grey);`;

        }
        if(index > 5){
            ticTacBox += `border-top: 3px solid var(--grey);`;

        }
        box.style = ticTacBox;
        box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id)
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
};



const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if (spaces [1] === currentPlayer && spaces[2] === player){
            console.log(`${currentPlayer} wins up top.`)
            return true;
        }

    }

}

gameBody();


