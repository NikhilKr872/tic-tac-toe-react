import Square from "./Square";

function RenderSquare({ value, onClick }) {
    return <Square value={value} onClick={onClick} />;
}

export default RenderSquare;