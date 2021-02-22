

const searchFood = () => {
    const searchText = document.getElementById('searchField').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //lode data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
}

const displayFoods = foods =>{
    const songContainer = document.getElementById('songContainer');
    foods.forEach( food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col-md-3';
        foodDiv.innerHTML = `

        <div class=" bgColor">
          <img src= "${food.strMealThumb} " alt="" class="imgWidth">
          <h3>${food.strMeal} </h3>
          <button onclick="getIngredient('${food.strMeal}')" class="button"> All Ingredient </button>
        </div>

        `;
        songContainer.appendChild(foodDiv);
    });
}

const getIngredient = Name => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayIngredient(data.meals[0]))
}

const displayIngredient = ingredient => {
    const ingredientDiv = document.getElementById('ingredientInfo');
    console.log(ingredientDiv);
    ingredientDiv.innerHTML = `
    <div class = 'bgColor'>
    <img src="${ingredient.strMealThumb}" alt="" class= "displayImg">
    <h2>${ingredient.strMeal}</h2>
    <h5 class="text-bold"> Ingredients </h5>
    <p>1| ${ingredient.strIngredient1} </p>
    <p>2| ${ingredient.strIngredient2}</p>
    <p>3| ${ingredient.strIngredient3}</p>
    <p>4| ${ingredient.strIngredient4}</p>
    <p>5| ${ingredient.strIngredient5}</p>
    <p>6| ${ingredient.strIngredient6}</p>
    </div>

    `;

};