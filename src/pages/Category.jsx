import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getFilteredCategory } from '../api'
import { MealList } from '../components/MealsList'
import { Preloader } from '../components/Preloader'

export function Category() {
    const [meals, setMeals] = useState([])
    const { name } = useParams()
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    }, [name])
    return (
        <>
            {meals && meals.length ? <MealList meals={meals} /> : <Preloader />}
        </>
    )
}
