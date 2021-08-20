// reference to all of the class of boxes in ans array
const boxes = Array.from(document.getElementsByClassName('box'));
// console.log(boxes)
const gameScript = document.getElementById('gameScript');
const restartButton = document.getElementById(`restartButton`);

const spaces = [];
// shows which player selected
const player1 = "O";
const player2 = "X";
// variable checking to see which player turn it is
let currentPlayer;

// function to iterate through each boxes and the  index
const gameBody = () => {
    boxes.forEach((box,index) => {

        //start of as empty string 
    // boxBorder represents the border style (either 1 or two borders for each)
        let boxBorder = '';
        // means element on top, and if on top, generate border on the buttom
        if (index < 3){
            boxBorder += `border-bottom: 3px solid var(--grey);`;
        }
        // means element on left, and if on left, generate border on the right
        if(index % 3 === 0){
            boxBorder += `border-right: 3px solid var(--grey);`;

        }
        // means element on right so generate border on the left
        if(index % 3 === 2){
            boxBorder += `border-left: 3px solid var(--grey);`;

        }
        // means element on buttom so generate border on the top
        if(index > 5){
            boxBorder += `border-top: 3px solid var(--grey);`;

        }
        
        box.style = boxBorder;
        // add a listener for all the boxes (listen for click)
        box.addEventListener('click', boxClicked);
    });
};

// arrow function to accept and event (e)
// determins what box does when clicked 
// when box is clicked determine which player turn it is
const boxClicked = (e) => {
    // console.log("box was clicked")
    const id = e.target.id;
    // if there is nothing in the box then update the spaces index with current player
    if(!spaces[id]) {
        spaces[id] = currentPlayer;
        // set inner text of the actual box to currrent player (x or o)
        e.target.innerText = currentPlayer;

        if(playerHasWon()) {
            gameScript.innerText = `Hurrah! ${currentPlayer} won!`;
            return;
        }
        // set to turnary (if current player is equal to player1 (O) then make the next box player2 (x)
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
    gameScript.innerText = `lets play!`;
    currentPlayer = player1;

};

restartButton.addEventListener('click', restart);

restart();

gameBody();


// window.alert("Welcome to game of love")
// prompt("Welcome to game of LOVE. type XO to start!")

