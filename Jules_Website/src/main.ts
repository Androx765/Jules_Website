import './style.css'
import { quiz } from './quiz.ts'


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
quiz(document.querySelector(".question") as HTMLElement, document.querySelector(".answers") as HTMLElement)
