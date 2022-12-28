import React, {useEffect, useMemo, useState} from 'react';
import HeroSidebar from "./HeroSidebar";
import { FilterContext } from "./FilterContext";
import HeroSelection from "./HeroSelection";

const HeroPage = () => {

    const [searchContent, setSearchContent] = useState('');
    const [heroesWith, setHeroesWith] = useState([]);
    const [heroesVs, setHeroesVs] = useState([]);
    const [matchups, setMatchups] = useState([]);

    const providerValue = useMemo(() => (
            {
                searchContent,
                heroesVs,
                setHeroesVs,
                heroesWith,
                setHeroesWith,
                setMatchups,
                setSearchContent,
            }
        ),
        [
            searchContent,
            heroesVs,
            setHeroesVs,
            heroesWith,
            setHeroesWith,
            setMatchups,
            setSearchContent,
        ]
    );

    useEffect( () => {
        async function fetchMatchupData() {
            if (heroesWith.length !== 0 || heroesVs.length !== 0) {
                let heroIdsWith = heroesWith.map(hero => hero.id).join(',');
                let withHeroesUrl = "&withHeroes=" + heroIdsWith;

                let heroIdsVs = heroesVs.map(hero => hero.id).join(',');
                let vsHeroesUrl = "&vsHeroes=" + heroIdsVs;
                const url = '/matchups/vs-and-with/heroes?' + withHeroesUrl + vsHeroesUrl + '&minimumAmountOfGamesForMatchup=0';
                const response = await fetch(url);

                const body = await response.json();
                setMatchups(body);
            } else {
                setMatchups([]);
            }
        }
        fetchMatchupData().then(r => console.log("Matchupdata is updated."));
    }, [heroesWith, heroesVs]);

    return (
        <div>
            <FilterContext.Provider value={providerValue}>
                <div className="grid-container-selection-page">
                    <HeroSelection heroName={(heroesWith.at(0) !== undefined) ? (
                        heroesWith.at(0).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesWith.at(1) !== undefined) ? (
                        heroesWith.at(1).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesWith.at(2) !== undefined) ? (
                        heroesWith.at(2).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesWith.at(3) !== undefined) ? (
                        heroesWith.at(3).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesWith.at(4) !== undefined) ? (
                        heroesWith.at(4).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesVs.at(0) !== undefined) ? (
                        heroesVs.at(0).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesVs.at(1) !== undefined) ? (
                        heroesVs.at(1).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesVs.at(2) !== undefined) ? (
                        heroesVs.at(2).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesVs.at(3) !== undefined) ? (
                        heroesVs.at(3).name
                    ) : (
                        ""
                    )}/>

                    <HeroSelection heroName={(heroesVs.at(4) !== undefined) ? (
                        heroesVs.at(4).name
                    ) : (
                        ""
                    )}/>
                </div>
                <div className="grid-container-hero-page">
                        <div>
                            <HeroSidebar mapName="Mirage"/>
                        </div>
                        <div>
                            <h2>Hero matchups</h2>
                            {matchups.map(matchup =>
                                <div key={matchup.heroName}>
                                    {matchup.heroName} - {matchup.winrateAdvantage} - ({matchup.matchCount})
                                </div>
                            )}
                        </div>
                </div>
            </FilterContext.Provider>
        </div>
    );
};

export default HeroPage;