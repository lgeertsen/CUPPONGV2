import React from 'react';

import Round from '../components/Round';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="overview">
        <div className="container">
            {this.props.tree.map((round, index) => (
              <div>
                <Round></Round>
              </div>
              // <div key={index} className="row">
              //   <div className="col-sm-12 card">
              //     <div className="card-header">
              //       <h4>Round {index}</h4>
              //     </div>
              //
              //     <div className="card-body">
              //       dsfq
              //     </div>
              //
              //
              //     {/* <div className="roundName"> */}
              //     {/* </div> */}
              //     {/* <div className="round">
              //       {round.map(game => (
              //         <div key={game.game} className="game">
              //           <h5>Team1</h5>
              //           <h3>VS</h3>
              //           <h5>Team2</h5>
              //         </div>
              //       ))}
              //     </div> */}
              //   </div>
              // </div>
            ))}
        </div>


        <style jsx>{`
          div {
            height: auto;
          }
          .container {
            padding-top: 20px;
          }
          .col-sm-12.card {
            margin-bottom: 15px;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}
