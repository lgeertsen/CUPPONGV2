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

  assignTeamToGame(team, round, ga) {
    let assigned = false;
    let i = 0;
    let g = Math.trunc(ga/2);
    if(round == this._tree.length-2) {
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
    } else {
      let match = this._tree[round][g];
      if(match.team1 == null) {
        match.team1 = team;
      } else if(match.tem22 == null) {
        match.team2 = team;
        match.status = "waiting";
        this._waitingList.push(match);
        assigned = true;
      } else {
        console.error("Can't assign player to new game!!! :O");
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
    let g = this._tree[game.round][game.game];
    g.winner = winner;
    g.status = "finished";
    this._history.unshift(g);

    if(game.round == 0) {
      // TODO: Finish tournament
      console.log("Tournament finished");
    } else {
      if(winner == 1) {
        this.assignTeamToGame(g.team1, g.round-1, game.game);
      } else {
        this.assignTeamToGame(g.team2, g.round-1, game.game);
      }

      for(let i in this._tables) {
        let t = this._tables[i];
        if(t.team1 == g.team1 && t.team2 == g.team2) {
          this._tables[i] = null;
        }
      }

      if(this._waitingList.length) {
        let newGame = this._waitingList.shift();
        newGame.table = g.table;
        newGame.status = "playing";

        let assigned = false;
        let i = 0;
        while(!assigned) {
          if(this._tables[i] == null) {
            this._tables[i] = newGame;
            assigned = true;
          }
          i++;
        }
        // this._tables[g.table-1] = newGame;
      } else {
        this._tables.splice(g.table-1, 1);
      }

      console.log(this._tables);
      callback(this._tree, this._tables, this._history);
    }
  }
}

function random(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}
