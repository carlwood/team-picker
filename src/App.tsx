import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [allTeams, setTeams] = useState<null | {teams: Array<object>}>(null);
  const [selectedSquad, setSelectedSquad] = useState<null | { squad: Array<object> }>(null);
  const [loading, setLoading] = useState(true);
  const url = 'http://api.football-data.org/v2/competitions/2021/teams'

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
          setLoading(false)
        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }, [])

  const handleChange = (event: any) => { // todo: event type
    const selectedTeam = event.target.value

    fetch(`https://api.football-data.org/v2/teams/${selectedTeam}/`, {
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
          setSelectedSquad({ squad: data.squad });
          // setLoading(false)
          console.log(data.squad);
          console.log(selectedSquad)
        });
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Team Picker
      </header>

      { loading && 'loading teams...' }
      <p>Choose a team</p>

      <select onChange={handleChange}>
        <option value="">Choose a team</option>
        {allTeams && 
          allTeams.teams.map((team:any) => {
            return (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          })
        }
      </select>

      { selectedSquad && 
        selectedSquad.squad.map((player: any) => {
          return (
            <p key={player.id}>
              {player.position} 
              {player.position && ' | ' }
              {player.name}
            </p>
          )
        })
      }
    </div>
  );
}

export default App;
