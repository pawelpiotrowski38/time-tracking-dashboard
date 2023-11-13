import { useState, useEffect } from 'react';
import User from './User';
import Activities from './Activities';
import './app.css';

export default function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchData = async function() {
            const response = await fetch('../data.json');
            const data = await response.json();
            setActivities(data);
        }
        fetchData();
    }, []);

    return (
        <main className='main'>
            <User />
            <Activities activities={activities} />
        </main>
    )
}