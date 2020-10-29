import React, { useState, useEffect } from 'react';
import TeamDropdown from './Components/TeamDropdown'
import PlayerList from './Components/PlayerList'
import { InputChangeEvent } from './event-types'
import './App.css';

function App() {
  const authToken = '8d55f4af6fca4ae5b79bbe9c64c6204b'
  const [allTeams, setTeams] = useState<null | Array<object>>(null);
  const [selectedClub, setSelectedClub] = useState<null |  { squad: Array<object>, crest: string }>(null);
  const [loading, setLoading] = useState(true);
  const url = 'http://api.football-data.org/v2/competitions/2021/teams'

  useEffect(() => {
    fetch(url, {
      headers: { 'X-Auth-Token': authToken },
    })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log(`There was a problem. Status Code: ${response.status}`);
          return;
        }
        response.json().then((data) => {
          setTeams(data.teams);
          setLoading(false)
        });
      }
    )
    .catch((err) => {
      console.log('Fetch error', err);
    });
  }, [setTeams])

  const handleChange = (event: InputChangeEvent) => { // todo: event type
    const selectedTeam = event.target.value

    fetch(`https://api.football-data.org/v2/teams/${selectedTeam}/`, {
      headers: { 'X-Auth-Token': '8d55f4af6fca4ae5b79bbe9c64c6204b' },
    })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          return;
        }
        response.json().then((data) => {
          setSelectedClub({
            squad: data.squad,
            crest: data.crestUrl,
          });
          // setLoading(false)
        });
      }
    )
    .catch((err) => {
      console.log('Fetch error', err);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        Team Picker
      </header>

      <div className="container">
        <div>
          { loading
            ? <p>Loading teams...</p> :
            <TeamDropdown allTeams={allTeams} handleChange={handleChange} />
          }
          { selectedClub &&
            <PlayerList club={selectedClub} />
          }
        </div>
        <div className="pitch">
          <p>Pitch</p>
        </div>
      </div>
    </div>
  );
}

export default App;
