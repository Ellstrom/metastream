import React, {useContext, useState} from 'react'
import {Button} from 'react-bootstrap'
import {FilterContext} from "./FilterContext";
import {Checkbox} from "semantic-ui-react";
import {LocationConfig} from "../config/LocationConfig";
import {FormControl} from "react-bootstrap";
import HeroSearch from "./HeroSearch";
import {HeroConfig} from "../config/HeroConfig";

const HeroSidebar = (props) => {

    const locationConfig = LocationConfig;
    const heroConfig = HeroConfig;


    const {
        setSearchContent,
        heroesVs,
        setHeroesVs,
        heroesWith,
        setHeroesWith,
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
    } = useContext(FilterContext);

    const [searchContentValue, setSearchContentValue] = useState('');
    const [isSmokeChecked, setSmokeChecked] = useState(false);
    const [isFlashChecked, setFlashChecked] = useState(false);
    const [isMolotovChecked, setMolotovChecked] = useState(false);
    const [isGrenadeChecked, setGrenadeChecked] = useState(false);
    const [isStratChecked, setStratChecked] = useState(false);
    const [isCTChecked, setCTChecked] = useState(false);
    const [isTChecked, setTChecked] = useState(false);
    const [isAChecked, setAChecked] = useState(false);
    const [isMidChecked, setMidChecked] = useState(false);
    const [isBChecked, setBChecked] = useState(false);
    const [isYardChecked, setYardChecked] = useState(false);
    const [isRampChecked, setRampChecked] = useState(false);
    const [isVentChecked, setVentChecked] = useState(false);
    const [isValueOneChecked, setValueOneChecked] = useState(false);
    const [isValueTwoChecked, setValueTwoChecked] = useState(false);
    const [isValueThreeChecked, setValueThreeChecked] = useState(false);
    const [isValueFourChecked, setValueFourChecked] = useState(false);
    const [isValueFiveChecked, setValueFiveChecked] = useState(false);

    return (
        <div className="sideBar">
            <div className="searchBar">
                <FormControl
                    onChange={(event) => {
                        setSearchContent(event.target.value);
                        setSearchContentValue(event.target.value);
                    }}
                    value={searchContentValue}
                    type="text"
                    placeholder="Search Hero"
                    className="mr-sm-2"
                />
            </div>
            <table>
                <tbody>
                    {heroConfig.heroes.map(hero => (
                        hero.name.toLowerCase().includes(searchContentValue.toLowerCase()) &&
                            <HeroSearch heroName={hero.name}/>
                    ))}
                </tbody>
            </table>
            <div className="clearButton">
                <Button
                    variant="primary"
                    onClick={() => {
                        setSearchContent('');
                        setSearchContentValue('')
                        setSmokeChecked(false);
                        setSmokeVisible(false);
                        setFlashChecked(false);
                        setFlashVisible(false);
                        setMolotovChecked(false);
                        setMolotovVisible(false);
                        setGrenadeChecked(false);
                        setGrenadeVisible(false);
                        setStratChecked(false);
                        setStratVisible(false);
                        setCTChecked(false);
                        setCTVisible(false);
                        setTChecked(false);
                        setTVisible(false);
                        setAChecked(false);
                        setAVisible(false);
                        setMidChecked(false);
                        setMidVisible(false);
                        setBChecked(false);
                        setBVisible(false);
                        setYardChecked(false);
                        setYardVisible(false);
                        setRampChecked(false);
                        setRampVisible(false);
                        setVentChecked(false);
                        setVentVisible(false);
                        setValueOneChecked(false);
                        setValueOneVisible(false);
                        setValueTwoChecked(false);
                        setValueTwoVisible(false);
                        setValueThreeChecked(false);
                        setValueThreeVisible(false);
                        setValueFourChecked(false);
                        setValueFourVisible(false);
                        setValueFiveChecked(false);
                        setValueFiveVisible(false);
                    }}>

                    Clear filter
                </Button>
            </div>
        </div>
    )
}

export default HeroSidebar
