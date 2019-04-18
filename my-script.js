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

  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  results.forEach((item) => {
    const img = document.createElement('img')
    img.src = item.picture.large

    const p = document.createElement('p')
    p.textContent = item.name.first

    container.appendChild(card)
    card.appendChild(img)
    card.appendChild(p)
  })
  console.log(data)
  })
