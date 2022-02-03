import { useNavigate } from 'react-router-dom'

export function About() {
    const navigate = useNavigate()
    return (
        <>
            <h5>This is a simple SPA using react, react-router</h5>
            <h5>
                API:{' '}
                <a href='https://www.themealdb.com/api.php'>
                    https://www.themealdb.com/api.php
                </a>
            </h5>
            <button
                className='btn'
                style={{ marginTop: '2rem' }}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
        </>
    )
}
