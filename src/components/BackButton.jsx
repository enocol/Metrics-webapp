import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="backButton-container">
    <Link to="/">
      <i className="fa-solid fa-chevron-left fa-sm" />
    </Link>
  </div>
);

export default BackButton;

