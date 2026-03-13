export default function ServiceSearch() {
  return (
    <div className="service-search-box">

      <div className="search-field">
        <label>Search by City</label>
        <input type="text" placeholder="e.g. Springfield, Florida" />
      </div>

      <div className="search-field">
        <label>Category</label>
        <select>
          <option>All Categories</option>
          <option>Hospital</option>
          <option>Caretaker</option>
          <option>Medical Store</option>
          <option>Volunteer</option>
        </select>
      </div>

      <button className="search-btn">
        Find Help
      </button>

    </div>
  );
}