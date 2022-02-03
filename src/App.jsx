import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Category } from './pages/Category'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Recipe } from './pages/Recipe'

function App() {
    return (
        <>
            <Router basename='/react-food-mealdbAPI'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/recipe/:idMeal' element={<Recipe />} />
                        <Route exact path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
