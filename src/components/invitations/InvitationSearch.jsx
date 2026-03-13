export default function InvitationSearch() {
  return (
    <div className="search-box">

      <div className="search-field">
        <label>Search keywords</label>
        <input placeholder="Bingo, Yoga, Potluck..." />
      </div>

      <div className="search-field">
        <label>Filter by City</label>
        <input placeholder="Portland, Beaverton..." />
      </div>

      <button className="find-btn">
        Find Events
      </button>

      <div className="category-row">

        <span className="cat active">All Types</span>
        <span className="cat">Social Gatherings</span>
        <span className="cat">Educational</span>
        <span className="cat">Health & Wellness</span>
        <span className="cat">Hobbies</span>

      </div>

    </div>
  );
}