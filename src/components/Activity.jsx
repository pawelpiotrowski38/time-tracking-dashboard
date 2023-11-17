import './activity.css';

export default function Activity({ activity, timeframe }) {
    const formattedTitle = activity.title.toLowerCase().replace(/\s+/g, "-");

    const styles = {
        backgroundImage: `url('./images/icon-${formattedTitle}.svg')`,
        backgroundColor: `var(--${formattedTitle})`,
        backgroundPositionX: `${activity.iconPosX}%`,
        backgroundPositionY: `${activity.iconPosY}%`
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
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/>
                        </svg>
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