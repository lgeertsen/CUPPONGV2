import React from 'react';
import electron from 'electron';
import fs from 'fs';

import Inscription from '../containers/Inscription';

export default class CupPong extends React.Component {
  constructor(props) {
    super(props);

    this.remote = electron.remote || false;
    this.ipcRenderer = electron.ipcRenderer || false;
    this.dialog = this.remote.dialog || false;

    this.state = {
      started: false,
      teams: []
    }
  }

  render() {
    return (
      <div id="cupPong">

        {!this.state.started ?
          <Inscription
            teams={this.state.teams}
            loadTeams={() => this.loadTeams()}
            saveTeams={() => this.saveTeams()}
            togglePresent={(id) => this.togglePresent(id)}
            toggleEdit={(id) => this.toggleEdit(id)}
            editTeamName={(id, e) => this.editTeamName(id, e)}
          />
        :
          ""
        }


        <style jsx>{`
          #cupPong {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

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
