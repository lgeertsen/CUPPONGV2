export default class Game {
  constructor(round, game) {
    this._team1 = null;
    this._team2 = null;
    this._table = null;
    this._status = "empty";

    this.round = round;
    this.game = game;
  }

  get team1() { return this._team1; }
  set team1(team1) { this._team1 = team1; }

  get team2() { return this._team2; }
  set team2(team2) { this._team2 = team2; }

  get table() { return this._table; }
  set table(table) { this._table = table; }

  get status() { return this._status; }
  set status(status) { this._status = status; }
}
