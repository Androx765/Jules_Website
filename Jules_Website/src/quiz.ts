export function quiz(questionDiv: HTMLElement, answersDiv: HTMLElement) {
    document.addEventListener("DOMContentLoaded", function () {

        const questionsAndAnswers = [
            {question: "How big is Garens Cock?", 
            answers: [
                { text: "As big as his Sword", value: 100 },
                { text: "3cm", value: 20 },
                { text: "3mm", value: -69 },
                { text: "-10 bananas", value: 30 },
            ]},
            {question: "Whats 2x2", 
            answers: [
                { text: "420", value: 100 },
                { text: "35", value: 20 },
                { text: "4", value: -69 },
                { text: "26264", value: 30 },
            ]},
            {question: "Who is the coolest guy", 
            answers: [
                { text: "Mark", value: 100 },
                { text: "Max", value: 20 },
                { text: "Rigatoni", value: 50 },
                { text: "Luke", value: -100 },
                { text: "Jules", value: 30 },
            ]},
            //Add more
        ];
    
        //set init question and answers
        let currentQuestionIndex = 0;
        displayQuestionAndAnswers();
    
        function displayQuestionAndAnswers() {
            const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    
            //display question
            questionDiv.textContent = currentQuestion.question;
    
            //display answers
            answersDiv.innerHTML = "";
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button") as HTMLButtonElement;
                button.textContent = answer.text;

                (button as any).value = answer.value;

                button.addEventListener("click", handleAnswerClick);
                answersDiv.appendChild(button);
            });
        }
    
        let totalScore = 0;
    
        function handleAnswerClick(event: MouseEvent) {
            const selectedAnswer = event.target as HTMLButtonElement;
            const value = parseInt(selectedAnswer.value, 10);

            totalScore += value;
    
            currentQuestionIndex++;
            if (currentQuestionIndex < questionsAndAnswers.length) {
                displayQuestionAndAnswers();
                console.log(value)
            } else {
                console.log("Total Score:", totalScore);
                totalScore = 0;
                currentQuestionIndex = 0;
                displayQuestionAndAnswers();
            }
        }
    });
}
  