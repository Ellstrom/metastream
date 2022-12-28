import React, {useContext, useState} from 'react'
import {Button} from 'react-bootstrap'
import {FilterContext} from "./FilterContext";
import {FormControl} from "react-bootstrap";
import HeroSearch from "./HeroSearch";
import {HeroConfig} from "../config/HeroConfig";

const HeroSidebar = (props) => {

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
                            <HeroSearch hero={hero}/>
                    ))}
                </tbody>
            </table>
            <div className="clearButton">
                <Button
                    variant="primary"
                    onClick={() => {
                        setSearchContent('');
                        setSearchContentValue('')
                    }}>
                    Clear filter
                </Button>
            </div>
        </div>
    )
}

export default HeroSidebar
