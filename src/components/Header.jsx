import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () => {
  const { data } = useSelector((state) => state.category.category);

  return (
    <div className="header">
      <div className="icon-container">
        <i className="fa-solid fa-microphone fa-sm icon1" />
        <i className="fa-solid fa-gear fa-sm icon2" />
      </div>
      <div className="season-container">
        <h1 className="title">America</h1>
        <div className="season">{data[0].season}</div>
      </div>
    </div>
  );
};

export default Header;
