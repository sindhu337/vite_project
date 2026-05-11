import '../styles/Card.css';

const Card = ({ title, description, email, body, id, type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-id">#{id}</span>
      </div>
      
      <div className="card-body">
        {email && (
          <p className="card-email">
            <strong>Email:</strong> {email}
          </p>
        )}
        
        {description && (
          <p className="card-text">
            <strong>Company:</strong> {description}
          </p>
        )}
        
        {body && (
          <p className="card-text">{body}</p>
        )}
      </div>
      
      <div className="card-footer">
        <span className="card-type">{type}</span>
      </div>
    </div>
  );
};

export default Card;
