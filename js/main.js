var elMovLis = document.querySelector('.movie__list')

var partMovies = movies.slice(0, 20)
partMovies.forEach((item) => {
    console.log(item.Title);
    var newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" class="card-img-top" alt="...">
  
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text text1">${item.Categories}</p>
    <p class="card-text text2">${item.imdb_rating}</p>
    <p class="card-text">${item.movie_year}</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary">Watch mov</a>
  </div>
</div>`
    elMovLis.appendChild(newLi)
})