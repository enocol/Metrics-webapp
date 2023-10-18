import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="backButton-container">
      <Link to="/">
        <i class="fa-solid fa-less-than fa-lg"></i>
      </Link>
    </div>
  );
};

export default BackButton;
