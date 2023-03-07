import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

const MY_ID = "2e39ec95";
const MY_KEY = "c496651d272e30c78d20ad0aaf39524b";


const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState ([]);
const [wordSubmitted,setWordSubmitted] = useState ('avocado');


useEffect ( () => {
  const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits)
}
getRecipe(
  )}, [wordSubmitted])

const myRecipeSearch = (e) => {
  setMySearch (e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (

<div className="App">
<div className="container">
<video autoPlay muted loop>
<source src={video} type="video/mp4"/>
</video>
<h1>Find a Recipe</h1>
</div>

<div className="container">
  <form onSubmit={finalSearch}>
<input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
</input>
</form>
</div>

<div className="container">
  <button>
    <img src="https://img.freepik.com/free-icon/search_318-865771.jpg?size=338&ext=jpg&uid=R83624123&ga=GA1.2.224055333.1676563210&semt=sph" width={40} alt='img' className="icons"/>
  </button>
</div>

<div>
  {myRecipes.map(element => (
    <MyRecipesComponent
    label={element.recipe.label}
    image={element.recipe.image}
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    />
  ))}
</div>

</div>
  );
}

export default App;