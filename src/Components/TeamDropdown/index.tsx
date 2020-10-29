import React from 'react';

const TeamDropdown = (props:any) => {
  const { allTeams, handleChange } = props;

  const orderedTeams = allTeams.sort(function (a:any, b:any) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    if (nameA < nameB) // sort string ascending
      return -1
    if (nameA > nameB)
      return 1
    return 0 //default return value (no sorting)
  })

  return (
    <>
      <form>
        <label htmlFor="choose-team">Choose a team</label>
        <select onChange={handleChange} id="choose-team">
          <option value="">Choose a team</option>
          {
            orderedTeams.sort().map((team: any) => {
              return (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              )
            })
          }
        </select>
      </form>
    </>
  )
}

export default TeamDropdown;
