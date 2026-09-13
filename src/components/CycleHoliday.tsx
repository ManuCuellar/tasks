import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "New Year"
    | "Thanksgiving"
    | "Valentines";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    const holidayEmoji: Record<Holiday, string> = {
        Christmas: "🎄",
        Halloween: "🎃",
        "New Year": "🎉",
        Thanksgiving: "🦃",
        Valentines: "❤️",
    };
    const byYear: Record<Holiday, Holiday> = {
        "New Year": "Valentines",
        Valentines: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New Year",
    };
    const byAlphabet: Record<Holiday, Holiday> = {
        Christmas: "Halloween",
        Halloween: "New Year",
        "New Year": "Thanksgiving",
        Thanksgiving: "Valentines",
        Valentines: "Christmas",
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(byAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            ;
            <Button
                onClick={() => {
                    setHoliday(byYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
            ;
        </div>
    );
}
