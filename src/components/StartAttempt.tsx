import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);

    return (
        <div>
            <Button
                disabled={quiz || attempts === 0}
                onClick={() => {
                    setQuiz(true);
                    setAttempts(attempts - 1);
                }}
            >
                Start Quiz
            </Button>

            <Button
                disabled={quiz}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>

            <Button
                disabled={!quiz}
                onClick={() => {
                    setQuiz(false);
                }}
            >
                Stop Quiz
            </Button>

            <span>Attempts: {attempts}</span>
        </div>
    );
}
