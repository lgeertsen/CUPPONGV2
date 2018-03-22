import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      expanded: false
    }
  }

  getClass() {
    let c = "card text-center";
    switch (this.props.game.status) {
      case "waiting":
        c += " border-warning";
        break;
      case "playing":
        c += " border-danger";
        break;
    }
    return c;
  }

  render() {
    return (
      <div id="game" className="col-sm-4">
        <div className={this.getClass()}>
          <div className="card-header bg-transparent" onClick={() => this.setState({expanded: !this.state.expanded})}>
            <h6>{this.props.game.team1 ? this.props.game.team1.id+1 : '...'} VS {this.props.game.team2 ? this.props.game.team2.id+1 : '...'}</h6>
          </div>

          {this.state.expanded ?
            <div className="card-body">
              {this.props.game.team1 ?
                <div>
                  <h6>{this.props.game.team1.name}</h6>
                  <h4>VS</h4>
                  {this.props.game.team2 ?
                    <h6>{this.props.game.team2.name}</h6>
                    :
                    <h6>...</h6>
                  }
                </div>
                :
                <div>
                  <h6>...</h6>
                  <h4>VS</h4>
                  {this.props.game.team2 ?
                    <h6>{this.props.game.team2.name}</h6>
                    :
                    <h6>...</h6>
                  }
                </div>
              }
            </div>
            :
            ''
          }
          {this.props.game.status == "playing" ?
            <div className="card-footer bg-transparent" onClick={() => this.setState({expanded: !this.state.expanded})}>
              <h6>Table {this.props.game.table}</h6>
            </div>
            :
            ''
          }
        </div>


      <style jsx>{`
        .card {
          padding: 0;
          margin-bottom: 15px;
          box-shadow: 0 2px 1px rgba(200,200,200,0.7);
        }
        .card-header,
        .card-footer {
          cursor: pointer;
        }
        .card-header h6,
        .card-footer h6 {
          margin-bottom: 0;
        }
        `}</style>
      </div>
    );
  }
}
