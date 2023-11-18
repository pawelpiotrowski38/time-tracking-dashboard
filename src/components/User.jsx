import Button from './Button';
import './user.css';

export default function User({ timeframe, onSetTimeframe }) {
    return (
        <div className='user'>
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
                    <Button
                        type={'daily'}
                        timeframe={timeframe}
                        onSetTimeframe={onSetTimeframe}
                    >
                        Daily
                    </Button>
                </li>
                <li className='user__nav-item'>
                    <Button
                        type={'weekly'}
                        timeframe={timeframe}
                        onSetTimeframe={onSetTimeframe}
                    >
                        Weekly
                    </Button>
                </li>
                <li className='user__nav-item'>
                    <Button
                        type={'monthly'}
                        timeframe={timeframe}
                        onSetTimeframe={onSetTimeframe}
                    >
                        Monthly
                    </Button>
                </li>
            </ul>
        </div>
    )
}