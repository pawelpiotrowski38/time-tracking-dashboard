import { useEffect, useState } from 'react';
import './activity.css';

export default function Activity({ activity, timeframe }) {
    const [currentValue, setCurrentValue] = useState(0);
    const animationTime = 500;
    const formattedTitle = activity.title.toLowerCase().replace(/\s+/g, "-");

    useEffect(() => {
        let startTimestamp;
        
        if (activity) {
            const animate = (timestamp) => {
                if (!startTimestamp) {
                    startTimestamp = timestamp
                }
                const elapsedTime = timestamp - startTimestamp;
            
                if (elapsedTime < animationTime) {
                    const progress = elapsedTime / animationTime;
                    setCurrentValue((activity.timeframes[timeframe].current * progress).toFixed(0));
                    requestAnimationFrame(animate);
                } else {
                    setCurrentValue(activity.timeframes[timeframe].current);
                }
            };
        
            requestAnimationFrame(animate);
        }
    }, [activity, timeframe]);

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
                    <button className='activity__button' aria-label='Ellipsis'>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/>
                        </svg>
                    </button>
                </div>
                <div className='activity__data'>
                    <p className='activity__current-time'>
                        {`${currentValue}hrs`}
                    </p>
                    <p className='activity__last-time'>
                        {`Last Week - ${activity.timeframes[timeframe].previous}hrs`}
                    </p>
                </div>
            </div>
        </li>
    )
}