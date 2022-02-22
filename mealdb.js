const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value 
    if(searchText == ''){
      alert('please write somthing to display')
    }
    else{
 // console.log(searchText)//chcek value
 searchField.value=''
 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
 `
 // console.log(url)//chcek value
 fetch(url)
 .then(res => res.json())
 .then(data => displaySearchResult(data.meals))
    }
   
}

const displaySearchResult = meals => {
    // console.log(meals)//chcek value
    const searchReault = document.getElementById('search-result')
    // searchReault.innerHTML=''//search result akta dakhanor poray r akta search delay agar ta bad diay new ta dakhava fast oway
    searchReault.textContent=''//search result akta dakhanor poray r akta search delay agar ta bad diay new ta dakhava second oway
    if(meals.length == 0){
      alert('Show no result found')
    }
    else{
      meals.forEach(meal => {
        // console.log(meal)//chcek value
        const div = document.createElement('div')
        div.classList.add('col') 
        div.innerHTML=`    
          <div onclick="loadMealDetalil(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p>${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
      `
      searchReault.appendChild(div)
    });
    }
  
}

const loadMealDetalil = mealId =>{
  // console.log(mealId)//chcek value
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
  console.log(meal)//chcek value
  const mealDetails = document.getElementById('meal-details')
  mealDetails.textContent=''
  const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Str Youtube</a>
  </div>
  `
  mealDetails.appendChild(div)
}
