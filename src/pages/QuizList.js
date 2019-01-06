import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { connect } from 'react-redux'
class QuizList extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col sm="6" className="mx-auto">
                        {this.props.quizes.map((quiz, i) => (
                            <Card key={i}>
                                <CardBody>
                                    <h5>{quiz.title}</h5>
                                    <p className="text-muted">
                                        Total Questions:{quiz.questions.length}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default connect(state => ({ quizes: state.quizes }))(QuizList)
