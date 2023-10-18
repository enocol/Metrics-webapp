import { Link } from 'react-router-dom';

const BackButton = () => (
  <div className="backButton-container">
    <Link to="/">
      <i className="fa-solid fa-less-than fa-lg" />
    </Link>
  </div>
);

export default BackButton;
