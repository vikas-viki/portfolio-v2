export type CursorProps = {
    targets: string | string[],
    customClass: string,
    smoothness: {
        movement: number,
        opacity: number,
        scale: number,
    },
    fill: string,
    strokeColor: string,
    strokeWidth: number,
    dimensions: number,
    opacity: number,
    targetOpacity: number,
    targetScale: number,
};

export type RenderedStyles = { tx: { previous: number; current: number; amt: number; }; ty: { previous: number; current: number; amt: number; }; scale: { previous: number; current: number; amt: number; }; opacity: { previous: number; current: number; amt: number; }; };