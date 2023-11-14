import Activity from './Activity';
import './activities.css';

export default function Activities({ activities, timeframe }) {
    return (
        <ul className='activities'>
            {activities.map((activity) => (
                <Activity
                    key={activity.title}
                    activity={activity}
                    timeframe={timeframe}
                />
            ))}
        </ul>
    )
}