import React from 'react';

export default class Inscription extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="inscription">
        <div id="sideBar">
          <h4>CUPPONG</h4>
          <div className="btnContainer">
            <button className="btn btn-warning" onClick={() => this.props.loadTeams()}>LOAD</button>
            <button className="btn btn-warning" onClick={() => this.props.saveTeams()}>SAVE</button>
          </div>
          <hr/>
          <h4>EXCEL</h4>
          <div className="btnContainer">
            <button className="btn btn-warning">LOAD</button>
            <button className="btn btn-warning">SAVE</button>
          </div>
        </div>
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
                      <input className="form-control" value={team.player1}/>
                      <input className="form-control" value={team.player1Licence}/>
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
                      <input className="form-control" value={team.player2}/>
                      <input className="form-control" value={team.player2Licence}/>
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
        </div>

        <style jsx>{`
          #inscription {
            width: 100%;
            display: flex;
          }
          #main {
            flex: 1;
          }
          #sideBar {
            background: #ecf0f1;
            width: 300px;
            padding: 10px;
          }
          #sideBar div {
            height: auto;
          }
          #sideBar .btnContainer {
            display: flex;
            justify-content: space-around;
          }
          #sideBar .btnContainer .btn {
            /* flex: 1; */
            width: 45%;
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
        `}</style>
      </div>
    );
  }
}
