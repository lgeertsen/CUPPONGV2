import React from 'react';

import SideBar from '../components/SideBar';
import TeamList from '../components/TeamList';

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
          <SideBar
            start={() => this.props.start()}
            nbTables={this.props.nbTables}
            addTeam={(team) => this.props.addTeam(team)}
            addTables={value => this.props.addTables(value)}
            allPresent={() => this.props.allPresent()}
            loadTeams={() => this.props.loadTeams()}
            saveTeams={() => this.props.saveTeams()}
          />
        </div>
        <div id="main">
          <TeamList
            teams={this.props.teams}
            togglePresent={(id) => this.props.togglePresent(id)}
            toggleEdit={(id) => this.props.toggleEdit(id)}
            editTeamName={(id, e) => this.props.editTeamName(id, e)}
            editPlayer1={(id, e) => this.props.editPlayer1(id, e)}
            editPlayer2={(id, e) => this.props.editPlayer2(id, e)}
            editPlayer1Licence={(id, e) => this.props.editPlayer1Licence(id, e)}
            editPlayer2Licence={(id, e) => this.props.editPlayer2Licence(id, e)}
          />
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
          }
        `}</style>
      </div>
    );
  }
}
