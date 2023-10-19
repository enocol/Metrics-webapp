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
        throw new Error('an exception has occured');
      }
    }

    fetchData();
  }, []);

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="btn-container">
        <BackButton />
      </div>
      <h1 className="team-name">
        {gameData.home_team.full_name.toUpperCase()}
      </h1>

      <div className="heading"></div>

      <div className="statistics">
        <p className="by-team">STATS BY TEAM</p>
        <div className="flex-items">
          <span className="data">Home Score:</span>

          {gameData.home_team_score}
        </div>

        <div className="flex-items">
          <span className="data">Season:</span>

          {gameData.season}
        </div>
        <div className="flex-items">
          <span className="data">Period:</span>

          {gameData.period}
        </div>
        <div className="flex-items">
          <span className="data">Visitor Team Score:</span>

          {gameData.visitor_team_score}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;

