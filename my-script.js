const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

const carousel = document.createElement('div')
carousel.setAttribute('class', 'carousel')

const buttonwrapper = document.createElement('div')
buttonwrapper.setAttribute('class', 'buttonwrapper')

const slideleft = document.createElement ('div')
slideleft.setAttribute('class', 'slideleft')

const slideright = document.createElement ('div')
slideright.setAttribute('class', 'slideright')

container.appendChild(carousel)
carousel.appendChild(buttonwrapper)
buttonwrapper.appendChild(slideleft)
buttonwrapper.appendChild(slideright)

fetch("https://randomuser.me/api/?results=10")
.then((response) => {
  return response.json()
}).then((data) => {
  const results = data.results

    results.forEach((item) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const img = document.createElement('img')
      img.src = item.picture.medium

      const h1 = document.createElement('h1')
      h1.textContent = item.name.first

      const p = document.createElement('p')
      p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

      carousel.appendChild(card)
      card.appendChild(img)
      card.appendChild(h1)
      card.appendChild(p)

    })
  })
