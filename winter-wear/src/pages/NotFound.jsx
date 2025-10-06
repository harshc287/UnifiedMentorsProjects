import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h2 className="h4">Page not found</h2>
      <p>
        <Link to="/" className="btn btn-primary mt-2">
          Go home
        </Link>
      </p>
    </div>
  )
}
