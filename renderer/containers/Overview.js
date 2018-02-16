import React from 'react';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="overview">
        <div id="gamesContainer">
          {this.props.tree.map((round, index) => (
            <div key={index} className="round">
              {round.map(game => (
                <div key={game.game} className="game">{game.round + ' ' + game.game}</div>
              ))}
            </div>
          ))}
        </div>

        <style jsx>{`
          #overview {
            /* min-width: 100%; */
            height: 100%;
            display: flex;
            overflow: auto;
            overflow-y: scroll;
          }
          #gamesContainer {
            /* min-width: 100%; */
            height: 100%;
            display: flex;
            flex-direction: row-reverse;
          }
          #gamesContainer div {
            /* height: auto; */
          }
          .round {
            border-bottom: 1px solid #ecf0f1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .game {
            width: 300px;
            max-height: 100px;
            background: #ecf0f1;
            display: block;
            margin: 5px;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }
}
