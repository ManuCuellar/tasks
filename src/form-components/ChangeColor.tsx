import React, { useState } from "react";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "gray",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((currentColor) => (
                <label key={currentColor}>
                    <input
                        type="radio"
                        name="colors"
                        value={currentColor}
                        onChange={updateColor}
                        checked={color === currentColor}
                    />
                    {currentColor}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
