import React, { Component } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    Button,
    Label,
} from 'reactstrap'

export default class newQuestion extends Component {
    createOption = () => {
        this.props.createOption(this.props.index)
    }

    onChange = e => {
        this.props.setOptionValue(
            this.props.index,
            e.target.dataset.inputIndex,
            e.target.value
        )
    }

    removeOption = index => {
        this.props.removeOptionFromQuestion(this.props.index, index)
    }

    render() {
        const { question, options } = this.props.question
        return (
            <Card>
                <CardHeader>
                    <Input
                        placeholder="Question"
                        value={question}
                        onChange={e =>
                            this.props.setQuestionTitle(
                                this.props.index,
                                e.target.value
                            )
                        }
                    />
                </CardHeader>
                <CardBody>
                    <FormGroup>
                        <Label for="answer">Answer</Label>
                        <Input
                            id="answer"
                            color="danger"
                            placeholder="Answer of this question"
                            style={{ border: `2px solid red` }}
                            onChange={e =>
                                this.props.setQuestionAns(
                                    this.props.index,
                                    e.target.value
                                )
                            }
                        />
                    </FormGroup>

                    <Label>Options</Label>

                    {options.map((option, i) => (
                        <FormGroup
                            key={i}
                            className="d-flex align-items-center"
                        >
                            <Input
                                placeholder={`Option ${++i}`}
                                onChange={this.onChange}
                                data-input-index={i - 1}
                                value={option}
                            />
                            {options.length > 2 && (
                                <Button
                                    color="danger"
                                    size="sm"
                                    className="ml-2"
                                    onClick={() => this.removeOption(i - 1)}
                                >
                                    &times;
                                </Button>
                            )}
                        </FormGroup>
                    ))}

                    <Button
                        className="btn-sm"
                        color="primary"
                        onClick={this.createOption}
                    >
                        +
                    </Button>
                </CardBody>
            </Card>
        )
    }
}
