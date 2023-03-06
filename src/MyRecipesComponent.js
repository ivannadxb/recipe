function setMyRecipesComponent ({label,image, calories, ingredients}){
    return(
        <div>
            <div className="container">
<h2>{label}</h2>
            </div>
            <div className="container">
                <img className="tasty" src={image}/>
                </div>

        <ul className="list">
{ingredients.map(ingredient => (
            <li> <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="icon"/> 
            {ingredient}</li>
))}
        </ul>
        <div className="container">
                <p className="par">{calories.toFixed()}</p>
                </div>

        </div>
    )
}