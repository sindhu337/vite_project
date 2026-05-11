import Card from './Card';
import '../styles/CardList.css';

const CardList = ({ items, type, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading {type}...</div>;
  }

  if (error) {
    return <div className="error">Error loading {type}: {error}</div>;
  }

  if (!items || items.length === 0) {
    return <div className="no-data">No {type} available</div>;
  }

  return (
    <div className="card-list">
      <h2 className="list-title">{type}</h2>
      <div className="cards-grid">
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name || item.title}
            description={item.company?.name}
            email={item.email}
            body={item.body}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
