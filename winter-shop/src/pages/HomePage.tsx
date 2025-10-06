import { useSearchParams } from "react-router-dom";
import { filterProducts } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function HomePage() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? undefined;
  const list = filterProducts(q);

  return (
    <div className="container my-4">
      {q && (
        <div className="mb-3 text-body-secondary">
          Showing results for <span className="fw-semibold">“{q}”</span>
        </div>
      )}
      <div className="row g-3">
        {list.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
