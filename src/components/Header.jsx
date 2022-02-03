import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <nav>
                <div className='nav-wrapper green lighten-1'>
                    <Link to='/' className='brand-logo'>
                        Food Catalog
                    </Link>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
