import { ReactElement } from "react";
import "../styles/Select.css";
import { useNavigate } from "react-router-dom";

interface SelectProps {
    options: string[],
    id: string
}

export default function Select({ options, id }: SelectProps): ReactElement {

    var navigate = useNavigate();

    const _navigate = (path: string) => {
        navigate("/" + path.toLowerCase());
    }

    return (
        <div className={`text-white select`} id={id}>
            {
                options.map(option => (
                    <span key={option} onClick={() => { _navigate(option) }}>
                        {option}
                    </span>
                ))
            }
        </div>
    )
}