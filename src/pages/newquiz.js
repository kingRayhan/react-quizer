import React, { Component } from 'react'
import NewQuestion from '../components/newQuestion'
import { Row, Col, FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
class newquiz extends Component {
    state = {
        id: null,
        title: '',
        description: '',
        questions: [
            { question: '', options: ['', ''], answer: '' },
            { question: '', options: ['', ''], answer: '' },
        ],
    }

    createOption = questionIndex => {
        const questions = this.state.questions
        questions[questionIndex].options.push('')
        this.setState({ questions })
    }

    removeOptionFromQuestion = (questionIndex, optionIndex) => {
        const questions = this.state.questions
        questions[questionIndex].options.splice(optionIndex, 1)
        this.setState({ questions })
    }
    onChange = e => {
        this.setState({
            [e.target.dataset.field]: e.target.value,
        })
    }

    submitQuiz = () => {
        this.setState({ id: v4() })
        this.props.saveQuiz(this.state)
    }

    /**
     * Value changers
     */
    setQuestionTitle = (index, title) => {
        const questions = this.state.questions
        questions[index].question = title
        this.setState({ questions })
    }
    setOptionValue = (questionIndex, optionIndex, value) => {
        const questions = this.state.questions
        questions[questionIndex].options[optionIndex] = value
        this.setState({ questions })
    }
    setQuestionAns = (questionIndex, ans) => {
        const questions = this.state.questions
        questions[questionIndex].answer = ans
        this.setState({ questions })
    }

    createQuestion = () => {
        this.setState({
            questions: [
                ...this.state.questions,
                {
                    question: '',
                    options: ['', ''],
                    answer: '',
                },
            ],
        })
    }

    deleteQuestion = index => {
        const questions = this.state.questions
        questions.splice(index, 1)
        this.setState({ questions })
    }

    render() {
        return (
            <Row className="pt-5">
                <Col md={8} className="mx-auto">
                    <div className="py-3">
                        <h3 className="text-uppercase">Create Quiz</h3>
                    </div>
                    <FormGroup>
                        <Input
                            placeholder="Quiz Title"
                            onChange={this.onChange}
                            data-field="title"
                            value={this.state.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            tag="textarea"
                            placeholder="Quiz Description"
                            onChange={this.onChange}
                            data-field="description"
                            value={this.state.description}
                        />
                    </FormGroup>
                    <div className="py-5">
                        <h3 className="text-uppercase">Assign questions</h3>
                    </div>

                    {this.state.questions.map((question, i) => (
                        <div className="py-3 question" key={i}>
                            {this.state.questions.length > 2 && (
                                <button
                                    className="question-delete"
                                    onClick={() => this.deleteQuestion(i)}
                                >
                                    &times;
                                </button>
                            )}
                            <NewQuestion
                                index={i}
                                question={question}
                                createOption={this.createOption}
                                setOptionValue={this.setOptionValue}
                                setQuestionTitle={this.setQuestionTitle}
                                setQuestionAns={this.setQuestionAns}
                                removeOptionFromQuestion={
                                    this.removeOptionFromQuestion
                                }
                            />
                        </div>
                    ))}

                    <div className="py-3">
                        <Button
                            color="primary"
                            size="sm"
                            onClick={this.createQuestion}
                        >
                            New Question
                        </Button>
                    </div>

                    <div className="py-3">
                        <Button onClick={this.submitQuiz}>Save Quiz</Button>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        saveQuiz: quiz => dispatch({ type: 'SAVE_QUIZ', payload: quiz }),
    })
)(newquiz)
