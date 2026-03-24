let score = 0;

function generateQuestion() {
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);

    let question = `${a} + ${b} * ${c}`;
    let correct = a + (b * c);

    document.getElementById("question").innerText = question;

    let options = [correct, correct+2, correct-1, correct+3];
    options.sort(() => Math.random() - 0.5);

    let optionsHTML = "";
    options.forEach(opt => {
        optionsHTML += `<button onclick="checkAnswer(${opt}, ${correct})">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected, correct) {
    if(selected === correct) {
        score++;
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = "❌ Wrong! Correct answer is " + correct;
    }

    document.getElementById("score").innerText = "Score: " + score;
    generateQuestion();
}

generateQuestion();