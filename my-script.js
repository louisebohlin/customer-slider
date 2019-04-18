const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

fetch("https://randomuser.me/api/?results=10")
.then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {
  const results = data.results

  results.forEach((item) => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const img = document.createElement('img')
    img.src = item.picture.large

    const h1 = document.createElement('h1')
    h1.textContent = item.name.first

    const p = document.createElement('p')
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    container.appendChild(card)
    card.appendChild(img)
    card.appendChild(h1)
    card.appendChild(p)

  })
  console.log(data)
  })
