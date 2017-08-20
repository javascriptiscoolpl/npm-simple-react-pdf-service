import React from "react";
import ReactDOM from "react-dom";
import spdf from "simple-react-pdf";

class App extends React.Component {
  render() {
    return (
      <div>
        <spdf.SimplePDF file="http://127.0.0.1:3000/2"/>
        <spdf.SimplePDF file="http://127.0.0.1:3000/1"/>
        <spdf.SimplePDF file="http://127.0.0.1:3000/2"/>
      </div>
    );
  }
}

ReactDOM.render( <App/>, document.getElementById('app') );
