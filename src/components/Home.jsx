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
  }, []);

  if (category) {
    return (
      <div>
        <Header />
        <ul className="category-list">
          {category.map((m) => (
            <Link to={`/games/${m.id}`} key={m.id} className="link">
              <li className="list">
                <i className="fa-solid fa-arrow-up fa-rotate-90 fa-xs icon" />
                <article className="full-name">{m.home_team.full_name}</article>
                <article>
                  Home score:
                  {m.home_team_score}
                </article>
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
