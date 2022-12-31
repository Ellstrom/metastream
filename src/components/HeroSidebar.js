import React, {useContext, useState} from 'react'
import {Button} from 'react-bootstrap'
import {FilterContext} from "./FilterContext";
import {FormControl} from "react-bootstrap";
import HeroSearch from "./HeroSearch";
import {HeroConfig} from "../config/HeroConfig";

const HeroSidebar = () => {

    const heroConfig = HeroConfig;

    const {
        searchContent,
        setSearchContent,
        numGamesLimit,
        setNumGamesLimit,
        setHeroesWith,
        setHeroesVs
    } = useContext(FilterContext);

    return (
        <div className="sideBar">
            <div className="searchBar">
                <FormControl
                    onChange={(event) => {
                        setSearchContent(event.target.value);
                    }}
                    value={searchContent}
                    type="text"
                    placeholder="Search Hero"
                    className="mr-sm-2"
                />
                <FormControl
                    onChange={(event) => {
                        setNumGamesLimit(event.target.value);
                    }}
                    value={numGamesLimit}
                    type="number"
                    placeholder="Num games limit"
                    className="mr-sm-2"
                />
            </div>
            <div className="resetButton">
                <Button
                    variant="primary"
                    onClick={() => {
                        setHeroesWith([]);
                        setHeroesVs([]);
                    }}>
                    Reset With/Vs heroes
                </Button>
            </div>
            <table>
                <tbody>
                    {heroConfig.heroes.map(hero => (
                        hero.name.toLowerCase().includes(searchContent.toLowerCase()) &&
                            <HeroSearch hero={hero}/>
                    ))}
                </tbody>
            </table>
            <div className="clearButton">
                <Button
                    variant="primary"
                    onClick={() => {
                        setSearchContent('');
                    }}>
                    Clear filter
                </Button>
            </div>
        </div>
    )
}

export default HeroSidebar
