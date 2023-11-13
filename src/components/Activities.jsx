import Activity from './Activity';
import './activities.css';

export default function Activities({ activities }) {
    return (
        <section className='activities'>
            <ul className='activities__list'>
                {activities.map((activity) => (
                    <Activity
                        key={activity.title}
                        activity={activity}
                    />
                ))}
            </ul>
        </section>
    )
}