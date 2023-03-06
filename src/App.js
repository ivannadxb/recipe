import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';

function App() {

const MY_ID = "2e39ec95";
const MY_KEY = "c496651d272e30c78d20ad0aaf39524b";
const [wordSubmitted,setWordSubmitted] = useState ('avocado');

useEffect ( () => {
  const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits)
}}, [wordSubmitted])

const myRecipeSearch = (e) => {
  setMySearch (e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}


//   const getRecipe = useCallback (async () => {
//   const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
//   const data = await response.json();
//   setMyRecipes(data.hits)
// }, [wordSubmitted])
// useEffect (() => {
//   getRecipe()
// }, [getRecipe])


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
    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="icons"/>
  </button>
</div>

<div>
  {myRecipeSearch.map(element => (
    <setMyRecipesComponent
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
