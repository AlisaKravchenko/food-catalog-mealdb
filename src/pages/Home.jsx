import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../api'
import { CategoryList } from '../components/CategoryList'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

export function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])
    const { search } = useLocation()
    const [value, setValue] = useState(search.split('=')[1] || '')
    const navigate = useNavigate()
    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
            setFilteredCatalog(
                value
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(value.toLowerCase())
                      )
                    : data.categories
            )
        })
    }, [value])

    const handleSearch = (value) => {
        navigate(`/?search=${value}`)
        setValue(value)
    }
    return (
        <>
            <Search cb={handleSearch} initVal={value} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <>
                    {' '}
                    {filteredCatalog.length ? (
                        <CategoryList catalog={filteredCatalog} />
                    ) : (
                        <h4>Nothing found</h4>
                    )}
                </>
            )}
        </>
    )
}
