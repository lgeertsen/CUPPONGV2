import React from 'react';

export default class TeamList extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="main">
        <div id="teams">
          <div id="teamsHeader">
            <div className="id">ID</div>
            <div className="flex-two">TEAM</div>
            <div className="flex-two">PLAYER1</div>
            <div className="flex-two">PLAYER2</div>
            <div className="edit">Edit</div>
            <div className="present">Present</div>
          </div>
          {this.props.teams.map(team => (
            <div className="team" key={team.id}>
              <div className="id">{team.id + 1}</div>
              <div className="flex-two">
                {
                  team.edit
                  ?
                  <input className="form-control" value={team.name} onChange={(e) => this.props.editTeamName(team.id, e)}/>
                  :
                  <h6>{team.name}</h6>
                }

              </div>
              <div className="flex-two">
                {
                  team.edit
                  ?
                  <div>
                    <input className="form-control top"
                      value={team.player1}
                      onChange={(e) => this.props.editPlayer1(team.id, e)}
                    />
                    <input className="form-control"
                      value={team.player1Licence}
                      onChange={(e) => this.props.editPlayer1Licence(team.id, e)}
                    />
                  </div>
                  :
                  <div>
                    <h6>{team.player1}</h6>
                    <small>{team.player1Licence}</small>
                  </div>
                }

              </div>
              <div className="flex-two">
                {
                  team.edit
                  ?
                  <div>
                    <input className="form-control top"
                      value={team.player2}
                      onChange={(e) => this.props.editPlayer2(team.id, e)}
                    />
                    <input className="form-control"
                      value={team.player2Licence}
                      onChange={(e) => this.props.editPlayer2Licence(team.id, e)}
                    />
                  </div>
                  :
                  <div>
                    <h6>{team.player2}</h6>
                    <small>{team.player2Licence}</small>
                  </div>
                }
              </div>
              <div className="edit">
                <button className="btn btn-sm btn-outline-danger"
                  onClick={() => this.props.toggleEdit(team.id)}>
                  {team.edit ? 'Save' : 'Edit'}
                </button>
              </div>
              <div className="present">
                <button className="btn btn-sm btn-info"
                  onClick={() => this.props.togglePresent(team.id)}>
                  {team.present.toString()}
                </button>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          #main {
            width: 100%;
          }
          #teamsHeader,
          #teamsheder div {
            height: auto;
          }
          #teamsHeader {
            width: 100%;
            display: flex;
          }
          #teamsHeader .id,
          #teamsHeader .edit,
          #teamsHeader .present {
            width: 50px;
            text-align: center;
          }
          #teamsHeader .flex-two {
            flex: 1;
          }
          #teams {
            overflow-y: auto;
            overflow-x: hidden;
          }
          .team {
            height: auto;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ecf0f1;
          }
          .team div {
            margin: 2px 0;
          }
          .team .id,
          .team .edit,
          .team .present {
            text-align: center;
            width: 50px;
          }
          .team .edit .btn {
            width: 100%;
          }
          .team .flex-two {
            flex: 2;
            padding: 0 5px;
          }
          .team h6 {
            margin-bottom: 0;
          }
          .form-control.top {
            margin-bottom: 5px;
          }
          `}</style>
        </div>
      );
    }
  }
