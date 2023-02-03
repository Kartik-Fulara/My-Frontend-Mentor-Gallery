function restartGame() {
    choicesBtns.forEach((btn) => {
        btn.classList.remove("selected-by-user");
        btn.classList.remove("selected-by-house");
        btn.classList.remove("winner");
        result.classList.add("hidden");
        if (getFromLocalStorage('mode') === "bonus") {
            if (btn.classList.contains("bonus-mode")) {
                btn.classList.remove("hidden");
            }
            pentagon.classList.remove("hidden");
        } else {
            if (btn.classList.contains("RPS")) {
                btn.classList.remove("hidden");
            }
            triangle.classList.remove("hidden");
        }
        btn.classList.remove("show-result");
    });
}



function getHouseChoice() {

    const mode = getFromLocalStorage('mode');

    let choices = [];
    let random = 0;

    if (mode === "bonus") {
        choices = ["rock", "paper", "scissors", "lizard", "spock"];
        random = Math.floor(Math.random() * 4);
    } else {
        choices = ["rock", "paper", "scissors"];
        random = Math.floor(Math.random() * 2);
    }

    houseChoice = choices[random];

    return choices[random];
}

function getWinner(userChoice, houseChoice) {
    // bonus mode
    if (userChoice === "scissors") {
        if (houseChoice === "paper") {
            winnerChoice = "scissors";
            return "user";
        }
        if (houseChoice === "rock") {
            winnerChoice = "rock";
            return "house";
        }
        if (houseChoice === "lizard") {
            winnerChoice = "scissors";
            return "user";
        }
        if (houseChoice === "spock") {
            winnerChoice = "spock";
            return "house";
        }
    } else if (userChoice === "paper") {
        if (houseChoice === "rock") {
            winnerChoice = "paper";
            return "user";
        }
        if (houseChoice === "scissors") {
            winnerChoice = "scissors";
            return "house";
        }
        if (houseChoice === "lizard") {
            winnerChoice = "lizard";
            return "house";
        }
        if (houseChoice === "spock") {
            winnerChoice = "paper";
            return "user";
        }
    } else if (userChoice === "rock") {
        if (houseChoice === "paper") {
            winnerChoice = "paper";
            return "house";
        }
        if (houseChoice === "scissors") {
            winnerChoice = "rock";
            return "user";
        }
        if (houseChoice === "lizard") {
            winnerChoice = "rock";
            return "user";
        }
        if (houseChoice === "spock") {
            winnerChoice = "spock";
            return "house";
        }
    } else if (userChoice === "lizard") {
        if (houseChoice === "paper") {
            winnerChoice = "lizard";
            return "user";
        }
        if (houseChoice === "scissors") {
            winnerChoice = "scissors";
            return "house";
        }
        if (houseChoice === "rock") {
            winnerChoice = "rock";
            return "house";
        }
        if (houseChoice === "spock") {
            winnerChoice = "lizard";
            return "user";
        }
    } else if (userChoice === "spock") {
        if (houseChoice === "paper") {
            winnerChoice = "paper";
            return "house";
        }
        if (houseChoice === "scissors") {
            winnerChoice = "scissors";
            return "user";
        }
        if (houseChoice === "rock") {
            winnerChoice = "spock";
            return "user";
        }
        if (houseChoice === "lizard") {
            winnerChoice = "lizard";
            return "house";
        }
    }

    return "draw";

}

function updateScore() {
    // Update the score
    if (winner === "user") {
        score = getFromLocalStorage("score");
        score++;
        totalScore.innerHTML = score;
        setToLocalStorage("score", score);
    } else {
        if (score < 0) {
            score = 0;
        } else {
            score = getFromLocalStorage("score");
            score--;
        }
        totalScore.innerHTML = score;
        setToLocalStorage("score", score);
    }

}

function showWinner(winner) {
    if (winner === "user") {
        // Show modal result
        result.classList.remove("hidden");
        result.classList.add("flex");
        setTimeout(() => {
            updateScore();
            result.classList.add("show");
        }, 300);
        // Update the result
        resultText.innerHTML = `YOU WIN`;
    } else if (winner === "house") {
        // Show modal result
        result.classList.remove("hidden");
        result.classList.add("flex");
        setTimeout(() => {
            updateScore();
            result.classList.add("show");
        }, 300);

        // Update the result
        resultText.innerHTML = `YOU LOSE`;
    }

    console.log("winner",winnerChoice);

    choicesBtns.forEach((btn) => {
        if (btn.getAttribute("data-choice") === winnerChoice) {

            console.log(btn.getAttribute("data-choice"));
            btn.classList.add("winner");
        } else  {
            btn.classList.remove("winner");
        }
    });

}



result.addEventListener('click', () => {
    if (result.classList.contains("show")) {
        result.classList.remove("show");
        setTimeout(() => {
            result.classList.remove("flex");
            result.classList.add("hidden");
        }, 300);
    } else {
        result.classList.remove("flex");
        result.classList.add("hidden");
        setTimeout(() => {
            result.classList.add("show");
        }, 300);
    }
    restartGame();
});




// console.log(choicesBtns);

choicesBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log(btn);
        const mode = getFromLocalStorage('mode');
        if (mode === "bonus") {
            pentagon.classList.add("hidden");
        } else {
            triangle.classList.add("hidden");
        }
        userChoice = btn.getAttribute("data-choice");
        let houseChoice = getHouseChoice();
        while (houseChoice === userChoice) {
            houseChoice = getHouseChoice();
        }
        console.log(houseChoice);
        winner = getWinner(userChoice, houseChoice);
        console.log(winner);
        if (!btn.classList.contains("selected-by-user")) {
            btn.classList.add("selected-by-user");
            choicesBtns.forEach((innerBtn) => {
                if (innerBtn !== btn) {
                    innerBtn.classList.add("selected-by-house");
                }
            });
        }

        setTimeout(() => {
            setTimeout(() => {

                choicesBtns.forEach((btn) => {
                    if (btn.getAttribute("data-choice") === houseChoice) {
                        btn.classList.add("show-result");
                    }
                });

                showWinner(winner);
            }, 1000);
        }, 500);
    });


});