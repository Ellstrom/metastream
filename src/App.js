import './App.css';
import {Component} from "react";

import { FilterContext } from "./components/FilterContext";
import HeroPage from "./components/HeroPage";

class App extends Component {
  state = {
    isLoading: false,
    matchups: [],
    mapName: "abc"
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    const response = await fetch('/matchups/vs-and-with/heroes?vsHeroes=MEDUSA&minimumAmountOfGamesForMatchup=0');
    const body = await response.json();
    this.setState({matchups: body});
    this.setState({isLoading: false});
  }

  render() {
    const {matchups} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {this.state.isLoading &&
                <div>
                  Sidan laddar, lugna ne mä för fan!!
                </div>
            }
            <div className="App-intro">
                <HeroPage matchups={matchups}/>
            </div>
          </header>
        </div>
    );
  }
}
export default App;