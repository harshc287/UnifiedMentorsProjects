import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <div className="text-center text-muted py-5">No products found.</div>
    )
  }

  return (
    <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {products.map((p) => (
        <div className="col" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}
