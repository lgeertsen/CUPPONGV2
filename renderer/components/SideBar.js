import React from 'react';

import AddTeam from '../components/AddTeam';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddTeam: false,
      team: '',
      player1: '',
      player1licence: '',
      player2: '',
      player2licence: ''
    }
  }

  render() {
    return (
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
        <hr/>
        <div id="addTeamContainer" className="btnContainer">
          <button className="btn btn-success"
            onClick={() => this.setState({showAddTeam: !this.state.showAddTeam})}>
            ADD TEAM
          </button>
          { this.state.showAddTeam ?
            <div id="addTeam">
              <AddTeam addTeam={(team) => {this.props.addTeam(team); this.setState({showAddTeam: false})}}/>
            </div> : '' }
        </div>
        <hr/>
        <div className="form-group">
          <label htmlFor="nbTables"><h4>Number of tables</h4></label>
          <select className="form-control" id="nbTables" value={this.props.nbTables} onChange={e => this.props.addTables(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <hr/>
        <div id="allPresent">
          <button className="btn btn-dark" onClick={() => this.props.allPresent()}>All teams present</button>
        </div>
        <hr/>

        <button id="start" className="btn btn-outline-danger btn-lg" onClick={() => this.props.start()}>START</button>


        <style jsx>{`
          #sideBar {
            position: relative;
            background: #ecf0f1;
            width: 100%;
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
          #sideBar #addTeamContainer {
            position: relative;
          }
          #sideBar #addTeamContainer .btn {
            width: 95%;
          }
          #sideBar #addTeam {
            width: 300px;
            /* height: 300px; */
            background: #fff;
            position: absolute;
            right: -305px;
            top: -110px;
            box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3);
            border-radius: 3px;
          }
          #sideBar #addTeam #addTeamForm {
            width: 100%;
            height: 100%;
            padding: 10px;
          }
          #sideBar #addTeam #addTeamForm .btn {
            width: 100%;
          }
          #sideBar #addTeam .arrow {
            position: absolute;
            display: block;
            left: -25;
            width: 15;
            height: 15;
          }

          #sideBar #addTeam .arrow::before {
            position: absolute;
            content: "";
            border-color: transparent;
            border-style: solid;
            right: 0;
            top: 120px;
            border-width: 10px 10px 10px 0;
            border-right-color: #fff;
          }
          .form-group {
            display: flex;
          }
          label, select {
            display: inline-block;
            width: auto;
          }
          label {
            flex: 1;
            margin-top: 5px;
          }
          #allPresent {
            text-align: center;
          }
          #allPresent .btn {
            width: 95%;
          }
          #start {
            position: absolute;
            bottom: 10px;
            width: calc(100% - 20px);
          }
          `}</style>
        </div>
      );
    }
  }
