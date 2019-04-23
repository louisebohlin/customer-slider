const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

const carousel = document.createElement('div')
carousel.setAttribute('class', 'carousel')

const buttonWrapper = document.createElement('div')
buttonWrapper.setAttribute('class', 'button-wrapper')

const slideLeft = document.createElement ('img')
slideLeft.setAttribute('class', 'slide-left')
slideLeft.src = "https://img.icons8.com/ios-glyphs/25/000000/chevron-left.png"

const slideRight = document.createElement ('img')
slideRight.setAttribute('class', 'slide-right')
slideRight.src = "https://img.icons8.com/ios-glyphs/25/000000/chevron-right.png"

container.appendChild(carousel)
container.appendChild(buttonWrapper)
buttonWrapper.appendChild(slideLeft)
buttonWrapper.appendChild(slideRight)

fetch("https://randomuser.me/api/?results=30")
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
      p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

      carousel.appendChild(card)
      card.appendChild(img)
      card.appendChild(h1)
      card.appendChild(p)

      const carouselWidth = carousel.offsetWidth;
      const cardStyle = card.currentStyle || window.getComputedStyle(card)
      const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
      const cardCount = 30;
      let offset = 0;
      const maxX = -((cardCount / 3) * carouselWidth +
                    (cardMarginRight * (cardCount / 3)) -
                    carouselWidth - cardMarginRight);
      slideLeft.addEventListener("click", function() {
        if (offset !== 0) {
          offset += carouselWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
              }
            })

      slideRight.addEventListener("click", function() {
        if (offset !== maxX) {
          offset -= carouselWidth + cardMarginRight;
            carousel.style.transform = `translateX(${offset}px)`;
                }
            })
    })
  })
