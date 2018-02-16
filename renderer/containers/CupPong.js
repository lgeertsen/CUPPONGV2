import React from 'react';
import electron from 'electron';
import fs from 'fs';

import TitleBar from '../containers/TitleBar';
import Inscription from '../containers/Inscription';
import Tournament from '../containers/Tournament';

export default class CupPong extends React.Component {
  constructor(props) {
    super(props);

    this.remote = electron.remote || false;
    this.ipcRenderer = electron.ipcRenderer || false;
    this.dialog = this.remote.dialog || false;

    this.state = {
      started: false,
      activeTab: 1,
      nbTables: 1,
      teams: [],
      tree: []
    }
  }

  render() {
    return (
      <div id="cupPong">
        <button id="restart" className="btn btn-link" onClick={() => this.setState({started: false, teams: []})}>R</button>
        <TitleBar
          started={this.state.started}
          activeTab={this.state.activeTab}
          switchTab={value => this.switchTab(value)}
        />

        <div id="cupPongContainer">
          {!this.state.started ?
            <Inscription
              start={() => this.start()}

              teams={this.state.teams}
              nbTables={this.state.nbTables}

              addTeam={(team) => this.addTeam(team)}
              addTables={value => this.addTables(value)}
              allPresent={() => this.allPresent()}
              loadTeams={() => this.loadTeams()}
              saveTeams={() => this.saveTeams()}
              togglePresent={(id) => this.togglePresent(id)}
              toggleEdit={(id) => this.toggleEdit(id)}
              editTeamName={(id, e) => this.editTeamName(id, e)}
              editPlayer1={(id, e) => this.editPlayer1(id, e)}
              editPlayer2={(id, e) => this.editPlayer2(id, e)}
              editPlayer1Licence={(id, e) => this.editPlayer1Licence(id, e)}
              editPlayer2Licence={(id, e) => this.editPlayer2Licence(id, e)}
            />
          :
            <Tournament
              activeTab={this.state.activeTab}
              tree={this.state.tree}
            />
          }
        </div>


        <style jsx>{`
          #cupPong {
            width: 100%;
          }
          #cupPongContainer {
            height: calc(100% - 30px);
          }
          #restart {
            position: fixed;
            top: 0;
            left: 0;
          }
        `}</style>
      </div>
    );
  }

  start() {
    if(this.state.teams.length > 2) {
      let teams = [];
      let absent = [];
      for(var i = 0; i < this.state.teams.length; i++) {
        if(this.state.teams[i].present) {
          teams.push(this.state.teams[i]);
        } else {
          absent.push(this.state.teams[i]);
        }
      }
      if(teams.length > 2) {
        this.setState({started: true, teams: teams});
        this.makeTree(teams.length-1);
      }
    }
  }

  makeTree(length) {
    let level = 1;
    let max = 1;
    let count = 0;
    let tree = [];
    tree.push([]);
    for(let i = 0; i < length; i++) {
      // var game = new Game();
      let game = {}
      game.round = level-1;
      game.game = count;
      tree[level-1][count] = game;

      count++;
      if(count == max && i != length-1) {
        level++;
        tree[level-1] = [];
        max *= 2;
        count = 0;
      }
    }
    console.log(tree);
    this.setState({tree: tree});
  }

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////// TITLEBAR ////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  switchTab(value) {
    this.setState({activeTab: value});
  }

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////// SIDEBAR /////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  addTeam(team) {
    team.id = this.state.teams.length;
    let teams = this.state.teams;
    teams.push(team);
    this.setState({teams: teams});
  }

  addTables(value) {
    this.setState({nbTables: value});
  }

  allPresent() {
    let teams = this.state.teams;
    for(let i in teams) {
      teams[i].present = true;
    }
    this.setState({teams: teams});
  }

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////// EDIT TEAMS //////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  togglePresent(id) {
    let teams = this.state.teams;
    teams[id].present = !teams[id].present;
    this.setState({teams: teams});
  }

  toggleEdit(id) {
    let teams = this.state.teams;
    teams[id].edit = !teams[id].edit;
    this.setState({teams: teams});
  }

  editTeamName(id, e) {
    let teams = this.state.teams;
    teams[id].name = e.target.value;
    this.setState({teams: teams});
  }

  editPlayer1(id, e) {
    let teams = this.state.teams;
    teams[id].player1 = e.target.value;
    this.setState({teams: teams});
  }

  editPlayer2(id, e) {
    let teams = this.state.teams;
    teams[id].player2 = e.target.value;
    this.setState({teams: teams});
  }

  editPlayer1Licence(id, e) {
    let teams = this.state.teams;
    teams[id].player1Licence = e.target.value;
    this.setState({teams: teams});
  }

  editPlayer2Licence(id, e) {
    let teams = this.state.teams;
    teams[id].player2Licence = e.target.value;
    this.setState({teams: teams});
  }

  ///////////////////////////////////////////////////////////////////////////////////
  ///////////// LOAD & SAVE FILES ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  loadTeams() {
    this.dialog.showOpenDialog({ filters: [
       { name: 'Cup Pong Teams', extensions: ['cupPong'] }
     ]}, (fileNames) => {
      // fileNames is an array that contains all the selected
      if(fileNames === undefined){
          return;
      }
      var fileName = fileNames[0];
      fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err){
          alert("An error ocurred reading the file :" + err.message);
          return;
        }
        var obj = JSON.parse(data);
        if(obj[0].edit == undefined) {
          for(var i in obj) {
            obj[i].edit = false;
          }
        }
        console.log(obj);
        this.setState({teams: obj});
      });
    });
  }

  saveTeams() {
    this.dialog.showSaveDialog({ defaultPath: '/teams.cupPong',
      filters: [{ name: 'Cup Pong Teams', extensions: ['cupPong'] }]}, (fileName) => {
      if (fileName === undefined){
        return;
      }
      let content = JSON.stringify(this.state.teams);
      fs.writeFile(fileName, content, (err) => {
        if(err){
          alert("An error ocurred creating the file "+ err.message)
        }
      });
    });
  }
}
