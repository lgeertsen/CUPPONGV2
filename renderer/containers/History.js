import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="history">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 card">
              <ul className="list-group list-group-flush">
                {this.props.history.map((game, index) => (
                  <li key={index} className="list-group-item">
                    <h3>{game.team1.name} VS {game.team2.name}</h3>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <style jsx>{`
          
        `}</style>
      </div>
    );
  }
}
