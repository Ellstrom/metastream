import React, {useContext, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { FilterContext } from "./FilterContext";
import { LocationConfig} from "../config/LocationConfig";

const HeroSelection = (props) => {

    const locationConfig = LocationConfig;

    const {
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
    } = useContext(FilterContext);

    return (
        <Container>
            <Row>
                <Col>
                    {props.heroName}
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSelection
