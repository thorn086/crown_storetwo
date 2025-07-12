import { categories } from '../../constants/important-constants'
import CategoryItem from '../category-item/category-item'
import './categories-body-styles.scss'

const CategoryBody =()=>{
    return (
        <div className="categories_container">
        {categories.map(( category ) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    )
}

export default CategoryBody