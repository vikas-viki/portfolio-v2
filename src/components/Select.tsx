import { ReactElement } from "react";
import "../styles/Select.css";

interface SelectProps {
    options: string[],
    id: string
}

export default function Select({ options, id }: SelectProps): ReactElement {
    return (
        <div className={`text-white select`} id={id}>
            {
                options.map(option => (
                    <span>{option}</span>
                ))
            }
        </div>
    )
}