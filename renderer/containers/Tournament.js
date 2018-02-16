import React from 'react';

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
          <div id="nowPlaying">Now Playing</div>
          : ''
        }
        {this.props.activeTab == 3 ?
          <div id="history">History</div>
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
            overflow: auto;
          }
        `}</style>
      </div>
    );
  }
}
