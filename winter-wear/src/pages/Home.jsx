import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5 fw-bold">Gear up for winter</h1>
      <p className="lead text-muted">
        Stay warm and stylish with premium jackets, boots, knitwear, and accessories.
      </p>
      <Link to="/products" className="btn btn-primary btn-lg mt-3">
        Shop Now
      </Link>
    </div>
  )
}
