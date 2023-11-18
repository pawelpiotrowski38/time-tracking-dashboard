import './button.css';

export default function Button({ type, timeframe, onSetTimeframe, children }) {
    return (
        <button
            className={`button ${type === timeframe ? 'button--selected' : ''}`}
            onClick={() => onSetTimeframe(type)}
        >
            {children}
        </button>
    )
}