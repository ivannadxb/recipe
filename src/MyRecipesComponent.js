function MyRecipesComponent ({label,image, calories, ingredients}){
    return(
    <div>
    <div className="container">
<h2>{label}</h2>
    </div>
    <div className="container">
    <img className="tasty" alt="img" src={image}/>
    </div>

    <ul className="list">
{ingredients.map(ingredient => (
    <li> <img src="https://img.freepik.com/free-icon/checked_318-197857.jpg?size=338&ext=jpg&uid=R83624123&ga=GA1.2.224055333.1676563210&semt=sph" alt="img" className="icon"/> 
    {ingredient}</li>
))}
    </ul>
    <div className="container">
<p className="par">{calories.toFixed()}</p>
    </div>
    </div>
    )
}

export default MyRecipesComponent;