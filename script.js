const jokeQuestion = document.querySelector("h3");
const jokeAnswer = document.querySelector("p");
const btn = document.querySelector("button");
getJoke();

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
  
    const question = data.setup;
    const answer = data.punchline;
    console.log(answer);

    showQuestion(question);
    showAnswer(answer)
  } catch (error) {
    console.log("Error: "+error);
  }
};

function showQuestion(question) {
  jokeQuestion.innerText = question;
};

function showAnswer(answer) {
  jokeAnswer.innerText = answer;
};

btn.addEventListener("click", () => {
  getJoke();
});
