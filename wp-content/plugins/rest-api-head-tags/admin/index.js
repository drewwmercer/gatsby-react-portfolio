import React from "react";
import { render } from "react-dom";
import { Provider, createStore } from "@frontity/connect";
import PluginOne from "./components";
import config from "./config";

// Init store and expose it in window.frontity
const store = createStore(config);
window.frontity.state = store.state;
window.frontity.actions = store.actions;

const App = () => (
  <Provider value={store}>
    <PluginOne />
  </Provider>
);

render(<App />, document.getElementById("root"));
