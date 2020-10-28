import React from 'react'
import './styles.css'

const PlayerList = (props: any) => {
  const { squad } = props

  const goalkeepers = squad.filter((player:any) => player.position === 'Goalkeeper')
  const defenders = squad.filter((player: any) => player.position === 'Defender')
  const midfielders = squad.filter((player: any) => player.position === 'Midfielder')
  const attackers = squad.filter((player: any) => player.position === 'Attacker')

  return (
    <>
      <h2>Goalkeepers</h2>
      <ul>
        {goalkeepers.map((player: any) => {
          return (
            <li key={player.id}>
              <button>
                <span className="name">{player.name}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <h2>Defenders</h2>
      <ul>
        {defenders.map((player: any) => {
          return (
            <li key={player.id}>
              <button>
                <span className="name">{player.name}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <h2>Midfielders</h2>
      <ul>
        {midfielders.map((player: any) => {
          return (
            <li key={player.id}>
              <button>
                <span className="name">{player.name}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <h2>Attackers</h2>
      <ul>
        {attackers.map((player: any) => {
          return (
            <li key={player.id}>
              <button>
                <span className="name">{player.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default PlayerList;
