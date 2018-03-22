export default class TournamentClass {
  constructor() {
    this._teams = null;
    this._tree = null;
    this._waitingList = [];
    this._tables = [];
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

  }
}

function random(min, max) {
  return Math.floor(min + (Math.random() * (max - min)));
}
