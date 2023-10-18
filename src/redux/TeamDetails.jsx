import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';

const TeamDetails = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.balldontlie.io/api/v1/games/${id}`,
        );
        setGameData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackButton />
      <h1>{gameData.home_team.full_name}</h1>
    </div>
  );
};

export default TeamDetails;
