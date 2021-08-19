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
        if (spaces [1] === currentPlayer && spaces[2] === currentplayer){
            console.log(`${currentPlayer} wins at top.`)
            return true;
        }
        if (spaces [3] === currentPlayer && spaces[6] === currentplayer){
            console.log(`${currentPlayer} wins on the left.`)
            return true;
        }
        if (spaces [4] === currentPlayer && spaces[8] === currentplayer){
            console.log(`${currentPlayer} wins diagonally.`)
            return true;
        }

    }
    if(spaces[8] === currentPlayer){
            if (spaces [2] === currentPlayer && spaces[5] === currentplayer){
                console.log(`${currentPlayer} wins on the right.`)
                return true;
            }
            if (spaces [6] === currentPlayer && spaces[7] === currentplayer){
                console.log(`${currentPlayer} wins on the buttom.`)
                return true;
            }
    }

};

gameBody();


