import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
export default class QuizList extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="3">
                        <Card>
                            <h4>Quiz Title</h4>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
