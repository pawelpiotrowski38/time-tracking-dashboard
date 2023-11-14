import { useEffect, useState } from 'react';
import User from './User';
import Activities from './Activities';
import './dashboard.css';

export default function Dashboard() {
    const [activities, setActivities] = useState([]);
    const [timeframe, setTimeframe] = useState('weekly');

    useEffect(() => {
        const fetchData = async function() {
            const response = await fetch('../data.json');
            const data = await response.json();
            setActivities(data);
        }
        fetchData();
    }, []);

    return (
        <section className='dashboard'>
            <User onSetTimeframe={setTimeframe} />
            <Activities activities={activities} timeframe={timeframe} />
        </section>
    )
}