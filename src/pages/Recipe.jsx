import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getMealById } from '../api'
import { Preloader } from '../components/Preloader'
import { RecipeContent } from '../components/RecipeContent'

export function Recipe() {
    const { idMeal } = useParams()
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        getMealById(idMeal).then((data) => setRecipe(data.meals[0]))
    }, [idMeal])

    return <>{recipe ? <RecipeContent {...recipe} /> : <Preloader />}</>
}
