import { useEffect, useRef } from 'react';
import {CursorProps} from '../../types';
import Cursor from './CursorClass.ts';
import {
    addHoverEvent, handleWindowEvent,
    removeHoverEvent, removeWindowEvent,
} from './utils.js';

const CustomCursor = ({
    targets,
    customClass,
    fill,
    smoothness,
    strokeColor,
    strokeWidth,
    dimensions,
    opacity,
    targetOpacity,
    targetScale,
}: CursorProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const cursor = new Cursor(
            ref.current,
            smoothness,
            opacity,
            targetOpacity,
            targetScale,
        );

        addHoverEvent(cursor, targets);
        handleWindowEvent(cursor);

        return () => {
            removeHoverEvent(cursor, targets);
            removeWindowEvent(cursor);
            cursor.destroy();
        };
    }, [opacity, ref, smoothness, targetOpacity, targetScale, targets]);

    return (
        <div className="cursor">
            <svg
                ref={ref}
                className={customClass}
                height={dimensions}
                width={dimensions}
                viewBox={`0 0 ${dimensions} ${dimensions}`}
            >
                <circle
                    cx={dimensions / 2}
                    cy={dimensions / 2}
                    r={(dimensions / 2) / 2}
                    fill={fill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            </svg>
        </div>
    );
};

export default CustomCursor;
