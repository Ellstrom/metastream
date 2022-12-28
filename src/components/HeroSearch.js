import React, {useContext, useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { FilterContext } from "./FilterContext";
import { LocationConfig} from "../config/LocationConfig";

const HeroSearch = (props) => {

    const {
        heroesWith,
        setHeroesWith,
        heroesVs,
        setHeroesVs
    } = useContext(FilterContext);

    const addHeroWith = (heroWithName) => {
        setHeroesWith([...heroesWith, heroWithName]);
        console.log("Added hero: " + heroWithName);
    };

    const addHeroVs = (heroVsName) => {
        setHeroesVs([...heroesVs, heroVsName]);
        console.log("Added hero: " + heroVsName);
    };

    return (
        <tr className="grid-container-filter-table">
            <td><h3>{props.heroName}</h3></td>
            <td className="paddingLeft">
                <Button onClick={() => addHeroWith(props.heroName)}>
                    Add hero With
                </Button>
                <Button onClick={() => addHeroVs(props.heroName)}>
                    Add hero Vs
                </Button>
            </td>
        </tr>
    )
}

export default HeroSearch
