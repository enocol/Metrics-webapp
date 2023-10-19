import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () => {
  const category = useSelector((state) => state.category.category.data);

  return (
    <div className="header">
      <h1 className="title">America</h1>

      <div className="season">{category[0].season}</div>
    </div>
  );
};

export default Header;
