import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [allTeams, setTeams] = useState<null | {teams: Array<object>}>(null);
  const url = 'http://api.football-data.org/v2/competitions/2021/teams'
  // url = 'https://api.football-data.org/v2/teams/1044/'

  useEffect(() => {
    fetch(url, {
      headers: { 'X-Auth-Token': '8d55f4af6fca4ae5b79bbe9c64c6204b' },
    })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          setTeams({teams: data.teams});
        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Team Picker
      </header>
      <p>Choose a team</p>

      <select>
        {allTeams && 
          allTeams.teams.map((team:any) => {
            console.log(team)
            return (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          })
        }
      </select>
    </div>
  );
}

export default App;
