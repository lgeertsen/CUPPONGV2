export default class TournamentClass {
  constructor() {
    this._teams = null;
    this._tree = null;
    this._waitingList = [];
    this._tables = [];
    this._history = [];
  }

  get teams() { return this._teams; }
  set teams(teams) { this._teams = teams; }

  get tree() { return this._tree; }
  set tree(tree) { this._tree = tree; }

  get tables() { return this._tables; }
  set tables(tables) { this._tables = tables; }



  reset() {
    this._teams = null;
    this._tree = null;
    this._waitingList = [];
    this._tables = [];
  }



  shuffle(teams) {
    var l = teams.length;
    for(var i = 0; i < l; i++) {
      var index = random(0, l);
      var t = teams[i];
      teams[i] = teams[index];
      teams[index] = t;
    }
    return teams;
  }

  assignTeamsToGame(teams, callback) {
    let g = 0;
    let r = this.tree.length - 1;
    let i = 0;
    while(i < teams.length) {
      let game = this.tree[r][g];
      if(game.team1 == null) {
        game.team1 = teams[i];
        i++;
      } else if(game.team2 == null) {
        game.team2 = teams[i];
        game.status = "waiting";
        i++;
        this._waitingList.push(game);
      } else {
        g++;
        if(g == this.tree[r].length) {
          g = 0;
          r--;
        }
      }
    }
    callback(this._tree);
  }

  assignTeamToGame(team, round) {
    let assigned = false;
    let i = 0;
    while(!assigned) {
      let game = this._tree[round][i];
      if(game.team1 == null) {
        game.team1 = team;
        assigned = true;
      } else if(game.team2 == null) {
        game.team2 = team;
        game.status = "waiting";
        this._waitingList.push(game);
        assigned = true;
      } else {
        i++;
      }
    }
  }

  assignTable(n, callback) {
    for(let i = 0; i < n; i++) {
      let game = this._waitingList.shift();
      game.table = i+1;
      game.status = "playing";
      this.tables.push(game);
    }
    callback(this._tables);
    // return this._tables;
  }

  finishGame(game, winner, callback) {
    if(game.round == 0) {
      // TODO: Finish tournament
      console.log("Tournament finished");
    } else {
      console.log(game.round);
      console.log(game.game);
      console.log(this._tree);
      let g = this._tree[game.round][game.game];
      g.winner = winner;
      g.status = "finished";
      this._history.unshift(g);
      if(winner == 1) {
        this.assignTeamToGame(g.team1, g.round-1);
      } else {
        this.assignTeamToGame(g.team2, g.round-1);
      }

      let newGame = this._waitingList.shift();
      newGame.table = g.table;
      newGame.status = "playing";
      this._tables[g.table-1] = newGame;

      callback(this._tree, this._tables, this._history);
    }
  }
}

function random(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}
