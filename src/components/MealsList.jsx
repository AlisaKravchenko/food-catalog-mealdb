import { MealsItem } from './MealsItem'
import { useNavigate } from 'react-router-dom'

export function MealList({ meals }) {
    const navigate = useNavigate()
    return (
        <>
            <button
                className='btn'
                style={{ margin: '3rem 0.5rem 1rem' }}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
            <div className='list'>
                {meals.map((meal) => (
                    <MealsItem key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    )
}
