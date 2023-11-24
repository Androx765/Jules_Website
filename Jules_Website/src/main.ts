import './style.css'
import { image, quiz } from './quiz.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
    <div class="image" style="background-image: url('${image}')">
      <!-- This div will have the imported image as its background -->
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
