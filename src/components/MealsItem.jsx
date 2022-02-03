import { Link, useParams } from 'react-router-dom'

export function MealsItem(props) {
    const { idMeal, strMeal, strMealThumb } = props
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link className='btn' to={`/recipe/${idMeal}`}>
                    Watch Meal
                </Link>
            </div>
        </div>
    )
}
