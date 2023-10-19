import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from './BackButton';

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
      <div className="name-container">
        <span className="team-name">
          {gameData.home_team.full_name.toUpperCase()}
        </span>
      </div>

      <div className="heading" />

      <div className="statistics">
        <p className="by-team">STATS BY TEAM</p>
        <div className="flex-items">
          <span className="data">Home Score:</span>

          <span className="data">{gameData.home_team_score}</span>
        </div>

        <div className="flex-items">
          <span className="data">Season:</span>
          <span className="data">{gameData.season}</span>
        </div>
        <div className="flex-items">
          <span className="data">Period </span>
          <span className="data">{gameData.period}</span>
        </div>
        <div className="flex-items">
          <span className="data">Visitor Team Score:</span>

          <span className="data">{gameData.visitor_team_score}</span>
        </div>
        <div className="flex-items">
          <span className="data">Team Score:</span>

          <span className="data" />
        </div>
        <div className="flex-items">
          <span className="data">Others:</span>

          <span className="data" />
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
