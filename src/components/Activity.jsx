import './activity.css';

export default function Activity({ activity, timeframe }) {
    const formattedTitle = activity.title.toLowerCase().replace(/\s+/g, "-");

    const styles = {
        backgroundImage: `url('./images/icon-${formattedTitle}.svg')`,
        backgroundColor: `var(--${formattedTitle})`,
    }

    return (
        <li className='activity' style={styles}>
            <div className='activity__bar'></div>
            <div className='activity__info'>
                <div className='activity__header'>
                    <h2 className='activity__title'>
                        {activity.title}
                    </h2>
                    <button className='activity__button'>
                        <img className='activity__button-icon' src='./images/icon-ellipsis.svg' alt='ellipsis' />
                    </button>
                </div>
                <div className='activity__data'>
                    <p className='activity__current-time'>
                        {`${activity.timeframes[timeframe].current}hrs`}
                    </p>
                    <p className='activity__last-time'>
                        {`Last Week - ${activity.timeframes[timeframe].previous}hrs`}
                    </p>
                </div>
            </div>
        </li>
    )
}