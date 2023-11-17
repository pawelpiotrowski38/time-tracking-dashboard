import { useEffect, useState } from 'react';
import User from './User';
import Activities from './Activities';
import Loading from './Loading';
import './dashboard.css';

export default function Dashboard() {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [timeframe, setTimeframe] = useState('weekly');

    useEffect(() => {
        const fetchData = async function() {
            try {
                const response = await fetch('../data.json');
                const data = await response.json();
                setActivities(data);
            } catch(error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <section className='dashboard'>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <User timeframe={timeframe} onSetTimeframe={setTimeframe} />
                    <Activities activities={activities} timeframe={timeframe} />
                </>
            )}
        </section>
    )
}