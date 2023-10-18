import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="backButton-container">
      <Link to="/">Back</Link>
    </div>
  );
};

export default BackButton;
