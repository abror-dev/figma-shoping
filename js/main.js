var elMovLis = document.querySelector('.movie__list')
var elSelYear = document.querySelector('.sel__year')
var elSelRanting = document.querySelector('.sel__ranting')
var elSelCategory = document.querySelector('.sel__category')
var elInp = document.querySelector('.inp_search')


var partMovies = movies.slice(0, 100)
var arrCategory = []
partMovies.forEach((item) => {
  if (arrCategory.includes(item.Categories) == false) {
    arrCategory.push(item.Categories)
  }
})
arrCategory.forEach((item) => {
  var newOptipn = document.createElement('option')
  newOptipn.textContent = item
  newOptipn.value = item
  elSelCategory.appendChild(newOptipn)
})

function addItem(data) {
  elMovLis.innerHTML = ''
  partMovies.forEach((item) => {
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
}
addItem(partMovies)

elSelYear.addEventListener('change', () => {
  elMovLis.innerHTML = ''
  if (elSelYear.value == 'old') {
    addItem(partMovies.sort((a, b) => a.movie_year - b.movie_year));

  } else if (elSelYear.value == 'new') {
    addItem(partMovies.sort((a, b) => b.movie_year - a.movie_year));
  }
  else {
    addItem(partMovies);
  }
})
elSelRanting.addEventListener('change', () => {
  elMovLis.innerHTML = ''
  if (elSelRanting.value == 'min') {
    addItem(partMovies.sort((a, b) => a.imdb_rating - b.imdb_rating));

  } else if (elSelRanting.value == 'max') {
    addItem(partMovies.sort((a, b) => b.imdb_rating - a.imdb_rating));
  }
  else {
    addItem(partMovies);
  }
})

elSelCategory.addEventListener('change', () => {
  if (elSelCategory.value == '') {
    addItem(partMovies);
  }
  else {
    addItem(partMovies.filter((item) => item.Categories == elSelCategory.value));
  }
})
function fnSearch() {
  addItem(partMovies.filter((item) => item.Title.toString().toLowerCase().includes(elInp.value.trim().toLowerCase()) == true));

}