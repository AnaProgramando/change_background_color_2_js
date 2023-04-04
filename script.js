const hTitle = document.querySelector('h1')
const li = document.querySelectorAll('li')
const suggestionSection = document.querySelector('.suggestion')
const colorPicker = document.querySelector("#color-picker")

const setSuggestionColors = li.forEach(element => {
  let hexElement = element.querySelector('.hexColor')
  element.style.background = element.dataset.color
  hexElement.innerText = element.dataset.color
})

const viewSuggestionColors = li.forEach(element => {
  let hexElement = element.querySelector('.hexColor')

  element.addEventListener('mouseover', () => {
    hexElement.classList.remove('js-inactive')
  })

  element.addEventListener('mouseout', () => {
    hexElement.classList.add('js-inactive')
  })
})

const clickSuggestionColors = li.forEach(element => {
  element.addEventListener('click', () => {
    document.body.style.background = element.dataset.color
    hTitle.style.color = element.dataset.color
    suggestionSection.style.borderColor = element.dataset.color
  })
})


const setColorPicker = colorPicker.addEventListener('change', ()=>{
  const res = colorPicker.querySelector('#color-picker + span')
  document.body.style.background = colorPicker.value
  hTitle.style.color = colorPicker.value
  suggestionSection.style.borderColor = colorPicker.value
  res.innerHTML = `Você escolheu <span class="hexColor">${colorPicker.value}</span>`
})
