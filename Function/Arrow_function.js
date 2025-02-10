const rockPaperScissors = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if (!choices.includes(playerChoice)) {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }
    
    if (playerChoice === computerChoice) {
        return `It's a tie! Both chose ${playerChoice}.`;
    }
    
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    return winConditions[playerChoice] === computerChoice
        ? `You win! ${playerChoice} beats ${computerChoice}.`
        : `You lose! ${computerChoice} beats ${playerChoice}.`;
};
document.write(rockPaperScissors("rock"));
// OutPut :- will be random, because it's Rock Paper Scissor Game
// you Win! 
// You lose!
// It's a tie!
