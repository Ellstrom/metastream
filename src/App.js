import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
  state = {
    matchups: []
  };

  async componentDidMount() {
    const response = await fetch('/matchups/vs-and-with/heroes?vsHeroes=MEDUSA&minimumAmountOfGamesForMatchup=0');
    const body = await response.json();
    this.setState({matchups: body});
  }

  render() {
    const {matchups} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>matchups</h2>
              {matchups.map(matchup =>
                  <div key={matchup.heroName}>
                    {matchup.heroName} - {matchup.winrateAdvantage} - ({matchup.matchCount})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;