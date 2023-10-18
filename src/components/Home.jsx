import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchcategories } from '../redux/CategoriesSlice';

const Home = () => {
  const category = useSelector((state) => state.category.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(fetchcategories());
  }, [dispatch]);

  if (category)
    return (
      <div className="home">
        <ul className="category-list">
          {category.map((m) => (
            <Link to={`/games/${m.id}`} key={m.id}>
              <li>{m.home_team.full_name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
};

export default Home;
