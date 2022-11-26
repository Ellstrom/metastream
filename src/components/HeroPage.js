import React, {useMemo, useState} from 'react';
import HeroSidebar from "./HeroSidebar";
import { FilterContext } from "./FilterContext";
import HeroSelection from "./HeroSelection";

const HeroPage = ({matchups}) => {

    const [searchContent, setSearchContent] = useState('');
    const [isSmokeVisible, setSmokeVisible] = useState(false);
    const [isFlashVisible, setFlashVisible] = useState(false);
    const [isMolotovVisible, setMolotovVisible] = useState(false);
    const [isGrenadeVisible, setGrenadeVisible] = useState(false);
    const [isCTVisible, setCTVisible] = useState(false);
    const [isTVisible, setTVisible] = useState(false);
    const [isStratVisible, setStratVisible] = useState(false);
    const [isAVisible, setAVisible] = useState(false);
    const [isMidVisible, setMidVisible] = useState(false);
    const [isBVisible, setBVisible] = useState(false);
    const [isYardVisible, setYardVisible] = useState(false);
    const [isRampVisible, setRampVisible] = useState(false);
    const [isVentVisible, setVentVisible] = useState(false);
    const [isValueOneVisible, setValueOneVisible] = useState(false);
    const [isValueTwoVisible, setValueTwoVisible] = useState(false);
    const [isValueThreeVisible, setValueThreeVisible] = useState(false);
    const [isValueFourVisible, setValueFourVisible] = useState(false);
    const [isValueFiveVisible, setValueFiveVisible] = useState(false);

    const providerValue = useMemo(() => (
            {
                searchContent,
                isSmokeVisible,
                isFlashVisible,
                isMolotovVisible,
                isGrenadeVisible,
                isCTVisible,
                isTVisible,
                isStratVisible,
                isAVisible,
                isMidVisible,
                isBVisible,
                isYardVisible,
                isRampVisible,
                isVentVisible,
                isValueOneVisible,
                isValueTwoVisible,
                isValueThreeVisible,
                isValueFourVisible,
                isValueFiveVisible,
                setSearchContent,
                setSmokeVisible,
                setFlashVisible,
                setMolotovVisible,
                setGrenadeVisible,
                setCTVisible,
                setTVisible,
                setStratVisible,
                setAVisible,
                setMidVisible,
                setBVisible,
                setYardVisible,
                setRampVisible,
                setVentVisible,
                setValueOneVisible,
                setValueTwoVisible,
                setValueThreeVisible,
                setValueFourVisible,
                setValueFiveVisible
            }
        ),
        [
            searchContent,
            isSmokeVisible,
            isFlashVisible,
            isMolotovVisible,
            isGrenadeVisible,
            isCTVisible,
            isTVisible,
            isStratVisible,
            isAVisible,
            isMidVisible,
            isBVisible,
            isYardVisible,
            isRampVisible,
            isVentVisible,
            isValueOneVisible,
            isValueTwoVisible,
            isValueThreeVisible,
            isValueFourVisible,
            isValueFiveVisible,
            setSearchContent,
            setSmokeVisible,
            setFlashVisible,
            setMolotovVisible,
            setGrenadeVisible,
            setCTVisible,
            setTVisible,
            setStratVisible,
            setAVisible,
            setMidVisible,
            setBVisible,
            setYardVisible,
            setRampVisible,
            setVentVisible,
            setValueOneVisible,
            setValueTwoVisible,
            setValueThreeVisible,
            setValueFourVisible,
            setValueFiveVisible
        ]
    );

    return (
        <div>
            <FilterContext.Provider value={providerValue}>
                <div className="grid-container-selection-page">
                    <HeroSelection heroName="heroWith1"/>
                    <HeroSelection heroName="heroWith2"/>
                    <HeroSelection heroName="heroWith3"/>
                    <HeroSelection heroName="heroWith4"/>
                    <HeroSelection heroName="heroWith5"/>

                    <HeroSelection heroName="heroVs1"/>
                    <HeroSelection heroName="heroVs2"/>
                    <HeroSelection heroName="heroVs3"/>
                    <HeroSelection heroName="heroVs4"/>
                    <HeroSelection heroName="heroVs5"/>
                </div>
                <div className="grid-container-hero-page">
                        <div>
                            <HeroSidebar mapName="Mirage"/>
                        </div>
                        <div>
                            <h2>matchups</h2>
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