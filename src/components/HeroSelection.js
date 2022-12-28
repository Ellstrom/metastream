import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

const HeroSelection = (props) => {
    return (
        <Container className="hero-selection">
            <Row>
                <Col>
                    {props.heroName}
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSelection
