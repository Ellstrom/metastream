import './App.css';
import {Component} from "react";

import { FilterContext } from "./components/FilterContext";
import HeroPage from "./components/HeroPage";

class App extends Component {
  render() {
      return (
          <div className="App">
          <header className="App-header">
            <div className="App-intro">
                <HeroPage/>
            </div>
          </header>
        </div>
    );
  }
}
export default App;