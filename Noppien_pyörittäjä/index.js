function updateDice() {    
    const numofDice = document.getElementById("myInput").value;
    const diceContainer = document.getElementById("diceContainer");
    let img = diceContainer.innerHTML = "";
    const diceimages = ["dice_images/dice1.png", "dice_images/dice2.png", "dice_images/dice3.png", "dice_images/dice4.png", "dice_images/dice5.png", "dice_images/dice6.png"];
    
        for (let i = 0; i < numofDice; i++) {
            img = document.createElement("img");
            img.classList.add("images");
            img.src = diceimages[(Math.floor(Math.random() * 6))];
            diceContainer.appendChild(img);
        }
}



