import Square from "./Square";

function RenderSquare({ i, onClick, onChange }) {
    return <Square value={i} onClick={onClick} />;
}

export default RenderSquare;