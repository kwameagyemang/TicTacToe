const boxes = Array.from(document.getElementsByClassName('box'));
const playScript = document.getElementById('playScript');
const restartButton = document.getElementById(`restartButton`);

const spaces = [];
const player1 = "O";
const player2 = "X";
let currentPlayer;


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
        box.addEventListener('click', boxClicked);
    });
};

const boxClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()) {
            playScript.innerText = `${currentPlayer} has won!`;
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
};



const playerHasWon = () => {
    if(spaces[0] === currentPlayer){
        if (spaces [1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins up top.`);
            return true;
        }
        if (spaces [3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins on the left.`);
            return true;
        }
        if (spaces [4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins diagonally.`);
            return true;
        }

    }
    if(spaces[8] === currentPlayer){
            if (spaces [2] === currentPlayer && spaces[5] === currentPlayer){
                console.log(`${currentPlayer} wins on the right.`);
                return true;
            }
            if (spaces [6] === currentPlayer && spaces[7] === currentPlayer){
                console.log(`${currentPlayer} wins on the buttom.`);
                return true;
            }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces [1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins vertically in the middle.`);
            return true;
        }
        if (spaces [3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins horizontally in the right.`);
            return true;
        }

    }
};



const restart = () => {
    spaces.forEach((space,index) => {
        space[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playScript.innerText = `game time!!!`;
    currentPlayer = player1;

};

restartButton. addEventListener('click', restart);

restart();

gameBody();


