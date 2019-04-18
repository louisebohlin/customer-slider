fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e6ef2cde327f46e3820d0344025b79fc")
.then((response) => {
  console.log(response)
  return response.json()
}).then((data) => {
//Get the author of the first article and log it
  const allArticles = data.articles
  const article1 = data.articles[0]
  const author1 = article1.author //data.articles[0].author

  console.log("allArticles:", allArticles)
  console.log("article1:", article1)
  console.log("author1", author1)

  document.getElementById("firstAuthor").innerHTML = author1

  allArticles.forEach((item) => {
    const divElement = document.createElement ("div")
    divElement.innerHTML = item.description
    document.getElementById("descriptions").appendChild(divElement)
  })



  console.log(data)
})
