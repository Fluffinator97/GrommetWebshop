import React, { Component } from "react";
const { Provider, Consumer } = React.createContext(1);

class StageContextProvider extends Component {
  render() {
    return <Provider value={1} >{this.props.children}</Provider>;
  }
}

export { StageContextProvider, Consumer as StageContextConsumer };