import React, { useState } from 'react';
import '../style/tournoi.css';

const initialTeams = [
  'Équipe A',
  'Équipe B',
  'Équipe C',
  'Équipe D',
  'Équipe E',
  'Équipe F',
  'Équipe G',
  'Équipe H',
];

function TournoiALaRonde() {
  const [teams, setTeams] = useState(initialTeams);

  return (
    <div>
      <h2>Structure du tournoi</h2>
      <p>Le tournoi en est un à la ronde, avec deux groupes de 4 équipes. Chaque équipe affronte les autres membres de son groupe (3 matchs garantis). Les 2 premières passent en ronde éliminatoire</p>
      <div className="tournament-structure">
        <div className="pool">
          <h3>Pool A</h3>
          {teams.slice(0, teams.length / 2).map((team, index) => (
            <div key={index} className="team">
              {team}
            </div>
          ))}
        </div>
        <div className="pool">
          <h3>Pool B</h3>
          {teams.slice(teams.length / 2).map((team, index) => (
            <div key={index} className="team">
              {team}
            </div>
          ))}
        </div>
        <div className="bracket">
          <h3>Demi-finales</h3>
          <div className="match">
            <div className="team">1er Pool A vs 2e Pool B</div>
            <div className="team">2e Pool A vs 1er Pool B</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournoiALaRonde;
