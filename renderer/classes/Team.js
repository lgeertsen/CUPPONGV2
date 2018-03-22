export default class Team {
  constructor(t) {
    this.id = t.id;
    this.name = t.name;

    this.player1 = t.player1;
    this.player1Licence = t.player1Licence;

    this.player2 = t.player2;
    this.player2Licence = t.player2Licence;

    this.present = t.present;
    this.edit = false;
  }
}
