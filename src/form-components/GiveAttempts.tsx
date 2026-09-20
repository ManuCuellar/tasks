import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<string>("");

    function updateRequestAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestAttempts(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts: {attempts}</p>

            <input
                type="number"
                value={requestAttempts}
                onChange={updateRequestAttempts}
            />

            <Button
                onClick={() => {
                    if (requestAttempts !== "") {
                        setAttempts(attempts + parseInt(requestAttempts));
                    }
                }}
            >
                Gain
            </Button>

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
        </div>
    );
}
