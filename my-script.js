// taking the root div from the index.html
// to use further here in the script and declare it as variable "app"
const app = document.getElementById('root')

// declaring all the variables and divs so I can use them later
// and structure the hierarchy between parents and children

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

const carousel = document.createElement('div')
carousel.setAttribute('class', 'carousel')

const buttonWrapper = document.createElement('div')
buttonWrapper.setAttribute('class', 'button-wrapper')

const slideLeft = document.createElement('img')
slideLeft.setAttribute('class', 'slide-left')
slideLeft.src = "https://img.icons8.com/ios-glyphs/25/000000/chevron-left.png"

const slideRight = document.createElement('img')
slideRight.setAttribute('class', 'slide-right')
slideRight.src = "https://img.icons8.com/ios-glyphs/25/000000/chevron-right.png"

container.appendChild(carousel)
container.appendChild(buttonWrapper)
buttonWrapper.appendChild(slideLeft)
buttonWrapper.appendChild(slideRight)

// fetching the data from the API, decided to only fetch 30 results

fetch("https://randomuser.me/api/?results=30")
  .then((response) => {
    return response.json()
  }).then((data) => {
    // saving the data in a variable so I can easily see what I get and choose what to use
    const results = data.results

    // I use the data to create divs (in this case a class called "card") for each result I get (in this case 30)
    results.forEach((item) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const img = document.createElement('img')
      img.src = item.picture.medium

      const h1 = document.createElement('h1')
      h1.textContent = item.name.first

      const p = document.createElement('p')
      p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

      // to each card I append the children: img, h1 and p
      // which are declared above
      carousel.appendChild(card)
      card.appendChild(img)
      card.appendChild(h1)
      card.appendChild(p)

      // define the width of the carousel so I know how much the cards need to slide
      const carouselWidth = carousel.offsetWidth
      const cardStyle = card.currentStyle || window.getComputedStyle(card)
      const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0])
      const cardCount = 30

      // define when the buttons are able to clicked depending
      // if there is more to show in either direction
      let offset = 0;
      const maxX = -((cardCount / 3) * carouselWidth +
        (cardMarginRight * (cardCount / 3)) -
        carouselWidth - cardMarginRight);

      // the click events that only works if there are cards to show left or right
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
