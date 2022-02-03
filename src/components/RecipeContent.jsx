import { useNavigate } from 'react-router-dom'

export function RecipeContent(props) {
    const {
        idMeal,
        strMeal,
        strArea,
        strCategory,
        strInstructions,
        strMealThumb,
        strYoutube,
    } = props
    const navigate = useNavigate()
    let ingredients = []
    for (let key in props) {
        if (key.includes('strIngredient') && props[key]) {
            ingredients.push(props[key])
        }
    }
    let measures = []
    for (let key in props) {
        if (key.includes('strMeasure') && props[key]) {
            measures.push(props[key])
        }
    }
    return (
        <div className='recipe containter content'>
            <img
                src={strMealThumb}
                alt={strMeal}
                style={{ marginTop: '3rem', maxWidth: '100%' }}
            />
            <h3>{strMeal}</h3>
            <h6>Category: {strCategory}</h6>
            <h6>{strArea ? `Area: ${strArea}` : null}</h6>
            <table className='striped'>
                <thead>
                    <tr>
                        <th>Indredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map((item, i) => {
                        return (
                            <tr key={i}>
                                <th>{ingredients[i]}</th>
                                <th>{measures[i]}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p></p>
            <h5>How to cook:</h5>
            <p>{strInstructions}</p>
            {strYoutube ? (
                <div className='row'>
                    <h5>Watch video on YouTube:</h5>
                    <iframe
                        title={idMeal}
                        width='894'
                        height='503'
                        style={{ maxWidth: '100%' }}
                        src={`https://www.youtube.com/embed/${strYoutube.slice(
                            -11
                        )}`}
                        allowFullScreen
                    />
                </div>
            ) : null}
            <button
                className='btn'
                style={{ marginBottom: '3rem' }}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
        </div>
    )
}
