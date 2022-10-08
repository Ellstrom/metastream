import './App.css';
import {Component} from "react";

class App extends Component {
  state = {
    isLoading: false,
    matchups: []
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
                  Sidan laddar, lugna ne mä!!
                </div>
            }
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