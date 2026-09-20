import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                checked={editMode}
                onChange={updateEditMode}
            />

            {editMode ?
                <div>
                    <input type="text" value={name} onChange={updateName} />

                    <Form.Check
                        id="student-check"
                        type="checkbox"
                        label="Student"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            :   <p>
                    {name} is {student ? "" : "not"} a student
                </p>
            }
        </div>
    );
}
