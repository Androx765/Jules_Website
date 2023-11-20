import './style.css'
import { questions } from './question.ts'
import { answers } from './answers.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="placeholder">
    </div>
    <div class="quiz-container">
      <div class="question">
      </div>
      <div class="answers">
      </div>
    </div>
  </div>
`
questions(document.querySelector(".question") as HTMLElement)
answers(document.querySelector(".answers") as HTMLElement)
