import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import productsData from '../data/products.js'
import ProductGrid from '../components/ProductGrid.jsx'
import Filters from '../components/Filters.jsx'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => Array.from(new Set(productsData.map((p) => p.category))),
    []
  )

  const query = searchParams.get('q')?.toLowerCase() ?? ''

  const filtered = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery = !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  const onCategoryChange = (c) => setCategory(c)

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h4 m-0">Products</h2>
        {query && (
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setSearchParams({})}
          >
            Clear search
          </button>
        )}
      </div>

      <Filters
        categories={categories}
        selected={category}
        onChange={onCategoryChange}
      />

      <ProductGrid products={filtered} />
    </div>
  )
}
