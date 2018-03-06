import React from 'react';
import Head from 'next/head';

// import TitleBar from '../containers/TitleBar';
import CupPong from '../containers/CupPong';

export default class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"/>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"/> */}
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/style.css" />

          {/* <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script> */}

          {/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
          <script src="../static/jquery.zoomooz.min.js"></script> */}
          {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> */}
        </Head>

        {/* <TitleBar/> */}
        <div id="containerInner">
          <CupPong/>
        </div>


        <style jsx>{`
          #container {
            display: flex;
            flex-direction: column;
            height: calc(100vh);
          }
          #containerInner {
            flex: 1;
            display: flex;
            position: relative;
          }
        `}</style>
        <style jsx global>{`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
        `}</style>
      </div>
    );
  }
}
