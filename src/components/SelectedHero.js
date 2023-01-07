import React, {useContext} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {FilterContext} from "./FilterContext";

const SelectedHero = (props) => {

    const {
        heroesWith,
        setHeroesWith,
        heroesVs,
        setHeroesVs,
        heroesIncluded,
        setHeroesIncluded
    } = useContext(FilterContext);

    const removeHero = (heroName, type) => {
        if (type === "heroWith") {
            let newHeroesWith = heroesWith.filter(hero => hero.name !== heroName);
            setHeroesWith(newHeroesWith);
        } else if(type === "heroVs") {
            let newHeroesVs = heroesVs.filter(hero => hero.name !== heroName);
            setHeroesVs(newHeroesVs);
        } else if(type === "heroIncluded") {
            let newHeroesIncluded = heroesIncluded.filter(hero => hero.name !== heroName);
            setHeroesIncluded(newHeroesIncluded);
        }
    };

    return (
        <Container className="hero-selection">
            <Row>
                <Col>
                    <span onClick={() => removeHero(props.heroName, props.type)}>
                        {props.heroName}
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default SelectedHero
