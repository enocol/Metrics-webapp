import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchcategories } from '../redux/CategoriesSlice';
import Header from './Header';
import SearchField from './SearchField';

const Home = () => {
  const category = useSelector((state) => state.category.category.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = (query) => {
    const filtered = category.filter((item) =>
      item.home_team.full_name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearch(filtered);
  };

  useEffect(() => {
    if (category) dispatch(fetchcategories());
  }, []);

  if (search) {
    return (
      <div>
        <Header />
        <SearchField onSearch={handleSearch} />
        <ul className="category-list">
          {search.map((m) => (
            <Link to={`/games/${m.id}`} key={m.id} className="link">
              <li className="list">
                <i className="fa-solid fa-arrow-up fa-rotate-90 fa-xs icon" />
                <article className="full-name">
                  {m.home_team.full_name.toUpperCase()}
                </article>
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
  if (category) {
    return (
      <div>
        <Header />
        <SearchField onSearch={handleSearch} />
        <ul className="category-list">
          {category.map((m) => (
            <Link to={`/games/${m.id}`} key={m.id} className="link">
              <li className="list">
                <i className="fa-solid fa-arrow-up fa-rotate-90 fa-xs icon" />
                <article className="full-name">
                  {m.home_team.full_name.toUpperCase()}
                </article>
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

