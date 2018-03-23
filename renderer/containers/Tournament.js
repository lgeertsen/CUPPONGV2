import React from 'react';

import History from '../containers/History';
import NowPlaying from '../containers/NowPlaying';
import Overview from '../containers/Overview';

export default class Tournament extends React.Component {
  constructor(props) {
    super(props);



    this.state = {

    }
  }

  render() {
    return (
      <div id="tournament">
        {this.props.activeTab == 1 ?
          <div id="overview">
            <Overview tree={this.props.tree}/>
          </div>
          : ''
        }
        {this.props.activeTab == 2 ?
          <div id="nowPlaying">
            <NowPlaying
              tables={this.props.tables}
              finishGame={(game, winner) => this.props.finishGame(game, winner)}
            />
          </div>
          : ''
        }
        {this.props.activeTab == 3 ?
          <div id="history">
            <History history={this.props.history}/>
          </div>
          : ''
        }
        {this.props.activeTab == 4 ?
          <div id="lottery">Lottery</div>
          : ''
        }
        {this.props.activeTab == 5 ?
          <div id="options">Options</div>
          : ''
        }

        <style jsx>{`
          #tournament {
            width: 100%;
            display: flex;
          }
          #tournament div {
            flex: 1 1 auto;
          }
          #overview {
            overflow-y: auto;
          }
          #nowPlaying {
            overflow-y: auto;
          }
          #history {
            overflow-y: auto;
          }
        `}</style>
      </div>
    );
  }
}
