export default function Filters({ categories, selected, onChange }) {
  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
      <button
        className={`btn btn-sm ${selected === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => onChange('All')}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          className={`btn btn-sm ${selected === c ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
