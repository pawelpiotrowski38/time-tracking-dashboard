import './user.css';

export default function User({ onSetTimeframe }) {
    return (
        <section className='user'>
            <div className='user__info'>
                <div className='user__image-container'>
                    <img className='user__image' src='./images/image-jeremy.png' alt='user avatar' />
                </div>
                <div className='user__report'>
                    <p className='user__paragraph'>
                        Report for
                    </p>
                    <h1 className='user__name'>
                        Jeremy Robson
                    </h1>
                </div>
            </div>
            <ul className='user__nav'>
                <li className='user__nav-item'>
                    <button className='user__nav-button' onClick={() => onSetTimeframe('daily')}>
                        Daily
                    </button>
                </li>
                <li className='user__nav-item'>
                    <button className='user__nav-button' onClick={() => onSetTimeframe('weekly')}>
                        Weekly
                    </button>
                </li>
                <li className='user__nav-item'>
                    <button className='user__nav-button' onClick={() => onSetTimeframe('monthly')}>
                        Monthly
                    </button>
                </li>
            </ul>
        </section>
    )
}