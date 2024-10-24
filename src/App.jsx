import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import OurRecipe from './components/banner/OurRecipe'
import Recipes from './components/recipes/Recipes'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  const [cooks, setCooks] = useState([])

  const handleAddToCook = (recipe) => {
      const newCooks = [...cooks, recipe];
      const isExist = cooks.find(
        previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
      )
      if(!isExist){
        setCooks(newCooks);
      }
      else{
        alert('Already Exist')
      }
  }

  console.log(cooks);

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <OurRecipe></OurRecipe>
    <section className='flex flex-col md:flex-row w-10/12 mx-auto'>
      <Recipes handleAddToCook={handleAddToCook}></Recipes>
      <Sidebar cooks={cooks}></Sidebar>
    </section>
    </>
  )
}

export default App
