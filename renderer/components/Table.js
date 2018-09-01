import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  render() {
    return (
      <div id="table">
        <div className="cupTable">
          <h6>Table</h6>
          <h2>{this.props.game.table}</h2>
          <hr/>
          <h4>1/{Math.pow(2, this.props.game.round)}</h4>
          <h6>Finale</h6>
        </div>

        <div className="teamsContainer">
          <div className="teams">
            <div className={this.state.selected == 1 ? "team1 selected" : "team1"} onClick={() => this.setState({selected: 1})}>
              <h3>{this.props.game.team1.id+1}</h3>
              <h5>{this.props.game.team1.name}</h5>
            </div>
            <div className="vs">
              <h1>VS</h1>
              {this.state.selected ?
                <button className="btn btn-warning" onClick={() => {
                  this.props.finishGame(this.props.game, this.state.selected);
                  this.setState({selected: null});
                }}>Validate</button>
                :
                <button className="btn btn-warning disabled">Validate</button>
              }
            </div>
            <div className={this.state.selected == 2 ? "team2 selected" : "team2"} onClick={() => this.setState({selected: 2})}>
              <h3>{this.props.game.team2.id+1}</h3>
              <h5>{this.props.game.team2.name}</h5>
            </div>
          </div>
        </div>


        <style jsx>{`
          div {
            height: auto;
          }
          #table {
            width: 100%;
            display: flex;
            align-items: center;
          }
          #table div {
            display: inline-block;
            text-align: center;
          }
          .cupTable {
            width: 10%;
            border-right: 1px solid rgba(0,0,0,.125);
          }
          .teamsContainer {
            width: 90%;
          }
          .teams {
            width: 100%;
          }
          .teams div {
            display: inline-block;
          }
          .team1,
          .team2 {
            width: 40%;
            margin: 0 2.5%;
            padding: 15px;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 3px;
            cursor: pointer;
          }
          .vs {
            width: 10%;
          }
          .vs h1 {
            font-size: 3em;
          }
          .selected {
            border: 1px solid #28a745;
          }
          `}</style>
        </div>
      );
    }
  }
