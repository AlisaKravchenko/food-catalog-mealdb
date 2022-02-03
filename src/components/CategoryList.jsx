import { CategoryItem } from './CategoryItem'

export function CategoryList({ catalog = [] }) {
    return (
        <div className='list'>
            {catalog.map((item) => (
                <CategoryItem key={item.idCategory} {...item} />
            ))}
        </div>
    )
}
