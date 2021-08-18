const boxes = Array.from(document.getElementsByClassName('box'));
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
        box.style =ticTacBox;
        box.addEventListener('click', boxClicked)
    });
};

gameBody();