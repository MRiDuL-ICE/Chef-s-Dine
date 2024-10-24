import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Recipes = ({handleAddToCook}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

   

    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-10 mt-10">
            {
                recipes.map((recipe, idx) => <div key={idx}>
                    <div className="card bg-base-100 shadow-xl flex flex-col  p-2 h-[850px]">
                        <div className="px-4 pt-6">
                            <img src={recipe.image} alt="" className="rounded-lg w-full h-[300px] object-cover" />
                        </div>
                        <div className="card-body p-4 w-full gap-6">
                            <h2 className="card-title">{recipe.recipe_name}</h2>
                            <p className="text-gray-500 w-full">{recipe.description}</p>
                            <div className="-translate-y-6">
                                <h3 className="text-lg font-bold">Ingredients: {recipe.ingredients.length}</h3>
                                {
                                    recipe.ingredients.map((ingredient,idy) => <div key={idy}>
                                        
                                            <li className="pl-6 text-gray-500">{ingredient}</li>
                                     
                                    </div>)
                                }
                                
                            </div>
                            <div className="flex justify-between -translate-y-4">
                                <p className="flex gap-1 items-center"><i className="fa-regular fa-clock"></i>{recipe.preparing_time}</p>
                                <p className="flex gap-1 items-center"><i className="fa-solid fa-fire-flame-curved"></i>{recipe.calories}</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={() => handleAddToCook(recipe)} className="btn btn-primary bg-green-400 text-black border-none hover:bg-slate-200">Want to Cook</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleAddToCook: PropTypes.func.isRequired,
}

export default Recipes;