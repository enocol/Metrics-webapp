import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchcategories } from './redux/CategoriesSlice';
import Home from './components/Home';
import TeamDetails from './redux/TeamDetails';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchcategories());
    }
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<TeamDetails />} />
      </Routes>
    </div>
  );
}

export default App;
