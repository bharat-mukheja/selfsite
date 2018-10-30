import React, { Fragment } from 'react';

import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText, Container, Row
} from 'reactstrap';

const BANNER = 'https://lh3.googleusercontent.com/4StWBPz6X7NCZbpQ32L9yFBYM0wvYjnJ_XKkig9KfnoKrJtfBOGBjH_XXPLLOn8PxlxZuE4IuNtu=s220';

var urls = [
    "https://www.github.com/bmukheja",
    "https://linkedin.com/in/bmukheja"
];

function goSomewhere() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    window.location = url; // redirect
}

const SideCard = () => (
    <Fragment>

        <UncontrolledAlert color="info" className="d-none d-lg-block">
            <strong>Download resume from the above link.</strong>
        </UncontrolledAlert>

        <Card>
            <CardImg top width="100%" src={BANNER} alt="banner" />
            <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Bharat Mukheja</CardTitle>
                <CardSubtitle className="text-secondary mb-2 font-weight-medium text-uppercase" style={{ fontSize: '1.2rem' }}>Machine Learning Engineer</CardSubtitle>
                <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Mountain View, CA</CardSubtitle>
                <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Machine Learning Engineer learning new hacks one day at a time. Full stack enthusiast. Hacking stuffs @bmukheja.</CardText>
                <Container>
                    <Row className="d-none d-lg-flex justify-content-start mb-2">
                        <Button color="success" className="font-weight-bold" href="https://github.com/bmukheja">Check Github</Button>
                    </Row>
                    <Row className="d-none d-lg-flex justify-content-start mb-2">
                        <Button color="primary" className="font-weight-bold" href="#" onClick={goSomewhere}>I'm feeling lucky</Button>
                    </Row>
                </Container>
            </CardBody>
        </Card>

    </Fragment>
);

export default SideCard;