import React from 'react';

export default class Round extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="round">
        <div key={index} className="row">
          <div className="col-sm-12 card">
            <div className="card-header">
              <h4>Round {index}</h4>
            </div>

            <div className="card-body">
              dsfq
            </div>


            {/* <div className="roundName"> */}
            {/* </div> */}
            {/* <div className="round">
            {round.map(game => (
            <div key={game.game} className="game">
            <h5>Team1</h5>
            <h3>VS</h3>
            <h5>Team2</h5>
              </div>
            ))}
          </div> */}
          </div>
        </div>


        <style jsx>{`

        `}</style>
      </div>
    );
  }
}
