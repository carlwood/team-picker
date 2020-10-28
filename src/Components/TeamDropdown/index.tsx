import React from 'react';

const TeamDropdown = (props:any) => {
  const { allTeams, handleChange } = props;

  return (
    <>
      <p>Choose a team</p>
      <select onChange={handleChange}>
        <option value="">Choose a team</option>
        {allTeams &&
          allTeams.teams.map((team: any) => {
            return (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            )
          })
        }
      </select>
    </>
  )
}

export default TeamDropdown;
