import { Button, Col, Container, Row } from "react-bootstrap"

interface QuestionType {
    question: Question,
    handleAnswers: (isCorrect: boolean) => void;
}

const Question = ({ question, handleAnswers }: QuestionType) => {
    return (
        <Container>
            <Row>
                <Col lg="6" className="rounded-3 m-auto text-center bg-light my-5 p-4 shadow-lg border">
                    <div className="mb-5">
                        <span className="text-danger fs-1 ">Question- </span> <span className=" fs-1">{question.question}</span>
                    </div>
                    <ul className="d-flex flex-column gap-4">
                        {question.answers.map((ans: Answer, i: number) => (
                            <Button variant="none" key={i} className="border-2 border-primary  rounded-pill bg-light text-primary border fs-5" type="button" onClick={() => handleAnswers(ans.isCorrect)}>{ans.option}</Button>
                        ))}
                    </ul>

                </Col>
            </Row>
        </Container>
    )
}

export default Question