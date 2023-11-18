import './errorMessage.css';

export default function ErrorMessage({ error }) {
    return (
        <div className='error'>
            <h2 className='error__heading'>
                Something went wrong
            </h2>
            <p className='error__message'>
                {error}
            </p>
        </div>
    )
}