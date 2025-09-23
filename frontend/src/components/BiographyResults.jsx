import BiographyCard from './BiographyCard';

function BiographyResults({ bio }) {
  return (
    <div className="results">
      <h2>Your Biography</h2>
      <p className="summary">{bio.bioSummary}</p>

      <div className="card-grid">
        {Object.entries(bio).map(([key, value]) => {
          if (key === 'bioSummary') return null;
          return <BiographyCard key={key} title={key} content={value} />;
        })}
      </div>
    </div>
  );
}

export default BiographyResults;
