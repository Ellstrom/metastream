import React, {useContext} from 'react'
import {Button} from 'react-bootstrap'
import { FilterContext } from "./FilterContext";

const HeroSearch = (props) => {

    const {
        heroesWith,
        setHeroesWith,
        heroesVs,
        setHeroesVs,
        heroesIncluded,
        setHeroesIncluded,
        setSearchContent,
        inputRef
    } = useContext(FilterContext);

    const addHeroWith = (heroWith) => {
        setHeroesWith([...heroesWith, heroWith]);
        setSearchContent("");
        redirectFocusToInputField();
    };

    const addHeroVs = (heroVs) => {
        setHeroesVs([...heroesVs, heroVs]);
        setSearchContent("");
        redirectFocusToInputField();
    };

    const addHeroIncluded = (heroIncluded) => {
        setHeroesIncluded([...heroesIncluded, heroIncluded]);
        setSearchContent("");
        redirectFocusToInputField();
    };

    function redirectFocusToInputField() {
        inputRef.current.focus();
    }

    return (
        <tr className="grid-container-filter-table">
            <td><h3>{props.hero.name}</h3></td>
            <td className="paddingLeft">
                <tr>
                    <td>
                        <Button onClick={() => addHeroWith(props.hero)}>
                            Add hero With
                        </Button>
                    </td>
                    <td>
                        <Button onClick={() => addHeroIncluded(props.hero)}>
                            Add hero Included
                        </Button>
                    </td>
                    <td>
                        <Button onClick={() => addHeroVs(props.hero)}>
                            Add hero Vs
                        </Button>
                    </td>
                </tr>
            </td>
        </tr>
    )
}

export default HeroSearch
