// Storing votes for two Candidates A and B
let candidateA = 0;
let candidateB = 0;

// 5 voters choice (A or B)
let votes = ["A", "B", "A", "A", "B"];

// Counting votes for each candidate.
for (let vote of votes) {
  if (vote === "A") {
    candidateA++;
  } else if (vote === "B") {
    candidateB++;
  }
}

// Checking Results.
if (candidateA > candidateB) {
  console.log("Candidate A Wins 🏆");
} else if (candidateB > candidateA) {
  console.log("Candidate B Wins 🏆");
} else {
  console.log("It's a Tie 🤝");
}
