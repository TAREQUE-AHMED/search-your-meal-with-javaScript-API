const loadMeals = (searchTExt) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTExt}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeals(data.meals));
}
const displayMeals = (meals) => {
    //console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
  mealsContainer.innerText = '';  
  meals.forEach(meal => {
        //console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModals">
     Details
</button>
        </div>
   </div>
   
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

//id meal
const searchMeal = () => {
  const searchText = document.getElementById('search-field').value;
  searchText.value = '';
  loadMeals(searchText)
  //console.log(searchText);

}
loadMeals('fish');

const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]));
  //console.log(data);
  
}
const displayMealsDetails = meal => {
  document.getElementById('mealsDetailsModalsLabel').innerText = meal.strMeal;
  const detailsMeals = document.getElementById('mealsDetailsModalsBody');
  detailsMeals.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  `;
  
}