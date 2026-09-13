import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() => {
                    setType(
                        type === "short_answer_question" ?
                            "multiple_choice_question"
                        :   "short_answer_question",
                    );
                }}
            >
                Change Type
            </Button>
            {type === "short_answer_question" ?
                <span>Short Answer</span>
            :   <span>Multiple Choice</span>}
        </div>
    );
}
