import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"

interface ResultType {
    data: object[],
    correctAnswer: boolean[],
    resetQuiz: () => void
}


const Result = ({ data, correctAnswer, resetQuiz }: ResultType) => {
    const count = correctAnswer.filter((ans: boolean) => ans).length;
    const [message, setMessage] = useState<JSX.Element | null>(null);

    function createMessage(): void {
        switch (true) {
            case count <= 3 && count >= 1:
                setMessage(
                    <>
                        <iframe src="https://giphy.com/embed/Ia62g1fUnD1egRBsU0" width="500" height="200" ></iframe>
                        <p className="text-danger display-6 mt-4">Rehne de bhai</p>
                    </>
                )
                break;
            case count <= 6 && count >= 4:
                setMessage(
                    <>
                        <iframe src="https://giphy.com/embed/fDbzXb6Cv5L56" width="500" height="200" ></iframe>
                        <p className="text-danger display-6 mt-4">Theek hai, par kaam nahi chalega</p>
                    </>
                )
                break;
            case count <= 9 && count >= 7:
                setMessage(
                    <>
                        <iframe src="https://giphy.com/embed/YPI7uEvEZr7siYRlZD" width="500" height="200" ></iframe>
                        <p className="text-danger display-6 mt-4">Bohot sahi, mehnat karte raho </p>
                    </>
                )
                break;
            case count === 10:
                setMessage(
                    <>
                        <iframe src="https://giphy.com/embed/EIzlcxzGuqjhBVcnbD" width="500" height="200" ></iframe>
                        <p className="text-danger display-6 mt-4">AAA yeeee, Chha gya cheete</p>
                    </>
                )
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        createMessage();
    }, [count])

    return (
        <Container>
            <Row>
                <Col lg="6" className="m-auto text-center bg-light my-5 p-4 shadow-lg border">
                    <h1 className="mb-5 ">Result:</h1>
                    {message}
                    <p className="fs-4">You have given {count} correct answers out of {data.length}</p>
                    <Button variant='danger' size="lg" onClick={() => resetQuiz()} >Reset Quiz</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Result