import './activity.css';

export default function Activity() {
    return (
        <li className='activity'>
            <div className='activity__info'>
                <div className='activity__header'>
                    <h2 className='activity__title'>
                        Work
                    </h2>
                    <button className='activity__button'>
                        <img className='activity__button-icon' src='./images/icon-ellipsis.svg' alt='ellipsis' />
                    </button>
                </div>
                <div activity className='activity__data'>
                    <p className='activity__current-time'>
                        32hrs
                    </p>
                    <p className='activity__last-time'>
                        Last Week - 36hrs
                    </p>
                </div>
            </div>
        </li>
    )
}