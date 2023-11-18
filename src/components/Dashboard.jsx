import { useEffect, useState } from 'react';
import User from './User';
import Activities from './Activities';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import './dashboard.css';

export default function Dashboard() {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [timeframe, setTimeframe] = useState('weekly');

    useEffect(() => {
        const fetchData = async function() {
            try {
                setError('');
                const response = await fetch('../data.json');
                const data = await response.json();
                setActivities(data);
            } catch(err) {
                setError('Error while fetching activities');
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
                (error ? (
                    <ErrorMessage error={error} />
                ) : (
                    <>
                        <User timeframe={timeframe} onSetTimeframe={setTimeframe} />
                        <Activities activities={activities} timeframe={timeframe} />
                    </>
                ))
            )}
        </section>
    )
}