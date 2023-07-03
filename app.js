const slideItems = document.querySelectorAll(".slide-item")
const slideRange = document.querySelector(".slide-range")

const moves = [[0, 1, 2], [2, 0, 1], [1, 2, 0]]
let currentPosition = 0

function onPrevious() {
  // currentPosition = (currentPosition + 2) % 3
  // slideItems[0].style.order = `${moves[currentPosition][0]}`
  // slideItems[1].style.order = `${moves[currentPosition][1]}`
  // slideItems[2].style.order = `${moves[currentPosition][2]}`
  // slideBoard.animate({ transform: ['translateX(-66.66%)', 'translateX(-33.33%)'] }, 500)
  moveSlide(2)
}
function onNext() {
  // currentPosition = (currentPosition + 1) % 3
  // slideItems[0].style.order = `${moves[currentPosition][0]}`
  // slideItems[1].style.order = `${moves[currentPosition][1]}`
  // slideItems[2].style.order = `${moves[currentPosition][2]}`
  // slideBoard.animate({ transform: ['translateX(0%)', 'translateX(-33.33%)'] }, 500)
  moveSlide(1)
}

function moveSlide(direction) {
  if (direction !== 1 && direction !== 2) return
  currentPosition = (currentPosition + direction) % 3
  slideItems[0].style.order = `${moves[currentPosition][0]}`
  slideItems[1].style.order = `${moves[currentPosition][1]}`
  slideItems[2].style.order = `${moves[currentPosition][2]}`
  slideRange.animate({ transform: [`translateX(${(direction - 1) * -66.66}%)`, 'translateX(-33.33%)'] }, 500)

}

class MySlider extends HTMLElement {

  static moves = [[0, 1, 2], [2, 0, 1], [1, 2, 0]]

  constructor() {
    super()
    this.currentPosition = 0
  }

  connectedCallback() {

    const shadow = this.attachShadow({ mode: 'open' });

    // append shadow DOM
    shadow.append(
      document.getElementById('my-slider').content.cloneNode(true)
    );

    this.slideItems = shadow.querySelectorAll(".slide-item")
    this.slideRange = shadow.querySelector(".slide-range")
    shadow.querySelector('button').addEventListener("click", this.onNext)
  }
  onNext() {
    console.log("ok *********************************")
  }

}

customElements.define('my-slider', MySlider);