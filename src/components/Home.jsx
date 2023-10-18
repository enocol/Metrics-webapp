import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchcategories } from '../redux/CategoriesSlice';
import Header from './Header';

const Home = () => {
  const category = useSelector((state) => state.category.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(fetchcategories());
  }, [dispatch, category]);

  if (category) {
    return (
      <div className="home">
        <Header />
        <ul className="category-list">
          {category.map((m) => (
            <Link to={`/games/${m.id}`} key={m.id} className="link">
              <li className="list">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up fa-rotate-90 fa-xs" />
                </div>
                <div className="container">
                  <div className="name">{m.home_team.full_name}</div>
                  <div>
                    Home score:
                    {m.home_team_score}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default Home;
