import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer = "React",
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={answer} onChange={updateAnswer} />
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
