import React, {useEffect, useMemo, useRef, useState} from 'react';
import HeroSidebar from "./HeroSidebar";
import {FilterContext} from "./FilterContext";
import SelectedHero from "./SelectedHero";

const HeroPage = () => {

    const [searchContent, setSearchContent] = useState('');
    const [numGamesLimit, setNumGamesLimit] = useState(1000);
    const [heroesWith, setHeroesWith] = useState([]);
    const [heroesVs, setHeroesVs] = useState([]);
    const [heroesIncluded, setHeroesIncluded] = useState([]);
    const [matchups, setMatchups] = useState([]);
    const inputRef = useRef(null);

    const providerValue = useMemo(() => (
            {
                searchContent,
                numGamesLimit,
                setNumGamesLimit,
                heroesVs,
                setHeroesVs,
                heroesWith,
                setHeroesWith,
                heroesIncluded,
                setHeroesIncluded,
                setMatchups,
                setSearchContent,
                inputRef,
            }
        ),
        [
            searchContent,
            numGamesLimit,
            setNumGamesLimit,
            heroesVs,
            setHeroesVs,
            heroesWith,
            setHeroesWith,
            heroesIncluded,
            setHeroesIncluded,
            setMatchups,
            setSearchContent,
            inputRef
        ]
    );

    useEffect(() => {
        async function fetchMatchupData() {
            if (heroesWith.length !== 0 || heroesVs.length !== 0) {
                let heroIdsWith = heroesWith.map(hero => hero.id).join(',');
                let withHeroesUrl = "&withHeroes=" + heroIdsWith;

                let heroIdsVs = heroesVs.map(hero => hero.id).join(',');
                let vsHeroesUrl = "&vsHeroes=" + heroIdsVs;

                let includedHeroesUrl = "";
                if (heroesIncluded.length > 0) {
                    let heroIdsIncluded = heroesIncluded.map(hero => hero.id).join(',');
                    includedHeroesUrl = "&heroesToInclude=" + heroIdsIncluded;
                }

                let numGamesLimitUrl = "";
                if (numGamesLimit > 0) {
                    numGamesLimitUrl = "&minimumAmountOfGamesForMatchup=" + numGamesLimit;
                }

                const url = '/matchups/vs-and-with/heroes?' + withHeroesUrl + vsHeroesUrl + includedHeroesUrl + numGamesLimitUrl;
                const response = await fetch(url);

                const body = await response.json();
                setMatchups(body);
            } else {
                setMatchups([]);
            }
        }

        fetchMatchupData().then(r => console.log("Matchupdata is updated."));
    }, [heroesWith, heroesVs, heroesIncluded, numGamesLimit]);

    return (
        <div>
            <FilterContext.Provider value={providerValue}>
                <div className="grid-container-selection-page">
                    <SelectedHero type="heroWith" heroName={(heroesWith.at(0) !== undefined) ? (
                        heroesWith.at(0).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroWith" heroName={(heroesWith.at(1) !== undefined) ? (
                        heroesWith.at(1).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroWith" heroName={(heroesWith.at(2) !== undefined) ? (
                        heroesWith.at(2).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroWith" heroName={(heroesWith.at(3) !== undefined) ? (
                        heroesWith.at(3).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroWith" heroName={(heroesWith.at(4) !== undefined) ? (
                        heroesWith.at(4).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroVs" heroName={(heroesVs.at(0) !== undefined) ? (
                        heroesVs.at(0).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroVs" heroName={(heroesVs.at(1) !== undefined) ? (
                        heroesVs.at(1).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroVs" heroName={(heroesVs.at(2) !== undefined) ? (
                        heroesVs.at(2).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroVs" heroName={(heroesVs.at(3) !== undefined) ? (
                        heroesVs.at(3).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroVs" heroName={(heroesVs.at(4) !== undefined) ? (
                        heroesVs.at(4).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroIncluded" heroName={(heroesIncluded.at(0) !== undefined) ? (
                        heroesIncluded.at(0).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroIncluded" heroName={(heroesIncluded.at(1) !== undefined) ? (
                        heroesIncluded.at(1).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroIncluded" heroName={(heroesIncluded.at(2) !== undefined) ? (
                        heroesIncluded.at(2).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroIncluded" heroName={(heroesIncluded.at(3) !== undefined) ? (
                        heroesIncluded.at(3).name
                    ) : (
                        ""
                    )}/>

                    <SelectedHero type="heroIncluded" heroName={(heroesIncluded.at(4) !== undefined) ? (
                        heroesIncluded.at(4).name
                    ) : (
                        ""
                    )}/>
                </div>
                <div className="grid-container-hero-page">
                    <div>
                        <HeroSidebar/>
                    </div>
                    <div>
                        <h2>Hero matchups</h2>
                        {matchups.map(matchup =>
                            <div key={matchup.heroName}>
                                {matchup.heroName} : {matchup.winrateAdvantage} - ({matchup.matchCount})
                            </div>
                        )}
                    </div>
                </div>
            </FilterContext.Provider>
        </div>
    );
};

export default HeroPage;