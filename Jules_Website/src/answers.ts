export function answers(answersDiv: HTMLElement) {
    const answers = ["Yep", "Nope", "A", "Lol"];

    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => {
            // Handle the click event for each answer button
            console.log(`Selected answer: ${answer}`);
        });
        answersDiv.appendChild(button);
    });
}
  