import React from 'react';

export default class AddTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: '',
      player1: '',
      player1licence: '',
      player2: '',
      player2licence: ''
    }
  }

  addTeam() {
    if(this.state.team != '' && this.state.player1 != '' && this.state.player2 != '') {
      let team = {
        name: this.state.team,
        player1: this.state.player1,
        player1Licence: this.state.player1licence,
        player2: this.state.player2,
        player2Licence: this.state.player2licence,
        edit: false,
        present: true
      }
      this.props.addTeam(team);
      this.setState({
        team: '',
        player1: '',
        player1licence: '',
        player2: '',
        player2licence: ''
      });
    }
  }

  render() {
    return (
      <div id="addTeam">
        <div className="arrow"></div>
        <div id="addTeamForm">
          <div className="form-group">
            <h6>Team name</h6>
            <input className="form-control"
              type="text"
              value={this.state.team}
              onChange={(e) => this.setState({team: e.target.value})}
            />
          </div>
          <div className="form-group">
            <h6>Player 1</h6>
            <input className="form-control"
              type="text"
              value={this.state.player1}
              onChange={(e) => this.setState({player1: e.target.value})}
            />
          </div>
          <div className="form-group">
            <h6>Player 1 licence</h6>
            <input className="form-control"
              type="text"
              value={this.state.player1licence}
              onChange={(e) => this.setState({player1licence: e.target.value})}
            />
          </div>
          <div className="form-group">
            <h6>Player 2</h6>
            <input className="form-control"
              type="text"
              value={this.state.player2}
              onChange={(e) => this.setState({player2: e.target.value})}
            />
          </div>
          <div className="form-group">
            <h6>Player 2 licence</h6>
            <input className="form-control"
              type="text"
              value={this.state.player2licence}
              onChange={(e) => this.setState({player2licence: e.target.value})}
            />
          </div>
          <button className="btn btn-info" onClick={() => this.addTeam()}>ADD TEAM</button>
        </div>


      <style jsx>{`
        #addTeam {
          width: 100%;
          /* height: 300px; */
          background: #fff;
          box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3);
          border-radius: 3px;
        }
        #addTeam #addTeamForm {
          width: 100%;
          height: 100%;
          padding: 10px;
        }
        #addTeam #addTeamForm .btn {
          width: 100%;
        }
        #addTeam .arrow {
          position: absolute;
          display: block;
          left: -25;
          width: 15;
          height: 15;
        }

        #addTeam .arrow::before {
          position: absolute;
          content: "";
          border-color: transparent;
          border-style: solid;
          right: 0;
          top: 120px;
          border-width: 10px 10px 10px 0;
          border-right-color: #fff;
        }
        `}</style>
      </div>
    );
  }
}
