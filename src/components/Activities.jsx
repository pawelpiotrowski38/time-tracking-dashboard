import Activity from './Activity';
import './activities.css';

export default function Activities() {
    return (
        <section className='activities'>
            <ul className='activities__list'>
                <Activity />
                <Activity />
            </ul>
        </section>
    )
}